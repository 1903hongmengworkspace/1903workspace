<template>
    <div >
         <div class="reg">
         <h3><span>使用星巴克App进行注册</span></h3>
         <p class="des"><span>现在就下载</span><a href=""><span>星巴克App</span></a>
            <span>便可直接用手机进行注册，支付，查看消费记录及管理卡片。</span>
            </p>
            <div class="pic"> <img src="../assets/register.png" alt=""></div>
        </div> 
        <div class="dow"><img src="../assets/udp-starbucks-cn.png" alt=""></div>
    </div>
</template>
<script>
export default {
     
  
}
</script>
<style>
.dow{
    position: fixed;
    bottom: 60px;
    width: 160px;
    height: 52px;
    right: 16px;
}
.dow>img{
     width: 160px;
    height: 52px;
}
.reg{
    padding-bottom: 50px;
}
h3{
   margin-left: 20px
}
h3>span{
    font-size: 20px;
}
.des{
    margin-left:20px;
    font-size: 16px;
    width: 260px;
}
.pic{
    width: 193px;
    height: 409px;
    margin:auto;
}
.pic>img{
    width: 193px;
    height: 409px;
}
</style>
