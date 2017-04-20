<template>
  <div id="topbar-wrap" class="animated fadeInDown">
    <el-row>
      <el-col :span="19">这里是可选菜单</el-col>
      <el-col :span="3"> 您好，<span class="name">{{userName}}</span></el-col>
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
      userName:'游客'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('getUserName').then(res => {
        this.userName = res.body.name;
      }, res => {
        console.log(res)
      })
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
