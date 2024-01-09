<template>
    <footer class="footer">
        <div class="content">
            <div class="left">
                <div class="logo">
                    <img src="@/assets/logo_footer.png" alt="">
                </div>
                <div class="contact">
                    <h1>联系我们</h1>
                    <p>宁波市鄞州区首南街道学士路536号 金东大厦15-19层</p>
                    <p>400-835-8800</p>
                    <p>info@lecangs.com</p>
                </div>
            </div>
            <div class="middle">
                <h1>友情链接</h1>
                <ul class="linkList">
                    <li v-for="item in linkList" :key="item">
                        <a :href="item.link">{{ item.uname }}</a>
                    </li>
                </ul>
            </div>
            <div class="icon-line"></div>
            <div class="right">
                <h1>订阅乐歌海外仓电子报</h1>
                <div class="emainInput">
                    <div class="inputBox">
                        <div class="input"><input type="text" placeholder="邮箱"></div>
                        <div class="btn">
                            <button type="submit">
                                <svg t="1704779522098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1063"><path d="M16.13 443.742L953.475 2.096a26.152 26.152 0 0 1 27.22 4.352 26.395 26.395 0 0 1 8.361 26.323L685.083 965.04a26.28 26.28 0 0 1-42.236 13.823l-182.426-152.52a26.152 26.152 0 0 0-35.325 1.664l-93.603 93.815a26.152 26.152 0 0 1-44.71-18.558V704.967c0-6.997 2.73-13.695 7.68-18.644L768.83 215.581 225.732 642.594a26.152 26.152 0 0 1-32.509-0.853L9.474 488.154a26.366 26.366 0 0 1 6.656-44.369z" fill="#FFFFFF" p-id="1064"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p class="hint">提交邮箱以订阅我们最新得优惠信息和行业文章</p>
                </div>
            </div>
        </div>
        <div class="content-mobile">
            <div class="company-info">
                <div class="logo">
                    <img src="@/assets/logo_amazonspn.png" alt="" />
                </div>
                <p>股票简称：乐歌股份</p>
                <p>股票代码：300729</p>
            </div>
            <div class="friend-link">
                <p>友情链接</p>
                <ul class="link">
                    <li v-for="item in linkList" :key="item">
                        <a :href="item.link">{{ item.uname }}</a>
                    </li>
                </ul>
            </div>
            <div class="contact-us">
                <p>联系我们</p>
                <p>宁波市鄞州区首南街道学士路536号 金东大厦15-19层</p>
                <p>400-835-8800</p>
                <p>info@lecangs.com</p>
            </div>
            <div class="bottom">
                <h1>订阅乐歌海外仓电子报</h1>
                <div class="emainInput">
                    <div class="inputBox">
                        <div class="input"><input type="text" placeholder="邮箱"></div>
                        <div class="btn">
                            <button type="submit">
                                <svg t="1704779522098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1063"><path d="M16.13 443.742L953.475 2.096a26.152 26.152 0 0 1 27.22 4.352 26.395 26.395 0 0 1 8.361 26.323L685.083 965.04a26.28 26.28 0 0 1-42.236 13.823l-182.426-152.52a26.152 26.152 0 0 0-35.325 1.664l-93.603 93.815a26.152 26.152 0 0 1-44.71-18.558V704.967c0-6.997 2.73-13.695 7.68-18.644L768.83 215.581 225.732 642.594a26.152 26.152 0 0 1-32.509-0.853L9.474 488.154a26.366 26.366 0 0 1 6.656-44.369z" fill="#FFFFFF" p-id="1064"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p class="hint">提交邮箱以订阅我们最新得优惠信息和行业文章</p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue';
