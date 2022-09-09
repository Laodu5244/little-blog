import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _user: '',
    _param:'',
  },
  mutations: {
    get_User(state, data) {
      state._user = data
    },
    param(state, data) {
      state._param = data
    },
  }
})
