<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Link' }">链接列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ flag === 'add' ? '新增链接' : '编辑链接' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" disabled placeholder="系统自动生成，不用填写"></el-input>
                </el-form-item>
                <el-form-item label="包含的字符串">
                    <el-input v-model="form.include" placeholder="请填写包含的字符串"></el-input>
                </el-form-item>
                <el-form-item label="排除的字符串">
                    <el-input v-model="form.exclude" placeholder="请填写排除的字符串"></el-input>
                </el-form-item>
                <el-form-item label="关联模板">
                    <el-input v-model="form.pageid" placeholder="请填写关联模板ID"></el-input>
                </el-form-item>
                <el-form-item label="链接采集区域">
                    <el-input type="textarea" :rows="3" v-model="form.area" placeholder="请填写表链接采集区域"></el-input>
                </el-form-item>
                <el-form-item label="表达式类型">
                    <el-select clearable filterable v-model="form.exp_type" placeholder="请选择表达式类型">
                        <el-option v-for="(value, key, index) in extractor_type_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="抽取表达式">
                    <el-input v-model="form.expression" placeholder="请填写抽取表达式"></el-input>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select clearable filterable v-model="form.spider_type" placeholder="请选择爬虫类型">
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

const GLOBAL_URL = {
    extractor_type_list: `extractor/type/list`,
    spider_list: `type/list`,
    submit_create: `template/create?type=Link`,
    submit_edit: `template/update?type=Link`
}

export default {
    name: 'handlelink',
    data() {
        return {
            form: {
                id: '',
                include: '',
                exclude: '',
                pageid: '',
                area: '',
                expression: '',
                extractor_list: '',
                spider_type: '',
                exp_type: ''
            },
            extractor_type_list: {},
            spider_list: {},
            flag: this.$route.query.type
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
                this.$message.error('网络错误，抽取器类型列表获取失败');
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
            // 判断是否是编辑页面
            if (this.flag === 'edit') {
                let pData = JSON.parse(this.$route.query.data);
                delete pData.spider_name;
                this.form = pData;
            }
        },
        onSubmit() {
            let postData = JSON.parse(JSON.stringify(this.form))
            let postURL = this.flag === 'edit' ? GLOBAL_URL.submit_edit : GLOBAL_URL.submit_create
            this.$http.post(postURL, postData).then(res => {
                if (res.body.msg === 'Success') {
                    this.$message.success('编辑成功！');
                    this.goBack();
                }
            }, res => {
                this.$message.error('网络错误，请稍后重试');
            })
        },
        goBack() {
            this.$router.push('Link')
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
