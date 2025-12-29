import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../components/paymentPage.vue'
import dashBoard from '../views/dashBoard.vue'
import IMEIDocs from '../views/IMEIDocs.vue'
import foooterPage from '../components/foooterPage.vue'
import IMEIForm from '../components/IMEIForm.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/', name: 'Dashboard', component: dashBoard },
  { path: '/docs', name: 'Docs', component: IMEIDocs },
  { path: '/footer', name: 'Footer', component: foooterPage },
  { path: '/imei-form', name: 'IMEIForm', component: IMEIForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
