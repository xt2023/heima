//在vue.config.js中可以对整个项目进行打包，构建进行全局配置
//webpack在打包处理时，底层用到了node.js
//因此在vue.config.js配置文件中，可以导入并使用node.js中的核心参数
const path=require('path')
const themePath=path.join(__dirname,'./src/theme.less')


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color':'red',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //这里的路径是绝对路径
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  }
})
