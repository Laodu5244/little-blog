import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _user: '',
  },
  mutations: {
    get_User(state, data) {
      state._user = data
    }
  }
})
