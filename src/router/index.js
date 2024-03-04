import { createRouter, createWebHistory } from 'vue-router'
import Search from '@/views/Search.vue'
import Home from '@/views/Home.vue'



const routes= [
    { path: '/', component: Home,  },
    { path: '/Search', component: Search }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router
