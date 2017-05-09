<template>
    <div>
        <div class="hello">
        </div>
        <div class="words-wrap">
            <h1 class="animated fadeIn">Hi! I'm <span class="green">Jason</span>Bai</h1>
            <h2 class="animated flipInX">front-end developer & photographer, welcome to my world.</h2>
        </div>
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
    background: url(../assets/img/bg.jpg) no-repeat;
    background-size: cover;
    position: fixed;
    top: 62px;
    right: 0px;
    left: 140px;
    bottom: 0px;
    z-index: -2;
    // 以下是模糊滤镜效果
    -webkit-filter: blur(10px);
    -o-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
}

.words-wrap {
    position: absolute;
    top: 40%;
    left: 20%;
    color: #fff;
    h1 {
        font-size: 3em;
        margin: 10px;
        .green {
            color: #1ab394
        }
    }
    h2 {
        margin: 10px;
    }
}
</style>