const linkList = ref([{
    uname: '乐歌官网',
    link: '#'
},
{
    uname: '联邦速递官网',
    link: '#'
},
{
    uname: '美国邮政官网',
    link: '#'
},
{
    uname: 'DHL官网',
    link: '#'
},
{
    uname: 'UPS官网',
    link: '#'
},
{
    uname: 'GLS官网',
    link: '#'
}
])
</script>
<style scoped>
    .footer {
        background: #1c1d25;
    }
    .content {
        display: flex;
        justify-content: center;
        padding: 40px 360px;
        font-family: Helvetica;
        color: #fff;
        white-space: pre;
    }
    .content .left {
        margin-right: 60px;
        text-align: left;
    }
    .content .left .contact {
        margin-top: 28px;
    }
    .contact h1 {
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 15px;
    }
    .contact p {
       font-size: 15px;
       line-height: 18px;
       margin-bottom: 16px;
    }
    .contact p:nth-of-type(1)::before {
        content: url(@/assets/icon_dw.png);
        width: 14px;
        height: 16px;
        margin-right: 11px;
    }
    .contact p:nth-of-type(2)::before {
        content: url(@/assets/icon_ph.png);
        width: 14px;
        height: 16px;
        margin-right: 11px;
    }
    .contact p:last-child {
        margin-bottom: 0;
    }
    .contact p:last-child::before {
        content: url(@/assets/icon_fax.png);
        width: 14px;
        height: 16px;
        margin-right: 11px;
    }
    .content .middle {
        margin-right: 154px;
    }
    .middle h1 {
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 15px;
    }
    .middle .linkList {
        text-align: left;
    }
    .middle .linkList li {
        font-size: 15px;
       line-height: 18px;
       margin-bottom: 16px;
    }
    .middle .linkList li:last-child {
        margin-bottom: 0;
    }
    .content .icon-line {
        width: 1px;
        height: 90px;
        margin-top: 85px;
        margin-right: 155px;
        background: #4d5068;
    }
    .right h1 {
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 15px;
    }
    .right .emainInput .inputBox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    .inputBox .input {
        width: 285px;
        height: 45px;
    }
    .inputBox .input input {
        width: 100%;
        height: 100%;
        padding-left: 11px;
        background: #31333f;
        outline: none;
        border: 0;
        font-size: 20px;
        line-height: 24px;
        color: #dcdcdc;
    }
    .inputBox .btn {
       width: 75px;
       height: 45px;
       background: #e02329 
    }
    .inputBox .btn button {
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        background: #e02329;
    }
    .inputBox .btn button svg {
        width: 23px;
        height: 23px;
    }
    .right .emainInput .hint {
        font-size: 12px;
        font-family: Helvetica;
        color: #FFFFFF;
        line-height: 14px;
    }
    .content-mobile {
        display: none;
    }
    @media screen and (max-width: 750px) {
        .content {
            display: none;
        }
        .content-mobile {
            display: block;
            padding: 0 77px;
        }
        .content-mobile .company-info {
            display: flex;
            justify-content: space-between;
            padding: 102px 0 72px;
        }
        .company-info .logo img {
            width: 445px;
            height: 87px;
            object-fit: cover;
        }
        .content-mobile .company-info p {
            font-size: 51px;
            font-family: SourceHanSansCN, SourceHanSansCN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 77px;
        }
        .friend-link {
            padding-top: 87px;
            border-top: 5px solid #282a3b;
        }
        .friend-link > p {
            font-size: 61px;
            font-family: SourceHanSansCN, SourceHanSansCN;
            font-weight: 400;
            color: rgba(255,255,255,0.5);
            line-height: 77px; 
            text-align: left;   
        }
        .friend-link .link {
            display: flex;
            flex-wrap: wrap;
            margin: 102px 0 72px 0;
        }
        .friend-link .link li a {
            display: inline-block;
            font-size: 61px;
            font-family: SourceHanSansCN, SourceHanSansCN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 77px;
            margin-bottom: 61px;
            margin-right: 123px;
        }
        .contact-us, .bottom {
            padding-top: 102px;
            border-top: 5px solid #282a3b;
        }
        .contact-us > p {
            font-size: 61px;
            font-family: SourceHanSansCN, SourceHanSansCN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 77px;
            margin-bottom: 41px;
            text-align: left;
        }
        .contact-us > p:first-child {
            color: rgba(255,255,255,0.5);
            margin-bottom: 102px;
        }
        .contact-us > p:nth-of-type(2)::before {
            content: url(@/assets/icon_dw.png);
            width: 61px;
            height: 61px;
            margin-right: 31px;
        }
        .contact-us > p:nth-of-type(3)::before {
            content: url(@/assets/icon_ph.png);
            width: 61px;
            height: 61px;
            margin-right: 31px;
        }
        .contact-us > p:nth-of-type(4)::before {
            content: url(@/assets/icon_fax.png);
            width: 61px;
            height: 61px;
            margin-right: 31px;
        }
        .bottom h1 {
            font-size: 82px;
            font-family: SourceHanSansSC, SourceHanSansSC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 77px;
            text-align: center;
            margin-bottom: 123px;
        }
        .bottom .emainInput .inputBox {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .bottom .emainInput .inputBox .input {
            width: 1618px;
            height: 205px;
            background: #31333F;
            backdrop-filter: blur(7px);
        }
        .inputBox .input input {
            padding-left: 56px;
            font-size: 61px;
            font-family: SourceHanSansSC, SourceHanSansSC;
            line-height: 77px;
        }
        .inputBox .btn {
            width: 348px;
            height: 205px;
            backdrop-filter: blur(0px);
        }
        .inputBox .btn button svg {
            width: 119px;
            height: 118px;
        }
        .hint {
            font-size: 51px;
            font-family: SourceHanSansSC, SourceHanSansSC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 77px;
            text-align: center;
            margin: 51px auto 0;
            padding-bottom: 154px;
        }
    }
</style>