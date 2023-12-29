<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue/>
        <div class="home-main">
            <div class="common-header">
                <h2>供应链服务</h2>
                <h3>我们提供国内代理采购服务，并与多家银行合作，为您提供优质的国内采购资金支持，并且超长账期，超低利率</h3>
            </div>
        </div>
        <div class="advantage">
            <div class="common-header">
                <h2>服务优势</h2>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref,} from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('供应链服务')
const desc = ref('乐仓能为您做什么')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>
.main {
    padding-top: 42px;
    background: #3f4154;
}
.home-main {
    padding: 110px 0 0;
}
.common-header {
    width: 1200px;
    text-align: center;
    margin: 0 auto 50px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
}
.common-header h2 {
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
    line-height: 25px;
}
.common-header h3 {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    margin: 17px auto 0;
}
.advantage {
    padding: 110px 0 ;
    background: #484b61;
}
.advantage > ul {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto 116px;
}
.advantage > ul li {
    width: 292px;
    height: 291px;
    cursor: pointer;
}
.advantage > ul li:first-child {
    background: url('@/assets/images/service/diya.png') no-repeat center;
    background-size: cover;
}
.advantage > ul li:first-child:hover {
    background: url('@/assets/images/service/diyaactive.png') no-repeat center;
}
.advantage > ul li:nth-of-type(2) {
    background: url('@/assets/images/service/qinianhualv.png') no-repeat center;
    background-size: cover;
}
.advantage > ul li:nth-of-type(2):hover {
    background: url('@/assets/images/service/qinianhualvactive.png') no-repeat center;
}
.advantage > ul li:nth-of-type(3) {
    background: url('@/assets/images/service/zhifudaikuan.png') no-repeat center;
    background-size: cover;
}
.advantage > ul li:nth-of-type(3):hover {
    background: url('@/assets/images/service/zhifudaikuanactive.png') no-repeat center;
}
.advantage > ul li:nth-of-type(4) {
    background: url('@/assets/images/service/rmb.png') no-repeat center;
    background-size: cover;
}
.advantage > ul li:nth-of-type(4):hover {
    background: url('@/assets/images/service/rmbactive.png') no-repeat center;
}
</style>