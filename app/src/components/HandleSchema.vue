<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Schema' }">表单列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$route.query.type === 'add' ? '新增表单' : '编辑表单' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" disabled placeholder="系统自动生成，不用填写"></el-input>
                </el-form-item>
                <el-form-item label="表单名称">
                    <el-input v-model="form.table_name" placeholder="请填写表单名称"></el-input>
                </el-form-item>

                <el-form-item label="表单区域表达式">
                    <el-input type="textarea" :rows="3" v-model="form.area" placeholder="请填写表单区域表达式"></el-input>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select v-model="form.spider_type" placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in spider_list" :label="key" :value="value" :key="index"></el-option>
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
const ROOT_URL = 'http://172.20.207.28:5000';
const GLOBAL_URL = {
    extractor_type_list: `${ROOT_URL}/api/spider/extractor/type/list`,
    spider_list: `${ROOT_URL}/api/spider/type/list`,
    submit: `${ROOT_URL}/api/spider/seed/update`
}

export default {
    name: 'handleschema',
    data() {
        return {
            form: {
                id: '',
                table_name: '',
                area: '',
                spider_type: ''
            },
            extractor_type_list: {},
            spider_list: {}
        }
    },
    created() {
        this.getExtractorTypeList()
        this.getSpiderList()
        this.renderPage()
    },
    methods: {
        getExtractorTypeList() {
            this.$http.get(GLOBAL_URL.extractor_type_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.extractor_type_list = res.body.data
                }
            }, res => {
                this.$message.error('网络错误，下载类型列表获取失败');
            })
        },
        getSpiderList() {
            this.$http.get(GLOBAL_URL.spider_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.spider_list = res.body.data
                }
            }, res => {
                this.$message.error('网络错误，爬虫类型列表获取失败');
            })
        },
        renderPage() {
            let type = this.$route.query.type;
            let data = this.$route.query.data;
            // 判断是否是编辑页面
            if (type === 'edit') {
                let pData = JSON.parse(data);
                this.form = pData;
            }
        },
        onSubmit() {
            let postData = JSON.parse(JSON.stringify(this.form))
            this.$http.post(GLOBAL_URL.submit, {
                params: postData
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
            this.$router.push('Schema')
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
