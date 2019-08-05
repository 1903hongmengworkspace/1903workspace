<template>
	<div class="map_show">
		<div class="search">
			<input id="tipinput" type="text" placeholder="输入地址查找门店" /><span class="iconfont">&#xe64d;</span><span @click="childe">筛选</span>
		</div>
		<div id="container" @touchend="touchend"></div>
		<div class="mapdata">
			<div class="mapdata_nav" v-for="v,i in showdata" :key="i">
				<p><span>{{v.name}}</span><img src="../assets/lgimg/delivery.png"/></p>
				<p><span>{{v.address.city}}</span><span>{{v.address.streetAddressLine1}}</span><span>{{v.address.streetAddressLine2}}</span><span>{{v.address.streetAddressLine3}}</span></p>
				<p>2.9km</p>
				<div class="grey"><img src="../assets/lgimg/icon-pin-solid-grey.svg"/><span class="gref_word">{{i+1}}</span></div>
				<div class="gree"><img src="../assets/lgimg/icon-info-green.svg"/></div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import MapLoader from '@/assets/js/AMap.js'
	export default {
		name: 'test',
		data() {
			return {
				show: false,
				map: null,
				tude:[116.397428, 39.90923],
				zooms:0,
				radius:3400,
				local:"",
				showdata:[]
			}
		},
		mounted() {
			let that = this
			MapLoader().then(AMap => {
				console.log('地图加载成功')
				that.map = new AMap.Map('container', {
					center: [116.397428, 39.90923],
					zoom: 15,
					resizeEnable: true
				})
				//地点查询
				var autoOptions = {
					input: "tipinput"
				};
				var auto = new AMap.Autocomplete(autoOptions);
				var placeSearch = new AMap.PlaceSearch({
					map: that.map
				});
				
				//地图移动事件
				var logMapinfo = function() {
					var zoom = that.map.getZoom(); //获取当前地图级别
					var center = that.map.getCenter(); //获取当前地图级别
					that.tude = center;
					that.zooms = zoom.toString();		
				};
				//构造地点查询类
				AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
				function select(e) {
					placeSearch.setCity(e.poi.adcode);
					placeSearch.search(e.poi.name); //关键字查询查询
				}
				logMapinfo();
	
				function mapMove() {
					logMapinfo();
				}
				that.map.on('mapmove', mapMove);
				//获取当前位置
				var mapObj = new AMap.Map('iCenter');
				mapObj.plugin(['AMap.Geolocation', 'AMap.ToolBar'], function() {
					var geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, // 是否使用高精度定位，默认:true
						timeout: 10000, // 超过10秒后停止定位，默认：无穷大
						maximumAge: 0, // 定位结果缓存0毫秒，默认：0
						convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
						showButton: true, // 显示定位按钮，默认：true
						buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
						buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
						showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
						panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
						zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
					});
					mapObj.addControl(geolocation);
					//定位到当前位置
					that.map.addControl(geolocation);
					//解析地址
					geolocation.getCurrentPosition();
					AMap.event.addListener(geolocation, 'complete', onComplete); // 返回定位信息
					AMap.event.addListener(geolocation, 'error', onError); // 返回定位出错信息
					that.map.addControl(new AMap.ToolBar({
						// 简易缩放模式，默认为 false
						liteStyle: true
					}));
					
				});
				function onComplete(obj, result) {
					console.log(2)
					that.local=obj.addressComponent.province + " " + obj.addressComponent.district
					that.$emit("func",that.local)
					axios.get("/api/stores/nearby?lat="+that.tude.lat+"&lon="+that.tude.lng+"&limit=30&locale=ZH&features=&radius=3407").then(res=>{
						that.showdata=res.data.data
					})
				}
	
				function onError(obj, result) {
					alert(obj.info + '--' + obj.message);
				}

				
			}, e => {
				console.log('地图加载失败', e)
			})
			//获取数据
			
		},
		methods:{
			touchend(){
				axios.get("/api/stores/nearby?lat="+this.tude.lat+"&lon="+this.tude.lng+"&limit=30&locale=ZH&features=&radius=3407").then(res=>{
					this.showdata=res.data.data
				})	
			},
			childe(){
				alert("等待解决！！")
			}
			
		}
	}
</script>

<style>
	.map_show{
		width: 100%;
		height: auto;
	}
	.map_show .search{
		padding-left: 17px;
	}
	.map_show .search input{
		outline: none;
		width: 70%;
		height: 30px;
		border: 0;
		border-bottom: 0.5px solid #00A862;
		padding-right: 8%;
		font-size: 0.46rem;
		color: #404040;
	}
	.map_show .search input::-webkit-input-placeholder {
     	color: red;
	}
	.map_show .search span{
		display: inline-block;
		vertical-align: middle;
	}
	.map_show .search span:nth-of-type(1){
		font-size: 0.66rem;
		position: relative;
		right: 7%;
		color: #969896;
	}
	.map_show .search span:nth-of-type(2){
		font-size: 0.53rem;
		color: #00A862;
		position: relative;
		right: 4%;
	}
	.map_show #container{
		width: 100%;
		height: 250px;
		margin-top: 10px;
	}
	.map_show .mapdata{
		width: 100%;
		height: 300px;
		overflow-y: scroll;
		position: fixed;
	}
	.map_show .mapdata .mapdata_nav{
		width: 100%;
		height: auto;
		position: relative;
		border-bottom: 1px #969896 solid;
		padding: 15px 0;
	}
	.map_show .mapdata .mapdata_nav p{
		width: 64%;
		font-size: 14px;
		margin: auto;
		color: rgba(0, 0, 0, 0.56);
		letter-spacing: 1px;
		line-height: 25px;
	}
	.map_show .mapdata .mapdata_nav p:nth-of-type(1){
		color: black;
		font-weight: 700;
	}
	.map_show .mapdata .mapdata_nav p img{
		width: 28px;
	}
	.map_show .mapdata .mapdata_nav p span{
		margin-right: 4px;
	}
	.map_show .mapdata .mapdata_nav p:nth-of-type(1) span,.map_show .mapdata .mapdata_nav p:nth-of-type(1) img{
		display: inline-block;
		vertical-align: middle;
	}
	.map_show .mapdata .mapdata_nav .gree{
		width: 18%;
		height: 22px;
		text-align: center;
		position: absolute;
		top: 50%;
		margin-top: -11px;
		right: 0;
	}
	.map_show .mapdata .mapdata_nav .gree img{
		width: 22px;
		height: 22px;
	}
	.map_show .mapdata .mapdata_nav .grey{
		width: 18%;
		height: 32px;
		text-align: center;
		position: absolute;
		top: 50%;
		margin-top: -16px;
		left: 0;
	}
	.map_show .mapdata .mapdata_nav .grey .gref_word{
		display: block;
		width: 100%;
		height: 32px;
		font-size: 0.4rem;
		color: white;
		text-align: center;
		line-height: 32px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.map_show .mapdata .mapdata_nav .grey img{
		width: 24px;
		height: 32px;
	}
</style>