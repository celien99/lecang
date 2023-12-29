<template>
    <div class="contain">
        <div class="headerBanner">
            <el-carousel arrow="never" height="850px">
                <el-carousel-item v-for="item in images" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="home-main">
            <div class="home-video-bg-1"></div>
            <div class="home-video-bg-2"></div>
            <div class="home-video-header">
                <div class="home-video-title">
                    <h2>乐歌海外仓专注中大件海外仓</h2>
                </div>
                <h3 class="home-video-subtitle">乐仓，始于卖家，服务卖家，更懂卖家</h3>
            </div>
            <div class="home-video">
                <video src="@/assets/xc.mp4"
                    poster="@/assets/images/video_bg1.png"></video>
                <div class="video-play-icon">
                    <img src="@/assets/images/icon_play.png" />
                </div>
                <div class="video-stop-icon">
                    <svg viewbox="0 0 20 20" style="width: 20px; margin-left: 6px">
                        <path d="M19,10L2,10L9,17L2,9L9,3L2,9" fill="none" stroke-width="2" stroke="#fff"></path>
                    </svg>
                </div>
            </div>
            <div class="home-video-content-1">
                <p class="home-video-item-title">
                    <span class="home-video-item-title-bg"></span><span class="home-video-item-title-text">仓库覆盖全美</span>
                </p>
                <div class="home-video-item-content">
                    <p>
                        全美布局多个公共海外仓，一年流转上万个高柜，帮助卖家实现全美95%以上订单次日达的时效，大幅提升用户体验。
                    </p>
                </div>
            </div>
            <div class="home-video-content-2">
                <p class="home-video-item-title">
                    <span class="home-video-item-title-bg"></span><span class="home-video-item-title-text">美国本土精英管理团队</span>
                </p>
                <div class="home-video-item-content">
                    <p>乐歌在美国旧金山硅谷，孟菲斯和休斯顿均设有分公司。</p>
                </div>
            </div>
            <div class="home-video-circle-1"></div>
            <div class="home-video-circle-2"></div>
            <div class="home-video-tip-1">
                <img src="@/assets/images/bg_ddddd.png" alt="" />
            </div>
            <div class="home-video-tip-2">《〈《</div>
        </div>
        <div class="home-main">
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
        <div class="home-main">
            <div class="commom-header">
                <h2>乐歌海外仓服务</h2>
                <!-- <img src="/wp-content/themes/blo-child/lecangs_cn/img/icon_diwen.png" alt="" /> -->
                <h3>“头程+海外仓”端到端一站式跨境物流服务</h3>
                <span>service</span>
            </div>
            <div class="service-body">
                <div v-for="item in cardList" :key="item.id" class="card">
                    <ServiceCard :url="item.url" :title="item.title" :desc="item.desc" :background-image="item.backgroundImage"/>
                </div>
            </div>
            <div class="service-tip-1">《〈《</div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ServiceCard from './components/ServiceCard.vue'
const images = ref([])
const cardList = ref([
    {
        id: 1,
        url: '/',
        title: '头程海运',
        desc: '更优势的海运费,尾程清关拖车费,提供整柜订舱,端到端的服务。',
        backgroundImage: 'src/assets/toucheng1.jpg'
    },
    {
        id: 2,
        url: '/',
        title: '一件代发',
        desc: '客户把货物发到海外仓,仓库接受货点上架到仓库系统。客户在系统下订单,当天的订单当天处理发出。',
        backgroundImage: ''
    },
    {
        id: 3,
        url: '/',
        title: 'FBA转运',
        desc: '客户头程备货至乐歌海外仓,FBA库存不足时,可及时从海外仓发货补足库存,价格优惠,免仓期长,加快配送时效,节省物流成本。',
        backgroundImage: ''
    },
    {
        id: 4,
        url: '/',
        title: '仓储服务',
        desc: 'PriceDepot独立站自有流量,实现产品的高动销高周转。',
        backgroundImage: ''
    },
    {
        id: 5,
        url: '/',
        title: '增值服务',
        desc: '产品视频拍摄，售后客服托管，已上架产品拍照、商品尺寸重量复核、销毁、尾程订单拦截或改派等。',
        backgroundImage: ''
    },
])
onMounted(() => {
    const imageContext = import.meta.glob('../../assets/images/front/*.@(png|jpg|jpeg|gif|svg)');
    const imagePaths = Object.keys(imageContext).map((key) => key.replace('../../', 'src/'))
    images.value = imagePaths
    console.log(images)
})
</script>

<style scoped>
.contain {
    width: 100%;
    height: 100%;
}

