export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  css: [
    "~/assets/css/app.css",
  ],

  runtimeConfig: {
    public: {
      algolia: {
        apiKey: "60a01900a4b726d667eab75b6f337592",
        applicationId: "1V8G7N9GF0",
        docSearch: {
          indexName: "nuxtjs",
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
  },
})
