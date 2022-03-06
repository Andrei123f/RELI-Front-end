import { createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Default', //change this to the dashboard or even create an about us page
        component: () => import('../views/Default.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/layouts/Dashboard.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'Dashboard/default_page',
                component: () => import('../views/dashboard/DefaultPage.vue'), 
            }
        ]

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
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;