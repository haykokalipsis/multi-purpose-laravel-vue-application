import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard', component: require('./pages/Dashboard.vue').default,
    },
    {
        path: '/profile', component: require('./pages/Profile.vue').default
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;