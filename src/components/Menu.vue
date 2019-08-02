<template>
<div v-html="doc">{{doc}}</div>
</template>

<script>
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
          this.doc=res.data;
          console.log(res);
        })
    }
  
}
</script>


<style>
</style>