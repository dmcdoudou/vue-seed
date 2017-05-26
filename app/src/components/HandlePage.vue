<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Page' }">模板列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ flag === 'add' ? '新增模板' : '编辑模板' }}</el-breadcrumb-item>
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
                    <el-select clearable filterable v-model="form.downloader_type" placeholder="请选择下载方式">
                        <el-option v-for="(value, key, index) in downloader_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select clearable filterable v-model="form.spider_type" placeholder="请选择爬虫类型">
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

const GLOBAL_URL = {
    downloader_list: `download/type`,
    spider_list: `type/list`,
    submit_create: `template/create?type=Page`,
    submit_edit: `template/update?type=Page`
}

export default {
    name: 'handlepage',
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
            spider_list: {},
            flag: this.$route.query.type
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
            // 判断是否是编辑页面
            if (this.flag === 'edit') {
                let pData = JSON.parse(this.$route.query.data);
                delete pData.downloader_type_name;
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
