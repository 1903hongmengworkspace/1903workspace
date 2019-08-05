<template>
    <div>
       <div class="main"> 
<form action="">
<input class="input" type="text"   placeholder="用户名或电子邮箱">
<input class="input" type="text"   placeholder="密码">
<div class="pws"><span class="iconfont" >&#xe624;</span></div>
 <div  class="next"><p class="box"></p> 下次自动登录  </div>
 <!-- <slide></slide> -->
 <!-- <div class="container-fluid">
	<div class="form-row">
		<div class="col-12">
			<div class="slidercaptcha card">
				<div class="card-header">
					<span>请完成安全验证</span>
				</div>
				<div class="card-body"><div id="captcha" style="position: relative; width: 280px; margin: 0px auto;"><canvas width="278" height="155"></canvas><i class="refreshIcon fa fa-redo"></i><canvas width="63" height="155" class="block" style="left: 0px;"></canvas><div class="sliderContainer"><div class="sliderbg"></div><div class="sliderMask" style="width: 0px;"><div class="slider" style="left: 0px;"><i class="fa fa-arrow-right sliderIcon"></i></div></div><span class="sliderText" data-text="再试一次">再试一次</span></div></div></div>
			</div>
		</div>
	</div>
</div> -->

<input  class="sigin" type="submit" name=" " id=" " placeholder="登录"> 
</form>
    </div>
    </div>
</template>


<script >

export default {
  data(){
      return{
          font:'&#xe624;'
      }
  }

}
// import "../jquery-1.11.3.js";
// import '../disks/longbow.slidercaptcha.js';
// $('#captcha').sliderCaptcha({
// 		repeatIcon: 'fa fa-redo',
// 		setSrc: function () {
// 			return 'http://images.sdgxgz.com/Pic' + Math.round(Math.random() * 136) + '.jpg';
// 		},
// 		onSuccess: function () {

// 			alert('验证通过!');
// 		}
// 	});

</script>
<style>
 /* @import url("../css/bootstrap.min.css");
@import url("https://cdn.bootcss.com/font-awesome/5.7.2/css/all.min.css");
@import url("../disk/slidercaptcha.css"); */ 

.pws{
    position: relative;
    left: 268px;
    width: 22px;
    top: -50px;
}
.main{
    width: 100%;
    background: rgba(0,0, 0, .04);
   padding-bottom:50px;
}
.main>form{
    padding-top:40px;
}
.input:focus{
     border-bottom: 1px solid #00A862;
}
.input{
    background: rgba(0,0,0,0);
    border: 0;
    border-bottom: 1px solid rgba(0,0, 0, .1);
    width: 272px;
    height: 50px;
    margin-left: 20px;
    outline: none;
    transition: all 1s;
    margin-bottom: 20px;
}

.input:focus::-webkit-input-placeholder{ /*WebKit browsers*/
color: rgba(0,0, 0, .56);
font-size: 16px;
position: relative;
top:-15px;
}
.input:focus::-ms-input-placeholder{ /*WebKit browsers*/
color: rgba(0,0, 0, .56);
font-size: 16px;
margin-top:-15px;
position: relative;
top:-15px;
}
.input:focus::-moz--input-placeholder{ /*WebKit browsers*/
color: rgba(0,0, 0, .56);
font-size: 16px;
margin-top:-15px;
position: relative;
top:-15px;
}
input::-webkit-input-placeholder{ /*WebKit browsers*/
color: rgba(0,0, 0, .56);
font-size: 16px;
 transition: all 1s;
}

input::-moz-input-placeholder{ /*Mozilla Firefox*/
color: rgba(0,0, 0, .56);
font-size: 16px;
 transition: all 1s;
}

input::-ms-input-placeholder{ /*Internet Explorer*/ 
color: rgba(0,0, 0, .56);
font-size: 16px;
 transition: all 1s;
}

.sigin{
    outline: none;
    width: 82px;
    height: 51px;
    border-radius:25%; 
    background: rgba(0, 0,0, 0.05);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
    margin-left: 230px;
    margin-top: 30px;
}
.next{
    display:inline-block;
    vertical-align: middle;
    font-size: 16px;
}
.box{
    width: 32px;
    height: 32px;
    border: 1px solid #00A862;
    border-radius: 15%;
    float: left;
    margin-left: 20px;
}
.container-fluid{
    padding: 0;
}
.slidercaptcha {
	margin: 0 auto;
	width: 314px;
	height: 286px;
	border-radius: 4px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.125);
	margin-top: 40px;
}

.slidercaptcha .card-body {
	padding: 0rem;
    margin-left:0;
}

.slidercaptcha canvas:first-child {
	border-radius: 4px;
	border: 1px solid #e6e8eb;
}

.slidercaptcha.card .card-header {
	background-image: none;
	background-color: rgba(0, 0, 0, 0.03);

}

.refreshIcon {
	top: -54px;
}







@font-face {
  font-family: 'iconfont';
  src: url('../assets/font/iconfont.eot');
  src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
      url(' ../assets/font/iconfont.woff2') format('woff2'),
      url( '../assets/font/iconfont.woff') format('woff'),
      url('../assets/font/iconfont.ttf') format('truetype'),
      url('../assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
