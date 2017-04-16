import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Form from '@/components/Form'
import Charts from '@/components/Charts'
import End from '@/components/End'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/end',
      name: 'End',
      component: End
    }
  ]
})
