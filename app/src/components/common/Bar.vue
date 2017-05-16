<template>
    <div class="bar-wrap">
        <!-- 绝壁大坑：如果不在模板中绑定父组件中传过来的数据的话，子组件完全不更新 -->
        <div id="bar-dom" style="width:1300px;height:150px;" :nomeaning="a"></div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
    // 引入折线图组件
require('echarts/lib/chart/bar')
    // 引入提示框和图例组件
require('echarts/lib/component/tooltip')

export default {
    name: 'bar',
    props: ['a'],

    mounted() {
        this.renderLine();
    },
    updated() {
        this.renderLine();
    },
    methods: {
        renderLine() {
            let opts = {
                grid: {
                    top: '10%',
                    left: '3%',
                    right: '1%',
                    bottom: '1%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '￥ {value}'
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['月收入', '月支出']
                },
                series: [{
                    name: 'dfdf',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302]
                }, {
                    name: 'gafdadf',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302]
                }]
            }
            this.myChart = echarts.init(document.querySelector('#bar-dom'))
            this.myChart.setOption(opts)
        }
    }
}
</script>
<style lang="less">
</style>
