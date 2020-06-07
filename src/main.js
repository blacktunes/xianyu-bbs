import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
// import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index'

VMdPreview.use(vuepressTheme)
VMdPreview.use(createLineNumbertPlugin())
VMdPreview.use(createTodoListPlugin())
Vue.use(VMdPreview)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '非洲咸鱼'
  }
  next()
})

router.afterEach(() => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
