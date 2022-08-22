export default {
  path: 'auth',
  component: () => import('@/views/MainView.vue'),
  children: [
    {
      name: 'Register',
      path: 'register',
      component: () => import('@/views/RegisterPage.vue')
    },
    {
      name: 'Login',
      path: 'login',
      component: () => import('@/views/LoginPage.vue')
    }
  ]
};
