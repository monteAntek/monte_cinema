import { createRouter, createWebHistory } from 'vue-router';

import mainRoutes from '@/router/modules/mainRoutes';

const routes = [...mainRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
