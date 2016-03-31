module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './www/js/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      }
    ]
  }
}