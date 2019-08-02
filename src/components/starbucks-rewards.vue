<template>
    <div>
      <div class="main">
          <!-- <div class="header"><img src="../assets/header.jpg" alt=""></div>
          <section class="section1">
              <div class="sec1-img"><img src="../assets/01-new-rewards.png" alt=""></div>
              <div><ul>
                  <li class=""></li>
              </ul></div>
          </section>
      </div> -->{{html}}
      </div>
    </div>
</template>
<script>
import axios from "axios";
// import VueAxios from 'vue-axios'
export default {
    data(){
        return{
         html:''
        }
    },
    mounted(){
       let H=this.html
      this.axios.get("/menu")
        .then((res)=>{
          this.html=res.data;
          console.log(res);
        })
    }
    // console.log(this.axios.get("ajax/assets/search/menu-index-zh.json"))
}

</script>
<style>
.main{
    padding-bottom: 50px;
}
.header{
    width: 320px;
    height: 440px;
}
.header>img{
     width: 320px;
    height: 440px;
}
.sec1-img{
    width: 288px;
    height: 50px;
    margin: auto;
}
.sec1-img>img{
     width: 288px;
    height: 50px;
}
</style>
