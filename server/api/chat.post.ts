import { HNSWLib } from "langchain/vectorstores.js";
import { OpenAIEmbeddings } from 'langchain/embeddings.js';
import { makeChain } from "../util";

const { opeanAiKey } = useRuntimeConfig();


let cachedChain: any;

const getChain = async () => {
  if (cachedChain) {
    return cachedChain
  }

  const vectorstore = await HNSWLib.load(process.env.VERCEL || process.env.NITRO_PRESET === "vercel" ? 'data' : 'public/data', new OpenAIEmbeddings({
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