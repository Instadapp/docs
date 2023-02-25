import { Configuration, OpenAIApi } from 'openai';
import GPT3Tokenizer from 'gpt3-tokenizer'
import { oneLine, stripIndent } from 'common-tags'
import postgres from 'postgres';
import axios from 'axios';
const { opeanAiKey, postgresAiUrl } = useRuntimeConfig();

const sql = postgres(postgresAiUrl)

const configuration = new Configuration({
  apiKey: opeanAiKey
})

const openai = new OpenAIApi(configuration)

export default defineEventHandler(async (event) => {
  const { query } = await readBody(event)
  const sanitizedQuery = query.trim()


  const embeddingResponse = await openai.createEmbedding({
    model: 'text-embedding-ada-002',
    input: sanitizedQuery.replaceAll('\n', ' '),
  })

  const [{ embedding }] = embeddingResponse.data.data

  const embeddingData = `[${embedding}]`;

  const pageSections = await sql`select public.match_page_sections(${embeddingData}, 0.75, 10, 10) as content`;

  //@ts-ignore
  const tokenizer = new (GPT3Tokenizer.default || GPT3Tokenizer)({ type: 'gpt3' })
  let tokenCount = 0
  let contextText = ''

  for (let i = 0; i < pageSections.length; i++) {
    const pageSection = pageSections[i]
    const content = pageSection.content
    const encoded = tokenizer.encode(content)
    tokenCount += encoded.text.length

    if (tokenCount >= 3000) {
      break
    }

    contextText += `${content.trim()}\n---\n`
  }

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
  const completionOptions = {
    model: 'text-davinci-003',
    prompt,
    max_tokens: 768,
    temperature: 0,
    stream: true,
  }

  const response = await axios.post('https://api.openai.com/v1/completions', completionOptions, {
    headers: {
      Authorization: `Bearer ${opeanAiKey}`,
    },
    responseType: "stream",
  })

  return await sendStream(event, response.data)
})