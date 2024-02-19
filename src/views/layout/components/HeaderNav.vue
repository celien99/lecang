<template>
    <div class="pc-box">
        <div class="top-desc">
            <div class="left-desc">
                <div class="stock">
                    <p>股票代码：300729</p>
                    <p> 股票简称：乐歌股份</p>
                </div>
                <span>电话: 400-835-8800</span>
            </div>
            <div class="right-desc">
                <img src="@/assets/logo_amazonspn.png" alt="" />
            </div>
        </div>
        <Menu />
    </div>
    <div class="mobile-box">
        <div class="top-nav">
            <div class="left-btn">
                <svg t="1708306732147" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1773" width="200" height="200"><path d="M960 304c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16V176c0-8.84 7.16-16 16-16h864c8.84 0 16 7.16 16 16v128z m-16 288c8.84 0 16-7.16 16-16V448c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h864z m0 272c8.84 0 16-7.16 16-16V720c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h864z" p-id="1774"></path></svg>
            </div>
            <img src="@/assets/logo_haiwanc.png" alt="" class="logo">
            <div class="right-btn">
                <svg t="1708307721568" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4660" width="200" height="200"><path d="M432.355556 585.955556c59.733333 59.733333 130.844444 108.088889 210.488888 136.533333l108.088889-85.333333c5.688889-5.688889 14.222222-5.688889 22.755556 0l199.111111 128c25.6 17.066667 36.977778 51.2 19.911111 76.8-2.844444 5.688889-5.688889 8.533333-11.377778 11.377777l-93.866666 91.022223c-28.444444 25.6-65.422222 36.977778-102.4 31.288888-182.044444-36.977778-352.711111-128-486.4-256-133.688889-128-227.555556-292.977778-267.377778-475.022222C25.6 207.644444 36.977778 170.666667 62.577778 142.222222l96.711111-93.866666c22.755556-22.755556 56.888889-22.755556 79.644444 0 5.688889 2.844444 8.533333 8.533333 11.377778 11.377777L381.155556 256c5.688889 5.688889 5.688889 14.222222 0 22.755556l-88.177778 105.244444c31.288889 76.8 79.644444 145.066667 139.377778 201.955556z" fill="#333333" p-id="4661"></path></svg>
            </div>
        </div>
    </div>
</template>
<script setup>
import Menu from './Menu.vue'
</script>
<style scoped>
.top-desc {
    width: 100%;
    height: 45px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.top-desc .left-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px 0 361px; */
}

.left-desc .stock p {
    font-size: 10px;
    font-family: MicrosoftYaHei;
    color: #333333;
    line-height: 10px;
}

.left-desc .stock p:first-child {
    margin-bottom: 5px;
}

.left-desc span {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    color: #E02329;
    line-height: 12px;
    margin-left: 79px;
}

.right-desc img {
    width: 86px;
    height: 17px;
}

.mobile-box {
    display: none;
}
@media screen and (max-width: 750px) {
    .pc-box {
        display: none;
    }
    .mobile-box {
        display: block;
    }
    .mobile-box .top-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 256px;
        padding: 51px 102px;
        background: #fff;
    }
    .top-nav .left-btn {
        width: 72px;
    }
    .top-nav .logo {
        width: 440px;
        height: 154px;
    }
    .top-nav .right-btn {
        width: 72px;
    }
    svg {
        width: 100%;
    }
}
</style>