import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    authStatus: false
  },
  mutations: {
    changeAuthStatus(state) {
      state.authStatus = state.authStatus ? false : state.authStatus;
      //console.log("after mutations, store.state.authStatus:", store.state.authStatus);
    }
  },
  actions: {

  }
})
