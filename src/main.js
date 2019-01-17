import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang.js';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
