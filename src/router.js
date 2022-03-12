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
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})
