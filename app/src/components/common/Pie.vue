<template>
    <div class="pie-wrap">
        <h1>{{tl}}</h1>
        <el-row :gutter="20" type="flex" justify="center">
            <el-col :span="12">
                <el-input placeholder="项目"></el-input>
            </el-col>
            <el-col :span="12">
                <el-input-number @change="handleChange" :min="0" :max="10"></el-input-number>
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
            item: []
        }
    },
    mounted() {
        this.renderPie();
    },
    updated() {
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
                    data: [{
                        value: 335,
                        name: '直接访问'
                    }, {
                        value: 310,
                        name: '邮件营销'
                    }, {
                        value: 234,
                        name: '联盟广告'
                    }, {
                        value: 135,
                        name: '视频广告'
                    }, {
                        value: 1548,
                        name: '搜索引擎'
                    }],
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
        handleChange(v) {
            console.log(v)
        }
    }
}
</script>
<style lang="less">
h1 {
    text-align: center;
    color: #555;
}
</style>
