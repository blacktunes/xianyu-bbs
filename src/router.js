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
      menu: '笔记'
    },
    {
      path: '/note',
      component: () => import('./views/Index/Note/Note'),
      menu: '吐槽'
    },
    {
      path: '/other',
      component: () => import('./views/Index/Other/Other'),
      menu: '其它'
    },
    {
      path: '/component',
      component: () => import('./views/Index/Component/Component'),
      menu: '组件'
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
