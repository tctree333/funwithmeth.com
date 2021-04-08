const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['_includes/**/*.njk'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: ['lg', 'xl'],
    }),
  ],
}
