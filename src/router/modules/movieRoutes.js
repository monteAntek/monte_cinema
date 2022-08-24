export default {
  path: 'movies',
  children: [
    {
      name: 'Movies',
      path: '',
      component: () => import('@/views/MoviesPage.vue')
    },
    {
      name: 'Movie',
      path: ':movieId',
      component: () => import('@/views/MoviePage.vue')
    }
  ]
};
