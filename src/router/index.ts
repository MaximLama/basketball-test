import { createRouter, createWebHistory } from 'vue-router'
import { RouteNamesEnum } from '@/router/router.types'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppLayoutAuth.vue'),
    children: [
      {
        path: '/signin',
        name: RouteNamesEnum.signin,
        component: () => import('@/pages/SignIn.vue')
      },
      {
        path: '/signup',
        name: RouteNamesEnum.signup,
        component: () => import('@/pages/SignUp.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/AppLayoutDefault.vue'),
    children: [
      {
        path: '/teams',
        children: [
          {
            path: '',
            name: RouteNamesEnum.teams,
            component: () => import('@/pages/Teams.vue')
          },
          {
            path: ':id',
            name: RouteNamesEnum.team,
            component: () => import('@/pages/TeamDetail.vue')
          }
        ]
      },
      {
        path: '/players',
        name: RouteNamesEnum.players,
        component: () => import('@/pages/Players.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
