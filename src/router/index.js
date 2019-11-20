import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/Page.vue'
import Admin from './views/Admin.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/404', // Первая, для перекрытия остальных
      name: '404',
      component: NotFound
    },
    {
      path: '/:alias',
      name: 'page',
      component: Page
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/adm/:razdel',
      name: 'admin',
      component: Admin
    },

    {
      path: '*', // Для всех прочих кроме существующих
      redirect: '/404'
    }

  ]
})
