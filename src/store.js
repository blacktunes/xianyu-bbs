import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xianyu: false,
    preview: {},
    edit: {}
  },
  mutations: {
    SET_XIANYU (state, flag) {
      state.xianyu = flag
    },
    SET_PREVIEW (state, object) {
      state.preview = object
    },
    SET_EDIT (state, object) {
      state.edit = object
    }
  },
  actions: {}
})
