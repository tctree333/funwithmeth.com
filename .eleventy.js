module.exports = function (eleventyConfig) {
  const pkg = require('./package.json')

  // copy files
  eleventyConfig.addPassthroughCopy({ 'fonts/used': '/fonts' })
  eleventyConfig.addPassthroughCopy({ 'favicons': '/' })
  eleventyConfig.addPassthroughCopy({ 'assets': '/assets' })

  eleventyConfig.addFilter('fullUrl', function (value) {
    if (value.startsWith(pkg.homepage)) {
      return value
    }
    let root = pkg.homepage
    if (root.endsWith('/')) {
      root = root.slice(0, root.length)
    }
    return root + (value.startsWith('/') ? '' : '/') + value
  })

  // minify html during build
  const htmlmin = require('html-minifier-terser')
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      (outputPath.endsWith('.html') || outputPath.endsWith('.xml'))
    ) {
      const minified = htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
      })
      return minified
    }

    return content
  })

  const mdContainer = require('markdown-it-container')
  const markdown = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    typographer: true,
  }).use(mdContainer, 'contrast', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        return '<div class="contrast">\n'
      } else {
        return '</div>\n'
      }
    },
  })
  eleventyConfig.setLibrary('md', markdown)

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  }
}
