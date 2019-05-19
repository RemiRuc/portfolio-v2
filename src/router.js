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
import Blog from './sections/Blog.vue'

import fr from './lang/assets/fr.json'
import en from './lang/assets/en.json'
import sr from './lang/assets/sr.json'
import jp from './lang/assets/jp.json'

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
        if (!['fr'].includes(lang)) return next(i18n.locale)
        if (i18n.locale === lang) return next()
        let msg;
        switch (to.params.lang) {
          case 'fr' : msg = fr; break;
          case 'jp' : msg = jp; break;
          case 'en' : msg = en; break;
          case 'sr' : msg = sr; break;
        }
        i18n.setLocaleMessage(lang, msg)
        i18n.locale = lang
        return next()
        
        
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
        /*{
          name: 'blog',
          path: 'blog/:blog',
          meta: {
              title: "ok",
              scrollToTop: true
          },
          component: Blog,
          beforeEnter (to, from, next) {
            // appelée avant que la route vers le composant soit confirmée.
            // cette fonction n'a pas accès à l'instance du composant avec `this`,
            // car le composant n'a pas encore été créé quand cette interception est appelée !
            if(['chap1'].includes(to.params.blog)) {
              next()
            } else {
              next({name: '404'})
            }
          },
        },*/
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
