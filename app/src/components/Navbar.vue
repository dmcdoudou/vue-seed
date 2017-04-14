<template>
  <div id="navbar-wrap">
    <img src="../assets/img/logo.png" alt="">
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
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
  box-shadow:1px 0px 5px #333;
  img {
    width: 70%;
    display: block;
    margin: 15%;
  }
}

</style>
