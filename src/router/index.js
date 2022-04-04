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
    props: true,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "solve",
        name: "Challenge/solve",
        props: true,
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
    path: "/auth",
    name: "Auth",
    component: () => import("../views/layouts/Auth.vue"),
    children: [
      {
        path: "login",
        name: "Auth/login",
        component: () => import("../views/auth/Login.vue"),
      },
      {
        path: "register",
        name: "Auth/register",
        component: () => import("../views/auth/Register.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404 not found page",
    component: () => import("../views/layouts/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
