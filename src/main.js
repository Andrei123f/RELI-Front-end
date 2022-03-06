import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mitt from 'mitt';
import store from './store/index';

const emitter = mitt();
const app = createApp(App);
app.use(store);

router.beforeEach((to, from, next) => {
    let userLoggedIn = store.getters['authStore/getLoginStatus'];
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //if the route requires auth, check if the user has logged in. If they have not, redirect to login, else, go with whatever they'd like to do
        if (! userLoggedIn) {
            next({ name: 'Login' }).catch(err => {});
        } else {
            next().catch(err => {});
        }
    } else {
            if(to.matched.some(record => record.path == '/')){
                if(userLoggedIn){
                    next({name: 'Dashboard'}).catch(err => {});
                }else{
                    next({ name: 'Login' }).catch(err => {}); //for the time being we redirect to login
                }
            } else{
                next().catch(err => {});
            }
        }
    });

app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
