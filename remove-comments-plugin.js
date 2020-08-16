// 1. remove-comments-pulgin 独立文件

// 2、模块对外暴露的 js 函数
function RemoveCommentsPlugin(options) {
  this.currentOptions = options
  console.log('PXX', options)
  // 使用 options 设置插件实例……
}
// 3、原型定义一个 apply 函数，并注入了 compiler 对象
RemoveCommentsPlugin.prototype.apply = function(compiler) {
  // 4、挂载 webpack 事件钩子（这里挂载的是 emit 事件）
  compiler.hooks.emit.tap(
    'RemoveCommentsPlugin',
    (compilation, callback) => {
      // ... 内部进行自定义的编译操作
      // 5、操作 compilation 对象的内部数据
      for (const name in compilation.assets) {
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          console.log('contents', contents)
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
};

module.exports = { RemoveCommentsPlugin };
