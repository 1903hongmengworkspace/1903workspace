import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Stores from './components/Stores'
import Mycount from './components/Mycount'
import Menu from './components/Menu'
import More from './components/More'
import Design from './components/Design'

import Sigin from './components/sigin'
import Register from './components/register'
import Starbucks from './components/starbucks-rewards';
// import Slide from './components/slide'
Vue.use(VueRouter)
const router=new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:Home},
		{path:'/stores',component:Stores},
		{path:'/mycount/',component:Mycount ,children:[
			{path:'/mycount/sigin',component:Sigin},
			{path:'/mycount/register',component:Register},
			{path:'/mycount/starbucks-rewards',component:Starbucks}
		]},
		{path:'/menu',component:Menu},
		{path:'/more',component:More},
		{path:'/design',component:Design}
	]
})
export default router
