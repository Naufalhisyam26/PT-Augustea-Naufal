import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/explore", name: "Explore", component: Explore },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
