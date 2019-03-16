<template>
  <swiper :options="swiperOption" refs="mySwiper">
    <swiper-slide>
      <img src="images/kuli-1.jpg"  height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/kuli-2.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/kuli-3.jpg" height="476px" width= '100%'>
      <img src="images/kuli-4.jpg" height="476px" width= '100%'>
      <img src="images/kuli-5.jpg" height="476px" width= '100%'>
      <img src="images/kuli-6.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <div class="swiper-paginatio" slot="pagination"></div>
  </swiper>
</template>
<script>


import { swiper, swiperSlide } from "vue-awesome-swiper";



export default {
  name: "kuli",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
         swiperOption: {
             autoplay:true,
             delay:4000,
             loop:true,
             pagination:'swiper-pagination',
             
             
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

