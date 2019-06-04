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
      db.collection(typeCol)
        .orderBy("posmenu")
        .get()
        .then(querySnapshot => {
          if (typeCol == 'page') {
            querySnapshot.forEach(doc => {
              state.pageId.push(doc.id);
              state.pageArr.push(doc.data());
              //console.log(`${doc.id} => ${doc.data().alias}`);
            });
          } else if (typeCol == 'app') {
            querySnapshot.forEach(doc => {
              state.appId.push(doc.id);
              state.appArr.push(doc.data());
              //console.log(`${doc.id} => ${doc.data().alias}`);
            });
          }
          //console.log("this.pageArr:", this.pageArr);
        })
        .catch(error => {
          console.log(error);
        });
      //console.log("after mutations, store.state.authStatus:", store.state.authStatus);
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
