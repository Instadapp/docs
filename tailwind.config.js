module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '19': '4.75rem'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        blue: {
          DEFAULT: '#3F75FF'
        },
        black: {
          DEFAULT: '#161E2E',
          dark: '#131E40'
        },
        grey: {
          light: '#E5E9F0',
          DEFAULT: '#B6BCD1',
          dark: '#556D9C'
        },
        flashWhite: {
          DEFAULT: '#E8F4F6'
        },
        PalatinatePurple: {
          DEFAULT: '#1595A9'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
