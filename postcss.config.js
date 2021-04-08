const necessaryPlugins = [require('tailwindcss')]
const buildPlugins = [
  require('autoprefixer'),
  require('cssnano')({
    preset: ['default'],
  }),
]

module.exports = {
  plugins: necessaryPlugins.concat(
    process.env.NODE_ENV === 'production' ? buildPlugins : []
  ),
}
