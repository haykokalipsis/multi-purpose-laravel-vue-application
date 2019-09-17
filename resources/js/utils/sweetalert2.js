import Vue from 'vue';
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const swalPlugin = {};

swalPlugin.install = function(Vue){
    Vue.prototype.$swal = swal;

    Vue.prototype.$toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    });
};

Vue.use(swalPlugin);

