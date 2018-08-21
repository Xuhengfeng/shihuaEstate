/*
 * @Author: 徐横峰 
 * @Date: 2018-05-19 13:32:30 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-08-22 00:11:08
 * @description: 待看日程
 */
<template>
    <div>
        <div :key="index" v-for="(item,index) in appointList">
            <!-- 一个列表项 -->
            <div class="header">
                <div class="description">
                    <div>
                        <span class="time">{{item.appointDate1}}</span> 
                        <span class="day">{{item.appointDate2}}</span>
                        <div class="status"><span>{{item.status}}</span></div>
                    </div>
                    <div>约看{{item.houseNum}}套房</div>
                    <div class="" v-if="item.status=='已取消'||item.status=='已预约'?false:true" ><el-button type="danger" @click="open(item)">取消预约</el-button></div>
                </div>
                <div class="broker" v-if="item.broker">
                    <div class="image"><img :src="item.broker.photo" :onerror="null|onerrorImg"></div>
                    <div>
                        <p><span>{{item.broker.emplName}}</span>{{item.broker.positionName}}</p>
                        <p>{{item.broker.phone}}</p>
                    </div>
                </div>
            </div>
            <o-house-list :isShowNum="isShowNum" :list="item.houseList" ></o-house-list>
        </div>
        
         <!-- 空页面 -->
        <o-empty :titles="'还没有待看日程'" 
                 :btns="'去选房'"
                 :isEmpty="numbol"
                 @myEvent="myEvent"></o-empty>
    </div>
</template>

<script>
import oHouseList from "../../base/houseList/houseList";
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol:false,
            isShowNum:5,//默认第一个
            appointList: [],//约看日程
            num: 0,//按钮
            cancelCause:"", //取消原因
            selectCity: JSON.parse(localStorage.selectCity),//当前城市
            cancel:true  //取消预约
        };
    },
    created() {
        this.appointListRequest();
    },
    methods:{
        //自定义事件 去选房
        myEvent() {
            this.$router.push({path: '/buyHouse'})
        },
        selectItem(index){
            this.num=index;
        },
        appointListRequest() {
            this.$http
            .get(this.$url.URL.APPOINT_READYLIST+"?pageNo=1&scity="+JSON.parse(localStorage.selectCity).value)
            .then(response => {
                try{
                    let newData = response.data.data;
                    newData.forEach(item => {
                        //修正时间格式形如2018.01.01
                        item.appointDate1 = item.appointDate.split(' ')[0].replace(/[^0-9]/ig, ".").slice(0,-1);
                        item.appointDate2 = item.appointDate.split(' ')[1];
                        item.houseList.forEach(item2=>item2.houseTag = item2.houseTag.split(','));
                        switch(item.status){
                            case 0:item.status = '确认中'; break;
                            case 1:item.status = '预约成功';break;
                            case 2: item.status = '已取消';break;
                        }
                    });
                    this.appointList = newData;
                    this.appointList.length == 0? this.numbol=true : this.numbol=false;
                }catch(error){
                    this.numbol=true;
                }
            });
        },
        open(item) {
            this.$prompt('请输入你取消的内容', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputErrorMessage: '内容不能为空!'
            }).then(({ value }) => {
                this.cancelcause(item,value);
            });
        },
        cancelcause(item,value) {
            this.$http
            .post(this.$url.URL.APPOINT_CANCEL,{
                scity:this.selectCity,
                id:item.id,
                cancelCause: value
            })
            .then(response => {
                this.$message({type: 'success',message: '提交成功'});
            });
        }
    },
    components: {
        oHouseList,
        oEmpty
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
            &:nth-of-type(3)>button{
                background: #ff4343;
                color: #ffffff;
                width: 100px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                text-align: center;
                border-radius: 10px;
                cursor:pointer;
                padding: 0;
                border: 0;

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