import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mitt from 'mitt';
import VueCookies from 'vue3-cookies'
import authStore from './store/auth';

const emitter = mitt();
const app = createApp(App);

app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});
app.use(authStore);


router.beforeEach((to, from, next) => {
    console.log(authStore.getters.getLoginStatus);
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //if the route requires auth, check if the user has logged in. If they have not, redirect to login, else, go with whatever they'd like to do
        if (! authStore.getters.getLoginStatus) {
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
         next();
        }
    });

app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
