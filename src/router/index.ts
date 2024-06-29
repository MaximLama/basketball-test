import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middleware/loadLayout.middleware'
import { RouteNamesEnum } from '@/router/router.types'
import { AppLayoutsEnum } from '@/layouts/layouts.types'
import SignIn from '@/pages/SignIn.vue'
import SignUp from '@/pages/SignUp.vue'
import Teams from '@/pages/Teams.vue'
import Players from '@/pages/Players.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: RouteNamesEnum.signin,
    component: SignIn,
    meta: {
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/signup',
    name: RouteNamesEnum.signup,
    component: SignUp,
    meta: {
      layout: AppLayoutsEnum.auth
    }
  },
  {
    path: '/teams',
    name: RouteNamesEnum.teams,
    component: Teams,
    meta: {
      layout: AppLayoutsEnum.default
    }
  },
  {
    path: '/players',
    name: RouteNamesEnum.players,
    component: Players,
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
