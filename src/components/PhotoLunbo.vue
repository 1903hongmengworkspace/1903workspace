<template>
	<div class="home-one-slide">
		<div class="imgbox">
			<!--<div class="swiper-container">
			  	<div class="swiper-wrapper">-->
		  		<swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeEnd">
				    <swiper-slide><img src="../assets/lgimg/home-01.jpg"/></swiper-slide>
				    <swiper-slide><img src="../assets/lgimg/home-02.jpg"/></swiper-slide>
				    <swiper-slide><img src="../assets/lgimg/home-03.jpg"/></swiper-slide>
				    <swiper-slide><img src="../assets/lgimg/home-04.jpg"/></swiper-slide>
				    <swiper-slide><img src="../assets/lgimg/home-05.jpg"/></swiper-slide>
				    <swiper-slide><img src="../assets/lgimg/home-06.jpg"/></swiper-slide>
				    <div class="swiper-button-next" slot="button-next"></div>
				    
		  		</swiper>
		  		<!--</div>
			</div>-->
			
		</div>
		<!--<button class="iconfont home_btnr">&#xe63e;</button>-->
		<div class="word">广告</div>
	</div>
</template>

<script>
	import '../jquery-1.11.3.min.js'
	export default{
		data(){
			return{
				swiperOption:{
					loop : true,
					autoplay: {
					    delay: 2000,
//					    stopOnLastSlide: false,
//					    disableOnInteraction: true,
				    },
				    navigation: {
				        nextEl: '.swiper-button-next',
				    },
				}
			}
		},
		mounted(){
			
		},
		methods:{
			slideChangeEnd(){
				
			}
		}
	}
	
</script>

<style scoped="scoped">
	.home-one-slide{
		width: 100%;
		height: auto;
		position: relative;
	}
	.home-one-slide .imgbox{
		position: relative;
		height: 350px;
		width: 100%;
	}
	.home-one-slide .imgbox .swiper-slide{
		height: 350px;
	}
	.home-one-slide .swiper-button-next{
		color: white;
		outline: none;
	}
	.home-one-slide>div img{
		width: 100%;
		height: 350px;
		position: absolute;
	}
	.home-one-slide .word{
		width: 35px;
		height: 18px;
		text-align: center;
		line-height: 18px;
		font-size: 0.35rem;
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(0,0,0,.7);
		color: white;
		border-radius: 4px;
		z-index: 2;
	}
</style>