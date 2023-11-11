import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '首頁' },
      component: Home,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '/404',
      component: () => import('@views/NotFound.vue'),
    },
  ],
});

export default router;
