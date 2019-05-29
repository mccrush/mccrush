import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './views/App.vue'
import Edu from './views/Edu.vue'
import Gtd from './views/Gtd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app',
      name: 'app',
      component: App
    },
    {
      path: '/edu',
      name: 'edu',
      component: Edu
    },
    {
      path: '/gtd',
      name: 'gtd',
      component: Gtd
    }
  ]
})
