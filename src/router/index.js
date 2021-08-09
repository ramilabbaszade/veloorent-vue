import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/me',
    name: 'About',
    component: () => import('../pages/Me.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
