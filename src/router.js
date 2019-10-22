import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Note from './views/Note'
import Mood from './views/Mood'
import Hide from './views/Hide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    },
    {
      path: '/moodlist',
      name: 'mood',
      component: Mood
    },
    {
      path: '/xianyu',
      name: 'xianyu',
      component: Hide
    }
  ]
})
