import movieRoutes from './movieRoutes';
import authRoutes from './authRoutes';

export default [
  {
    path: '/',
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/HomePage.vue')
      },
      { ...movieRoutes },
      {
        name: 'Screenings',
        path: 'screenings',
        component: () => import('@/views/ScreeningsPage.vue')
      },
      {
        name: 'Contact',
        path: 'contact',
        component: () => import('@/views/ContactPage.vue')
      },
      { ...authRoutes }
    ]
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404Page.vue')
  },
  {
    path: '/:path*',
    redirect: '/404'
  }
];
