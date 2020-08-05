// ./webpack.config.js
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  // entry: './src/index.css',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
        use: [ // 指定具体的 loader
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
