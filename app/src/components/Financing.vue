<template>
    <div class="list">
        <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="12">
                <pie tl="月收入" rootid="income"></pie>
            </el-col>
            <el-col :span="12">
                <pie tl="月支出" rootid="outcome"></pie>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <bar></bar>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import pie from './common/Pie';
import bar from './common/Bar';
export default {
    name: 'list',
    components: {
        pie: pie,
        bar: bar
    },
    data() {
        return {}
    }
}
</script>
<style scoped lang="less">
</style>
