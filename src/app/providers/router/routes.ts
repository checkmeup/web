import { EmptyLayout, DefaultLayout } from '@/widgets/layouts'
import HomePage from '@/pages/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      layout: EmptyLayout,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about'),
    meta: {
      layout: DefaultLayout,
    },
  },
]

export { routes }
