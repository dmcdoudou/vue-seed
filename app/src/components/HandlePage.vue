<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Page' }">模板列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$route.query.type === 'add' ? '新增模板' : '编辑模板' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" disabled placeholder="系统自动生成，不用填写"></el-input>
                </el-form-item>
                <el-form-item label="模板名称">
                    <el-input v-model="form.name" placeholder="请填写模板名称"></el-input>
                </el-form-item>
                <el-form-item label="示例地址">
                    <el-input v-model="form.demo_url" placeholder="请填写示例地址"></el-input>
                </el-form-item>
                <el-form-item label="下载方式">
                    <el-select v-model="form.downloader_type" placeholder="请选择下载方式">
                        <el-option v-for="(value, key, index) in downloader_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select v-model="form.spider_type" placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in spider_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="链接器ID列表">
                    <el-input v-model="form.linkid_list" placeholder="请填写链接器ID列表，英文逗号分隔"></el-input>
                </el-form-item>
                <el-form-item label="元数据ID列表">
                    <el-input v-model="form.schemaid_list" placeholder="请填写元数据ID列表，英文逗号分隔"></el-input>
                </el-form-item>
                <el-form-item label="自定义JS">
                    <el-input type="textarea" :rows="3" v-model="form.js_text" placeholder="请填写page页面需要执行的js脚本"></el-input>
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
    downloader_list: `${ROOT_URL}/api/spider/download/type`,
    spider_list: `${ROOT_URL}/api/spider/type/list`,
    submit: `${ROOT_URL}/api/spider/seed/update`
}

export default {
    name: 'handleseeds',
    data() {
        return {
            form: {
                id: '',
                name: '',
                demo_url: '',
                downloader_type: '',
                js_text: '',
                linkid_list: '',
                schemaid_list: '',
                spider_type: ''
            },
            downloader_list: {},
            spider_list: {}
        }
    },
    created() {
        this.getDownloaderList()
        this.getSpiderList()
        this.renderPage()
    },
    methods: {
        getDownloaderList() {
            this.$http.get(GLOBAL_URL.downloader_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.downloader_list = res.body.data
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
            let data = this.$route.query.data;
            // 如果URL中有data数据，则是编辑页面
            if (data) {
                let pData = JSON.parse(data);
                // 这是一个坑，文档里说开关的Model的类型只能是布尔型
                pData.status = pData.status === 1 ? true : false
                this.form = pData;
            }
        },
        onSubmit() {
            let postData = JSON.parse(JSON.stringify(this.form))
            postData.status = postData.status === true ? 1 : 0
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
