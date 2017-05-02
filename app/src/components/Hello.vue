<template>
  <div class="hello">
    <div class="words-wrap">
      <h1 class="animated fadeIn">Hi! I'm <span class="green">Jason</span>Bai</h1>
      <h2 class="animated flipInX">front-end developer & photographer, welcome to my world.</h2>
    </div>
    <video autoplay loop id="vbg">
      <source src="../../static/video/clouds2.webm" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '待开发'
    }
  }
}
</script>


<style scoped lang="less">
.hello {
  margin: -15px;
  .words-wrap {
    position: absolute;
    top:40%;
    left: 20%;
    color: #fff;
    h1 {
      font-size: 3em;
      margin: 10px;
      .green {
        color:#1ab394
      }
    }
    h2 {
      // font-size: 2em;
      margin: 10px;
    }
  }
  // 实现视频背景
  #vbg {
    position: fixed;
    min-width: 90%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background: url(../assets/img/end.png) no-repeat;
    background-size: cover;
    // 以下是模糊滤镜效果
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
}
</style>
