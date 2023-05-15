import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  }
  ,
  {
    path: '/content',
    name: 'Content',
    component: () => import( '../views/board/BoardContent.vue')
  }
  ,
  {
    path: '/write',
    name: 'Write',
    component: () => import( '../views/board/BoardWrite.vue')
  }
  ,
  {
    path: '/edit',
    name: 'Edit',
    component: () => import( '../views/board/BoardEdit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router