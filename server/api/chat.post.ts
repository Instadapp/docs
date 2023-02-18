import { HNSWLib } from "langchain/vectorstores.js";
import { OpenAIEmbeddings } from 'langchain/embeddings.js';
import { makeChain } from "../util";
import fs from 'fs';

const { opeanAiKey } = useRuntimeConfig();


let cachedChain: any;
let directory = 'public/data'

if (process.env.VERCEL || process.env.NITRO_PRESET === "vercel") {
  directory = '/var/task/data'

  console.log(
    fs.readdirSync("/var/task")
  )

}

const getChain = async () => {
  if (cachedChain) {
    return cachedChain
  }
  
  const vectorstore = await HNSWLib.load(directory, new OpenAIEmbeddings({
    openAIApiKey: opeanAiKey,
  }))

  cachedChain = makeChain(vectorstore);

  return cachedChain
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const chain = await getChain()

  return await chain.call({
    question: body.question,
    chat_history: body.history,
  });
})