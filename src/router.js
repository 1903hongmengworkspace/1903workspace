import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Stores from './components/Stores'
import account from './components/account'
import Menu from './components/Menu'
import More from './components/More'
import Sigin from './components/sigin'
import Register from './components/register'
import Starbucks from './components/starbucks-rewards';
import beverages from './components/beverages'
// import Slide from './components/slide'
const router=new VueRouter({
	mode:'history',
	routes:[
		{path:'/home',component:Home},
		{path:'/stores',component:Stores},
		{path:'/account',component:account ,children:[
			{path:'/account/',component:Sigin},
			{path:'/account/register',component:Register}
		]},
		{path:'/menu',component:Menu},
		{path:'/more',component:More}
	]
})
export default router
