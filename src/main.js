import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
Vue.config.productionTip = false
import './flexble.js'

import axios from "axios"
import vueAxios from "vue-axios"
Vue.use(vueAxios,axios)
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
