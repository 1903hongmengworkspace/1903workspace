module.exports={
	//配置开发服务
	devServer:{
		//配置代理
		proxy:{
			'/api':{
				target:'https://www.starbucks.com.cn',
				changeOrigin:true
			}
			
		}
	}
}
