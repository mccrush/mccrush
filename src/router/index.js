/* eslint-disable no-undef */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404', // Первая, для перекрытия остальных
    name: '404',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('../views/Dev.vue')
  },
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
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  routes
})

export default router