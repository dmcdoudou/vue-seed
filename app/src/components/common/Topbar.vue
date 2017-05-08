<template>
    <div id="topbar-wrap">
        <el-row>
            <el-col :span="19" class="sen">{{sentenceArr[count]}}</el-col>
            <el-col :span="3" class="animated fadeInLeft">
                您好，<span class="name">{{userName}}</span>
            </el-col>
            <el-col :span="2">
                <a href="" @click.prevent="open">
          退出 <i class="fa fa-sign-out"></i>
        </a>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Mock from 'mockjs'
Mock.mock(/getUserName/, {
    name: '@first'
})
export default {
    name: 'topbar',
    data() {
        return {
            userName: '游客',
            count: 0,
            sentenceArr: [
                '凡所有相，皆是虚妄。若见诸相非相，则见如来',
                '色不异空，空不异色，色即是空，空即是色',
                '勿以善小而不为 勿以恶小而为之',
                '一切有为法，如梦幻泡影，如露亦如电，应作如是观',
            ]
        }
    },
    created() {
        this.fetchData();
        this.changeSentence();
    },
    methods: {
        fetchData() {
            this.$http.get('getUserName').then(res => {
                this.userName = res.body.name;
            }, res => {
                console.log(res)
            })
        },
        changeSentence() {
            let sl = this.sentenceArr.length;
            let self = this;
            setInterval(function() {
                self.count++;
                if (self.count === sl) {
                    self.count = 0;
                }
            }, 5000)
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
    padding: 20px 15px;
    overflow: hidden;
    border-bottom: 1px solid #e7eaec;
    background: #fff;
    .sen {
        color: #486a68;
    }
    .name {
        color: #1ab394;
        font-weight: 600;
    }
    a {
        color: #486a68;
        text-decoration: none;
        &:hover {
            color: #ec4758;
        }
    }
    i {
        vertical-align: bottom;
        font-size: 20px;
    }
}
</style>
