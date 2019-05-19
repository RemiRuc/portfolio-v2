import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang.js';
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'
import AOS from 'aos'
import VueAnalytics from 'vue-analytics'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  distance: '100px',
  origin: 'left',
  reset: false,
  interval: 60
});

Vue.use(VueAnalytics, {
  id: 'UA-126795198-1',
  router
});

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) },
  created () {
    AOS.init()
  },
}).$mount('#app')
