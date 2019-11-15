import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueSocketIO from 'vue-socket.io'
import moment from 'moment'
import Highlight from '@/assets/js/highlight'
import '@/assets/style/theme/index.css'

import { serverUrl2 } from '@/api/store'

Vue.use(new VueSocketIO({
  debug: false,
  connection: serverUrl2
}))

Vue.prototype.$moment = moment
moment.locale('zh-cn')

Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
