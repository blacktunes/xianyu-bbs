import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Mood from './views/Mood'
import Hide from './views/Hide'
import Note from './views/Note'
import Topic from './views/Topic'
import Input from './views/Input'
import Preview from './components/Input/Preview'
import NotFound from './views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/mood',
      name: 'mood',
      component: Mood
    },
    {
      path: '/input',
      component: Input,
      children: [
        {
          path: 'preview',
          component: Preview
        }
      ]
    },
    {
      path: '/note/:topic',
      component: Topic
    },
    {
      path: '/note/:topic/:id',
      component: Note
    },
    {
      path: '/xianyu',
      name: 'xianyu',
      component: Hide
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
