import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/components/Daily'
import Compensate from '@/components/Compensate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/compensate',
      name: 'Compensate',
      component: Compensate
    }
  ]
})
