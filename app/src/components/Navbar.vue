<template>
  <div id="navbar-wrap">
    <img src="../assets/img/logo.png" alt="">
    <el-menu default-active="hello" @open="handleOpen" @close="handleClose" unique-opened="true" router="true">
      <el-menu-item index="hello"><i class="el-icon-menu"></i>欢迎页</el-menu-item>
      <el-submenu index="">
        <template slot="title"><i class="el-icon-message"></i>常用页</template>
          <el-menu-item index="list">列表页</el-menu-item>
          <el-menu-item index="form">表单页</el-menu-item>
      </el-submenu>
      <el-menu-item index="charts"><i class="el-icon-menu"></i>图表页</el-menu-item>
      <el-menu-item index="end"><i class="el-icon-setting"></i>结束页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#navbar-wrap {
  width: 140px;
  position: fixed;
  top: 0;
  bottom: 0;
  background: #eef6f6;
  overflow: hidden;
  box-shadow:1px 0px 5px #999;
  img {
    width: 70%;
    display: block;
    margin: 15%;
  }
}

</style>
