<template>
    <top-banner :title="title" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>乐歌海外仓规模优势</h2>
                </div>
                <div class="home-map">
                    <p>"乐歌是上市公司，境外合规性强，基本选用几十万尺到百万尺以上的大仓。不使用农场仓、车库仓、小规模仓。"</p>
                    <img src="@/assets/images/about/pic_advantage.png" alt="" />
                </div>
                <img src="@/assets/images/about/youshi3.png" alt="" class="advantage-table"/>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>乐歌海外仓成本优势</h2>
                    <h3>乐歌海外仓发货包裹量大，价格折扣高</h3>
                </div>
                <img src="@/assets/images/about/youshi4.png" alt="" class="youshi4">
            </div>
            <div class="home-top">
                <div class="common-header">
                    <h2>乐歌海外仓重资产优势</h2>
                    <h3>"乐歌上市公司，国内资产大，合规性强，抗经济波动性强。相比轻资产公司，卖家把几十万、上百万、上千万的货放在乐歌，可靠。"</h3>
                </div>
                <div class="context">
                    <h1>上市公司背景</h1>
                    <p></p>
                </div>
                <img src="@/assets/images/about/youshi5.png" alt="" class="youshi5">
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>乐歌海外仓战略优势</h2>
                    <h3>"乐歌不做杂货，只做一个品类。不会与客户竞争，不会跟卖卖家卖得好的货。"</h3>
                </div>
                <div class="compete">
                    <img loading="lazy" src="@/assets/images/about/youshi6.png" alt="" class="youshi6"/>
                    <h1>VS</h1>
                    <img loading="lazy" src="@/assets/images/about/youshi7.png" alt="" class="youshi7"/>
                </div>
            </div>
            <div class="home-top">
                <div class="common-header">
                    <h2>乐歌海外仓运营优势</h2>
                    <h3>"13年跨境电商&11年海外仓运营经验。乐仓的母公司乐歌就是专业合规卖家，有丰富的经验。多方面可向乐歌学习。乐歌董事长、创始人、首席产品经理、首席营销官，开立项乐宏私董会，手把手帮助卖家，教卖家如何做品牌。"</h3>
                </div>
                <div class="pic">
                    <img src="@/assets/images/about/youshi8.png">
                    <img src="@/assets/images/about/youshi9.png">
                    <img src="@/assets/images/about/youshi10.png">
                </div>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>乐歌海外仓上下游整合优势</h2>
                    <h3>"乐歌三年规划： 进一步整合货代，提升海运运输和目的国服务的议价权 同时乐歌造了自己的船，一条龙为卖家服务"</h3>
                </div>
                <img loading="lazy" src="@/assets/images/about/youshi11.png" alt="" class="youshi4"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'

const title = ref('为什么要选择乐仓')
const bannerUrl = ref('src/assets/images/about/youshi0.png')
</script>
<style scoped>
    .home-top .home-map {
        position: relative;
        background: url(@/assets/images/about/youshiMap.png) no-repeat center;
        background-size: cover;
        width: 1671px;
        height: 594px;
        margin: 33px auto 0;
    }
    .home-map p {
        width: 1025px;
        font-size: 20px;
        font-family: SourceHanSansCN, SourceHanSansCN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 30px;
        margin: auto;
        padding-top: 19px;
    }
    .home-map img {
        position: absolute;
        left: 396px;
        bottom: -50px;
        width: 885px;
        height: 540px;
    }
    .home-top .advantage-table {
        width: 1200px;
        height: 351px;
        margin: 131px auto 0;
    }
    .youshi4 {
        width: 1200px;
        height: 700px;
        margin: 60px auto 0;
    }
    .context {
        width: 329px;
        margin: 70px auto 0;
        position: relative;
    }
    .context h1 {
        font-size: 48px;
        font-family: SourceHanSansCN, SourceHanSansCN;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 48px;
        position: relative;
        z-index: 100;
    }
    .context p {
        position: absolute;
        bottom: -15px;
        width: 329px;
        height: 49px;
        background: linear-gradient(180deg, rgba(190,58,59,0) 0%, #BD3A3B 100%);
    }
    .youshi5 {
        width: 1200px;
        margin: 71px auto 0;
    }
    .compete {
        margin: 50px auto 0;
        width: 986px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .compete h1 {
        width: 95px;
        font-size: 72px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 72px;
        margin: 38px auto;
    }
    .compete img {
        width: 986px;
        height: 318px;
    }
    .pic {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 70px auto 0;
    }
    .pic img {
        width: 350px;
        height: 675px;
    }
</style>