import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES_NAMES, ROUTES_PATHS } from '@/router/routesNames'

export default createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      name: ROUTES_NAMES.HOME,
      path: ROUTES_PATHS.HOME,
      component: () => import('@/views/Home/Home')
    },
    {
      name: ROUTES_NAMES.BREED,
      path: ROUTES_PATHS.BREED,
      component: () => import('@/views/BreedPage/BreedPage')
    },
    {
      name: ROUTES_NAMES.FAVORITES,
      path: ROUTES_PATHS.FAVORITES,
      component: () => import('@/views/Favorites/Favorites')
    }
  ]
})
