import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: () => import('@/views/Opiniones.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin.vue'),
  },
  {
    path: '/edit/:id',
    name: 'editOpinion',
    component: () => import('@/views/EditOpinion.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
