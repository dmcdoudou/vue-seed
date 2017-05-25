<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/Schema' }">表单列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ flag === 'add' ? '新增表单' : '编辑表单' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.id" disabled placeholder="系统自动生成，不用填写"></el-input>
                </el-form-item>
                <el-form-item label="表单名称">
                    <el-input v-model="form.table_name" placeholder="请填写表单名称"></el-input>
                </el-form-item>
                <el-form-item label="表单采集区域">
                    <el-input type="textarea" :rows="3" v-model="form.area" placeholder="请填写表单表单采集区域"></el-input>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select clearable filterable v-model="form.spider_type" placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in spider_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                </el-form-item>

                <!-- 系统字段区域 -->
                <el-form-item label="系统字段">
                    <div v-for="(value, index) in sys_sel_arr" class="sys-wrap">
                        <el-input :key="index" :value="value|getLabel" style="width:95%" disabled></el-input>
                        <i class="el-icon-delete delBtn1" @click="delSysFiled(index)"></i>
                    </div>
                </el-form-item>

                <!-- 自定义字段区域 -->
                <el-form-item label="自定义字段">
                    <div v-for="(obj, index) in cut_sel_arr" class="cut-wrap" :key="index">
                        <el-form-item class="row-inner" label="字段序号：">
                            <el-input v-model="obj.a" placeholder="请填写字段序号" style="width:70%"></el-input>
                        </el-form-item>
                        <el-form-item class="row-inner" label="字段名称：">
                            <el-input v-model="obj.a" placeholder="请填写字段名称" style="width:70%"></el-input>
                        </el-form-item>
                        <el-form-item class="row-inner" label="表达式类型：">
                            <el-select clearable filterable v-model="obj.a" placeholder="请选择表达式类型" style="width:70%">
                                <el-option v-for="(value, key, index) in extractor_type_list" :label="key" :value="value" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="row-inner" label="抽取表达式：">
                            <el-input v-model="obj.a" placeholder="请填写抽取表达式" style="width:70%"></el-input>
                        </el-form-item>
                        <el-form-item class="row-inner" label="数据处理类型：">
                            <el-select clearable filterable v-model="obj.a" placeholder="请选择数据处理类型" style="width:70%">
                                <el-option v-for="(value, key, index) in filter_type_list" :label="key" :value="value" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="row-inner" label="处理表达式：">
                            <el-input v-model="obj.a" placeholder="请填写数据处理表达式" style="width:70%"></el-input>
                        </el-form-item>
                        <i class="el-icon-delete delBtn2" @click="delCutFiled(index)"></i>
                    </div>
                </el-form-item>

                <!-- 添加字段区域 -->
                <el-form-item label="添加字段">
                    <el-select v-model="filed_type" placeholder="请选择字段类型" class="f_type">
                        <el-option label="系统字段" value="system"></el-option>
                        <el-option label="自定义字段" value="custom"></el-option>
                    </el-select>
                    <el-select v-if="filed_type === 'system'" v-model="sys_filed_value" placeholder="请选择系统字段" class="f_type">
                        <el-option v-for="(value, key, index) in sys_filed_list" :label="key" :value="value" :key="index"></el-option>
                    </el-select>
                    <el-button type="primary" icon="plus" @click.prevent="addFiled"></el-button>
                </el-form-item>

                <!-- 提交表单区域 -->
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="goBack">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <goup/>
    </div>
</template>
<script>
const ROOT_URL = 'http://186.21.520.88:5555';
const GLOBAL_URL = {
    extractor_type_list: `${ROOT_URL}/api/spider/extractor/type/list`,
    filter_type_list: `${ROOT_URL}/api/spider/extractor/filter/type/list`,
    sys_filed_list: `${ROOT_URL}/api/spider/system/field/list`,
    spider_list: `${ROOT_URL}/api/spider/type/list`,
    submit_create: `${ROOT_URL}/api/spider/template/create?type=Schema`,
    submit_edit: `${ROOT_URL}/api/spider/template/update?type=Schema`
}
let sysList = {}
import goup from './common/GoUp'
export default {
    name: 'handleschema',
    components: {
        goup: goup
    },
    data() {
        return {
            flag: this.$route.query.type,
            form: {
                id: '',
                table_name: '',
                area: '',
                spider_type: ''
            },
            extractor_type_list: {},
            filter_type_list: {},
            sys_filed_list: {},
            spider_list: {},
            filed_type: 'system',
            sys_filed_value: 1,
            sys_sel_arr: [],
            cut_sel_arr: [],

        }
    },
    created() {
        this.getExtractorTypeList()
        this.getFilterTypeList()
        this.getSysFiledList()
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
        getFilterTypeList() {
            this.$http.get(GLOBAL_URL.filter_type_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.filter_type_list = res.body.data
                }
            }, res => {
                this.$message.error('网络错误，数据处理类型列表获取失败');
            })
        },
        getSysFiledList() {
            this.$http.get(GLOBAL_URL.sys_filed_list).then(res => {
                if (res.body.msg === 'Success') {
                    this.sys_filed_list = res.body.data
                    sysList = res.body.data
                }
            }, res => {
                this.$message.error('网络错误，系统字段类型列表获取失败');
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
        addFiled() {
            if (this.filed_type === 'system') {
                this.sys_sel_arr.push(this.sys_filed_value)
            } else {
                this.cut_sel_arr.push({
                    a: '',
                    b: '',
                    c: ''
                })
            }
        },
        // 删除系统字段
        delSysFiled(index) {
            this.sys_sel_arr.splice(index, 1)
        },
        // 删除自定义字段
        delCutFiled(index) {
            this.cut_sel_arr.splice(index, 1)
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
            this.$router.push('Schema')
        }
    },
    filters: {
        // 获取value对应的key，真TMD不容易
        getLabel(v) {
            for (let k in sysList) {
                if (v == sysList[k]) {
                    return k
                }
            }
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

.f_type {
    width: 44%
}

.delBtn1 {
    color: #475669;
    &:hover {
        cursor: pointer;
        color: #FF4949;
    }
}

.sys-wrap {
    margin-bottom: 10px;
}

.cut-wrap {
    padding: 15px;
    border: 1px solid #ccc8c8;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    .cut-input {
        width: 46%;
        margin-bottom: 5px;
    }
    .row-inner {
        margin-bottom: 5px;
    }
    .delBtn2 {
        position: absolute;
        top: 15px;
        right: 15px;
        color: #475669;
        &:hover {
            cursor: pointer;
            color: #FF4949;
        }
    }
}

</style>
