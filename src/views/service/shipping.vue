<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue />
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>一站式解决方案</h2>
                    <h3>指由乐仓安排，为工厂安排海运订舱，随后将货物从工厂安排拖车到码头，安排拖车报关截单事宜，最终成功上船；直到海运到目的港之前，安排提单电放，将货权放给目的港的全部流程。</h3>
                </div>
                <ul class="solution-list">
                    <li class="solution">
                        <div class="desc">
                            <span>更优势的海运费，尾程清关拖车费<br>提供整柜订舱，端到端的服务</span>
                        </div>
                        <p class="title">整柜(FCL)</p>
                    </li>
                    <li class="solution">
                        <div class="desc">
                            <span>将海运服务与报关服务相结合确保为您的海运货物高效办理通关手续与我们的Trusted Advisor专家合作计算税费、正确分类商品并确保合规</span>
                        </div>
                        <p class="title">报关和贸易合规</p>
                    </li>
                    <li class="solution">
                        <div class="desc">
                            <span>给每一位使用乐仓头程服务的海外仓客户赠送海运险，保护海运货物价值</span>
                        </div>
                        <p class="title">海上运输保险</p>
                    </li>
                    <li class="solution">
                        <div class="desc">
                            <span>目的港长期合作清关公司<br>能够快速安排清关流程</span>
                        </div>
                        <p class="title">清关</p>
                    </li>
                    <li class="solution">
                        <div class="desc">
                            <span>自有车队，提供快速的拖卡、还柜服务降低产生目的港滞箱费风险</span>
                        </div>
                        <p class="title">拖卡</p>
                    </li>
                    <li class="solution">
                        <div class="desc">
                            <span>拥有先进的WMS系统以及优质的团队<br>让所有的问题无后顾之忧</span>
                        </div>
                        <p class="title">入库、上架</p>
                    </li>
                </ul>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>服务优势</h2>
                </div>
                <p class="advantage">
                    将头程交给乐仓，可以保证客户所有的出运事项，乐仓都有实时跟踪到，保障了客户的利益，又保证了出运的安全性，还能通过乐仓内部对应尾程的操作，乐仓内部的沟通能够减少操作上的失误或者对接事务时传递消息缺失与不及时，增加工作效率，减少客户的工作量，使得客户能够放心并且便捷的将所有出运事项托付给乐仓，资料也只需要提供一次。
                </p>
            </div>
            <div class="home-top">
                <div class="common-header">
                    <h2>寻找适合您的货运报价</h2>
                </div>
                <div class="quote">
                    <h3>专家报价</h3>
                    <img src="@/assets/images/service/png_line@2x.png" alt="">
                    <div class="desc">
                        我们的专家将根据您的货物特点和市场洞察，为您的下一批货物提供定制报价
                        我们全方位的货运服务组合供您选择，您不需局限于单一运输模式
                    </div>
                    <div class="getQuote">
                        <a href="https://cn.lecangs.com/application-forms" target="_blank">获取报价</a>
                    </div>
                    <p>400-835-8800</p>
                </div>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>如何合作</h2>
                </div>
                <p class="advantage">
                    客户在确认需要乐仓安排头程的时候，需要将电子委托书（以下简称“托书”）通过电子邮件的方式发送给乐仓货代操作组的同事，并且邮件主题上备注需要哪个船期、船公司以及其相对应的海运费；托书中需要印有该公司公章或者单证章；提供盖章合同，如时间紧急的情况下可以先提供扫描件，但是扫描件的文件上需标注该扫描件法律效应等同于正本。等候操作组的同事回复邮件，一般操作组会在收到托书后的半小时之内进行回复，不管是否订舱都会有回执。
                </p>
                <div class="cooperate">
                    <div class="email-text">
                        <p>操作组的公共邮箱为: doc@lecangs.com</p>
                        <p>邮件主题格式: 客户名称-需要船期-需要船公司-目的港-对应海运费-所需柜型、数量（例如1X40HQ）</p>
                    </div>
                </div>
            </div>
            <div class="home-bottom">
                <div class="common-header">
                    <h2>合作流程</h2>
                </div>
                <img loading="lazy" src="@/assets/images/service/png_cooperation process@2x.png" alt=""  class="process"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('头程海运')
const desc = ref('乐仓能为您做什么')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>
.main {
    padding-top: 42px;
    background: #3f4154;
}

.home-top {
    width: 100%;
    background: #3f4154;
    position: relative;
    overflow-x: hidden;
    padding: 110px 0;
}

.home-middle {
    width: 100%;
    background: #484B61;
    position: relative;
    overflow-x: hidden;
    padding: 110px 0;
}

.home-bottom {
    width: 100%;
    background: #3F4154;
    position: relative;
    overflow-x: hidden;
    padding-top: 110px;
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

.solution-list {
    width: 1260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
}

.solution-list li {
    width: 360px;
    height: 200px;
    border: 2px solid #fff;
    margin: 60px 30px 0;
}

.solution-list li:nth-of-type(2) .desc {
    padding: 17px 60px;
}

.solution-list li .desc {
    padding: 45px 60px;
}

.solution-list li .desc span {
    display: inline-block;
    width: 240px;
    font-size: 14px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 400;
    color: #fff;
    line-height: 28px;
    text-align: center;
}

.solution-list li .title {
    /* padding: 13px 140px; */
    background: #fff;
    text-align: center;
    font-size: 18px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 500;
    color: #333;
    line-height: 52px;
}

.advantage {
    width: 1200px;
    margin: 0 auto;
    font-size: 20px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 400;
    color: #fff;
    line-height: 30px;
    text-indent: 2em;
    text-align: center;
}

.quote {
    width: 1040px;
    margin: 0 auto;
    padding: 50px 175px;
    background: #fff;
}

.quote h3 {
    font-size: 32px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: bold;
    color: #333;
    line-height: 32px;
    text-align: center;
}

.quote img {
    display: block;
    width: 200px;
    height: 4px;
    margin: 32px auto 30px;
}

.quote .desc {
    text-align: center;
    font-size: 20px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 400;
    color: #333;
    line-height: 30px;
}

.quote .getQuote {
    width: 280px;
    padding: 10px 50px;
    background: #fff;
    border: 2px solid #666;
    margin: 40px auto 20px;
    text-align: center;
}

.quote .getQuote a {
    font-size: 20px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 500;
    color: #333;
    line-height: 29px;
    text-decoration: none;
}

.quote p {
    text-align: center;
    font-size: 20px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 400;
    color: #999;
    line-height: 20px;
}

.cooperate {
    width: 1200px;
    height: 300px;
    background: url('@/assets/images/service/png_howtocooperate@2x.png') no-repeat center;
    background-size: cover;
    margin: 60px auto 0;
}

.cooperate .email-text {
    text-align: center;
    padding: 121px 0;
}

.cooperate .email-text p {
    font-size: 20px;
    font-family: SourceHanSansCN, SourceHanSansCN;
    font-weight: 400;
    color: #fff;
    line-height: 29px;
}

.process {
    display: block;
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 120px;
}
</style>