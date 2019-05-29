import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAGGtzL2xfNuWKIW_KbF1Dxtgd9Av2MtUM",
  authDomain: "mccrush-8de25.firebaseapp.com",
  databaseURL: "https://mccrush-8de25.firebaseio.com",
  projectId: "mccrush-8de25",
  storageBucket: "mccrush-8de25.appspot.com",
  messagingSenderId: "417870593001",
  appId: "1:417870593001:web:b67d8388c53cf0e5"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
