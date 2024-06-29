import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'
import { AppLayoutsEnum } from '@/layouts/layouts.types'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: RouteNamesEnum.signin,
    component: () => import('@/pages/SignIn.vue'),
    meta: {
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/signup',
    name: RouteNamesEnum.signup,
    component: () => import('@/pages/SignUp.vue'),
    meta: {
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/teams',
    name: RouteNamesEnum.teams,
    component: () => import('@/pages/Teams.vue'),
    meta: {
      layout: AppLayoutsEnum.default
    }
  },
  {
    path: '/players',
    name: RouteNamesEnum.players,
    component: () => import('@/pages/Players.vue'),
    meta: {
      layout: AppLayoutsEnum.default
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
