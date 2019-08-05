<template>
	<div class="stabucks">
		<p class="pic_one">
			<span><img src="../assets/lgimg/starbuckd.svg"/></span>
			<span><img src="../assets/lgimg/icon-wechat.svg"/></span>
			<span @click="souzzc"><img src="../assets/lgimg/icon-search.svg"/></span></p>
		<p class="pic_two"><span @click="feszzc"><img src="../assets/lgimg/icon-menu.svg"/></span></p>
		<div class="home-one-slide">
			<div class="imgbox">
			  		<swiper :options="swiperOption1" ref="mySwiper" @slideChangeTransitionEnd="slideChangeEnd">
					    <swiper-slide><img src="../assets/lgimg/lunbo01.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo02.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo03.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo04.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo05.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo06.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo07.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo08.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo09.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo10.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/lunbo11.jpg"/></swiper-slide>
			  		</swiper>
			</div>
		</div>
		<div class="home-three-slide">
			<div class="imgshow">
			  		<swiper :options="swiperOption2" ref="mySwiper" @slideChangeTransitionEnd="slideChangebottom" dir="rtl">
					    <swiper-slide><img src="../assets/lgimg/block1.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block2.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block8.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block4.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block5.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block7.jpg"/></swiper-slide>
					    <swiper-slide><img src="../assets/lgimg/block9.jpg"/></swiper-slide>
			  		</swiper>
			</div>
		</div>
		<p class="legal">© 2018 Starbucks Corporation.</p>
		<p class="legal">沪ICP备17003747号</p>
		<div class="souzzc" v-show="suozzc">
			<p><span class="iconfont" @click="showsou">&#xe623;</span></p>
			<p>
				<input placeholder="查找门店" />
			</p>
		</div>
		<div class="fenzzc" v-show="fenzzc">
			<p><span class="iconfont" @click="showfen">&#xe623;</span></p>
			<ul>
				<li>门店展示</li>
				<li>全部灵感</li>
				<li>关于我们</li>
				<li>English</li>
			</ul>
		</div>
	</div>
</template>

<script>
		export default{
		data(){
			return{
				swiperOption1:{
					loop : true,
					autoplay: {
					    delay: 2000
				   }
				},
				swiperOption2:{
					loop : true,
					autoplay: {
					    delay: 3000
				  },
				    slidesPerView: 3,
      				spaceBetween: 0,
					  pagination: {
					    el: '.swiper-pagination',
					    clickable: true,
					  }
				},
				suozzc:false,
				fenzzc:false
			}
		},
		mounted(){
			
		},
		methods:{
			slideChangeEnd(){
				
			},
			slideChangebottom(){
				
			},
			souzzc(){
				this.suozzc=!this.suozzc
			},
			showsou(){
				this.suozzc=!this.suozzc
			},
			feszzc(){
				this.fenzzc=!this.fenzzc
			},
			showfen(){
				this.fenzzc=!this.fenzzc
			}
			
		}
	}
</script>

<style scoped="scoped">
	.stabucks{
		width: 100%;
		height: auto;
		background: #f2f2f2;
		padding-bottom: 50px;
		z-index: 10;
	}
	.stabucks .souzzc{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,1);
		z-index: 10000;
		position: fixed;
		top: 0;
	}
	.stabucks .souzzc p{
		width: 80%;
		margin: auto;
		text-align: right;
		margin-top: 20px;
	}
	.stabucks .souzzc p span{
		font-size: 0.66rem;
		color: #AAAAAA;
	}
	.stabucks .souzzc p input{
		width: 100%;
		height: 30px;
		background: #AAAAAA;
		border: 1px #4D4D4D solid;
		outline: none;
		text-indent: 5px;
	}
	.stabucks .fenzzc{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,1);
		z-index: 10000;
		position: fixed;
		top: 0;
	}
	.stabucks .fenzzc ul{
		width: 100%;
		height: auto;
		margin-top: 10%;
	}
	.stabucks .fenzzc ul li{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
		color: white;
	}
	.stabucks .fenzzc p{
		width: 80%;
		margin: auto;
		text-align: right;
		margin-top: 20px;
	}
	.stabucks .fenzzc p span{
		font-size: 0.66rem;
		color: #AAAAAA;
	}
	.stabucks .pic_one{
		width:100%;
		text-align: center;
		line-height: 40px;
	}
	.stabucks .pic_one span:nth-of-type(1){
		width: 60%;
	}
	.stabucks .pic_one span:nth-of-type(2){
		width: 10%;
	}
	.stabucks .pic_one span:nth-of-type(3){
		width: 10%;
	}
	.stabucks .pic_one span{
		display: inline-block;
		width:100%;
		height: 40px;
		vertical-align: middle;
	}
	.stabucks .pic_one span img{
		width: 100%;
		height: 30px;
	}
	.stabucks .pic_one span:nth-of-type(2) img{
		height: 20px;
		
	}
	.stabucks .pic_one span:nth-of-type(3) img{
		height: 20px;
	}
	.stabucks .pic_two{
		width: 100%;
		margin: auto;
		text-align: right;
	}
	.stabucks .pic_two span img{
		width: 10%;
		height: 25px;
		margin-right: 10%;
	}
	.home-one-slide{
		width: 100%;
		height: auto;
	}
	.home-one-slide .imgbox{
		height: 13.33rem;
		width: 100%;
	}
	.home-one-slide>.imgbox .swiper-slide{
		height: 13.33rem;
	}

	.home-one-slide>div img{
		width: 100%;
		height: 13.33rem;
		position: absolute;
	}
	.home-three-slide{
		width: 100%;
		height: auto;
		margin-top: 20px;
	}
	.home-three-slide .imgshow{
		height: 3.33rem;
		width: 100%;
	}
	.home-three-slide>.imgshow .swiper-slide{
		height: 3.33rem;
	}
	.home-three-slide>div img{
		width: 100%;
		height: 3.33rem;
		position: absolute;
		padding-left: 0 !important;
	}
	.stabucks .legal{
		padding-left: 10%;
		line-height: 20px;
		color: rgba(0, 0, 0, 0.3);
	}
</style>