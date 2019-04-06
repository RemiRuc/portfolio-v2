import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang.js';
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  distance: '100px',
  origin: 'left',
  reset: true,
  interval: 60
});

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
