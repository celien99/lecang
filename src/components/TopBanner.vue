<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="banner-img" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="title">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.banner-img {
  width: 100%;
  height: 320px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-img .title {
    margin: 115px auto 110px;
    text-align: center;
}
.banner-img h2{
    font-size: 50px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    line-height: 1;
}
.banner-img p {
    width: 1200px;
    font-size: 25px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #FFFFFF;
    letter-spacing: 5px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
}
</style>
