import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'
import { ROUTE_PATHS } from '@/shared/route-paths/index.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to) => {
  if (to.path !== ROUTE_PATHS.LOGIN && to.meta.requiresAuth) {
    return { path: ROUTE_PATHS.LOGIN }
  }
})

export { router }
