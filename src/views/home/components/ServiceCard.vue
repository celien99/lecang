<template>
    <div class="content" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="service-bg"></div>
        <router-link :to="url"><div class="type">{{ title }}</div></router-link>
        <div class="desc">{{ desc }}</div>
    </div>
</template>
<script setup>
defineProps({
    url: String,
    title: String,
    desc: String,
    backgroundImage: String,
})
</script>
<style scoped>
.content {
    display: flex;
    flex: 1;
    overflow: hidden;
    transition: flex 0.5s;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.content:hover {
    flex: 1.5 1 auto;
}

.content .service-bg {
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: #000;
    opacity: 0.69;
}
.content:hover .service-bg {
    height: 45%;
}
.content .type {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 64px;
    margin: auto;
    width: max-content;
    padding: 16px 24px;
    color: #fff;
    border-radius: 5px;
    background: #e02329;
    font-size: 32px;
    transition: all 0.5s;
}
.content:hover .type {
    bottom: 50%;
}
.content .desc {
    position: absolute;
    color: #fff;
    width: 90%;
    left: 0;
    right: 0;
    top: 60%;
    margin: auto;
    opacity: 0;
    transition: all 0.5s;
    word-break: break-all;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
}
.content:hover .desc {
    opacity: 1;
}
</style>