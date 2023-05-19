import {createRouter, createWebHistory} from 'vue-router'
import PageHome from '@/views/PageHome.vue'

const routes = [
    {
        path: '/board/',
        name: 'PageHome',
        component: PageHome
    }
    ,
    {
        path: '/board/boardContent',
        name: 'Content',
        component: () => import( '../views/board/BoardContent.vue')
    }
    ,
    {
        path: '/board/boardWrite',
        name: 'Write',
        component: () => import( '../views/board/BoardWrite.vue')
    }
    ,
    {
        path: '/board/boardEdit',
        name: 'Edit',
        component: () => import( '../views/board/BoardEdit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router