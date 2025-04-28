import { EmptyLayout, DefaultLayout } from '@/widgets/layouts'
import { ROUTE_PATHS } from '@/shared/route-paths'
import type { RouteRecordRaw, RouteComponent } from 'vue-router'

type Layout = typeof EmptyLayout | typeof DefaultLayout
type LazyComponent = () => Promise<RouteComponent>

const buildRoute = (
  name: string,
  path: string,
  component: LazyComponent,
  requiresAuth: boolean = true,
  layout: Layout = DefaultLayout,
): RouteRecordRaw => ({
  path,
  name,
  component: component,
  meta: { layout, requiresAuth },
})

const routes = [
  buildRoute('home', ROUTE_PATHS.HOME, () => import('@/pages/home'), false, EmptyLayout),
  buildRoute('about', ROUTE_PATHS.ABOUT, () => import('@/pages/about'), false, EmptyLayout),
  buildRoute('login', ROUTE_PATHS.LOGIN, () => import('@/pages/login'), false, EmptyLayout),
  buildRoute('profile', ROUTE_PATHS.PROFILE, () => import('@/pages/profile')),
]

export { routes }
