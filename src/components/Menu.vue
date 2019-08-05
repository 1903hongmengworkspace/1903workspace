<template>
<div v-html="doc">{{doc}}</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
         doc:''
        }
	},
	component:{

	},
    mounted(){
      this.axios.get("/menu")
        .then((res)=>{
           let menu=res.data;
           let num=menu.indexOf("<div class='primary-mobile'>");
          //  menu=menu.replace(` <!-- Javascript -->`,"<!--wzl Javascript -->");
           let nu=menu.indexOf("<!-- Javascript -->");
          let meu=menu.slice(num,nu)
           menu=menu.replace(meu,'')
            menu=menu.replace(`<link rel='stylesheet' href='/assets/styles.css?201908042133'>`,"<link rel='stylesheet' href='/assets/styles.css'>")
          this.doc=menu;
          console.log(menu)
 
        })
        
    }
  
}
 
</script>


<style>

</style>