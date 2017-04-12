<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="3">
        <navbar></navbar>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  name: 'app',
  components: {navbar}
}
</script>

<style>
body {
  margin:0;
  padding:0;
}

</style>
