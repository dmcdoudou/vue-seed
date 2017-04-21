<template>
  <div id="topbar-wrap">
    <el-row>
      <el-col :span="19">{{sentenceArr[count]}}</el-col>
      <el-col :span="3" class="animated fadeInLeft">
        您好，<span class="name">{{userName}}</span>
      </el-col>
      <el-col :span="2">
        <a href="">
          退出 <i class="fa fa-sign-out"></i>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mock from 'mockjs'
Mock.mock(/getUserName/, {
  name:'@first'
})
export default {
  name: 'topbar',
  data () {
    return {
      userName:'游客',
      count:0,
      sentenceArr: [
        '凡所有相，皆为虚妄',
        '色即是空，空即是色',
        '诸恶莫作，众善奉行',
        '色即是空，空即是色2',
      ]
    }
  },
  created() {
    this.fetchData();
    this.changeSentence();
  },
  methods: {
    fetchData () {
      this.$http.get('getUserName').then(res => {
        this.userName = res.body.name;
      }, res => {
        console.log(res)
      })
      this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?citykey=101010100').then(res => {
        // this.userName = res.body.name;
        console.log(res)
        console.log('http://www.voidcn.com/blog/lgh1992314/article/p-6151991.html')
      }, res => {
        console.log(res)
      })
    },
    changeSentence() {
      let sl = this.sentenceArr.length;
      let self = this;
      setInterval(function () {
          self.count++;
          if (self.count === sl) {
            self.count = 0;
          }
      }, 1000)
    }

  }
}
</script>

<style scoped lang="less">
#topbar-wrap {
  padding: 20px 15px;
  overflow: hidden;
  border-bottom: 1px solid #e7eaec;
  .name {
    color: #1ab394;
    font-weight: 600;
  }
  a {
    color: #486a68;
    text-decoration: none;
    &:hover {
      color: #ec4758;
    }
  }
  i {
    vertical-align: bottom;
    font-size: 20px;
  }
}
</style>
