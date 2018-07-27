<template>
    <div class="container">
         <div class="header">
             <img :src="imgcityurl.url">
        </div>
    </div>
</template>
<script>
export default {
		data() {
                return {
                    imgcityurl:"",
                    imgUrl:[
                        {url:require("../../imgs/more/beihai.png")}, {url:require("../../imgs/more/weihai.png")}, {url:require("../../imgs/more/dali.png")},
                         {url:require("../../imgs/more/zhanjiang.png")}, {url:require("../../imgs/more/guilin.png")}, {url:require("../../imgs/more/haikou.png")},
                          {url:require("../../imgs/more/qionghai.png")}, {url:require("../../imgs/more/nanning.png")}, {url:require("../../imgs/more/yangjiang.png")},
                           {url:require("../../imgs/more/huizhou.png")}, {url:require("../../imgs/more/heyuan.png")}, {url:require("../../imgs/more/qingyuan.png")},
                            {url:require("../../imgs/more/guiyang.png")}, {url:require("../../imgs/more/liuzhou.png")}, {url:require("../../imgs/more/hengyang.png")},
                             {url:require("../../imgs/more/yueyang.png")}, {url:require("../../imgs/more/fanggangcheng.png")}, {url:require("../../imgs/more/shantou.png")}
                    ]
                }
			},
			created(){
				 this.imgcityurl = this.imgUrl[this.$route.params.id]
			},
}
</script>

<style lang="less" scoped>
 
</style>
