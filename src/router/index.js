import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const _import = require("./lazyLoad");

export const baseRoutes = [
  {
    path: "/login",
    name: "login",
    component: _import("common/login"),
    meta: { title: "登录" },
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    routes: baseRoutes,
  });

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

const router = createRouter();

export default router;
