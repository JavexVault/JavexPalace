import Home from '@/views/Home.vue'
import Booking from '@/views/Booking.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/booking',
      component: Booking
    }
  ]
})

export default router
