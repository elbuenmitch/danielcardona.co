import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import reading from '@/components/reading'
import techprojects from '@/components/techprojects'
import blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/reading',
      name: 'reading',
      component: reading
    },
    {
      path: '/techprojects',
      name: 'techprojects',
      component: techprojects
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})
