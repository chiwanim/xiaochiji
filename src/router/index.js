import Vue from 'vue'
import Router from 'vue-router'
import ScanPage from '@/view/ScanPage'
import ScanErrorPage from '@/view/ScanErrorPage'
import ScanRefundPage from '@/view/ScanRefundPage'
import ApplyRefundPage from '@/view/ApplyRefundPage'
import ApplyRecordPage from '@/view/ApplyRecordPage'
import ApplySuccessPage from '@/view/ApplySuccessPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScanPage',
      component: ScanPage
    },
    {
      path: '/ScanErrorPage',
      name: 'ScanErrorPage',
      component: ScanErrorPage
    },
    {
      path: '/ScanRefundPage',
      name: 'ScanRefundPage',
      component: ScanRefundPage
    },
    {
      path: '/ApplyRefundPage',
      name: 'ApplyRefundPage',
      component: ApplyRefundPage
    },
    {
      path: '/ApplyRecordPage',
      name: 'ApplyRecordPage',
      component: ApplyRecordPage
    },
    {
      path: '/ApplySuccessPage',
      name: 'ApplySuccessPage',
      component: ApplySuccessPage
    },
  ]
})