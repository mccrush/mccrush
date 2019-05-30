import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/Page.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:alias',
      name: 'page',
      component: Page
    },
    {
      path: '/',
      redirect: '/home'
    },
    // {
    //   path: '/adm/:razdel',
    //   name: 'admin',
    //   component: Admin
    // },
  ]
})
