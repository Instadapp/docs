import dotenv from "dotenv"
import postgres from 'postgres'
import { Configuration, OpenAIApi } from 'openai';
import GPT3Tokenizer from 'gpt3-tokenizer'
import { oneLine, stripIndent } from 'common-tags'
if (!process.argv[2]) {
  console.log("Usage: npx tsx prompt.ts 'What is Instadapp?'")
  process.exit()
}
const sanitizedQuery = process.argv[2].trim()

dotenv.config({
  path: "../.env",
})
const sql = postgres(process.env.POSTGRES_AI_URL as string)

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const embeddingResponse = await openai.createEmbedding({
  model: 'text-embedding-ada-002',
  input: sanitizedQuery.replaceAll('\n', ' '),
})

const [{ embedding }] = embeddingResponse.data.data

const embeddingData = `[${embedding}]`;

console.time("match_page_sections")
const pageSections = await sql`select public.match_page_sections(${embeddingData}, 0.78, 10, 50) as content`;
console.timeEnd("match_page_sections")

console.time("tokenizing")

//@ts-ignore
const tokenizer = new (GPT3Tokenizer.default || GPT3Tokenizer)({ type: 'gpt3' })
let tokenCount = 0
let contextText = ''


for (let i = 0; i < pageSections.length; i++) {
  const pageSection = pageSections[i]
  const content = pageSection.content
  const encoded = tokenizer.encode(content)
  tokenCount += encoded.text.length

  if (tokenCount >= 3500) {
    break
  }

  contextText += `${content.trim()}\n---\n`
}

console.timeEnd("tokenizing")


const prompt = stripIndent`
${oneLine`
  You are a very enthusiastic Instadapp representative who loves
  to help people! Given the following sections from the Instadapp
  documentation, answer the question using only that information,
  outputted in markdown format. If you are unsure and the answer
  is not explicitly written in the documentation, say
  "Sorry, I don't know how to help with that."
`}
Context sections:
${contextText}
Question: """
${sanitizedQuery}
"""
Answer as markdown (including related code snippets if available):
`
const response: any = await openai.createCompletion({
  model: 'text-davinci-003',
  prompt,
  max_tokens: 512,
  temperature: 0,
  stream: true,
}, { responseType: 'stream' })

console.log("\nAnswer:")
response.data.on('data', (data: any) => {
  const lines = data.toString().split('\n').filter((line: string) => line.trim() !== '');
  for (const line of lines) {
    const message = line.replace(/^data: /, '');
    if (message === '[DONE]') {
      return; // Stream finished
    }
    try {
      const parsed = JSON.parse(message);
      console.log(parsed.choices[0].text);
    } catch (error) {
      console.error('Could not JSON parse stream message', message, error);
    }
  }
});


// console.log("\nAnswer:")
// console.log(response.data.choices[0].text.trim())
// process.exit()