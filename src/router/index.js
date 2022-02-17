import { createRouter, createWebHashHistory } from 'vue-router'
import favorites from '@/views/favorites'
import main from '@/views/main'
const routes = [
  { path: '/favorites', component: favorites },
  { path: '/', component: main }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
