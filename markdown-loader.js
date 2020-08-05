// ./markdown-loader.js
const marked = require('marked')

module.exports = source => {
  // 1.
  // source, 加载到的 test.md 模块
  console.log('MARKDOWN-LOADER-SOURCE', source)

  // 返回值为最终被打包的内容
  // return 'hello loader'
  return 'console.log("hello loader")'

  // 2.
  // const html = marked(source)
  // const code = `export default ${JSON.stringify(html)}`
  // console.log('MARKDOWN-LOADER-SOURCE', code, typeof code)
  // return html
}
