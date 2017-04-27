
/* reset css */
import 'normalize-css/normalize.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/style.css'

import 'babel-polyfill'

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

import {
  Row,
  Col,
  Select,
  Option,
  DatePicker,
  Button,
  Loading
} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Button)

Vue.prototype.formatContent = (aContent, aIsPercentage) => {
  if (! aContent || aContent == 'null' || aContent == null || aContent == NaN) {
    return 0
  }

  if (aIsPercentage) {
    aContent *= 100
  }

  return parseFloat(aContent).toFixed(2)
}

Vue.prototype.isInteger = (obj) => {
  return obj%1 === 0
}

Vue.prototype.toThousands = (num)  =>{
  num = num.toString()
  if(num.indexOf('.') > -1){
    return (num || 0).replace(/(\d{1,2})(?=(\d{3})+\.)/g,'$1,');
  }else{
    return (num || 0).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
