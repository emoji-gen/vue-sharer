module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.common.js',
    },
  },
}
