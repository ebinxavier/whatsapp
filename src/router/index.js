import { createWebHistory, createRouter } from "vue-router";
import Home from "../Screens/Home.vue";
import Login from "../Screens/Login.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;