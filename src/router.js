import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/demo',
    component: () => import('@/views/example-page.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/components/404.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
