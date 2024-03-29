export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  css: [
    "~/assets/css/app.css",
  ],

  routeRules: {
    // Static generation
    '/': { prerender: true },
    '/index.html': { redirect: '/' },
    '/api/**': { prerender: false },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  runtimeConfig: {
    opeanAiKey: process.env.OPENAI_API_KEY || "",
    pinceconeApiKey: process.env.PINECONE_API_KEY || "",
    pinceconeBaseUrl: process.env.PINECONE_BASE_URL || "",
    public: {
      algolia: {
        applicationId: "6RZ9DX6ZFC",
        apiKey: "189f2f2def12ddc4d09b3cbb5fc1f8e4",
        langAttribute: 'lang',
        docSearch: {
          indexName: "instadapp",
        },
      }
    }
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', "solidity"]
    },
    navigation: {
      fields: ['icon', 'titleTemplate']
    }
  }
})
