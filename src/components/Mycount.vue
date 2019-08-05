<template>
<div>
	<span class="nav-title">登录或创建一个新帐户 🌟</span>
	<router-link  class="nav-choose" to="/mycount/sigin">登录</router-link>
	<router-link  class="nav-choose" to="/mycount/register">注册</router-link>
	<router-link   class="nav-choose" to="/mycount/starbucks-rewards"> 关于星享俱乐部</router-link>
	<router-view></router-view>
</div>
</template>

<script>
export default{

}
</script>

<style>
.nav-title{
	display: block;
	font-size: 22px;
	color: rgba(0,0, 0,.87);
	margin-left: 20px;
    font-weight: 700;
}
.nav-choose{
margin-left: 20px;
font-size: 16px;
color: rgba(0,0, 0,.56);
line-height: 40px;
cursor: pointer ;
font-weight: 300
}
</style>