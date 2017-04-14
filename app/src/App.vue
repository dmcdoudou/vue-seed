<template>
  <div id="app">
    <navbar></navbar>
    <div id="con-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  name: 'app',
  components: {navbar}
}
</script>

<style lang="less">
body {
  margin:0;
  padding:0;
  #con-wrap {
    margin-left: 140px;
    overflow: hidden;
    padding: 20px;
  }
}

</style>
