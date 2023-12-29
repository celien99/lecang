<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <NavbarVue />
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>服务简介</h2>>
                    <h3>乐歌海外仓基于13年跨境电商及11年海外仓团队运营经验，在多仓自营基础上，致力于为中大件产品跨境卖家提供公共海外仓综合服务，包括海外仓储、头程海运、一件代发、FBA转运、售后托管、出口代理、供应链服务等一站式跨境物流服务。
                    </h3>
                </div>
            </div>
            <div class="home-middle">
                <div class="home-advantage-header">
                    <h2>我们拥有十二大优势</h2>
                    <!-- <img src="/wp-content/themes/blo-child/lecangs_cn/img/pic_zs_bg.png" alt="" /> -->
                    <h3>始于卖家,服务卖家,更懂卖家</h3>
                    <span>advantage</span>
                </div>
                <div class="home-advantage-body">
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz1.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span>></span>
                                <span class="home-count">99</span>
                                <span>%</span>
                            </p>
                            <p class="home-advantage-item-type">单日处理订单</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz2.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span>></span>
                                <span class="home-count">95</span>
                                <span>%</span>
                            </p>
                            <p class="home-advantage-item-type">次日达订单</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz3.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">500</span>
                                <span>W+</span>
                            </p>
                            <p class="home-advantage-item-type">每年订单量（单）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz4.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span>{{ '&lt;' }}</span>
                                <span class="home-count">24</span>
                                <span>h</span>
                            </p>
                            <p class="home-advantage-item-type">发货时效</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz5.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">99</span>
                                <span>.9%</span>
                            </p>
                            <p class="home-advantage-item-type">库存准确率</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz6.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">99</span>
                                <span>.9%</span>
                            </p>
                            <p class="home-advantage-item-type">发货准确率</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz7.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">100</span>
                                <span>+</span>
                            </p>
                            <p class="home-advantage-item-type">IT团队（人）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz8.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">100</span>
                                <span>+</span>
                            </p>
                            <p class="home-advantage-item-type">英语售后客服团队（人）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz9.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">100</span>
                                <span>+</span>
                            </p>
                            <p class="home-advantage-item-type">美国本土团队（人）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz10.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">11</span>
                                <span></span>
                            </p>
                            <p class="home-advantage-item-type">海外仓运营经验（年）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz11.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">13</span>
                                <span></span>
                            </p>
                            <p class="home-advantage-item-type">跨境电商运营经验（年）</p>
                        </div>
                    </div>
                    <div class="home-advantage-item">
                        <img src="@/assets/images/xz12.png" alt="" />
                        <div class="home-advantage-item-desc">
                            <p class="home-advantage-item-text">
                                <span class="home-count">500</span>
                                <span>+</span>
                            </p>
                            <p class="home-advantage-item-type">服务客户（家）</p>
                        </div>
                    </div>
                </div>
                <div class="home-advantage-car-left">
                    <img src="@/assets/images/pic_kache_bg.png" alt="" />
                </div>
                <div class="home-advantage-car-right">
                    <img src="@/assets/images/pic_kache_bg.png" alt="" />
                </div>
                <div class="home-advantage-circle-1"></div>
                <div class="home-advantage-circle-2"></div>
                <div class="home-advantage-tip-1">
                    <img src="@/assets/images/bg_dd.png" alt="" />
                </div>
            </div>
            <div class="home-top">
                <div class="common-header">
                    <h2>乐歌海外仓布局</h2>
                </div>
                <div id="map"></div>
                <div class="map-text">
                    乐歌海外仓已经在全球部署了多个海外仓，在美国、英国、德国、日本等国家均有分布，总面积约30万平方米，已服务超500家跨境电商企业，未来将继续推进自建海外仓项目，扩大运营面积，服务更多的中小外贸企业品牌出海、质量出海、设计出海，助力外贸转型升级，实现跨境电商高质量发展、规范化发展，携手融通发展，共生共荣。
                </div>
            </div>
            <div class="home-middle">
                <div class="common-header">
                    <h2>仓库实景</h2>
                    <h3>乐歌海外仓全球多仓布局，助推跨境物流时效提速</h3>
                </div>
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="home-bottom">
                <div class="common-header">
                    <h2>服务流程</h2>
                    <h3>乐歌海外仓全球多仓布局，助推跨境物流时效提速</h3>
                </div>
                <img loading="lazy" src="@/assets/images/service/png_cooperation process@2x.png" alt=""  class="process"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'
