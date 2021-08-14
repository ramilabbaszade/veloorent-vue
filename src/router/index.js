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
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: () => import('../pages/UserDetails')
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: () => import('../pages/PostDetails')
  },
  {
    path: '/post/new',
    name: 'PostCreateOrUpdate',
    component: () => import('../pages/PostCreateOrUpdate')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
