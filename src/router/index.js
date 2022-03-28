import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Default", //change this to the dashboard or even create an about us page
    component: () => import("../views/Default.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/layouts/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
    redirect: {
      name: "Dashboard/stats",
    },
    children: [
      {
        path: "",
        name: "Dashboard/stats",
        component: () => import("../views/dashboard/DefaultPage.vue"),
      },
    ],
  },
  {
    path: "/challenge",
    name: "Challenge",
    component: () => import("../views/layouts/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "solve",
        name: "Challenge/solve",
        component: () => import("../views/dashboard/SolveChallenge.vue"),
      },
      {
        path: "progress",
        name: "Challenge/progress",
        component: () => import("../views/dashboard/ProgressChallenge.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
