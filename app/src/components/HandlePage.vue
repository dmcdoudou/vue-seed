<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Page' }">模板列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$route.query.type === 'add' ? '新增模板' : '编辑模板' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="模板名称">
                    <el-input v-model="form.key"></el-input>
                </el-form-item>
                <el-form-item label="示例地址">
                    <el-input v-model="form.key"></el-input>
                </el-form-item>
                <el-form-item label="下载方式">
                    <el-select v-model="form.parser" placeholder="请选择下载方式">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select v-model="form.type" placeholder="请选择爬虫类型">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="goBack">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
let debug = 0;
if (debug) {
    Mock.mock(/spidertypelist/, {

    })
}

const ROOT_URL = 'http://172.20.207.28:5000';
const GLOBAL_URL = {
    submit: `${ROOT_URL}/api/spider/template/list`
}

export default {
    name: 'handlepage',
    data() {
        return {
            form: {
                id: '',
                key: '',
                parser: '',
                pageid: '',
                type: '',
                status: true,
            }
        }
    },
    created() {
        let data = this.$route.query.data;
        if (data) {
            let pData = JSON.parse(data);
            // 这是一个坑，文档里说开关的Model的类型只能是布尔型
            pData.status = pData.status === 1 ? true : false
            this.form = pData;
        }
    },
    methods: {
        onSubmit() {
            this.$http.post(GLOBAL_URL.submit, {
                params: this.form
            }).then(res => {
                if (res.body.msg === 'Success') {
                    this.$message.success('编辑成功！');
                    this.goBack();
                }
            }, res => {
                this.$message.error('网络错误，请稍后重试');
            })
        },
        goBack() {
            this.$router.push('Page')
        }
    }
}
</script>
<style scoped lang="less">
.form-wrap {
    margin: 40px auto 0;
    width: 50%
}
.el-select {
    width: 100%
}
</style>
