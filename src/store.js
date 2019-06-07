import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "@/main.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageArr: [],
    pageId: [],
    appArr: [],
    appId: []

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
              console.log("in store this.pageArr:", this.pageArr);
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
              console.log("in store this.appArr:", this.appArr);
            })
            .catch(error => {
              console.log(error);
            });
        }
      }




      // if (localStorage.getItem('pageId').length >= 1) {
      //   state.pageId = JSON.parse(localStorage.getItem('pageId'));
      //   state.pageArr = JSON.parse(localStorage.getItem('pageArr'));
      // } else {
      //   db.collection(typeCol)
      //     .orderBy("posmenu")
      //     .get()
      //     .then(querySnapshot => {
      //       if (typeCol == 'page') {
      //         querySnapshot.forEach(doc => {
      //           state.pageId.push(doc.id);
      //           state.pageArr.push(doc.data());
      //         });
      //       } else if (typeCol == 'app') {
      //         querySnapshot.forEach(doc => {
      //           state.appId.push(doc.id);
      //           state.appArr.push(doc.data());
      //         });
      //       }
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
      // }
    },
    setItem(state, payload) {
      payload.id = payload.id ? payload.id : db.collection(payload.col).doc().id;
      db.collection(payload.col)
        .doc(payload.id)
        .set(payload.item)
        .then(function () {
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
    }
  },
  actions: {

  }
})
