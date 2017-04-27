import Vue from 'vue'
import Router from 'vue-router'
import CoreDataOne from '../components/CoreDataOne'
import CoreDataTwo from '../components/CoreDataTwo'
import TradeStation_Channels from '../components/TradeStation_Channels'
import ConvertCustomerThan from '../components/ConvertCustomerThan'
import EffectiveEntrustSituation from '../components/EffectiveEntrustSituation'
import Daily from '@/components/Daily'
import Compensate from '@/components/Compensate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coreDataOne',
      component: CoreDataOne
    },{
      path: '/coreDataOne',
      name: 'CoreDataOne',
      component: CoreDataOne
    },
    {
      path: '/coreDataTwo',
      name: 'CoreDataTwo',
      component: CoreDataTwo
    },
    {
      path: '/tradeStation_Channels',
      name: 'TradeStation_Channels',
      component: TradeStation_Channels
    },
    {
      path: '/convertCustomerThan',
      name: 'ConvertCustomerThan',
      component: ConvertCustomerThan
    },
    {
      path: '/effectiveEntrustSituation',
      name: 'EffectiveEntrustSituation',
      component: EffectiveEntrustSituation
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
