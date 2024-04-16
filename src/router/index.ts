import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";
import { AppLayoutsEnum } from "@/layouts/layouts.types";
import SignIn from "@/pages/SignIn.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signin",
    name: RouteNamesEnum.signin,
    component: SignIn,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
