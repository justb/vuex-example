import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import {
  state,
  mutations
} from './mutations'
import counter from './modules/counter'
import foobar from './modules/foobar'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    counter,
    foobar
  },
  mutations,
  strict: debug,
  //   plugins: debug ? [createLogger()] : []
})
