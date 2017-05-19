import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import HandleSeed from '@/components/HandleSeed'
import Weather from '@/components/Weather'
import Financing from '@/components/Financing'

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
        path: '/Field',
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
        path: '/handleSeed',
        name: 'HandleSeed',
        component: HandleSeed
    }]
})
