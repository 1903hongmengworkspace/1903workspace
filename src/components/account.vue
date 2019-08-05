<template>
<div>
	<span class="nav-title">登录或创建一个新帐户 🌟</span>
	<router-link  class="nav-choose" to="/account/"   >登录</router-link>
	<router-link  class="nav-choose" to="/account/register" >注册</router-link>
	<a href="/account/starbucks-rewards" class="nav-choose" > 关于星享俱乐部</a>
	<router-view></router-view>
</div>
</template>

<script>
import axios from "axios"
export default{
      data(){
        return{
       
        }
	},
	component:{

  },
  methods:{
    
  }
}

</script>

<style>
.nav-title{
	display: block;
	font-size: 22px;
	color: rgba(0,0, 0,.87);
	margin-left: 20px;
   font-weight: 700; 
    margin-top:20px;
}
.nav-choose{
margin-left: 20px;
font-size: 18px;
color: rgba(0,0, 0,.56);
line-height: 40px;
cursor: pointer ;
font-weight: 300;
text-align: left;
padding-bottom: 8px;
}
.router-link-exact-active{
  border-bottom: 3px solid #00A862;	
  color: rgba(0,0, 0,.87);
  font-weight: 540;
}
</style>