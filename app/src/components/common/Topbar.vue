<template>
    <div id="topbar-wrap">
        <el-row>
            <el-col :span="4" class="logo">
                <i class="fa fa-car"></i>&nbsp;&nbsp;网络信息采集系统
            </el-col>
            <el-col :span="15" class="sen">
                <el-menu theme="dark" :default-active="nowPath" :unique-opened="isUnique" :router="isRouter" mode="horizontal">
                    <el-menu-item index="/Seeds">种子管理</el-menu-item>
                    <el-menu-item index="/Page">模板管理</el-menu-item>
                    <el-menu-item index="/Link">链接管理</el-menu-item>
                    <el-menu-item index="/Schema">表单管理</el-menu-item>
                    <el-menu-item index="/weather">天气预报【5毛/月】</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3">
                <i class="fa fa-bell animated shake"></i>
                <span class="name">{{info}}</span>
            </el-col>
            <el-col :span="2">
                <a href="" @click.prevent="open" class="logout">
                    退出 <i class="fa fa-sign-out"></i>
                </a>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'topbar',
    data() {
        return {
            isUnique: true,
            isRouter: true,
            nowPath: this.$route.path
        }
    },
    methods: {
        open() {
            this.$message({
                showClose: true,
                message: '你没登陆，为啥要退出呢？',
                type: 'warning'
            });
        }
    },
    computed: {
        info() {
            let now = new Date()
            let hour = now.getHours()
            if (hour < 12) {
                return "上午好"
            } else if (hour < 14) {
                return "中午好"
            } else {
                return "下午好"
            }
        }
    }
}
</script>
<style scoped lang="less">
#topbar-wrap {
    padding: 0px 15px;
    overflow: hidden;
    border-bottom: 1px solid #e7eaec;
    background: #324157;
    color: #fff;
    .logo {
        color: #fff;
        font-weight: bold;
        line-height: 60px;
    }
    .sen {
        line-height: 60px;
        color: #486a68;
    }
    .name {
        line-height: 60px;
        font-weight: 600;
    }
    a {
        color: #fff;
        line-height: 60px;
        text-decoration: none;
        &:hover {
            color: #ec4758;
        }
    }
    i {
        vertical-align: text-bottom;
        font-size: 20px;
    }
    .logout {
        color: #bfcbd9;
        &:hover {
            color: #fff;
        }
    }
}
</style>
