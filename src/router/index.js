import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/:catchAll(.*)', // Для всех прочих кроме существующих
    name: 'notfound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router