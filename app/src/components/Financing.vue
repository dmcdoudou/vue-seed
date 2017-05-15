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
    </div>
</template>
<script>
import pie from './common/Pie';
export default {
    name: 'list',
    components: {
        pie: pie
    },
    data() {
        return {}
    }
}
</script>
<style scoped lang="less">
</style>
