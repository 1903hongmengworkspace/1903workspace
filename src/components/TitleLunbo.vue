<template>
	<div class="home-two-slide">
		<swiper :options="swiperOption2" ref="mySwiper" @slideChangeTransitionEnd="slideChangeEnd">
		    <swiper-slide>
		    	<img src="../assets/lgimg/coffee-01.jpg"/>
		    	<div class="two_detail">咖啡的起源与培栽</div>
		    	<div class="two_name">咖啡知识</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../assets/lgimg/coffee-02.jpg"/>
		    	<div class="two_detail">咖啡调制</div>
		    	<div class="two_name">咖啡品鉴</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../assets/lgimg/coffee-03.jpg"/>
		    	<div class="two_detail">咖啡烘焙</div>
		    	<div class="two_name">咖啡知识</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../assets/lgimg/coffee-04.jpg"/>
		    	<div class="two_detail">手冲咖啡</div>
		    	<div class="two_name">咖啡品鉴</div>
		    </swiper-slide>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <div class="swiper-button-prev" slot="button-next"></div>
  		</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				swiperOption2:{
					navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev'
				    },
				    slidesPerView: 1,
      				spaceBetween: 20,
				}
			}
		},
		methods:{
			slideChangeEnd(){
				
			}
		}
		
	}
</script>

<style>
	.home-two-slide{
		width: 94%;
		height: 200px;
		padding-left: 3%;
		margin-top: 15px;
	}
	.home-two-slide .swiper-slide{
		background: #E7E1CD;
		height: 198px;
	}
	.home-two-slide .swiper-button-next,.home-two-slide .swiper-button-prev{
		color: white;
		outline: none;
		width: 25px;
		height: 25px;
	}
	.home-two-slide>div img{
		width: 100%;
		height: 160px;
	}
	.home-two-slide>div .two_detail{
		line-height: 40px;
		font-size: 0.46rem;
	}
	.home-two-slide>div .two_name{
		width: 80px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: #c2a661;
		color: white;
		position: absolute;
		top: 10px;
	}
</style>