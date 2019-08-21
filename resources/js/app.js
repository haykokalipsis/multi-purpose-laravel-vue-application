require('./bootstrap');

import Vue from 'vue';

// Main App
import MainApp from './MainApp.vue';

// Подключаем и пользуем наш Vue-router и Vuex
// import { Form, HasError, AlertError} from 'vform';
import router from './router'
import filters from './filters';
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
});

import swal from 'sweetalert2';
window.swal = swal;

window.toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

// import store from './store';

// Register these componenets globally
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
