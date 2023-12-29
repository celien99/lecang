<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>亚马逊SPN官方推荐物流服务商</h2>
                    <div class="logo">
                        <img src="@/assets/images/client/yamaxun_logo.png" alt="">
                    </div>
                </div>
                <div class="content-desc">
                    <div class="left-image">
                        <img src="@/assets/images/client/pic_Pinterest.png" alt="">
                    </div>
                    <ul class="right-list">
                        <li>
                            <img src="@/assets/images/client/pic_guanfang.png" alt="">
                        </li>
                        <li>
                            <img src="@/assets/images/client/pic_kaopu.png" alt="">
                        </li>
                        <li>
                            <img src="@/assets/images/client/pic_qiangda.png" alt="">
                        </li>
                        <li>
                            <img src="@/assets/images/client/pic_gaoxiao.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'

const title = ref('亚马逊SPN')
const desc = ref('我们力求在LECANGS培养卓越的文化。我们的核心信念是持续改进的理念。正是这种对我们业务的态度转化为我们为客户提供的承诺、保证和对细节的关注。')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>
.common-header .logo {
    margin: 30px auto 0;
}
.content-desc {
    display: flex;
    justify-content: space-between;
    width: 1020px;
    margin: 0 auto;
}

.content-desc .left-image {
    width: 589px;
    margin-right: 80px;
}

.content-desc .right-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    flex: 1;
}
</style>