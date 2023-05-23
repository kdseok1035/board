import {createRouter, createWebHistory} from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import Content from '@/views/board/BoardContent.vue'
import Write from '@/views/board/BoardWrite.vue'
import Edit from '@/views/board/BoardEdit.vue'

const routes = [
    {
        path: '/',
        name: 'PageHome',
        component: PageHome
    }
    ,
    {
        path: '/boardContent',
        name: 'Content',
        component: Content
    }
    ,
    {
        path: '/boardWrite',
        name: 'Write',
        component: Write
    }
    ,
    {
        path: '/boardEdit',
        name: 'Edit',
        component: Edit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router