// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import counter from './store/modules/counter'
Vue.use(Vuex)
console.log(counter)
Vue.config.productionTip = false
const store = new Vuex.Store({
  modules: {
    counter
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
