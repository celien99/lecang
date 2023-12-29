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
                    <li><a href="#">乐歌官网</a></li>
                    <li><a href="#">联邦速递官网</a></li>
                    <li><a href="#">美国邮政官网</a></li>
                    <li><a href="#">DHL官网</a></li>
                    <li><a href="#">UPS官网</a></li>
                    <li><a href="#">GLS官网</a></li>
                </ul>
            </div>
            <div class="icon"></div>
            <div class="right">
                <h1>订阅乐歌海外仓电子报</h1>
                <div class="emainInput">
                    <div class="inputBox">
                        <div class="input"><input type="text" placeholder="邮箱"></div>
                        <div class="btn">
                            <button type="submit"></button>
                        </div>
                    </div>
                    <p class="hint">提交邮箱以订阅我们最新得优惠信息和行业文章</p>
                </div>
            </div>
        </div>
    </footer>
</template>
  
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
    }
    .content .left {
        margin-right: 60px;
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
    .contact p:last-child {
        margin-bottom: 0;
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
    .content .icon {
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
    .right .emainInput .hint {
        font-size: 12px;
        font-family: Helvetica;
        color: #FFFFFF;
        line-height: 14px;
    }
</style>