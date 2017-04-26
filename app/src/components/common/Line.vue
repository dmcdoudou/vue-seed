<template>
  <div class="charts">
    <!-- 绝壁大坑：如果不在模板中绑定父组件中传过来的数据的话，子组件完全不更新 -->
    <div id="myChart" style="width:1160px;height:300px;" :nomeaning="lineData.xAxis"></div>
  </div>
</template>

<script>

import Vue from 'vue'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'lineChart',
  props: ['lineData'],
  beforeCreate () {
    console.log('beforeCreate 钩子执行...');
  },
  cteated () {
    console.log('cteated 钩子执行...');
  },
  beforeMount () {
    console.log('beforeMount 钩子执行...');
  },
  mounted() {
    console.log('mounted 钩子执行...');
  },
  beforeUpdate () {
    console.log('beforeUpdate 钩子执行...');
  },
  updated() {
    console.log('updated 钩子执行...');
    this.renderLine();
  },
  beforeDestroy () {
    console.log('beforeDestroy 钩子执行...');
  },
  destroyed () {
    console.log('destroyed 钩子执行...');
  },
  methods: {
    renderLine() {
      let data = this.lineData;
      let opts = {
        title: { text: '' },
        grid: {
            top: '3%',
            left: '3%',
            right: '3%',
            bottom: '12%',
            containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
            bottom: 0,
            data:['最高气温','最低气温']
        },
        xAxis: {
            data: data.xAxis.length===0 ? ['星期一','星期二','星期三','星期四','星期五'] : data.xAxis
        },
        yAxis: {
          type: 'value',
          axisLabel: {
              formatter: '{value} °C'
          }
        },
        series: [{
            name: '最高气温',
            type: 'line',
            data: data.series1.length===0 ? [0,0,0,0,0] : data.series1
        },{
            name: '最低气温',
            type: 'line',
            data: data.series2.length===0 ? [0,0,0,0,0] : data.series2
        }]
    }
    this.myChart = echarts.init(document.querySelector('#myChart'))
    this.myChart.setOption(opts)
    }
  }
}
</script>

<style lang="less">

</style>
