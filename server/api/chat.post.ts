import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { makeChain } from "../util";

const { opeanAiKey } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const vectorstore = await HNSWLib.load("ai/data", new OpenAIEmbeddings({
    openAIApiKey: opeanAiKey,
  }))
  const chain = makeChain(vectorstore);

  return await chain.call({
    question: body.question,
    chat_history: body.history,
  });
})