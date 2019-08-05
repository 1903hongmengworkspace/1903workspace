<template>
<div v-html="doc">{{doc}}</div>
</template>

<script>
	import axios from 'axios'
export default {
    data(){
        return{
         doc:''
        }
	},
	component:{

	},
    mounted(){
      
     axios.get("/menu")
        .then((res)=>{
          this.doc=res.data;
          console.log(res);
        })
    }
  
}
</script>


<style>
</style>