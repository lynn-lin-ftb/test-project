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
      meta: { title: '白頭翁的特性', menu: true },
      component: Home,
    },
    {
      path: '/story',
      name: 'story',
      meta: { title: '白頭翁的故事', menu: true },
      component: () => import('@views/UnderConstruction.vue'),
    },
    {
      path: '/photo',
      name: 'photo',
      meta: { title: '白頭翁的美照', menu: true },
      component: () => import('@views/UnderConstruction.vue'),
    },
    {
      path: '/crisis',
      name: 'crisis',
      meta: { title: '白頭翁的危機', menu: true },
      component: () => import('@views/UnderConstruction.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '/404',
      component: () => import('@views/NotFound.vue'),
    },
  ],
});

export default router;
