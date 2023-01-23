export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  css: [
    "~/assets/css/app.css",
  ],

  runtimeConfig: {
    public: {
      algolia: {
        apiKey: "189f2f2def12ddc4d09b3cbb5fc1f8e4",
        applicationId: "6RZ9DX6ZFC",
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
  },
})
