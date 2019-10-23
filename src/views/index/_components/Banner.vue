<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide"><img src="http://127.0.0.1:3000/img/banner/banner1.jpg" alt=""></div> -->
        <div class="swiper-slide">
          <img src="http://127.0.0.1:3000/img/banner/banner2.jpg" alt />
        </div>
        <!-- <div class="swiper-slide"><img src="http://127.0.0.1:3000/img/banner/banner3.jpg" alt=""></div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>

      <!-- 如果需要滚动条 -->
    </div>
    <!-- 搜索 -->
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  components: {},

  data() {
    return {
      banner: []
    };
  },
  mounted: function() {
    // this.$http.get('http://127.0.0.1:3000/bannerimg').then((res)=>{
    //        this.banner = res.data;
    //        console.log(this.banner[0])
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev"
    });
  }
};
</script>
<style>
.swiper-container {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
</style>

