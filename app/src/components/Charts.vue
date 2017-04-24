<template>
  <div class="charts">
    <el-row class="sel-row">
      <el-col :span="2" class="sel-label">选择城市：</el-col>
      <el-col :span="3">
        <el-select v-model="sel" filterable clearable placeholder="请选择城市" @change="getData">
            <el-option
              v-for="(item,index) in options"
              :label="item.label"
              :value="item.value"
              :key="index">
            </el-option>
          </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-card class="box-card">
          {{'实时温度：' + cityData.wendu + '℃'}}
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card class="box-card">
          {{'空气质量：' + ( cityData.aqi || '暂无' )}}
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          {{cityData.ganmao}}
        </el-card>
      </el-col>
    </el-row>

    <div class="chart-wrap">
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>近五天温度走势</span>
              <i class="fa fa-exchange ct"></i>
            </div>
            <div class="charts">
              <div id="myChart" style="width:1160px;height:300px;"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图组件
require('echarts/lib/chart/line')
// 引入提示框和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
// 引入城市列表
import arr from '../assets/data/citylist.json'

export default {
  name: 'charts',
  data () {
    return {
      cityData: {},
      options: arr,
      sel: '101010100',
      opts: {
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
              data: []
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
              data: []
          },{
              name: '最低气温',
              type: 'line',
              data: []
          }]
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini',{params:{citykey:this.sel}}).then(res => {
        console.log('http://www.voidcn.com/blog/lgh1992314/article/p-6151991.html')
        console.log('http://www.cnblogs.com/wisewrong/p/6402183.html')
        console.log(res.body)
        if (res.body.status === 1000 ) {
          let data = res.body.data;
          this.cityData = data;
          this.renderChart(data.forecast);
        }
      }, res => {
        console.log(res)
      })
    },
    renderChart(data) {
      this.opts.xAxis.data = [];
      this.opts.series[0].data = [];
      this.opts.series[1].data = [];
      data.forEach(function(v,i) {
        this.opts.xAxis.data.push(v.date);
        this.opts.series[0].data.push(v.high.match(/\d/g).join(''));
        this.opts.series[1].data.push(v.low.match(/\d/g).join(''));
      }.bind(this))
    this.myChart = echarts.init(document.querySelector('#myChart'))
    this.myChart.setOption(this.opts)
    }
  }
}
</script>


<style scoped lang="less">
.sel-row {
  margin-bottom: 20px;
  .sel-label {
    line-height: 36px;
  }
}
.chart-wrap {
  margin-top: 20px;
}
.el-card__header {
  padding:10px 20px !important;
}
.ct {
  float: right;
  line-height: 21px;
  &:hover {
    color: #1ab394;
    cursor: pointer;
  }
}

</style>
