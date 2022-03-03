import { createWebHistory, createRouter } from "vue-router";
import test from "../views/Test.vue";
import DefaultV from '../views/Default.vue';
import Andrei from '../views/Andrei.vue';

const routes = [
    {
        path: '/',
        name: 'Default Vue Page',
        component: DefaultV
    },

    {
        path: '/test',
        name: 'Test',
        component: test
    },

    {
        path:'/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path:'/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
    },
    
    {
        path: '/andrei',
        name: 'Andrei',
        component: Andrei
    }  
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;