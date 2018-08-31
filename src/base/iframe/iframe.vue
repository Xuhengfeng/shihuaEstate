<template>
    <!-- 路由外页面 -->
    <div class="wrapper" style="height:1000px">
        <div class="test"></div>
        <iframe id="myframe" name="myframe" ref="myFrame" height="100%" :src="contentUrl" frameborder="0" scrolling="no"></iframe>
    </div>
</template>
<script>


export default {
    data() {
        return {
            contentUrl: "",
            myHeight: 6000//默认高度 
        }
    },
    created() {
        this.contentUrl = this.$route.query.contentUrl;
        this.guideDetailRequest();
    },
    methods: {
        // 计算内容高度
        calcFrameHeight() {
            
            var iframe = document.getElementById('myframe');
            // var body = iframe.contentWindow.document.getElementsByTagName('html')[0];
            console.dir(iframe);
            console.dir(iframe.ownerDocument);
            console.dir(iframe.ownerDocument.documentElement);
            console.log(iframe.ownerDocument.documentElement.offsetHeight)
            console.log(iframe.ownerDocument.documentElement.scrollHeight)
            // console.log(body)
            // let oheight = this.$refs.myFrame.ownerDocument.body.scrollHeight;
            // console.dir(this.$refs.myFrame)
            // console.dir(this.$refs.myFrame.style)
            // console.log(oheight)

            // this.myHeight = iframe.ownerDocument.documentElement.scrollHeight;
            // this.$refs.myFrame.style.height = iframe.ownerDocument.documentElement.scrollHeight+'px';
        },
        guideDetailRequest() {
            var url = this.contentUrl;
            this.urlparams = this.parseUrl(url);
            console.log(url);
            var api = 'https://custh5s.shyj.cn/detailpage/guideDetail.html?id=21';

            this.$http.get(api)
            .then(res => {
                console.log(res)
            })
            
        },
        parseUrl(url) {
            var urlStr=url.split("?")[1].split("&");
            var urlparams = {};
            for( let i=0;i<urlStr.length;i++){
                var item = urlStr[i].split("=")
                urlparams[item[0]]=item[1]
            }
            return urlparams;
        }
},
    mounted() {
        

        let that = this;
        var iframe = document.getElementById('myframe');
        iframe.onload = function() {
            that.calcFrameHeight();
        }
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
    height: 100%;
}
</style>
