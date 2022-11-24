export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

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
