# Target
Developing a SPA with Vue(2.x) Vuex ES6, and practise creating components by myself.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Tech Stack
* Vue 2.x
* Vuex 
* Vue-Router
* Vue-Resource
* Vue-cli
* ES6
* Element-UI
* Less
* Animate.CSS
* Font-Awesome
* Echarts 3.x
* Mock.JS

## Notes
* [Vue-loader使用指南](http://vue-loader.vuejs.org/en/)
* [Vue-cli使用指南](http://vuejs-templates.github.io/webpack/)
* app/static目录下的文件，将原封不动的被复制到dist/static文件夹下
* 一些全局样式文件，比如bootstrap样式可以放到/static文件夹下，在index.html里直接引用，这样可以避免编译
* config/index.js中的build.assetsPublicPath相当于output.publicPath
* 如果要设置代理，编辑config/index.js中的dev.proxyTable
* 如果要使用LESS，则首先执行npm i less less-loader --save-dev，然后在style标签中添加lang="less"
