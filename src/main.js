import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import {Alert, Confirm, Toast, Loading} from 'wc-messagebox'
import 'wc-messagebox/style.css'
require('@/style/style.css')
require('@/style/animate.css')

Vue.config.productionTip = false
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
