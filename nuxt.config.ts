import { defineNuxtConfig } from "nuxt";
import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  extends: [
    (process.env.DOCUS_THEME_PATH || './node_modules/@docus/docs-theme')
  ],

  generate: {
    routes: []
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: colors.blue
          }
        }
      }
    }
  },

  colorMode: {
    preference: 'dark'
  },

  theme: {

  }
});
