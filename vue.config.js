
module.exports={
	//配置开发服务
	devServer:{
		//配置代理
		proxy:{
			'/api':{
				target:'https://www.starbucks.com.cn',
				changeOrigin:true
			},
			"/assets":{
                target:"https://www.starbucks.com.cn/",
                changeOrigin: true  
            },
            "/account":{
                target:"https://www.starbucks.com.cn/",
                changeOrigin: true  
            },
            '/menu':{
                target:"https://www.starbucks.com.cn/",
                changeOrigin: true  
            },
           '/images':{
            target:"https://www.starbucks.com.cn/",
            changeOrigin: true  
           },
            '/api':{
                target:"https://www.starbucks.com.cn/",
                  changeOrigin: true ,
                  ws:true,
                  pathRewrite:{
                      '^api':''
                  } 
            },
            '/open':{
                target:"https://www.wx.qq.com/",
                changeOrigin: true  
            },
            '/public':{
                target:"https://dfp.arm.starbucks.com.cn/",
                changeOrigin: true  
            },
            '/union_sp_cap.css':{
                target:"https://captcha.guard.qcloud.com/",
                changeOrigin: true  
            },
            '/public':{
                target:"https://captcha.gtimg.com/",
                changeOrigin: true  
            },
            '/open':{
                target:"https://captcha.gtimg.com/",
                changeOrigin: true  
            }
			
		}
	}
}
