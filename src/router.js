import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./components/PageHome.vue";
import DettaglioImmobile from "./components/DettaglioImmobile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/dettaglio-immobile/:id",
    name: "DettaglioImmobile",
    component: DettaglioImmobile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
