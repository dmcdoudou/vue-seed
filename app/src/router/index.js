import Vue from 'vue'
import Router from 'vue-router'

// 按需加载配置组件
const List = resolve => require(['./../components/List'], resolve)
const HandleSeeds = resolve => require(['./../components/HandleSeeds'], resolve)
const HandlePage = resolve => require(['./../components/HandlePage'], resolve)
const HandleLink = resolve => require(['./../components/HandleLink'], resolve)
const HandleSchema = resolve => require(['./../components/HandleSchema'], resolve)
const Weather = resolve => require(['./../components/Weather'], resolve)
const Financing = resolve => require(['./../components/Financing'], resolve)

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/Seeds'
    }, {
        path: '/Seeds',
        name: 'List',
        component: List
    }, {
        path: '/Page',
        name: 'List',
        component: List
    }, {
        path: '/Link',
        name: 'List',
        component: List
    }, {
        path: '/Schema',
        name: 'List',
        component: List
    }, {
        path: '/weather',
        name: 'Weather',
        component: Weather
    }, {
        path: '/financing',
        name: 'Financing',
        component: Financing
    }, {
        path: '/handleSeeds',
        name: 'HandleSeeds',
        component: HandleSeeds
    }, {
        path: '/handlePage',
        name: 'HandlePage',
        component: HandlePage
    }, {
        path: '/handleLink',
        name: 'HandleLink',
        component: HandleLink
    }, {
        path: '/handleSchema',
        name: 'HandleSchema',
        component: HandleSchema
    }]
})
