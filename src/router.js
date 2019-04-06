import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Aboute from './views/About.vue'
import NotFound from './views/NotFound.vue'

import LandingPage from './sections/LandingPage.vue'
import Experiences from './sections/Experiences.vue'
import Portfolio from './sections/Portfolio.vue'
import About from './sections/About.vue'
import Contact from './sections/Contact.vue'
import Projet from './sections/Projet.vue'

import i18n from './lang/lang.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash, offset: {x:0, y: 35}}
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path:'/',
      redirect: {name:'home', params:{lang: i18n.locale}}
    },
    {
      path: '/:lang',
      component: Aboute,
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
          name: 'project',
          path: 'portfolio/:projet',
          meta: {
              title: "ok",
              scrollToTop: true
          },
          component: Projet,
          beforeEnter (to, from, next) {
            // appelée avant que la route vers le composant soit confirmée.
            // cette fonction n'a pas accès à l'instance du composant avec `this`,
            // car le composant n'a pas encore été créé quand cette interception est appelée !
            if(['toWatchList','azbooka', 'imaMadeNandoMo', 'chassingGhost', 'co2planete', 'penaltyfoof', 'japanni', 'yamanoteline', 'kithub', 'miou'].includes(to.params.projet)) {
              next()
            } else {
              next({name: '404'})
            }
          },
        },
        {
          name: '404',
          path: 'not-found',
          component: NotFound
        },
        {
          path: '*',
          redirect: {name: '404'}
        },
      ]
    }
  ],
})
