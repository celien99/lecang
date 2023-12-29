<script setup>
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
</script>
<template>
    <div class="common-layout">
      <el-container>
        <el-header><HeaderNav/></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer><FooterNav/></el-footer>
      </el-container>
    </div>
  </template>

<style>
  .el-header, .el-main, .el-footer {
    padding: 0;
  }
  .el-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 110px;
  }
  .el-main {
    margin-top: 110px;
  }
  .el-footer {
    width: 100%;
  }
</style>