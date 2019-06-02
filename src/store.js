import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authStatus: false
  },
  mutations: {
    changeAuthStatus(state, vl) {
      state.authStatus = vl;
      //console.log("after mutations, store.state.authStatus:", store.state.authStatus);
    }
  },
  actions: {

  }
})
