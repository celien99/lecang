<template>
    <div class="box">
        <ul class="navbar">
            <li v-for="route in routes" :key="route.path">
                <router-link :to="route.path">
                    <img :src="isActive(route.path) ? route.activeImage : route.inactiveImge" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const routes = ref([
    { path: '/shipping', activeImage: 'src/assets/images/service/touchengactive.png', inactiveImge: 'src/assets/images/service/touchenhaiyun.png'},
    { path:'/overseas', activeImage: 'src/assets/images/service/icon_haiwaicangchuactive.png', inactiveImge: 'src/assets/images/service/icon_haiwaicangchu.png'},
    { path: '/drop-shipping', activeImage: 'src/assets/images/service/icon_yijiandaifactive.png', inactiveImge: 'src/assets/images/service/icon_yijiandaifa.png'},
    { path: '/export-agent', activeImage: 'src/assets/images/service/dailichukouactive.png', inactiveImge: 'src/assets/images/service/dailichukou.png'},
    { path: '/supplyChain', activeImage: 'src/assets/images/service/gongylianactive.png', inactiveImge: 'src/assets/images/service/gongylian.png'}
])
const isActive = (routePath) => {
    return route.path === routePath
}
</script>

<style scoped>
.box {
    background: #3f4154;
}
.box .navbar {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: 1200px;
    margin: 0 auto;
    padding: 0;
}
.box .navbar li {
    width: 216px;
    height: 175px;
    margin-right: 30px;
    cursor: pointer;
}

.box .navbar li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.box> .navbar li:nth-of-type(5) {
    margin-right: 0;
}
@media screen and (max-width: 750px) {
    .box {
        display: none;
    }
}
</style>