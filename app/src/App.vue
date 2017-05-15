<template>
    <div id="app">
        <topbar></topbar>
        <div class="con-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import topbar from './components/common/Topbar'
export default {
    name: 'app',
    components: {
        topbar: topbar
    }
}
</script>
<style lang="less">
body {
    margin: 0;
    padding: 0;
    background: #f3f3f4;
    .con-wrap {
        padding: 15px;
    }
}
</style>
