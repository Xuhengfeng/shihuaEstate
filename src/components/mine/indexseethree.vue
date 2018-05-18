<template>
    <div>
        <div v-for="(item,index) in [1,1,1]" :key="index">
            <div class="header">
                <div class="description">
                    <div class="one">
                        <span class="time">2018.11.02</span> 
                        <span class="day">全天</span>
                    </div>
                    <div class="two">约看2套房</div>
                    <div class="three">
                        <div>评价</div>
                        <div>投诉</div>
                    </div>
                </div>
                <div class="broker">
                    <img src="../../imgs/home/avatar.png">
                    <div>
                        <p><span>张三</span>高级经纪人</p>
                        <p>123 1234 1234</p>
                    </div>
                </div>
            </div>
            <o-house-list></o-house-list>
        </div>
    </div>
</template>

<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
            spanList: ['确认中','预约成功','已取消'],//状态
            num:0,//默认第一个
        };
    },
    methods:{
        selectItem(index){
            this.num=index;
        }
    },
    components: {
        oHouseList
    }
}
</script>

<style lang="less" scoped>
.header{
    position: relative;
    overflow: hidden;
    padding-top: 60px;
    padding-bottom: 25px;
    border-bottom: 1px solid #cacaca;
    .description{
        div{overflow: hidden;}
        .one{
            height: 28px;
            margin-bottom: 15px;
        }
        .two{
            font-size: 14px;
            color: #000000;
            margin-bottom: 15px;
        }
        .three{
            >div{
                display: inline-block;
                width: 70px;
                height: 30px;
                line-height: 30px;
                background: #ff4343;
                margin-right: 20px;
                cursor:pointer;
                text-align: center;
                color: #ffffff;
                font-size: 14px;
                border-radius: 10px;
            }
        }
        .time{float:left;margin: 5px 15px 0 0;font-size: 18px;color: #000000}
        .day{float:left;margin: 5px 25px 0 0}
    }
    .broker{
        position: absolute;
        display: flex;
        flex-flow: row nowrap;
        width: 285px;
        height: 90px;
        bottom: 25px;
        right: 0;
        img{
            margin-right:10px;
            flex:90px 0 0;
            width: 90px;
            height: 90px;
        }
        img+div{
            flex: 1;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            p{margin-bottom: 10px;
                span{
                    font-size: 24px;
                    color:rgba(0,0,0,0.8);
                    margin-right: 10px;
                }
                &:nth-of-type(2){margin:0}
            }
        }
        
    }
}
.spanBgColor{
    background: #e5e5e5;
}
</style>