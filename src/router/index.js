import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  // {
  //   path: '/dev',
  //   name: 'dev',
  //   component: () => import('../views/Dev.vue')
  // },
  {
    path: '/apps',
    name: 'apps',
    component: () => import('../views/Apps.vue')
  },
  {
    path: '/gtd',
    name: 'gtd',
    component: () => import('../views/Gtd.vue')
  },
  {
    path: '*', // Для всех прочих кроме существующих
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router