// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource' //这里是一个坑：用require的话，你会死的很惨
import 'font-awesome/less/font-awesome.less'
import {
    Row,
    Col,
    Button,
    Menu,
    MenuItem,
    Message,
    Select,
    Option,
    Card,
    Table,
    TableColumn,
    Input,
    InputNumber,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Switch,
    Loading
} from 'element-ui'


// 安装各个插件
Vue.use(VueResource);
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message

// Vue 的全局配置
Vue.config.productionTip = false

// vue-resource的全局设置
Vue.http.options.root = 'http://172.20.207.39:5000/api/spider';
// Vue.http.interceptors.push(function(request, next) {
//   // 修改方法
//   // request.method = 'post';
//   // 设置返回
//   next((response) => {
//       return response;
//     });
// });

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
