<template>
  <div class="page container">
    <Banner />
    <List />
  </div>
</template>
<script>
// @ is an alias to /src
import Banner from './_comp/Banner.vue'
import List from './_comp/List.vue'

export default {
  components: {
    Banner,
    List
  },
  data(){
    return{
       banner:[],
       a:"123"
    }
  },
 
}
</script>

<style>
/* 顶部导航 */
 .page{
   border: 1px solid #ccc;
 }
 .page::before{
   background:url(http://127.0.0.1:3000/img/bg/bgone.jpg) 0 / cover fixed;
	content:'';
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	filter:blur(10px) contrast(.8);
	z-index:-1;
}
</style>
