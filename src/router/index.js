import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Resume from '../components/resume/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        props(route) {
            return { animate: route.query.animate }
        }
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume
    }
]
const router = createRouter({
    history: createWebHistory('/gilly/'),
    routes
})
export default router