img {
    border: 0;
    vertical-align: middle;
}
.home-main {
	background: #3f4154;
	min-height: 1080px;
	position: relative;
	overflow: hidden;
}
.home-video-bg-1 {
	position: absolute;
	height: 100%;
	width: 40px;
	left: 31.9%;
	top: 0;
	background: #921a1d;
	transform: skew(-20deg);
	z-index: 11;
}

.home-video-bg-2 {
	width: 100%;
	background: #3f4154;
	height: 100%;
	position: absolute;
	top: 0;
	left: 31.9%;
	z-index: 10;
	transform: skew(-20deg);
}

.home-video {
	width: 980px;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9;
	transition: all 0.5s;
}

.home-video video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.video-play-icon {
	position: absolute;
	width: 89px;
	height: 89px;
	left: 33%;
	top: 45%;
	cursor: pointer;
	transition: all 0.5s;
}

.video-play-icon img {
	width: 100%;
}

.video-play-icon:active {
	transform: scale(0.8);
}

.video-stop-icon {
	position: absolute;
	left: 20px;
	top: 20px;
	display: none;
	cursor: pointer;
}

.home-video-header {
	position: relative;
	z-index: 12;
}

.home-video-title {
	padding: 26px 64px;
	background: #e02329;
	color: #ffff;
	transform: skew(-20deg);
	width: 650px;
	margin: 86px auto 0;
	position: relative;
}

.home-video-title::before {
	content: "";
	position: absolute;
	right: -40px;
	background: #e02329;
	width: 20px;
	height: 100%;
	top: 0;
}

.home-video-title::after {
	content: "";
	position: absolute;
	right: -80px;
	background: #e02329;
	width: 20px;
	height: 100%;
	top: 0;
}

.home-video-title h2 {
	font-size: 38px;
	font-weight: bold;
	line-height: 38px;
	position: relative;
	transform: skew(20deg);
}

.home-video-subtitle {
	margin: 30px auto 0;
	width: max-content;
	font-size: 30px;
	font-weight: 400;
	color: #ffffff;
	line-height: 30px;
	padding-left: 80px;
}

.home-video-content-1 {
	position: absolute;
	width: 560px;
	z-index: 12;
	left: 10%;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	height: max-content;
}

.home-video-content-2 {
	position: absolute;
	z-index: 12;
	width: 560px;
	bottom: 80px;
	right: 16.67%;
}

.home-video-item-title {
	font-size: 34px;
	font-weight: 500;
	color: #ffffff;
	line-height: 34px;
	margin-bottom: 24px;
	position: relative;
}

.home-video-item-title::before {
	content: "";
	position: absolute;
	width: 371px;
	background: #e02329;
	height: 10px;
	bottom: -20px;
	left: -20px;
	transform: skew(-20deg);
}

.home-video-item-content {
	padding: 20px 56px 20px 72px;
	color: #fff;
	transform: skew(-20deg);
	background: #e023297a;
	font-size: 22px;
	font-weight: 400;
	color: #ffffff;
	line-height: 40px;
	margin-top: 40px;
	margin-left: -56px;
}

.home-video-item-content p {
	transform: skew(20deg);
}

.home-video-circle-1 {
	position: absolute;
	right: 150px;
	top: 300px;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	background: #ffffff;
	opacity: 0.29;
	z-index: 12;
}

.home-video-circle-2 {
	position: absolute;
	right: 180px;
	bottom: 70px;
	border-radius: 50%;
	width: 142px;
	height: 142px;
	border: 20px solid #383a48;
	z-index: 11;
}

.home-video-tip-1 {
	position: absolute;
	left: 40%;
	bottom: 0;
	width: 115px;
	height: 215px;
	z-index: 11;
}

.home-video-tip-2 {
	position: absolute;
	right: 20%;
	bottom: 16px;
	z-index: 11;
	font-size: 35px;
	color: #fff;
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
.commom-header {
	margin: 104px auto;
	max-width: 1180px;
	position: relative;
	z-index: 11;
}

.commom-header h2 {
	font-size: 55px;
	color: #ffffff;
	line-height: 56px;
}

.commom-header img {
	margin: 24px auto 20px 42px;
}

.common-header h3 {
	font-size: 24px;
	color: #ffffff;
	line-height: 31px;
	letter-spacing: 3px;
}

.commom-header span {
	position: absolute;
	font-size: 150px;
	font-weight: 600;
	color: #a4a4f3;
	line-height: 150px;
	letter-spacing: 5px;
	left: 117px;
	top: -24px;
	opacity: 0.13;
}
.service-body {
    display: flex;
    /* height: calc(100vh - 352px) */
}
.card {
    width: 384px;
    height: 666px;
    display: flex;
}
.service-tip-1 {
	position: absolute;
	right: 180px;
	top: 56px;
	font-size: 35px;
	color: #ffffff;
	line-height: 42px;
}
</style>