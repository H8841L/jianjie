<template>
  <div class="superS">
    <section class="kelai">
      <p>"佛光普照"</p>
      <kelai></kelai>
    </section>
    <section class="kuli">
      <p>"小学生"课堂开课了</p>
      <kuli></kuli>
    </section>
  </div>
</template>
<script>
import kuli from "./school/kuli.vue";
import kelai from "./school/kelai.vue";

export default {
  name: "otherThings",

  components: {
    kuli,
    kelai
  }
};
</script>
<style>
.superS {
  width: 640px;
  margin: auto;
}

.superS .kelai,
.kuli {
  clear: both;
  width: 100%;
  overflow: hidden;
  height: 476px;
}
.superS .kelai p,
.kuli p {
  font-size: 20px;
  color: rgb(221, 151, 20);
  margin: 20px 0 20px 0;
  line-height: 35px;
}
</style>
