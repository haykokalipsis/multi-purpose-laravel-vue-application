import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function lazyLoad(view){
    return() => import(`./pages/${view}.vue`)
}

const routes = [
    {
        path: '/dashboard',
        component: lazyLoad('Dashboard')
    },

    {
        path: '/profile',
        component: lazyLoad('Profile')
    },

    {
        path: '/users',
        component: lazyLoad('Users')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;