import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

let app

if (!app) {
  app = createApp(App).use(router).mount('#app')
}

