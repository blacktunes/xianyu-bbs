import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import NotFound from './views/404'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/mood',
      name: 'mood',
      component: () => import('./views/Mood')
    },
    {
      path: '/input',
      component: () => import('./views/Input'),
      children: [
        {
          path: 'preview',
          component: () => import('./components/Input/Preview')
        }
      ]
    },
    {
      path: '/note/:topic',
      component: () => import('./views/Topic')
    },
    {
      name: 'note',
      path: '/note/:topic/:id',
      component: () => import('./views/Note')
    },
    {
      path: '/timeline',
      component: () => import('./views/Timeline')
    },
    {
      path: '/xianyu',
      name: 'xianyu',
      component: () => import('./views/Hide')
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
