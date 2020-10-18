import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

let app

if (!app) {
  app = new Vue({
    router,
    render: function (h) { return h(App) }
  }).$mount('#app')
}

