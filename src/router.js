import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/index',
      component: () => import('./views/Index/Index'),
      meta: {
        hideScrollbar: true
      }
    },
    {
      path: '/',
      component: () => import('./views/Index/View.vue'),
      menu: true,
      children: [
        {
          path: '/',
          component: () => import('./views/Error'),
          menu: '? ? ?',
          meta: {
            title: '',
            hideScrollbar: true
          }
        },
        {
          path: '/topic',
          component: () => import('./views/Index/Note/Topic'),
          menu: '笔记',
          meta: {
            desc: '这个页面用来放点没用的笔记'
          }
        },

        {
          path: '/chat',
          component: () => import('./views/Index/Chat/Chat'),
          menu: '闲聊',
          meta: {
            desc: '这个页面没用'
          }
        },
        {
          path: '/other',
          component: () => import('./views/Index/Other/Other'),
          menu: '其它',
          meta: {
            desc: '这个页面用来放点奇怪的东西'
          }
        },
        {
          path: '/component',
          component: () => import('./views/Index/Component/Component'),
          menu: '组件',
          meta: {
            desc: '这个页面用来放点奇怪的组件'
          }
        }
      ]
    },
    {
      path: '/note',
      component: () => import('./views/Index/Note/Note')
    },
    {
      path: '*',
      component: () => import('./views/Error'),
      meta: {
        hideScrollbar: true,
        code: 404
      }
    }
  ]
})
