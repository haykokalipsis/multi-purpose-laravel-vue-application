require('./bootstrap');

import Vue from 'vue';

// Main App
import MainApp from './MainApp.vue';

// Подключаем и пользуем наш Vue-router и Vuex
import { Form, HasError, AlertError} from 'vform';
import router from './router'
// import store from './store';

// Register these componenets globally
window.Form = Form;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

const app = new Vue({
    router: router,
    el: '#app',

    components: {
        MainApp
    }
});
