import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { RouteNamesEnum } from '@/router/router.types'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    redirect: RouteNamesEnum.teams
  },
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
        name: RouteNamesEnum.teamsBase,
        children: [
          {
            path: '',
            name: RouteNamesEnum.teamsLayout,
            component: () => import('@/layouts/AppLayoutContent.vue'),
            children: [
              {
                path: '',
                name: RouteNamesEnum.teams,
                component: () => import('@/pages/Teams.vue'),
                meta: {
                  requiresAuth: true,
                  addButtonTo: {
                    name: RouteNamesEnum.addTeam
                  }
                }
              }
            ]
          },
          {
            path: ':id(\\d+)',
            name: RouteNamesEnum.team,
            component: () => import('@/pages/TeamDetail.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'add',
            name: RouteNamesEnum.addTeam,
            component: () => import('@/pages/AddTeam.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      },
      {
        path: '/players',
        name: RouteNamesEnum.playersBase,
        children: [
          {
            path: '',
            name: RouteNamesEnum.playersLayout,
            component: () => import('@/layouts/AppLayoutContent.vue'),
            meta: {
              showSelect: true
            },
            children: [
              {
                path: '',
                name: RouteNamesEnum.players,
                component: () => import('@/pages/Players.vue'),
                meta: {
                  requiresAuth: true
                }
              }
            ]
          },
          {
            path: ':id(\\d+)',
            name: RouteNamesEnum.player,
            component: () => import('@/pages/PlayerDetail.vue'),
            meta: {
              requiresAuth: true
            }
          },
          {
            path: 'add',
            name: RouteNamesEnum.addPlayer,
            component: () => import('@/pages/AddPlayer.vue'),
            meta: {
              requiresAuth: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: RouteNamesEnum.error404,
    component: () => import('@/layouts/AppLayoutDefault.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth) {
    const { user } = storeToRefs(useUserStore())
    if (user.value.isAuthorized) {
      next()
      return
    }
    next({ name: RouteNamesEnum.signin })
    return
  }

  next()
})

export default router
