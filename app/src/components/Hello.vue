<template>
  <div class="hello">
    <div class="words-wrap">
      <h1 class="animated fadeIn">Hi! I'm <span class="green">Jason</span>Bai</h1>
      <h2 class="animated flipInX">front-end developer & photographer, welcome to my world.</h2>
    </div>
    <video autoplay loop id="vbg">
      <source src="../../static/video/subway.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'hello'
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
      margin: 10px;
    }
  }
  // 实现视频背景
  #vbg {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 62px;
    left: 140px;
    width: 90%;
    z-index: -100;
    background: url(../assets/img/subway.jpg) no-repeat;
    background-size: cover;
    // 以下是模糊滤镜效果
    -webkit-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
  }
}
</style>
