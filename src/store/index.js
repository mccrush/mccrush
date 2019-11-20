/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "@/main.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageArr: [],
    pageId: [],
    appArr: [],
    appId: [],
    uid: ""
  },
  mutations: {
    getArr(state, typeCol) {
      if (typeCol == 'page') {
        if (localStorage.getItem('pageId')) {
          state.pageId = JSON.parse(localStorage.getItem('pageId'));
          state.pageArr = JSON.parse(localStorage.getItem('pageArr'));
        } else {
          db.collection(typeCol)
            .orderBy("posmenu")
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                state.pageId.push(doc.id);
                state.pageArr.push(doc.data());
              });
              localStorage.setItem('pageId', JSON.stringify(state.pageId));
              localStorage.setItem('pageArr', JSON.stringify(state.pageArr));
              //console.log("in store this.pageArr:", this.pageArr);
            })
            .catch(error => {
              console.log(error);
            });
        }
      } else if (typeCol == 'app') {
        if (localStorage.getItem('appId')) {
          state.appId = JSON.parse(localStorage.getItem('appId'));
          state.appArr = JSON.parse(localStorage.getItem('appArr'));
        } else {
          db.collection(typeCol)
            .orderBy("posmenu")
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                state.appId.push(doc.id);
                state.appArr.push(doc.data());
              });
              localStorage.setItem('appId', JSON.stringify(state.appId));
              localStorage.setItem('appArr', JSON.stringify(state.appArr));
              //console.log("in store state.appArr:", state.appArr);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }


    },
    setItem(state, payload) {
      payload.id = payload.id ? payload.id : db.collection(payload.col).doc().id;
      db.collection(payload.col)
        .doc(payload.id)
        .set(payload.item)
        .then(function () {
          if (payload.col == 'page') {
            state.pageId.push(payload.id);
            state.pageArr.push(payload.item);
            localStorage.setItem('pageId', JSON.stringify(state.pageId));
            localStorage.setItem('pageArr', JSON.stringify(state.pageArr));
          } else if (payload.col == 'app') {
            state.appId.push(payload.id);
            state.appArr.push(payload.item);
            localStorage.setItem('appId', JSON.stringify(state.appId));
            localStorage.setItem('appArr', JSON.stringify(state.appArr));
          }
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    updateItem(state, payload) {
      db.collection(payload.col)
        .doc(payload.id)
        .update(payload.item)
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) {
          console.error("Error updated document: ", error);
        });
    },
    deleteItem(state, payload) {
      db.collection(payload.col)
        .doc(payload.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
          document.location.replace("/adm/app");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    signIn(state, payload) {
      console.log('commit signIn run');
      state.uid = payload;
    },
    logOut(state) {
      state.uid = "";
    }
  },
  actions: {

  }
})
