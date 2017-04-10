import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Compensate from '@/components/Compensate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/compensate',
      name: 'Compensate',
      component: Compensate
    }
  ]
})
