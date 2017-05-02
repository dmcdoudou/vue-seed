<template>
  <div class="end">
    <div class="endImg animated fadeInUp">
      <img src="../assets/img/end.png" title="F12">
    </div>
  </div>
</template>

<script>
export default {
  name: 'end',
  created () {
    console.info('嗨，如果你发现了我，说明我们很有缘哦，可以加我微信：1105843831');
  }
}
</script>

<style scoped lang="less">
.endImg {
  text-align: center;
  img {
    margin-top: 130px;
    width: 160px;
  }
}

</style>
