// ./webpack.config.js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { RemoveCommentsPlugin } = require('./remove-comments-plugin')

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
        test: /\.md$/,
        use: [ // 这里不仅可以使用模块名称，还可以使用模块文件路径
          // './html-loader',
          './markdown-loader'
        ],
      }
      // {
      //   test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
      //   use: [ // 指定具体的 loader
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Webpack - Share - Demo',
    //   template: './index.html'
    // }),
    new RemoveCommentsPlugin({ CustomerPlugin: '自定义插件' })
  ]
}
