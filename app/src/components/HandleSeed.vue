<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/seed' }">种子列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.$route.query.type === 'add' ? '新增种子' : '编辑种子' }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="序号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="种子解析类型">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="种子表达式">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="爬虫类型">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="种子状态">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="关联模板">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
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
        "code": 0,
        "msg": '',
        "status": true,
        "data|5": [{
            id: '@integer(1,9)',
            name: '@first'
        }]
    })
}

export default {
    name: 'link',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    created() {},
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style scoped lang="less">
.form-wrap {
    margin: 40px auto;
    width: 60%
}
</style>
