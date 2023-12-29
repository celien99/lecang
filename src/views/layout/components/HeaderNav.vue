<template>
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
    <Menu/>
</template>
<script setup>
import Menu from './Menu.vue'
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .top-desc {
        width: 100%;
        height: 45px;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.03);
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
</style>