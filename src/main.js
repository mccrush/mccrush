import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // DB
import "firebase/storage"; // File

import apiKey from '../apiKey'
const firebaseConfig = {
  apiKey: apiKey,
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

//export const storage = firebase.storage();

Vue.config.productionTip = false

store.commit('getArr', 'page');
store.commit('getArr', 'app');

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: function (h) { return h(App) }
    }).$mount('#app')
  }
})
