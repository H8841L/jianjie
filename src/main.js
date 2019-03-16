 import Vue from 'vue';
 import App from "./App.vue";
 import VueRouter from 'vue-router';
 import routes from './router/router.js';
 import './common/reset.css'
 import 'swiper/dist/css/swiper.css'
 import VueAwesomeSwiper from "vue-awesome-swiper";


 Vue.use(VueAwesomeSwiper)


Vue.use(VueRouter);



const router = new VueRouter(routes)
 
 new Vue ({
     el:'.app',
     router,
     render:h => h(App)
 })