<template>
	<div class="home">
		<header>心情惬意，来杯咖啡吧 ☕</header>
		<photolunbo></photolunbo>
		<div class="tmall">
			<div><img src="../assets/lgimg/tmall-01.jpg" alt="" /></div>
			<div class="tm_top" @click="toDesign"><img src="../assets/lgimg/tmall-02.jpg" alt="" /></div>
			<div class="tm_top"><img src="../assets/lgimg/tmall-03.jpg" alt="" /></div>
		</div>
		<div class="club">
			<h2 class="title">星享俱乐部</h2>
			<p class="detail">开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。<a href="#">了解更多></a></p>
			<p class="club_btn">
				<span @click="resgis">注册</span>
				<span @click="login">登录</span>
			</p>
			<div class="logo_svg">
				<img src="../assets/lgimg/logo-01.svg" alt="" />
			</div>
		</div>
		<div class="choice">
			<h2 class="title">星巴克精选</h2>
			<p class="detail">在星巴克天猫旗舰店发现更多咖啡心意</a></p>	
			<div class="choice_svc">
				<li>
					<h3>会员星礼包</h3>
					<p>
						<span>星享卡新升级</span><br />
						<span>更多心意好礼</span>
					</p>
					<p class="know"><a href="#">了解更多></a></p>
					<div class="cho_img">
						<img src="../assets/lgimg/tmall-card-01.png" alt="" />
					</div>
				</li>
				<li>
					<h3>星礼卡</h3>
					<p>
						<span>用一份心礼</span><br />
						<span>让心意相随</span>
					</p>
					<p class="know"><a href="#">了解更多></a></p>
					<div class="cho_img">
						<img src="../assets/lgimg/tmall-card-02.png" alt="" />
					</div>
				</li>
				<li>
					<h3>电子产品券</h3>
					<p>
						<span>心意</span><br />
						<span>从这一杯开始</span>
					</p>
					<p class="know"><a href="#">了解更多></a></p>
					<div class="cho_img">
						<img src="../assets/lgimg/tmall-eticket.png" alt="" />
					</div>
				</li>
				<li>
					<h3>咖啡生活</h3>
					<p>
						<span>星巴克</span><br />
						<span>用心制作</span>
					</p>
					<p class="know"><a href="#">了解更多></a></p>
					<div class="cho_img">
						<img src="../assets/lgimg/tmall-reserve.png" alt="" />
					</div>
				</li>
			</div>
		</div>
		<div class="culture">
			<h2 class="title">1912 派克街 | 咖啡星讲堂</h2>
			<p class="detail">了解更多星巴克咖啡文化</p>
			<titlelunbo></titlelunbo>
		</div>
	</div>
	
</template>

<script>
	import photolunbo from './PhotoLunbo.vue'
	import titlelunbo from './TitleLunbo.vue'
	export default{
		components:{
			photolunbo,titlelunbo
		},
		methods:{
			toDesign(){
				this.$router.push({path:'design'});
			},
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
	.home{
		width: 100%;
		height: auto;
		padding-bottom: 50px;
	}
	.home header{
		line-height: 1.5rem;
		width: 100%;
		text-align: center;
		font-size: 0.53rem;
		font-weight: 700;
	}
	.home .tmall{
		width: 100%;
		height: auto;
		background: #f7f7f7;
		padding: 20px 0;
	}
	.home .tmall div{
		width: 92%;
		height: auto;
		padding-left: 4%;

	}
	.home .tmall img{
		width: 100%;
	}
	.home .tmall .tm_top{
		margin-top: 15px;
	}
	.home .club,.home .choice,.home .culture{
		width: 100%;
		height: auto;
		padding: 20px 0;
		text-align: center;
	}
	.home .title{
		font-size: 0.6rem;
		font-weight: 400;
	}
	.home .detail{
		padding: 10px 40px;
		color: rgba(0, 0, 0, 0.56);
		letter-spacing: 2px;
		font-size: 0.4rem;
		line-height: 25px;
	}
	.home .club p:nth-of-type(2){
		padding: 10px 0;
	}
	.home .club p a{
		color: #C2A661;
	}
	.home .club .club_btn span{
		display: inline-block;
		width: 70px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border: 1px solid #00A862;
		color: #00A862;
		border-radius: 25px;
	}
	.home .club .club_btn span:nth-of-type(1){
		margin-right: 20px;
	}
	.home .club .logo_svg{
		padding: 20px 0;
	}
	.home .choice{
		background: #f7f7f7;
	}
	.home .choice .choice_svc{
		width: 100%;
		height: auto;
		display: flex;
		justify-content:space-around;
		/*align-items: center;*/
		flex-wrap: wrap;
	}
	.home .choice .choice_svc li{
		width: 40%;
		height: 180px;
		margin-top: 40px;
		box-shadow: 1px 1px 1px 0 #CCCCCC;
		position: relative;
		background: white;
	}
	.home .choice .choice_svc li h3{
		margin: 55px 0 10px 0;
	}
	.home .choice .choice_svc li p{
		color: rgba(0, 0, 0, 0.56);
		letter-spacing: 1px;
		font-size: 0.4rem;
		line-height: 22px;
	}
	.home .choice .choice_svc li .know{
		line-height: 50px;
	}
	.home .choice .choice_svc li .know a{
		font-size: 0.3rem;
		color: #C2A661;
	}
	.home .choice .choice_svc li .cho_img{
		width: 80%;
		height: 73px;
		position: absolute;
		top: -35px;
		left: 10%;
		line-height: 73px;
	}
	.home .choice .choice_svc li .cho_img img{
		width: 100%;
		height: 73px;
	}
	.home .culture{
		background: #fdfdfd;
	}
</style>