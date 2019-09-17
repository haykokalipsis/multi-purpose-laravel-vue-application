<template>
    <div class="content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <vue-progress-bar></vue-progress-bar>
    </div>
<!--    <router-view></router-view>-->
</template>

<script>
    // import Header from './components/Header';

    export default {
        name: 'main-app',
        components: {
            // 'app-header': Header
        }
    }
</script>

<style scoped>

</style>