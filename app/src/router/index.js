import Vue from 'vue'
import Router from 'vue-router'
import Seed from '@/components/Seed'
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
        redirect: '/seed'
    }, {
        path: '/seed',
        name: 'Seed',
        component: Seed
    }, {
        path: '/handleSeed',
        name: 'HandleSeed',
        component: HandleSeed
    }, {
        path: '/template',
        name: 'Template',
        component: Template
    }, {
        path: '/link',
        name: 'Link',
        component: Link
    }, {
        path: '/form',
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
