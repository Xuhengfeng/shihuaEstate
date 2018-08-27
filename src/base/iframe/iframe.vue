<template>
    <!-- 路由外页面 -->
    <div class="wrapper">
        <iframe id="myframe" name="myframe" ref="myFrame" :height="myHeight" :src="contentUrl" frameborder="0" scrolling="auto" ></iframe>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contentUrl: "",
            myHeight: 6000
        }
    },
    created() {
        this.contentUrl = this.$route.query.contentUrl;
    },
    methods: {
        // 计算内容高度
        calcFrameHeight() {
            
            var iframe = document.getElementById('myframe');
            console.log(iframe.ownerDocument.documentElement)
            console.dir(iframe.ownerDocument.documentElement)
            var body = iframe.contentWindow.document.getElementsByTagName('html')[0];
            console.log(body)
            // let oheight = this.$refs.myFrame.ownerDocument.body.scrollHeight;
            // console.dir(this.$refs.myFrame)
            // console.dir(this.$refs.myFrame.style)
            // console.log(oheight)
            // this.myHeight = oheight;
        }
    },
    mounted() {
        
        setTimeout(()=>{
            this.calcFrameHeight();
        },1000);
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
}
</style>
