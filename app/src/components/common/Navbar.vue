<template>
  <div id="navbar-wrap">
    <img src="../../assets/img/logo.png" alt="logo" >
    <el-menu default-active="hello" @open="handleOpen" @close="handleClose" :unique-opened="isUnique" :router="isRouter">
      <el-menu-item index="hello"><i class="el-icon-menu"></i>欢迎页</el-menu-item>
      <el-submenu index="">
        <template slot="title"><i class="el-icon-message"></i>常用页</template>
          <el-menu-item index="list">列表页</el-menu-item>
          <el-menu-item index="form">表单页</el-menu-item>
      </el-submenu>
      <el-menu-item index="charts"><i class="el-icon-picture"></i>图表页</el-menu-item>
      <el-menu-item index="end"><i class="el-icon-setting"></i>结束页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      isUnique: true,
      isRouter: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">
#navbar-wrap {
  width: 140px;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #eef6f6;
  overflow: hidden;
  box-shadow:1px 0px 2px #ccc;
  z-index: 2;
  img {
    width: 52%;
    display: block;
    margin: 15% auto;
    transition: 1s all;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
</style>
