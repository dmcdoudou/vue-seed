<template>
    <div class="pie-wrap">
        <h1>{{tl}}</h1>
        <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="10">
                <el-input placeholder="项目" v-model="item.name"></el-input>
            </el-col>
            <el-col :span="8">
                <el-input-number :min="0" :max="100000000" v-model="item.value"></el-input-number>
            </el-col>
            <el-col :span="4">
                <el-button @click="add">添加</el-button>
            </el-col>
        </el-row type="flex" justify="center">
        <div :id="rootid" style="width:560px;height:260px;" :nomeaning="pieData" ref="pieroot"></div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
    // 引入折线图组件
require('echarts/lib/chart/pie')
    // 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
    name: 'pie',
    props: ['pieData', 'tl', 'rootid'],
    data() {
        return {
            item: {
                name:'',
                value:0
            },
            items: []
        }
    },
    mounted() {
        this.renderPie();
    },
    methods: {
        renderPie() {
            let opts = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    center: ['50%', '50%'],
                    data: this.items,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            }
            this.myChart = echarts.init(this.$refs.pieroot)
            this.myChart.setOption(opts)
        },
        add(v) {
            let one = JSON.parse(JSON.stringify(this.item))
            this.items.push(one);
            this.renderPie();
        }
    }
}
</script>

<style lang="less" scoped>
h1 {
    text-align: center;
    color: #555;
}
</style>
