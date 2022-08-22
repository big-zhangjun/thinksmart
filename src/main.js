import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/reset.css";

import  "./utils/mobile-adaption"

import Vant from 'vant';
import 'vant/lib/index.css';

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import "swiper/swiper-bundle.min.css";
// Vue.use(VueAwesomeSwiper)
//在已经创建好的Vue实例原型中创建一个EventBus
Vue.prototype.$EventBus = new Vue()   
//配置分页器
// import {Swiper as SwiperClass,Pagination} from 'swiper'; 
// SwiperClass.use([Pagination]);
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
