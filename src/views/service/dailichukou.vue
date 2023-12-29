<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue/>
        <div class="content">
            <div class="home-main">
                <div class="common-header">
                    <h2>代理出口</h2>
                    <div class="title-desc">
                        我们提供合规的报关出口和收汇服务，以及高效便捷的退税服务，帮助您降低成本，提升业务效益。
                    </div>
                </div>
            </div>
            <div class="main-content">
                <ul class="content-list">
                    <li>
                        <div class="title">代理出口</div>
                        <p>我们提供标准化的通关、退税和物流等服务，以确保您的进出口流程顺利进行。同时，您可以享受到我们提供的出口优惠补贴，帮助您降低成本，提升出口效益。</p>
                    </li>
                    <li>
                        <div class="title">代办退税</div>
                        <p>我们提供专业、简便的代办退税服务，帮助您高效地解决退税问题。</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,} from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('代理出口')
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
}
.common-header h2 {
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
    line-height: 25px;
}
.common-header .title-desc {
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    margin: 17px auto 0;
}
.main-content {
    width: 100%;
    position: relative;
    overflow-x: hidden;
}
.main-content .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto 216px;
}
.content-list li {
    width: 595px;
    background: #52556f;
    padding: 49px 55px 74px;
    cursor: pointer;
}
.content-list li .title {
    text-align: center;
    font-size: 25px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #ffffff;
    line-height: 37px;
}
.content-list li p {
    width: 485px;
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    margin: 50px auto 0; 
    text-align: center;
}
.content-list li:hover {
    background: #CD3939;
}
</style>