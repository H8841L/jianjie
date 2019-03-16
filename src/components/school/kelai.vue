<template>
  <swiper :options="swiperOption" refs="mySwiper">
    <swiper-slide>
      <img src="images/kelai-1.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/kelai-2.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/kelai-3.jpg" height="476px" width= '100%'>
      <img src="images/kelai-4.jpg" height="476px" width= '100%'>
      <img src="images/kelai-5.jpg" height="476px" width= '100%'>
      <img src="images/kelai-6.jpg" height="476px" width= '100%'>
      <img src="images/kelai-7.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <div class="swiper-paginatio" slot="pagination"></div>
  </swiper>
</template>
<script>


import { swiper, swiperSlide } from "vue-awesome-swiper";



export default {
  name: "kelai",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
         swiperOption: {
             autoplay:true,
             loop:true,
             pagination:'swiper-pagination',
             paginationClickable:true,
             effect:'cube',
             onTransitionStart(swiper){
                 console.log(swiper)
             }
    } ,
    }
  },
  computed:{
      swiper(){
          return this.$refs.mySwiper.swiper
      }
  }
};
</script>
<style>
    .mySwiper img{
        
        height: 476px;
    }
</style>

