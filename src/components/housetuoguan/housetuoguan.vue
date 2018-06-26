<template>
    <div class="home">
        <div class="header"></div>
        <div class="section bgColor1">
            <div class="container">
                <div class="clean">
                    <div class="title">我们的服务</div>
                    <div class="text">世华托管依托广西世华易居房地产代理有限公司的规模优势，为客户构建全方位的管家体系，全面解决业主的房屋租赁的后顾之忧</div>
                    <ul>
                        <li v-for="item in cleanimg" class="fl"><img :src="item.imgUrl"/></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="container">
                <div class="clean">
                    <div class="title">我们的优势</div>
                    <div class="text">世华托管依托广西世华易居房地产代理有限公司的规模优势，为客户构建全方位的管家体系，全面解决业主的房屋租赁的后顾之忧</div>
                    <ul>
                        <li v-for="item in cleanimg" class="fl"><img :src="item.imgUrl"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
          data() {
		return {
			cleanimg:[
                {imgUrl:require("../../imgs/home/baojiebu.png")},
                {imgUrl:require("../../imgs/home/gongchenbu.png")},
                {imgUrl:require("../../imgs/home/yewubu.png")}],
            cleanimgtwo:[
                {imgUrl:require("../../imgs/home/baojiebu.png")},
                {imgUrl:require("../../imgs/home/gongchenbu.png")},
                {imgUrl:require("../../imgs/home/yewubu.png")}]
		}
	},
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 480px;
    background-color: #F5F5F5;
    background-image: url(../../imgs/home/housetuoguan.png);
    background-repeat: no-repeat;
    background-position: center 0;
    background-attachment: fixed;
    background-size: 1920px 717px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.title{
    font-size: 36px;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 16px;
    color: #333333;
}
.text{
    text-align: center;
    color: #333333;
    font-size: 18px;
    padding-bottom: 50px;
}
.bgColor1{
    background: #f9f9f9;
}
.section[data-v-7b63ac08] {
    overflow: hidden;
    height: 500px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.section .container{
    height: 100%;
    padding-bottom: 50px;
}
.clean>ul>li{
    padding-left: 55px;
}
</style>
