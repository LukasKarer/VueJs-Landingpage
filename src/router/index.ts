import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('../views/ImpressumView.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('../views/DatenschutzView.vue')
  }
]

export function createRouterInstance() {
  return createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.BASE_URL),
    routes
  })
}
