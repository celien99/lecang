<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue/>
        <div class="content">
            <div class="home-main">
                <div class="main-drop">
                    <div class="title">
                        本土优质账号，中大件优惠快捷
                    </div>
                    <div class="common-header">
                        <h2>服务简介</h2>
                        <h3>客户把货物发到海外仓，仓库接收货物并清点上架到仓库系统。客户在系统下订单，当天的订单当天处理发出。</h3>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="common-header">
                    <h2>服务优势</h2>
                </div>
                <div class="superiority">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,} from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('一件代发')
const desc = ref('乐仓能为您做什么')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>

.main {
    padding-top: 42px;
    background: #3f4154;
    text-align: center;
}
.home-main {
    padding: 110px 0 ;
}
.advantage {
    padding: 110px 0 0;
    background: #484b61;
}
.home-main .main-drop {
    width: 1200px;
    background: url('@/assets/images/service/drop_icon_bg.png') no-repeat center;
    background-size: cover;
    margin: 0 auto 50px;
    padding: 180px 0 50px;
}
.home-main .main-drop .title {
    font-size: 44px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 66px;
    text-shadow: 0 8px 10px rgba(0, 0, 0, 0.69);
    margin-bottom: 136px;
}
.home-main .main-drop .common-header {
    width: 900px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    margin: 0 auto;
    padding: 30px 0 50px;
    box-sizing: border-box;
}
.home-main .main-drop .common-header h3 {
    width: 750px;
    font-size: 20px;
    font-family: SourceHanSansSC-Normal, SourceHanSansSC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 30px;
    letter-spacing: normal;
    margin: 0 auto;
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
.superiority {
    width: 1200px;
    margin: 0 auto;
}
.superiority ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 600px;
}
</style>