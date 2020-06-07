import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('./views/Index')
    },
    {
      path: '/note',
      component: () => import('./views/Note2')
    },
    {
      path: '*',
      component: () => import('./views/404'),
      meta: {
        title: '404 Page Error',
        type: 404
      }
    }
  ]
})
