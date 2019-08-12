<template>
  <div id="app">
  	<div class="footer">
	  		<router-link to="/home">
			    <span><img src="./assets/navimg/icon-home.svg" alt=""></span>
	  			<span><img src="./assets/navimg/icon-home-active.svg" alt=""></span>
	  			<span>主页</span>
	  		</router-link>
	    	<router-link to="/stores">
	    		 <span><img src="./assets/navimg/icon-stores.svg" alt=""></span>
	  			<span><img src="./assets/navimg/icon-stores-active.svg" alt=""></span>
	    		<span>门店</span>
	    	</router-link>
	    	<router-link to='/account'>
	    		 <span><img src="./assets/navimg/icon-account.svg" alt=""></span>
	  			<span><img src="./assets/navimg/icon-account-active.svg" alt=""></span>
	    		<span>我的账户 </span>
	    	</router-link>
	    	<router-link to="/menu">
	    	    <span><img src="./assets/navimg/icon-menu.svg" ></span>
	  			<span><img src="./assets/navimg/icon-menu-active.svg" ></span>
	    		<span>菜单</span>
	    	</router-link>
	    	<router-link to="/more">
	    	    <span><img src="./assets/navimg/icon-more.svg" alt=""></span>
	  			<span><img src="./assets/navimg/icon-more-active.svg" alt=""></span>
	    		<span>更多</span>
	    	</router-link>
	  </div>
	  <router-view></router-view>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    
  },
  methods:{
	  click(){
		
       consloe.log(1)
	  }   
}
}
</script>

<style>

html,body{
	width: 100%;
	height: 100%;
}
body,h1,h2,h3,h4,h5,h6,li,ul,ol,p{
	padding: 0;
	margin: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
	color: black !important;
}
.footer{
	width: 100%;
	text-align: center;
	background: white;
	color: white;
	position: fixed;
	z-index: 1000;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.footer a{
	display: flex;
	flex-direction: column;
}
.footer a span{
	height: 25px;
	line-height: 25px;
	
}
.footer a span:nth-of-type(1){
	height: 21px;
	font-size: 0.65rem;
	padding-top: 4px;
	display: block;
}
.footer a span:nth-of-type(2){
	display: none;
}
.footer a span:nth-of-type(3){
	font-size: 0.35rem;
}
.footer .router-link-active{
	color: #00A862;
	
}
.footer .router-link-active>span:nth-of-type(2){
display: block;
}
.footer .router-link-active>span:nth-of-type(1){
display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;*/
}

 /*@font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.eot');
  src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./assets/font/iconfont.woff2') format('woff2'),
      url('./assets/font/iconfont.woff') format('woff'),
      url('./assets/font/iconfont.ttf') format('truetype'),
      url('./assets/font/iconfont.svg#iconfont') format('svg');
} */
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
 </style> 
