export default {
  path: 'auth',
  component: () => import('@/views/AuthPage.vue'),
  children: [
    {
      name: 'Register',
      path: 'register'
    },
    {
      name: 'Login',
      path: 'login'
    }
  ]
};
