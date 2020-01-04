import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xianyu: false
  },
  mutations: {
    SET_XIANYU (state, flag) {
      state.xianyu = flag
    }
  },
  actions: {}
})