import NavbarVue from './components/Navbar.vue'

const title = ref('海外仓储')
const desc = ref('乐仓能为您做什么')
const bannerUrl = ref('src/assets/pic_fuwu.png')
</script>
<style scoped>
.main {
    padding-top: 42px;
    background: #3f4154;
}
.home-main {
	background: #3f4154;
	min-height: 1080px;
	position: relative;
	overflow: hidden;
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
.home-advantage-header {
	margin: 110px 0 64px;
	text-align: center;
	position: relative;
	z-index: 9;
}

.home-advantage-header h2 {
	font-size: 55px;
	color: #ffffff;
	line-height: 56px;
}

.home-advantage-header img {
	margin: 24px 0;
}

.home-advantage-header h3 {
	font-size: 25px;
	color: #ffffff;
	line-height: 30px;
	letter-spacing: 4px;
}

.home-advantage-header span {
	position: absolute;
	font-size: 150px;
	font-weight: 600;
	color: #a4a4f3;
	line-height: 150px;
	letter-spacing: 5px;
	left: 0;
	right: 0;
	top: -20px;
	opacity: 0.13;
	margin: auto;
	z-index: -1;
}

.home-advantage-body {
    position: relative;
    z-index: 9;
    max-width: 1180px;
    margin: auto;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, 25%); */
    /* grid-template-rows: repeat(3, 100px); */
    /* grid-gap: 60px 0; */
	grid-template-columns: repeat(auto-fill, 33.33%);
	grid-template-rows: repeat(4, 120px);
	grid-gap: 18px 0px;
}
.home-advantage-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-advantage-item svg {
    width: 34px;
    height: 34px;
    margin-bottom: 32px;
}
.home-advantage-item-desc {
    margin-left: 16px;
    width: 280px;
}
.home-advantage-item-text {
    font-size: 30px;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    display: flex;
}
.home-advantage-item-type {
    margin-left: 16px;
    margin-top: 16px;
    font-size: 24px;
    font-weight: 400;
    color: #999999;
    line-height: 24px;
    position: relative;
    display: flex;
}
.home-advantage-item-type::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    background: #ed392f;
    top: 0;
    left: -16px;
}

.home-advantage-car-left {
	position: absolute;
	left: 0;
	top: 10%;
	bottom: 0;
	margin: auto;
	height: max-content;
	z-index: 1;
}

.home-advantage-car-right {
	position: absolute;
	right: 0;
	top: 10%;
	bottom: 0;
	margin: auto;
	height: max-content;
	z-index: 1;
	transform: rotateY(180deg);
}

.home-advantage-circle-1 {
	position: absolute;
	left: 104px;
	bottom: 40px;
	width: 142px;
	height: 142px;
	opacity: 0.08;
	border: 25px solid #ffffff;
	border-radius: 50%;
}

.home-advantage-circle-2 {
	position: absolute;
	right: 56px;
	top: 160px;
	width: 81px;
	height: 81px;
	border: 20px solid #383a48;
	border-radius: 50%;
}

.home-advantage-tip-1 {
	position: absolute;
	right: 0;
	bottom: 0;
}
.map-text {
    width: 1200px;
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    color: #FFFFFF;
    line-height: 30px;
    margin: 0 auto;
    font-weight: 400;
    text-indent: 2em;
    text-align: center;
}
.process {
    display: block;
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 120px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>