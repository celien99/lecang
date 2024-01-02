<template>
    <top-banner :title="title" :desc="desc" :backgroundImage="bannerUrl"></top-banner>
    <div class="main">
        <div class="content">
            <div class="home-top">
                <div class="common-header">
                    <h2>帮助与支持</h2>
                </div>
                <div class="main-assist-content">
                    <div class="main-assist-content-list">
                        <div class="title">
                            关于合作
                        </div>
                        <div class="all-question">
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：与乐歌海外仓合作的流程是怎样的
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：您首先需要填写我们的入驻申请表，收到后我们会有专人与贵公司进行联系，在双方协商洽谈意见一致且签订合同并盖章生效后，您即可注册我们系统账号并登录，开始正常合作使用。
                                </div>
                            </div>
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：能不能先注册账号并熟悉咱们的系统呢？一定要签合同之后才可以吗？
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：是的，我们系统的注册和空间分配是要在双方签订合同之后的，如果您想要提前了解我们的系统操作和功能，可随时联系我们的客服或与您公司对接的业务员，他们会给您详细的解答和指导。
                                    <br>
                                    服务热线：400-835-8800
                                    <br>
                                    邮箱：marketing@lecangs.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-assist-content-list">
                        <div class="title">
                            关于帐号
                        </div>
                        <div class="all-question">
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：子账号可以设置权限吗？具体该如何操作呢
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：首先需要登录管理员账号，在目录栏“系统管理”-“用户中心”里面找到目标子账号，点击“权限”即可进行相应的权限修改。
                                </div>
                            </div>
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：忘记了账号的密码该如何操作呢？
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：对于管理员账号的密码您可以通过邮箱找回；子账号的密码丢失可以联系我们的客服人员，在系统后台找回密码。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-assist-content-list">
                        <div class="title">
                            关于订单
                        </div>
                        <div class="all-question">
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：如果提交审核的订单发生意外变化，我们可否对订单进行拦截呢
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：没问题的，只要意外在仓库下架之前发生，您就可以对进行截单操作，当截单成功后我们将修改订单发货状态。
                                </div>
                            </div>
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户： 异常订单与问题件的区别是什么？
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：异常订单是订单内商品缺货或用户账户余额不足，不能完成扣款，但可以成功创建的订单，待补足库存和充值后自动转发货；问题件是渠道服务商返回报错信息或仓库标记实际库存不足的订单，服务商报错订单请根据提示修改后再提交
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-assist-content-list">
                        <div class="title">
                            关于运输
                        </div>
                        <div class="all-question">
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：考虑装箱率问题，整柜的货物可以不打托盘吗？如果打托盘，要求是什么？
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：<br>
                                    我们乐歌海外仓提供打托服务，您可根据自身情况选择国内装货时打托还是国外卸货时打托。<br>
                                    对于托盘的要求
                                    <br>
                                    1. 为了保证贵公司货物的安全，请使用木质熏蒸托盘，不要使用塑料或者纸质材料的托盘。
                                    <br>
                                    2. 建议托盘的货品按照SKU来摆放，尽量让每一个箱子都方便数到。
                                    <br>
                                    3. 为了加快乐歌海外仓的入库上架时效，建议将箱唛标识贴在靠外侧、易辩识的位置。
                                </div>
                            </div>
                            <div class="question">
                                <div class="custom">
                                    <div class="left-custom-question">
                                        <i class="custom-circle-icon"></i>
                                        客户：电池类、鲜活类产品可以派送吗
                                    </div>
                                    <i class="question-icon" @click="handleScroll">-</i>
                                </div>
                                <div class="answer">
                                    乐歌海外仓：电池类产品因为属于危险品，入仓时需要提供真实有效的MSDS、UN38.3等证明，并且需要黏贴提示电池产品的标签；鲜活类产品属于违寄品是不允许派送的，如有瞒报，相应法律责任还需要客户自己承担。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, } from 'vue'

const title = ref('帮助与支持')
const desc = ref('我们力求在LECANGS培养卓越的文化。我们的核心信念是持续改进的理念。正是这种对我们业务的态度转化为我们为客户提供的承诺、保证和对细节的关注。')
const bannerUrl = ref('src/assets/pic_fuwu.png')
const handleScroll = (e) => {
    const node = e.target
    const parent = node.parentNode.parentNode
    if (node.innerHTML === '-') {
        node.innerHTML = '+'
        parent.getElementsByClassName('answer')[0].style.display = 'none';
    } else {
        node.innerHTML = '-'
        parent.getElementsByClassName('answer')[0].style.display = 'block'
    }
}
</script>
<style scoped>
    .main-assist-content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .main-assist-content .main-assist-content-list {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 1200px;
        margin: 0 auto;
    }
    .main-assist-content .main-assist-content-list .title {
        width: 160px;
        font-size: 40px;
        line-height: 40px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #FFFFFF;
        border-bottom: 5px solid #E02329;
        padding-bottom: 10px;
        margin-right: 82px;
    }
    .main-assist-content .main-assist-content-list .all-question {
        flex: 1;
        text-align: left;
        margin-bottom: 110px;
    }
    .main-assist-content .main-assist-content-list:last-child .all-question {
        margin-bottom: 0;
    }
    .main-assist-content .main-assist-content-list .all-question .question {
        padding: 40px 0;
        border-bottom: 1px solid #DDDDDD;
    }
    .main-assist-content .main-assist-content-list .all-question .question:first-child {
        padding-top: 0;
    }
    .main-assist-content .main-assist-content-list .all-question .question:last-child {
        border-bottom: 0;
    }
    .main-assist-content .main-assist-content-list .all-question .question .custom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
    }
    .main-assist-content .main-assist-content-list .all-question .custom .left-custom-question {
        display: flex;
        align-items: center;
        font-size: 22px;
        font-family: SourceHanSansCN-Bold, SourceHanSansCN;
        font-weight: bold;
        color: #FFFFFF;
    }
    .main-assist-content .main-assist-content-list .all-question .custom .left-custom-question .custom-circle-icon {
        display: block;
        width: 8px;
        height: 8px;
        background: #FFFFFF;
        border-radius: 50%;
        margin-right: 7px;
    }
    .main-assist-content .main-assist-content-list .all-question .custom .question-icon {
        font-size: 32px;
        cursor: pointer;
    }
    .main-assist-content .main-assist-content-list .all-question .answer {
        width: 914px;
        font-size: 20px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #9FA0A9;
        line-height: 30px;
        padding-left: 15px;
        transition: all 0.5s ease-in;
    }
</style>