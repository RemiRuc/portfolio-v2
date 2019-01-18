import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
          component: Home,
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: function () { 
            return import(/* webpackChunkName: "about" */ './views/About.vue')
          }
        }
      ]
    },
  ]
})
