import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";
import { AppLayoutsEnum } from "@/layouts/layouts.types";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import BasketballTeams from "@/pages/BasketballTeams.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signin",
    name: RouteNamesEnum.signin,
    component: SignIn,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
  {
    path: "/signup",
    name: RouteNamesEnum.signup,
    component: SignUp,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
  {
    path: "/teams",
    name: RouteNamesEnum.teams,
    component: BasketballTeams,
    meta: {
      layout: AppLayoutsEnum.default,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
