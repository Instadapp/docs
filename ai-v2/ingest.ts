import * as fs from 'fs';
import glob from "glob"
import path from "path"
import { fileURLToPath } from 'url';
import dotenv from "dotenv"
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createHash } from 'crypto'
import postgres from 'postgres'
import { Configuration, OpenAIApi } from 'openai';
dotenv.config({
  path: "../.env",
})
const sql = postgres(process.env.POSTGRES_AI_URL as string)
const getDirName = function () {
  const filename = fileURLToPath(import.meta.url)
  return path.dirname(filename)
}

const __dirname = getDirName();

const ignoredFiles = ['/ai']

const files = glob.sync(path.resolve(__dirname, "../content/**/*.md"))
  .map((f) => ({
    path: f.replace(/.*\/content/, '')
      .replace(/\.md?$/, '')
      .replace(/[0-9]+\./g, '')
      .replace('/index', '/')
      .replace(/\/$/, "") || '/',
    filename: f,
  }))
  .filter((f) => !ignoredFiles.includes(f.path))

console.log(`Discovered ${files.length} pages`)
console.log('Checking which pages are new or have changed')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)


for (const file of files) {
  const content = fs.readFileSync(file.filename, { encoding: "utf8" });
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 200 });
  const sections = textSplitter.createDocuments([content])
  const checksum = createHash('sha256').update(content).digest('base64')
  let [page] = await sql`SELECT * from page where path = ${file.path} limit 1`
  let isNew = false;

  if (!page) {
    isNew = true;
    await sql`INSERT INTO "public"."page" ("path", "checksum") VALUES (${file.path}, ${checksum});`;
    page = await sql`SELECT * from page where path = ${file.path} limit 1`.then(r => r[0])
  }

  if (!isNew && page.checksum === checksum) {
    continue
  }

  await sql`DELETE FROM "public"."page_section" WHERE "id" = ${page.id};`

  console.log(`Adding ${sections.length} page sections (with embeddings) for '${page.path}'`)

  for (const section of sections) {
    // OpenAI recommends replacing newlines with spaces for best results (specific to embeddings)
    const input = section.pageContent.replace(/\n/g, ' ')

    const embeddingResponse = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input,
    })

    const [responseData] = embeddingResponse.data.data

    const data = {
      page_id: page.id,
      content: section.pageContent,
      token_count: embeddingResponse.data.usage.total_tokens,
      embedding: `[${responseData.embedding}]`,
    }
    await sql`insert into "public"."page_section" ${sql(data)}`
  }

  await sql`UPDATE "public"."page" SET "checksum" = ${checksum} WHERE "id" = ${page.id};`

}

process.exit()