# Target
Developing a SPA with Vue(2.x) ES6.

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Tech Stack
* Vue 2.x
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
* Yarn

## Notes
* [Vue-loader使用指南](http://vue-loader.vuejs.org/en/)
* [Vue-cli使用指南](http://vuejs-templates.github.io/webpack/)
* app/static目录下的文件，将原封不动的被复制到dist/static文件夹下
* 一些全局样式文件，比如bootstrap样式可以放到/static文件夹下，在index.html里直接引用，这样可以避免编译
* config/index.js中的build.assetsPublicPath相当于output.publicPath
* 如果要设置代理，编辑config/index.js中的dev.proxyTable
* 如果要使用LESS，则首先执行npm i less less-loader --save-dev，然后在style标签中添加lang="less"
* 绝壁大坑：如果不在模板中绑定父组件中传过来的数据的话，子组件完全不更新
* 又一个坑：页面内导航用: this.$router.push() 获取路由中的数据：this.$route.query
* 安装或删除模块请使用Yarn命令 ！！！！！！！！

## Articles
* [中国天气网API接口](http://www.voidcn.com/blog/lgh1992314/article/p-6151991.html)
* [Vue 爬坑之路（八）—— 使用 Echarts 创建图表](http://www.cnblogs.com/wisewrong/p/6558001.html)
