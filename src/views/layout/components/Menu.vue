<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
        >
        <div class="logo">
            <router-link to="/"><img src="@/assets/logo_haiwanc.png" alt="" /></router-link>
        </div>
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-sub-menu index="2">
            <template #title>乐仓服务</template>
            <el-menu-item index="2-1"><router-link to="/shipping">头程海运</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/overseas">海外仓储</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/drop-shipping">一件代发</router-link></el-menu-item>
            <el-menu-item index="2-4"><router-link to="/export-agent">代理出口</router-link></el-menu-item>
            <el-menu-item index="2-5"><router-link to="/supplyChain">供应链服务</router-link></el-menu-item>
            <el-menu-item index="2-6">FBA转运</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>客户支持</template>
            <el-menu-item index="3-1">乐仓承诺</el-menu-item>
            <el-menu-item index="3-2">亚马逊SPN</el-menu-item>
            <el-menu-item index="3-3">乐仓系统</el-menu-item>
            <el-menu-item index="3-4">合作案例</el-menu-item>
            <el-menu-item index="3-5">帮助支持</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">资讯动态</el-menu-item>
        <el-menu-item index="5">生态合作</el-menu-item>
        <el-sub-menu index="6">
            <template #title>关于乐仓</template>
            <el-menu-item index="6-1">乐仓简介</el-menu-item>
            <el-menu-item index="6-2">乐仓优势</el-menu-item>
            <el-menu-item index="6-3">联系我们</el-menu-item>
        </el-sub-menu>
        <i class='icon'></i>
        <el-menu-item index="7">申请合作</el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }
  </script>
  <style scoped>
   .logo {
    height: 100%;
   }
    .logo img {
        height: 100%;
        padding: 10px 45px;
    }
    a {
        color: #303133;
    }
    .el-menu-demo {
        height: 65px;
        justify-content: center;
        align-items: center;
        background: #fff;
        backdrop-filter: blur(31px);
    }
    .el-menu--horizontal>.el-menu-item {
        margin: 0 30px;
        padding: 0;
    }
    .el-menu--horizontal>.el-menu-item:last-child {
        color: red;
    }
    .el-menu-item {
        font-size: 16px;
        color: #333333;
        font-family: MicrosoftYaHei;
    }
    .el-sub-menu {
        font-size: 16px;
        color: #333333;
        font-family: MicrosoftYaHei;
        margin: 0 30px;
        padding: 0;
    }
    .icon {
        display: inline-block;
        width: 1px;
        height: 20px;
        background: #d8d8d8;
        border-radius: 1px;
        margin-left: 15px;
    }
  </style>
  