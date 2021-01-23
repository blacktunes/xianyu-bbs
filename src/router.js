import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('./views/Entry'),
      meta: {
        title: '',
        hideScrollbar: true
      }
    },
    {
      path: '/home',
      component: () => import('./views/Index'),
      meta: {
        hideScrollbar: true
      }
    },
    {
      path: '/topic',
      component: () => import('./views/Topic')
    },
    {
      path: '/note',
      component: () => import('./views/Note')
    },
    {
      path: '/other',
      component: () => import('./views/Other')
    },
    {
      path: '/test',
      component: () => import('./views/Test')
    },
    {
      path: '*',
      component: () => import('./views/404'),
      meta: {
        title: '404 Page Error',
        hideScrollbar: true
      }
    }
  ]
})
