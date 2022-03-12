import { createApp } from 'vue'
import router from '@/router'
import CustomPackage from '@/main'
import App from '@/App.vue'

import '@/styles/index.scss'

createApp(App)
  .use(router)
  .use(CustomPackage)
  .mount('#app')
