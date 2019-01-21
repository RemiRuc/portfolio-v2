import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import LandingPage from './sections/LandingPage.vue'
import Experiences from './sections/Experiences.vue'
import Portfolio from './sections/Portfolio.vue'
import About from './sections/About.vue'
import Contact from './sections/Contact.vue'

import i18n from './lang/lang.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect: {name:'home', params:{lang: i18n.locale}}
    },
    {
      path: '/:lang',
      component:function () { 
        return import('./App.vue')
      },
      beforeEnter: (to, from, next) => {
        const lang = to.params.lang
        if (!['fr','jp', 'sr', 'en'].includes(lang)) return next(to.params.lang)
        if (i18n.locale === lang) return next()
        import('./lang/assets/'+lang+'.json').then((msgs) => {
          i18n.setLocaleMessage(lang, msgs.default || msgs)
          i18n.locale = lang
          return next()
        })
        
        
      },
      children:[
        {
          name: 'home',
          path: '',
          component: LandingPage,
        },
        {
          name: 'portfolio',
          path: 'portfolio',
          component: Portfolio,
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          name: 'experience',
          path: 'experience',
          component: Experiences,
        },
        {
          name: 'contact',
          path: 'contact',
          component: Contact,
        },
      ]
    },
  ]
})
