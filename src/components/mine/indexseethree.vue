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
                        <p><span>{{item.brokerName}}</span>{{item.broker.positionName}}</p>
                        <p>{{item.complaintPhone}}</p>
                    </div>
                </div>
            </div>
            <o-house-list :list="item.houseList" :isShowNum="isShowNum"></o-house-list>
        </div>

        <!-- 弹窗 -->
        <div class="model" v-show="isShowModel">
            <div class="shadow"></div>
            <div class="content">
                <h3>评价经纪人<img src='../../imgs/mine/delete.png' @click="closeModel()"></h3>
                <div class="model-hd">
                    <img :src="broker.photo" ref="avatar">  
                    <div class="description">
                        <div class="name">{{broker.deptName}}<span>{{broker.positionName}}</span></div>
                        <div class="des">
                            <span>{{broker.sex}}</span>
                        </div>
                        <div class="tag">
                            <span>销售达人</span>
                            <span>销售达人</span>
                            <span>销售达人</span>
                        </div>
                        <div class="phone">
                            联系电话 : <br>
                            {{broker.phone}}
                        </div>
                    </div>
                </div>
                <div class="model-bd">
                    <textarea v-model="textAreaVal"
                            cols="30" 
                            rows="10"  
                            placeholder="舒适的看房体验,死我们的服务宗旨"
                            style="resize: none"></textarea>
                    <div class="star fr">
                        <div class="title fl">星级</div>
                        <el-rate v-model="value1"></el-rate>
                    </div>
                </div>
                <div class="model-ft">
                    <div class="title">标签</div>
                    <div class="tags">
                        <span v-for="(item,index) in brokerAssesstags" 
                            :key="index"
                            :class="item.isClikeTag?'bgColor':''"
                            @click="clickTag(item,index)">{{item.name}}</span>
                    </div>
                    <div class="commit" @click="commit()">提交</div>
                </div>
            </div>
        </div>

        <!-- 空页面 -->
        <o-empty :titles="'还没有已看记录'" 
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
            value1: null,//星星级别
            numbol:false,
            spanList: ['确认中','预约成功','已取消'],//状态
            num:0,
            completelist: [],//已看列表
            isShowNum: 1,//考虑选择哪个模板渲染
            broker: {
                photo: null,
            },
            textAreaVal: null,//用户评价的内容
            isShowModel: true,
            city: JSON.parse(localStorage.selectCity),
            brokerAssesstags: null,//经纪人评价
        };
    },
    created() {
        this.seeHouseRecordRequest();
        this.brokerRequest();
        this.brokerAssess();
    },
    methods:{
        //自定义事件 去选房
        myEvent() {
            this.$router.push({path: '/buyHouse'})
        },
        selectItem(index){
            this.num=index;
        },
        seeHouseRecordRequest() {
            this.$http
            .get(this.$url.URL.APPOINT_COMPLETE+"?pageNo="+1+"&scity="+this.city.value)
            .then(response => {
                let newData = response.data.data;
                newData.forEach(item => {
                    //修正时间格式形如2018.01.01
                    item.scheduleTime1 = item.scheduleTime.split(' ')[0].replace(/[^0-9]/ig, ".").slice(0,-1);
                    item.scheduleTime2 = item.scheduleTime.split(' ')[2];
                });
                this.completelist = newData;
                this.completelist.length==0? this.numbol=true : this.numbol=false;
            });
        },
        // 经纪人信息
        brokerRequest() {
            let isStar = [];
            let brokerId = 1147;//假如经纪人的id是1147 后面再替换 
            this.$http
            .get(this.$url.URL.BROKERS+this.city.value+"/"+brokerId)
            .then(response=>{
                this.broker = response.data.data;
                for(let i=0;i<response.data.data.grade;i++){
                    isStar.push(true);
                }
                this.broker.isStar = isStar;
            })
        },
        // 经纪人评价
        brokerAssess() {
            this.$http
            .get(this.$url.URL.DICTIONARY_DICTYPE+'BROKER_EVALUATE_TAG')
            .then(response=>{
                response.data.data.forEach(item=>{
                    item.isClikeTag = false;
                })
                this.brokerAssesstags = response.data.data;
            })
        },
        // 关闭模态框
        closeModel() {
            this.isShowModel = false;
        },
        //点击标签
        clickTag(item,index) {
            this.brokerAssesstags[index].isClikeTag = !this.brokerAssesstags[index].isClikeTag;
        },
        // 提交
        commit() {
            let tagStr = '';
            this.brokerAssesstags.forEach(item=>{
                if(item.isClikeTag){
                    tagStr += item.value+'#';             
                }
            })
            let params = {
                "appHouseRecId": this.broker.id,//已看记录id
                "brokerId": this.broker.brokerId,//经纪人id
                "content": this.textAreaVal,//评价内容
                "grade": this.value1,//星级评分
                "tag": tagStr,//评价标签
                "unicode": sessionStorage.token//用户标识
            }
            this.$http
            .post(this.$url.URL.BROKERS_BROKEREVAL,params)
            .then(response=>{
                if(response.data.status !== 1) {
                    this.$alert(response.data.msg);
                }
            })
        }
    },
    components: {
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
.model{
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.8);
    }
    .content{
        position: fixed;
        top: 100px;
        left: 50%;
        width: 614px;
        transform: translateX(-50%);
        background: #ffffff;
        h3{
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            color: #ffffff;
            background: red;
            img{
                width: 35px;
                height: 35px;
                position: absolute;
                right: 22px;
                top: 8px;
                cursor: pointer;
            }
        }
        .model-hd{
            display: flex;
            flex-flow: row nowrap;
            margin: 22px 30px 0;
            padding-bottom: 15px;
            border-bottom: 1px solid #cacaca;
            img{
                flex: 90px 0 0;
                width: 90px;
                height: 90px;
                margin-right: 20px;
                background: url('../../imgs/mine/avatar.png') no-repeat center center;
                background-size: cover; 
                border-radius: 50%;
                border-style: none;
            }
            .description{
                flex: 1;
                position: relative;
                .name{
                    margin-bottom: 14px;
                    font-size: 24px;
                    span{
                        margin-left: 10px;
                        font-size: 16px
                    }
                }
                .des{
                    margin-bottom: 14px;                    
                    font-size: 16px;
                    margin-right: 10px;
                }
                .tag{
                    margin-bottom: 0;
                }
                .phone{
                    position: absolute;
                    right: 0;
                    top: 20px;
                    line-height: 1.2;
                }
            }
        }
        .model-bd{
            overflow: hidden;
            padding: 22px 30px 0;
            textarea{
                width: 100%;
                border: none;
                outline: none;
                background: #e5e5e5;
            }
            .star{
                width: 200px;
                height: 20px;
                line-height: 20px;
                .title{
                    margin-right: 10px;
                }
            }
        }
        .model-ft{
            padding: 0 30px 40px;      
            .title{
                font-size: 20px;
                padding: 7px 0 15px 7px;
            }
            .tags{
                margin-bottom: 22px;
                span{
                    display: inline-block;
                    background: #cccccc;
                    margin: 0 15px 15px 0;
                    padding: 10px;
                    cursor: pointer;
                    &:nth-of-type(1) {background: #edf9ff;color: #00a8ff}
                    &:nth-of-type(2) {background: #fff2ed;color: #ff7f50}
                    &:nth-of-type(3) {background: #ebfff3;color: #00b969}

                }
            }
            .commit{
                width: 260px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: #ffffff;
                background: #ff4343;
                border-radius: 5px;
                margin: 0 auto;
            }      
        }
    }
}

.bgColor{
    background: #ff4343!important;
    color: #ffffff!important;
}
</style>