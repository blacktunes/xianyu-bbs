import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('./views/Error'),
      meta: {
        title: '',
        hideScrollbar: true
      }
    },
    {
      path: '/index',
      component: () => import('./views/Index/Index'),
      meta: {
        hideScrollbar: true
      }
    },
    {
      path: '/topic',
      component: () => import('./views/Index/Note/Topic')
    },
    {
      path: '/note',
      component: () => import('./views/Index/Note/Note')
    },
    {
      path: '/other',
      component: () => import('./views/Index/Other/Other')
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
