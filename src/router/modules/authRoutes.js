export default {
  path: 'auth',
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
