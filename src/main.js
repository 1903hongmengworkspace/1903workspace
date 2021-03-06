import Vue from 'vue'
import App from './App.vue'
//引入路由跳转
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
Vue.config.productionTip = false
//设置viewport 和  px转rem
import './flexble.js'
//引入全局的swiper
import VueAwesomeSwiper  from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//import axios from "axios"
//import vueAxios from "vue-axios"
//Vue.use(vueAxios,axios)
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
