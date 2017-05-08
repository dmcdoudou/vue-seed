<template>
    <div id="navbar-wrap">
        <img src="../../assets/img/logo.png" alt="logo">
        <el-menu default-active="hello" @open="handleOpen" @close="handleClose" :unique-opened="isUnique" :router="isRouter">
            <el-menu-item index="hello"><i class="fa fa-home"></i>欢迎光临</el-menu-item>
            <el-submenu index="">
                <template slot="title"><i class="fa fa-dollar"></i>财务管理</template>
                <el-menu-item index="list">现金流管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="charts"><i class="fa fa-area-chart"></i>天气变化</el-menu-item>
            <el-menu-item index="end"><i class="fa fa-coffee"></i>欢迎再来</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            isUnique: true,
            isRouter: true
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
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
    box-shadow: 1px 0px 2px #ccc;
    z-index: 2;
    i.fa {
        font-size: 18px;
        padding-right: 10px;
    }
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
