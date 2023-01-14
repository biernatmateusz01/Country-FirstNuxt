<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :loop='true'
       autoplay: {
   delay: 2000,
 },
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide">
        <div class="swiper-slide-inside"></div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-slide-inside"></div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-slide-inside"></div>
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>

<style scoper>
.swiper-slide {
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  /* background-size: 100%; */
  background-image: url(https://cdn.pixabay.com/photo/2022/10/20/11/26/landscape-7534634_1280.jpg);
}
.swiper-slide:nth-child(2) {
  background-image: url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg);
}
.swiper-slide:nth-child(3) {
  background-image: url(https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg);
}
.swiper-slide-inside {
  width: 100%;
  height: 100%;
  background: rgba(204, 23, 23, 0.4);
}
</style>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide,  } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

</script>
