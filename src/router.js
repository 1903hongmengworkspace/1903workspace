import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Stores from './components/Stores'
import Mycount from './components/Mycount'
import Menu from './components/Menu'
import More from './components/More'
Vue.use(VueRouter)
const router=new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:Home},
		{path:'/stores',component:Stores},
		{path:'/mycount',component:Mycount},
		{path:'/menu',component:Menu},
		{path:'/more',component:More}
	]
})
export default router
