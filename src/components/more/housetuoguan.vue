<template>
    <div class="home">
        <div class="header">
            <img src="../../imgs/home/housetuoguan.png">
        </div>
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
                        <li v-for="item in cleanimgtwo" class="fl"><img :src="item.imgUrl"/></li>
                    </ul>
                     <ul>
                        <li v-for="item in txtone" class="fl txtone">{{item.contenttxt}}</li>
                    </ul>
                    <ul>
                        <li v-for="item in txt" class="fl txt">{{item.content}}</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="section bgColor1">
            <div class="container">
                <div class="clean">
                    <div class="title">托管流程</div>
                    <div class="text">只需四步，世华托管轻松帮您搞定房屋委托</div>
                    <ul>
                        <li v-for="item in cleanimgthree" class="fl txttwo"><img :src="item.imgUrl"/></li>
                    </ul>
                    <ul>
                        <li v-for="item in txttwo" class="fl order">{{item.contenttxt}}</li>
                    </ul>
                </div>
            </div>
        </div>

         <div class="section bgColor1">
            <div class="container">
                <div class="clean">
                    <ul class="message">
                        <li class="fl">北海业务中心：0779-6889999</li>
                        <li>南宁业务中心：17344208467  尹先生</li>
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
                {imgUrl:require("../../imgs/home/one.png")},
                {imgUrl:require("../../imgs/home/two.png")},
                {imgUrl:require("../../imgs/home/three.png")}],
            cleanimgthree:[
                {imgUrl:require("../../imgs/home/tianxie.png")},
                {imgUrl:require("../../imgs/home/order.png")},
                {imgUrl:require("../../imgs/home/tijiao.png")},
                {imgUrl:require("../../imgs/home/qianyue.png")}],
            txt:[
                {content:" 所有琐碎事情均由托管中心代处理，让房屋得到更好的爱护，使房子增值保值 "},
                {content:" 托管流程严谨规范，收益有保障，规避租金无法及时收取的风险 "},
                {content:" 房东不需要为和租客纠纷而烦恼；无论房东在何地都无须担忧 "},
             ],
             txtone:[{contenttxt:"品质服务"},{contenttxt:"收益稳健"},{contenttxt:"省心省力"},],
             txttwo:[{contenttxt:"提交委托信息"},{contenttxt:"预约看房时间"},{contenttxt:"制定出租方案"},{contenttxt:"签订托管合同 "}]
		}
	},
}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 500px;
    position: relative;
    img{
        width: 1920px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
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
.clean:nth-child(1) li{
    padding-left: 55px;
}
.txtone{
    font-size: 24px;
    color: #333333;
    margin-left: 100px;
    width: 205px;
    padding: 26px 0 16px 0;
}
.txttwo{
    width: 130px;
    margin-left: 83px;
}
.order{
    width: 150px;
    padding-top:20px;
    color: #333333;
    font-size: 24px;
    margin-left: 55px;
}
.txt{
    width: 304px;
    height: 44px;
    text-align: center;
    line-height:25px;
}
.message{
    padding-bottom: 60px;
}
.message li{
    margin-left: 170px;
    text-align: center;
}

</style>
