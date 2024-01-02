<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue />
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>服务简介</h2>
                    <h3>客户头程备货至海外仓，FBA库存不足时，可及时从海外仓发货补足库存；价格优惠，免仓期长，加快配送时效，节省物流成本</h3>
                </div>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>服务优势</h2>
                </div>
                <ul class="main-transport-content">
                    <li class="main-transport-content-list">
                        <div class="active">
                            <img src="@/assets/images/service/16_1.png" alt=""
                                style="padding: 6px 0;">
                        </div>
                        <div class="normal">
                            <img src="@/assets/images/service/16.png" alt=""
                                style="padding: 6px 0;">
                        </div>
                        <div class="title">库位自由优势</div>
                        <p>可解决FBA仓库低配额的限制以及旺季爆仓无法入库的问题</p>
                    </li>
                    <li class="main-transport-content-list">
                        <div class="active">
                            <img src="@/assets/images/service/18_1.png" alt="">
                        </div>
                        <div class="normal">
                            <img src="@/assets/images/service/18.png" alt="">
                        </div>
                        <div class="title">配送时效优势</div>
                        <p>轻松掌控国内发货到乐仓的良性节奏，保证尾程配送时效</p>
                    </li>
                    <li class="main-transport-content-list">
                        <div class="active">
                            <img src="@/assets/images/service/15_1.png" alt="">
                        </div>
                        <div class="normal">
                            <img src="@/assets/images/service/15.png" alt="">
                        </div>
                        <div class="title">风险可控优势</div>
                        <p>大大降低封店后货物被封的风险</p>
                    </li>
                    <li class="main-transport-content-list">
                        <div class="active">
                            <img src="@/assets/images/service/17_1.png" alt="">
                        </div>
                        <div class="normal">
                            <img src="@/assets/images/service/17.png" alt="">
                        </div>
                        <div class="title">售后服务优势</div>
                        <p>很好地控制滞销情况造成的FBA产品积压及仓储成本增加</p>
                    </li>
                </ul>
            </div>
            <div class="home-bottom">
                <div class="common-header">
                    <h2>合作服务商</h2>
                </div>
                <div class="main-cooperate-img">
                    <img v-scroll-reveal="{ class: 'is-visible'}" src="@/assets/images/service/pic_hezuo_loge.png" alt=""
                        class="animate-on-scroll">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('FBA转运')
const desc = ref('乐仓能为您做什么')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>
    .main-transport-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
    }
    .main-transport-content li {
        width: 595px;
        background: #fff;
        margin-bottom: 10px;
        padding: 56px 0;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    .main-transport-content li .active {
        display: none;
    }
    .main-transport-content li .title{
        font-size: 25px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #666666;
        line-height: 38px;
        margin: 26px 0 5px;
    }
    .main-transport-content li p{
        width: 425px;
        font-size: 20px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #999999;
        line-height: 30px;
        margin: 0 auto;
    }
    .main-transport-content li:hover {
        background-color: #E02329;
        color: #fff;
    }
    .main-transport-content li:hover .active {
        display: block;
    }
    .main-transport-content li:hover .normal {
        display: none;
    }
    .main-transport-content li:hover .title,
    .main-transport-content li:hover p {
        color: #fff;
    }
    .main-cooperate-img {
        width: 960px;
        margin: 0 auto 220px;
    }
    .main-cooperate-img img {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 2s ease-in-out, transform 2s ease-in-out;
    }
    .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
    }
</style>