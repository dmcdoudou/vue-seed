<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Seeds' }">种子列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ flag === 'add' ? '新增种子' : '编辑种子' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" disabled placeholder="系统自动生成，不用填写"></el-input>
                </el-form-item>
                <el-form-item label="种子表达式">
                    <el-input v-model="form.key" placeholder="请填写种子表达式"></el-input>
                </el-form-item>
                <el-form-item label="种子状态">
                    <el-switch v-model="form.status" on-text="ON" off-text="OFF"></el-switch>
                </el-form-item>
                <el-form-item label="种子解析类型">
                    <el-select clearable filterable v-model="form.parser" placeholder="请选择种子解析类型">
                        <!-- 数据源是对象的时候，这么渲染出列表，要记得绑定和添加唯一的KEY -->
                        <el-option v-for="(value, key, index) in parse_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select clearable filterable v-model="form.spider_type" placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in spider_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="关联模板">
                    <!-- 添加number修饰符将字符转成数字 -->
                    <el-input v-model.number="form.pageid" placeholder="请填写关联模板ID"></el-input>
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
    parse_list: `seed/parse`,
    spider_list: `type/list`,
    submit_create: `template/create?type=Seeds`,
    submit_edit: `template/update?type=Seeds`
}

export default {
    name: 'handleseeds',
    data() {
        return {
            form: {
                id: '',
                key: '',
                parser: '',
                pageid: '',
                spider_type: '',
                status: true,
            },
            parse_list: {},
            spider_list: {},
            flag: this.$route.query.type
        }
    },
    created() {
        this.getParseList()
        this.getSpiderList()
        this.renderPage()
    },
    methods: {
        getParseList() {
            this.$http.get(GLOBAL_URL.parse_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.parse_list = res.body.data
                }
            }, res => {
                this.$message.error('网络错误，解析类型列表获取失败');
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
                // 这是一个坑，文档里说开关的Model的类型只能是布尔型
                pData.status = pData.status === 1 ? true : false
                delete pData.parse_name;
                delete pData.spider_name;
                this.form = pData;
            }
        },
        onSubmit() {
            let postData = JSON.parse(JSON.stringify(this.form))
            postData.status = postData.status === true ? 1 : 0
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
            this.$router.push('Seeds')
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
