module.exports = {
    devServer:{
        proxy:{
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
            }
        }
    }
}