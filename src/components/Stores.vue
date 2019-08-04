<template>
	<!--<div style="position: relative;">
	    <input readonly type="text" data-toggle="city-picker">
	</div>-->
	<div class="address">
		<div class="local">
			<span class="iconfont">&#xe62d;</span><span class="city">{{city}}</span><span class="iconfont">&#xe695;</span>
		</div>
		<maps @func="getmapdata($event)"></maps>
	</div>
</template>

<script>
	import '../jquery-1.11.3.min.js'
	import maps from './Map.vue'
//	import '../assets/js/city-picker.data.js'
//	import '../assets/js/city-picker.js'
	export default{
		data(){
			return{
				city:""
			}
		},
		components:{
			maps
		},
		methods:{
			getmapdata(data){
				this.city=data
			}
		}
	}
	
	
</script>

<style scoped="scoped">
	/*@import '../assets/css/city-picker.css'*/
	.address{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.address .local{
		text-align: left;
		line-height: 30px;
		padding-left: 15px;
		margin-top: 15px;
	}
	.address .local span{
		display: inline-block;
		vertical-align: middle;
		margin-right: 4px;
	}
	.address .local span:nth-of-type(1){
		font-size: 0.53rem;
		color: #00A862;
	}
	.address .local span:nth-of-type(2){
		font-size: 0.4rem;
	}
	
</style>