import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    cl: null
  },
  getters: {
    getUser(state) {
      return { ...state.user[0] }
    },
    isAuth(state) {
      return state.user !== null
    },
    getClass(state) {
      if (state.cl !== null) {
        return state.cl
      }
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    UNSET_USER(state) {
      state.user = null
    },
    SET_CLASS(state, cl) {
      state.cl = cl
    }
  },
  actions: {}
})
