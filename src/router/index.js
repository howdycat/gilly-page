import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Resume from '../components/resume/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
