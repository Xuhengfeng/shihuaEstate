/*
 * @Author: 徐横峰 
 * @Date: 2018-05-19 13:32:30 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-19 17:11:21
 * @description: 待看日程
 */
<template>
    <div>
        <div v-for="(item,index) in readyList" :key="index">
            <!-- 一个列表项 -->
            <div class="header">
                <div class="description">
                    <div>
                        <span class="time">{{item.appointDate1}}</span> 
                        <span class="day">{{item.appointDate2}}</span>
                        <div class="status">
                            <span v-for="(item,index) in spanList" 
                                    :key="index"
                                    :class="index==num?'spanBgColor':''"
                                    @click="selectItem(index)">{{item}}</span>
                            <!-- <span>预约成功</span>
                            <span>已取消</span> -->
                        </div>
                    </div>
                    <div>约看2套房</div>
                    <div>取消预约</div>
                </div>
                <div class="broker">
                    <div class="image"><img :src="item.broker.photo"></div>
                    <div>
                        <p><span>{{item.broker.emplName}}</span>{{item.broker.positionName}}</p>
                        <p>{{item.broker.phone}}</p>
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
            readyList: [],//约看日程
        };
    },
    created() {
        this.readyListRequest();
    },
    methods:{
        selectItem(index){
            this.num=index;
        },
        readyListRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.APPOINT_READYLIST+"?pageNo="+1+"&scity="+city)
            .then(response => {
                let data = response.data.data;
                data.forEach(item => {
                    //修正时间格式形如2018.01.01
                    item.appointDate1 = item.appointDate.split(' ')[0].replace(/[^0-9]/ig, ".").slice(0,-1);
                    item.appointDate2 = item.appointDate.split(' ')[1];
                });
                this.readyList = response.data.data;
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
        div{overflow: hidden;
            &:nth-of-type(1){
                height: 28px;
                margin-bottom: 15px;
            }
            &:nth-of-type(2){
                font-size: 14px;
                color: #000000;
                margin-bottom: 15px;
            }
            &:nth-of-type(3){
                float: left;
                background: #ff4343;
                color: #ffffff;
                width: 100px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                text-align: center;
                border-radius: 10px;
                cursor:pointer;
            }
        }
        .time{float:left;margin: 5px 15px 0 0;font-size: 18px;color: #000000}
        .day{float:left;margin: 5px 25px 0 0}
        .status{
            float: left;
            span{
                float:left;
                display: inline-block;
                padding: 5px 10px;
                border-radius: 10px;
                font-size: 14px;
                cursor:pointer;
            }
        }
        
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