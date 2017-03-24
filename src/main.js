
/* reset css */
import 'normalize-css/normalize.css'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import $ from "jquery"
window.$ = $
window.jquery = $

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
window.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
