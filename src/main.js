import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from "./js/global.js"
import "./css/index.scss"

Vue.prototype.$global=global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
