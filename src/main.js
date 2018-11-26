import Vue from 'vue'
import router from './router'
// import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/permission' // 权限
import vueFilter from './utils/filter'
import App from './App'
Vue.use(vueFilter)
Vue.use(MuseUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // i18n,
  router,
  template: '<App/>',
  components: { App }
})
