/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    //path: "/gateway/",
    //name: "Home",
    component: () =>
      import("../components/Home/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
