/* eslint-disable no-undef */
// import Vue from 'vue'
// import Router from 'vue-router'
// import Page from './views/Page.vue'
// import Admin from './views/Admin.vue'
// import NotFound from './views/NotFound.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/404', // Первая, для перекрытия остальных
//       name: '404',
//       component: NotFound
//     },
//     {
//       path: '/:alias',
//       name: 'page',
//       component: Page
//     },
//     {
//       path: '/',
//       redirect: '/home'
//     },
//     {
//       path: '/adm/:razdel',
//       name: 'admin',
//       component: Admin
//     },

//     {
//       path: '*', // Для всех прочих кроме существующих
//       redirect: '/404'
//     }

//   ]
// })
////////////////////

import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from "@/main.js";
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:alias',
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
    path: '/adm/:razdel',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404', // Первая, для перекрытия остальных
    name: '404',
    component: NotFound
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
