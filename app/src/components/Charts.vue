<template>
  <div class="charts">
    <h1>施工中</h1>

  </div>
</template>

<script>
export default {
  name: 'charts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.jsonp('http://wthrcdn.etouch.cn/weather_mini?citykey=101010100').then(res => {
        console.log(res.body)
        console.log('http://www.voidcn.com/blog/lgh1992314/article/p-6151991.html')
      }, res => {
        console.log(res)
      })
    }
  }
}
</script>


<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}

</style>
