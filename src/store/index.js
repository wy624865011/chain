import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import user from './modules/user'
// import permission from './modules/permission'
// import enums from './modules/enums'
// import upload from './modules/upload'
// import lang from './modules/lang'

import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // app,
    // user,
    // permission,
    // enums,
    // upload,
    // lang
  },
  getters
})

export default store
