import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import HandleSeed from '@/components/HandleSeed'
import Template from '@/components/Template'
import Link from '@/components/Link'
import Form from '@/components/Form'
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
        path: '/handleSeed',
        name: 'HandleSeed',
        component: HandleSeed
    }, {
        path: '/Page',
        name: 'List',
        component: List
    }, {
        path: '/Link',
        name: 'Link',
        component: Link
    }, {
        path: '/Field',
        name: 'Form',
        component: Form
    }, {
        path: '/weather',
        name: 'Weather',
        component: Weather
    }, {
        path: '/financing',
        name: 'Financing',
        component: Financing
    }]
})
