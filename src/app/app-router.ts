import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from '@/shared/constants/routes'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTER_PATHS.HOME, component: HomePage },
    { path: ROUTER_PATHS.ABOUT, component: () => import('@/pages/AboutPage.vue') },
  ],
})

export default router
