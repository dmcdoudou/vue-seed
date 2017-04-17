<template>
  <div id="app">
    <navbar></navbar>
    <div id="right-wrap">
      <topbar></topbar>
      <div class="con-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/common/Navbar'
import topbar from './components/common/Topbar'
export default {
  name: 'app',
  components: {
    navbar:navbar,
    topbar:topbar
  }
}
</script>

<style lang="less">
body {
  margin:0;
  padding:0;
  #right-wrap {
    margin-left: 140px;
    overflow: hidden;
    .con-wrap {
      padding:20px;
    }
  }
}

</style>
