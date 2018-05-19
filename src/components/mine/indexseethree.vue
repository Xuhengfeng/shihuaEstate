<template>
    <div>
        <div v-for="(item,index) in completelist" :key="index">
            <div class="header">
                <div class="description">
                    <div class="one">
                        <span class="time">{{item.scheduleTime1}}</span> 
                        <span class="day">{{item.scheduleTime2}}</span>
                    </div>
                    <div class="two">约看2套房</div>
                    <div class="three">
                        <div>评价</div>
                        <div>投诉</div>
                    </div>
                </div>
                <div class="broker">
                    <div class="image"><img :src="item"></div>
                    <div>
                        <p><span>{{item.brokerName}}</span>xxxx</p>
                        <p>{{item.complaintPhone}}</p>
                    </div>
                </div>
            </div>
            <o-house-list :list="item.houseList" :isShowNum="isShowNum"></o-house-list>
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
            completelist: [],//已看列表
            isShowNum: 1,//考虑选择哪个模板渲染
        };
    },
    created() {
        this.seeHouseRecordRequest();
    },
    methods:{
        selectItem(index){
            this.num=index;
        },
        seeHouseRecordRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.APPOINT_COMPLETE+"?pageNo="+1+"&scity="+city)
            .then(response => {
                let newData = response.data.data;
                newData.forEach(item => {
                    //修正时间格式形如2018.01.01
                    item.scheduleTime1 = item.scheduleTime.split(' ')[0].replace(/[^0-9]/ig, ".").slice(0,-1);
                    item.scheduleTime2 = item.scheduleTime.split(' ')[2];
                });
                this.completelist = newData;
                console.log(newData)
            });
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
        .image{
            overflow: hidden;
            margin-right:10px;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            img{
                flex:90px 0 0;
                width: 100%;
                height: 100%;
            }
        }
        .image+div{
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