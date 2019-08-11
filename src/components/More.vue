<template>
	<div class="overlay">
		<header>
			<img src="../assets/lgimg/logo-02.svg"/>
			<!--<span class="iconfont">&#xe623;</span>-->
		</header>
		<div class="nav1">
			<p>门店</p>
			<p>星享俱乐部</p>
			<p>菜单</p>
		</div>
		<div class="nav2">
			<p>星巴克移动应用</p>
			<p>星礼卡</p>
			<p>星巴克臻选™</p>
			<p>啡快™ － 在线点 到店取</p>
			<p>专星送™</p>
			<p>咖啡星讲堂</p>
			<p>上海烘焙工坊</p>
			<p>关于星巴克</p>
			<p>帮助中心</p>
		</div>
		<div class="nav3">
			<span class="iconfont">&#xe642;</span><span @click="login">登录</span><span @click="resgis">注册</span>
		</div>
		<div class="nav4">
			<p><span>English</span><span>隐私政策</span><span>使用条款</span></p>
			<p><span><img src="../assets/lgimg/icpicon.png"/></span><span>沪公网安备 31010402000318号</span>
				<span>沪ICP备17003747号</span>
			</p>
			<p></p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			resgis(){
				this.$router.push({path:'/mycount/register'});
			},
			login(){
				this.$router.push({path:'/mycount/sigin'});
			},
		}
	}
</script>

<style scoped="scoped">
	.overlay{
		width: 100%;
		height: auto;
		padding-bottom: 50px;
	}
	.overlay header{
		margin-top: 20px;
	}
	.overlay header img,.overlay header span{
		vertical-align: middle;
	}
	.overlay header img{
		width: 36px;
		height: 36px;
		margin-left: 5%;
	}
	.overlay header span{
		font-size: 20px;
		margin-left: 72%;
	}
	.overlay .nav1{
		width: 90%;
		margin-left: 5%;
		padding-top: 5%;
		padding-bottom: 5%;
		border-bottom: 1px #666666 solid;
	}
	.overlay .nav1 p{
		font-size: 0.6rem;
		line-height: 35px;
		font-weight: 700;
	}
	.overlay .nav2{
		width: 90%;
		margin-left: 5%;
		padding-top: 5%;
		padding-bottom: 5%;
		border-bottom: 1px #666666 solid;
	}
	.overlay .nav2 p{
		font-size: 0.6rem;
		line-height: 35px;
		font-weight: 700;
	}
	.overlay .nav3{
		width: 90%;
		margin-left: 5%;
		height: 40px;
		margin-top: 7%;
		margin-bottom: 7%;
	}
	.overlay .nav3 span{
		display: inline-block;
		vertical-align: middle;
	}
	.overlay .nav3 span:nth-of-type(1){
		font-size: 0.66rem;
		
	}
	.overlay .nav3 span:nth-of-type(2){
		font-size: 0.53rem;
		color: #42B983;
		margin-left: 5px;
		
	}
	.overlay .nav3 span:nth-of-type(3){
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 0.53rem;
		color: #42B983;
		border: 1px #42B983 solid;
		border-radius: 48px;
		margin-left: 50px;
	}
	.overlay .nav4{
		width: 90%;
		padding-left: 5%;
		height: auto;
		margin: 5% 0;
	}
	.overlay .nav4 p{
		line-height: 20px;
		color: rgba(0, 0, 0, 0.38);
	}
	.overlay .nav4 p img{
		width: 15px;
		height: 15px;
	}
	.overlay .nav4 p img,.overlay .nav4 p span{
		display: inline-block;
		vertical-align: middle;
	}
	.overlay .nav4 p:nth-of-type(1) span{
		font-size: 0.53rem;
		margin-right: 5%;
	}
	.overlay .nav4 p:nth-of-type(2) span{
		font-size: 0.4rem;
	}
</style>