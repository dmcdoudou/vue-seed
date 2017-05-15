<template>
    <div>
        模板管理
    </div>
</template>
<script>
import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/spidertypelist/, {
        "code": 0,
        "msg": '',
        "status": true,
        "data|5": [{
            id: '@integer(1,9)',
            name: '@first'
        }]
    })
}

export default {
    name: 'template',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {

    }
}
</script>
<style scoped lang="less">

</style>
