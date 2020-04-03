/* eslint-disable no-undef */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";
import Index from '../views/Index.vue'
import Admin from '../views/Admin.vue'
//import Comp from '../pages/Comp.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../pages/Home.vue'
import Dev from '../pages/Dev.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/404', // Первая, для перекрытия остальных
    name: '404',
    component: NotFound
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dev',
    name: 'dev',
    component: Dev
  },
  // {
  //   path: '/comp',
  //   name: 'comp',
  //   component: Comp
  // },
  {
    path: '/adm/:razdel',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:alias',
    name: 'index',
    component: Index
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
