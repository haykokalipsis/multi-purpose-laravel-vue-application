require('./bootstrap');

import Vue from 'vue';

// Main App
import MainApp from './MainApp.vue';

// Подключаем и пользуем наш Vue-router, Vuex, фильтры и другие плагины
import router from './router'
import filters from './filters';
import './utils/sweetalert2';
import './utils/vue-progressbar';
// import store from './store';

window.EventBus = new Vue();



// Register these componenets globally
// import { Form, HasError, AlertError} from 'vform';
// window.Form = Form;
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// Vue.component(HasError.name, HasError);
// Vue.component(AlertError.name, AlertError);

const app = new Vue({
    router: router,
    el: '#app',

    components: {
        MainApp
    }
});
