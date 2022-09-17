import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
