/* eslint-disable no-undef */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";

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
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('../pages/Dev.vue')
  },
  {
    path: '/gtd',
    name: 'gtd',
    component: () => import('../pages/Gtd.vue')
  },
  {
    path: '/comp',
    name: 'comp',
    component: () => import('../pages/Comp.vue')
  },
  {
    path: '/adm/:razdel',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:alias',
    name: 'index',
    component: () => import('../views/Index.vue')
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

router.beforeEach((to, from, next) => {
  let currentUser = auth.currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    if (currentUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
