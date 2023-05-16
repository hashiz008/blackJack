import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   // component: HomeView
  // },
  {
    path: '/bettingChips',
    name: 'bettingChips',
    component: () => import('../views/BettingChipsView.vue')
  },
  {
    path: '/blackJack',
    name: 'blackJack',
    component: () => import('../views/BlackJackView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
