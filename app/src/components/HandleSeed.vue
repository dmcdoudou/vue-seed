<template>
    <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/seed' }">种子列表</el-breadcrumb-item>
          <el-breadcrumb-item>{{ this.$route.query.type === 'add' ? '新增种子' : '编辑种子' }}</el-breadcrumb-item>
        </el-breadcrumb>
        {{ this.$route.query.data }}
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
        }
    },
    created() {
    },
    methods: {

    }
}
</script>
<style scoped lang="less">

</style>
