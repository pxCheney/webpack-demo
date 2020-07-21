const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.dir(CleanWebpackPlugin)

module.exports = {
  // 如果此时更改或添加新的入口名称，将会重新生成构建bundle，但是index.html仍会引用旧的名字。此时可以使用HtmlWebpackPlugin来解决这个问题
  devtool: 'inline-source-map',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
};
