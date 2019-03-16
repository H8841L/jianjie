<template>
  <swiper :options="swiperOption" refs="mySwiper">
    <swiper-slide>
      <img src="images/mySchool4.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/mySchool5.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/mySchool6.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <div class="swiper-paginatio" slot="pagination"></div>
  </swiper>
</template>
<script>


import { swiper, swiperSlide } from "vue-awesome-swiper";



export default {
  name: "university",
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
</style>

