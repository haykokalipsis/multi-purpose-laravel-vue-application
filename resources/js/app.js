require('./bootstrap');

import Vue from 'vue';

// Main App
import MainApp from './MainApp.vue';

// Подключаем и пользуем наш Vue-router и Vuex
import router from './router'
// import store from './store';

const app = new Vue({
    router: router,
    el: '#app',

    components: {
        MainApp
    }
});
