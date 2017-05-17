<template>
    <div id="topbar-wrap">
        <el-row>
            <el-col :span="3" class="logo">
                网络信息采集系统
            </el-col>
            <el-col :span="15" :offset="1" class="sen">
                <el-menu theme="dark" :default-active="nowPath" :unique-opened="isUnique" :router="isRouter" mode="horizontal">
                    <el-menu-item index="/seed">种子管理</el-menu-item>
                    <el-menu-item index="/template">模板管理</el-menu-item>
                    <el-menu-item index="/link">链接管理</el-menu-item>
                    <el-menu-item index="/form">表单管理</el-menu-item>
                    <el-menu-item index="/weather">天气预报</el-menu-item>
                    <el-menu-item index="/financing">个人理财</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3" class="animated fadeInDown">
                您好, <span class="name">{{userName}}</span>
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
import Mock from 'mockjs'
Mock.mock(/getUserName/, {
    // data:[{
    //     mid:99,
    //     pid:2,
    //     name:'aaa',
    //     children:[{
    //         cid:33,
    //         name:'bbb'
    //     },{
    //         cid:44,
    //         name:'ccc'
    //     }]
    // }]
})
export default {
    name: 'topbar',
    data() {
        return {
            userName: '董事长',
            isUnique: true,
            isRouter: true,
            nowPath: this.$route.path
        }
    },
    created() {
        // 获取用户数据，暂时注释
        // this.fetchData();
    },
    methods: {
        fetchData() {
            this.$http.get('getUserName').then(res => {
                this.userName = res.body.name;
            }, res => {
                console.log(res)
            })
        },
        open() {
            this.$message({
                showClose: true,
                message: '你没登陆，为啥要退出呢？',
                type: 'warning'
            });
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
        color: #20a0ff;
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
        vertical-align: middle;
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
