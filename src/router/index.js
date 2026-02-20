
import Index from "@/views/index.vue";
import { createRouter, createWebHistory } from "vue-router";
import test from "@/views/test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      component : Index,
      name : 'Index'
    },
  ],
});

export default router;
