import { PineconeStore } from "langchain/vectorstores";
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { makeChain } from "../util";
import { PineconeClient } from "pinecone-client";
import { ChatVectorDBQAChain } from "langchain/chains";

const { opeanAiKey, pinceconeApiKey, pinceconeBaseUrl } = useRuntimeConfig();

const client = new PineconeClient({
  apiKey: pinceconeApiKey,
  baseUrl: pinceconeBaseUrl,
});

let cachedChain: ChatVectorDBQAChain;

const getChain = async () => {
  if (cachedChain) {
    return cachedChain
  }

  const vectorstore = await PineconeStore.fromExistingIndex(client, new OpenAIEmbeddings({
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