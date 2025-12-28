import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../components/paymentPage.vue'
import dashBoard from '../views/dashBoard.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/', name: 'Dashboard', component: dashBoard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
