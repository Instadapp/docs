import { PineconeStore } from "langchain/vectorstores";
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from 'fs';
import { Document } from "langchain/document";
import path from "path"
import { fileURLToPath } from 'url';
import dotenv from "dotenv"
import { PineconeClient } from "pinecone-client";
dotenv.config()

const getDirName = function () {
  const filename = fileURLToPath(import.meta.url)
  return path.dirname(filename)
}

const directoryPath = 'ingested_data';
const rawDocs: Document[] = []

const __dirname = getDirName();

const filenames = fs.readdirSync(path.resolve(__dirname, directoryPath));

filenames.forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.resolve(__dirname, `${directoryPath}/${file}`);

    const data = fs.readFileSync(filePath, 'utf8')
    const obj = JSON.parse(data);
    const _doc = new Document({ pageContent: obj["page_content"], metadata: obj["metadata"] })
    rawDocs.push(_doc)
  }
});

const client = new PineconeClient({
  apiKey: process.env.PINECONE_API_KEY,
  baseUrl: process.env.PINECONE_BASE_URL,
});

/* Split the text into chunks */
const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 200 });
const docs = textSplitter.splitDocuments(rawDocs);

const chunkSize = 10;
const embeddings = new OpenAIEmbeddings();

for (let i = 0; i < docs.length; i += chunkSize) {
  console.log(`Progress: ${(i / docs.length) * 100}%`);

  let chunkedDocs = docs.slice(i, i + chunkSize);

  await PineconeStore.fromDocuments(
    client,
    chunkedDocs,
    embeddings
  )
}