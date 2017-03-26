# vue-starter-kit
a boilerplate for creating a vue project

## Notes

* [Vue-loader使用指南](http://vue-loader.vuejs.org/en/)
* [Vue-cli使用指南](http://vuejs-templates.github.io/webpack/)
* app/static目录下的文件，将原封不动的被复制到dist/static文件夹下
* 一些全局样式文件，比如bootstrap样式可以放到/static文件夹下，在index.html里直接引用，这样可以避免编译
* config/index.js中的build.assetsPublicPath相当于output.publicPath
* 如果要设置代理，编辑config/index.js中的dev.proxyTable
* 如果要使用LESS，则首先执行npm i less less-loader --save-dev，然后在style标签中添加lang="less"
