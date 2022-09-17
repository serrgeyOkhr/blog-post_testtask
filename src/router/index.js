import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import PostView from "../views/PostView.vue";
import PersonView from "../views/PersonView.vue";
import UsersView from "../views/UsersView.vue";

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
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/user/:id",
    name: "user",
    component: PersonView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
