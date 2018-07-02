<template>
    <!-- 路由外页面 -->
    <div class="wrapper">
        <iframe name="myframe" ref="myFrame" :height="myHeight" :src="contentUrl" frameborder="0" ></iframe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contentUrl: "",
            myHeight: ""
        }
    },
    methods: {
        // 计算内容高度
        calcFrameHeight() {
            let oheight = this.$refs.myFrame.ownerDocument.body.scrollHeight;
            this.contentUrl = this.$route.query.contentUrl;
            this.myHeight = oheight;
        }
    },
    mounted() {
        this.calcFrameHeight();
    }
}
</script>
<style lang="less" scoped>
.wrapper{
    width: 1170px;
    margin: 0 auto;
}
.wrapper iframe{
    width: 100%;
    min-height: 500px;
}
</style>
