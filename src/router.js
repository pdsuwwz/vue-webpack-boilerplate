import { createRouter, createWebHistory } from 'vue-router'

const importModule = (filePath) => {
  return () => import(`@/${filePath}`)
}

const routes = [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/demo',
    component: importModule('views/example-page')
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
