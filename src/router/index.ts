
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: 'login'
        }
    },
    {
        path: "/test",
        name: 'test',
        component: () => import('@/views/test.vue'),
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,

})



export default router