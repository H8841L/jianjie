<template>
  <swiper :options="swiperOption" refs="mySwiper">
    <swiper-slide>
      <img src="images/mySchool1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="images/mySchool2.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <swiper-slide>
      <img src="images/mySchool3.jpg" height="476px" width= '100%'>
    </swiper-slide>
    <div class="swiper-paginatio" slot="pagination"></div>
  </swiper>
</template>
<script>


import { swiper, swiperSlide } from "vue-awesome-swiper";



export default {
  name: "hightSchool",
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
    .mySwiper img{
        
        height: 476px;
    }
</style>

