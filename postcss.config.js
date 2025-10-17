// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ this is the new plugin
    autoprefixer: {},
  },
}