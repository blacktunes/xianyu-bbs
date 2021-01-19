import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/transition.styl'

import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number'
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji'

VMdPreview.use(vuepressTheme, {
  codeHighlightExtensionMap: {
    vue: 'html'
  }
})
VMdPreview.use(createLineNumbertPlugin())
VMdPreview.use(createTodoListPlugin())
VMdPreview.use(createEmojiPlugin())
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
