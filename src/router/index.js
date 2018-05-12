import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Compare from '@/components/Compare'
import Why from '@/components/Why'
import Testimonials from '@/components/Testimonials'
import Story from '@/components/Story'
import Docs from '@/components/Docs'

Vue.use(Router)

export default new Router({
  mode: 'history', //this removes # from site
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Why',
      name: 'Why',
      component: Why
    },
    {
      path: '/Testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/Story',
      name: 'Story',
      component: Story
    },
    {
      path: '/Docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/Compare',
      name: 'Compare',
      component: Compare
    }
  ]
})
