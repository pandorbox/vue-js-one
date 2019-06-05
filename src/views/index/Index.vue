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
     /* Safari for macOS & iOS */
    -webkit-backdrop-filter: blur(5px); 
    /* Google Chrome */
    backdrop-filter: blur(5px); 
    /* 设置背景半透明黑色 */
    background: rgba(175, 173, 173, 0.8); 
 }
 
.page::before{
	content:'';
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	filter:blur(10px) contrast(.9);
	z-index:-1;
  background:url('/assets/login_bg.jpg') 0 / cover fixed;
}
</style>
