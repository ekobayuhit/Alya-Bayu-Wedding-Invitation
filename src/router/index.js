// Router define
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    name: 'wellcome',
    path: '/',
    component: () => import('@/views/Wellcome.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
