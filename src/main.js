// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import counter from './store/modules/counter'
import foobar from './store/modules/foobar'
Vue.use(Vuex)
Vue.config.productionTip = false
import store from './store'
// const store = new Vuex.Store({
//     modules: {
//         counter,
//         foobar
//     }
// })
let Bus = new Vue();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})