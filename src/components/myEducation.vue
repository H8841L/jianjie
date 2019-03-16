<template>

  <div class="school">
    <p style='fontSize:18px;color: chocolate;'>高中时代</p>  
    <hightSchool></hightSchool>
    <p style='fontSize:18px;color: chocolate;'>university: <span>机械设计 大专</span></p>
    <university></university>
  </div>
</template>
<script>
import $ from 'jqeury'
import hightSchool from './school/hightSchool.vue'
import university from './school/university.vue'



export default {
  name: "myEducation",
  components:{
      hightSchool,
      university
  }
};
</script>
<style>
    .school{
        width: 900px;
        margin: auto;
    }
    .school p{
        line-height: 30px;
        margin: 20px 30px 20px 0;
        text-align: left;
    }
    .school .uni{
        display: none;
    }
</style>

