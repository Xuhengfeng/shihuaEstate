<template>
    <div>
        <div v-if="order">
            <ul>
                <li v-for="item in houseList"  >
                    <input class="inpt" type="checkbox" v-model="item.checked"/>
                    <div class="image">
                        <img :src="item.housePic"/>
                    </div>
                    <div class="description">
                        <div class="title">{{item.houseTitle}}</div>
                        <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                        <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTag}}</div>
                        <div class="tag">
                            <span>{{item.houseFeature}}</span>
                            <span>{{item.areaName}}</span>
                            <span>随时看房</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="totalPrice"><span>{{item.saleTotal}}</span>万</div>
                        <div class="sellPrice">单价<span>{{item.salePrice}}</span>元/平米</div>
                    </div>
                </li>
             </ul>
           <div class="orderdiv advantage" v-show="houseList.length">
               <el-checkbox v-model="allChecked">全选</el-checkbox><span style="margin-left:10px;font-size:14px" @click="del()">删除</span>
               <button class="btn" @click="appointHouse()">预约看房时间</button>
         </div> 
        </div>

        <div v-else>
            <div class="book-time">
                <div class="desc">个人信息</div>
                <div class="mesg">
                    <div>姓名<input placeholder="请输入你的姓名" v-model="username"></div>
                    <div class="call">电话 {{mobile}}</div>
                </div>
                <div class="desc">看房时间</div>
                <div class="date-picker"> 
                <ul class="dates"> 
                <li class="date selected" v-for="(item,index) in datelist" @click="appoint(item,$event,index)":class="index==fontcolor?'bgColor':''">
                    <div class="week-day">{{item.w}}</div>
                    <div class="month-info">
                    <div class="month-day">{{item.d}}</div>
                    <div class="month">{{item.m}}月</div>
                    </div>
                </li>
                </ul>
             </div>
                <div class="time-picker">
                    <span class="no-r left-r" @click="range($event,index)" v-for="(item,index) in appointRange":class="index==num?'bgColor':''">{{item.range}}</span>
                </div>
                 <div class="desc">待看经纪人</div>
                <div class="mesg">
                    <div>经纪人<input placeholder="选择经纪人" readonly v-model="brokerValue" @click="toggleBroker()"></div>      
               </div>
              </div>
                <div class="form-ft">
                    <button @click="commitRequest()">提交</button>
                </div>
              </div>
        <div class="brokerList" v-show="brokerFlag">
            <h3>选择经纪人</h3>
            <span class="close" @click="toggleBroker()">x</span>
            <ul>
                <li v-for="item in brokerLists" @click="selectBroker(item)">
                    <div>
                        <div class="image">
                            <img :src="item.photo" :onerror="null|onerrorImg">
                        </div>      
                        <div class="content">
                            <div class="one">
                                <div class="name"><span>{{item.emplName}}</span>{{item.positionName}}</div>
                                <div class="decription">
                                    <span>{{item.deptName}}</span>
                                    <span></span>
                                </div>
                                <div class="tag">
                                    <span>销售达人</span>
                                    <span>销售达人</span>
                                    <span>销售达人</span>
                                </div>
                            </div>
                            <div class="two">
                                <span>{{item.grade}}.0</span> 评分
                            </div>
                            <div class="three">
                                <div>联系电话:</div>
                                <div class="cellme">{{item.phone}}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <!--分页器-->
            <el-pagination class="oPagination"
                  @current-change="handleCurrentChange"
                  background
                  layout="prev, pager, next"
                  prev-text="上一页"
                  next-text="下一页"
                  :total="1000">
              </el-pagination>
        </div>

        <!-- 空页面 -->
        <o-empty :titles="'还没有待看房源'" 
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
            numbol: false,
            appointRange:[{range:"全天"},{range:"上午"},{range:"下午"},{range:"晚上"}],
            username: "", //姓名
            datelist:[],
            houseList: [],//待看房源列表
            selectItem: [],//选中的待看房源
            id:"",
            brokerFlag: false, //经纪人
            brokerLists: [], //经纪人列表
            brokerValue: "", //经纪人
            brokerId:"",     //经纪人id
            currentCity: JSON.parse(localStorage.selectCity),
            currenttime:"",
            mobile:JSON.parse(sessionStorage.userInfo).mobile ,//电话
            rangetime:"",
            appointDate:"",    //预约时间
            order:true,    //点击预约显示
            allChecked: false,//全选
            num:null,//高亮
            fontcolor:null,//高亮
        };
    },
    created() {
        this.readyHouseListRequest();
        this.brokerListRequest(1);
        this.week()
    },
    computed: {
        //待看房源列表
        appintList() {
            return this.$store.state.appintList;
        }
    },
    watch: {
        //全选
        allChecked() {
            if(this.allChecked) {
                this.houseList.forEach(item=>{
                    item.checked = true
                })
            }else{
                this.houseList.forEach(item=>{
                    item.checked = false
                })
            }
        },
        //待看房源列表
        appintList() {
            this.readyHouseListRequest();
            this.order = true;
        }
    },
    methods:{
        //自定义事件 去选房
        myEvent() {
            this.$router.push({path: '/buyHouse'})
        },
        //日期
        week(){
                this.$http
                .get(this.$url.URL.DICTIONARY_CURRENTDATETIME)
                .then(response => {
                    this.currenttime = response.data.data.currentDateTime;
                    let nowTime = this.currenttime;
                    let arr = [];
                    for(let i=0;i<5;i++) {
                        let time = nowTime+24*60*60*1000*i
                        arr.push(this.format(time));
                    }
                    this.datelist = arr;
                });
        },
        format(time) {
            let newTime = new Date(time);    
            let  Y = newTime.getFullYear();
            let  W = newTime.getDay();
            switch(W){
                case 0: W='周日';break;
                case 1: W='周一';break;
                case 2: W='周二';break;
                case 3: W='周三';break;
                case 4: W='周四';break;
                case 5: W='周五';break;
                case 6: W='周六';break;
            }
            let  M = (newTime.getMonth()+1 < 10 ? '0'+(newTime.getMonth()+1) : newTime.getMonth()+1) ;
            let  D = newTime.getDate();
            let num = this.PrefixInteger(D,2);
            return {
                y: Y,
                m: M,
                w: W,
                d: D,
                all:Y+"-"+M +"-"+num
            };            
        },
        //待看房源请求
        readyHouseListRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.APPOINT_DETAILLIST+"?pageNo="+1,{
				  scity: city
				})
            .then(response => {
                response.data.data.forEach(item=>{
                     item.checked = false
                });
                this.houseList = response.data.data;
                this.houseList.length==0? this.numbol=true : this.numbol=false;
            });
        },
        selectBroker(item) {
            this.brokerFlag = false;
            this.brokerValue = item.emplName;
            this.brokerId = item.id;
        },
        handleCurrentChange(val) {
            this.brokerListRequest(val);		
        },
        brokerListRequest(num){  
            this.$http
                .post(this.$url.URL.BROKERS_LIST, {scity: this.currentCity.value,pageNo: num})
                .then(response => {
                this.brokerLists = response.data.data;
                });
        },
        toggleBroker() {
           this.brokerFlag = !this.brokerFlag;
        },
        //点击预约看房时间按钮
        appointHouse() {
            this.houseList.forEach(item=>{
                //判断有选中的情况下
                if(item.checked == true){
                    this.order = false;
                    this.selectItem.push({
                        scity: item.houseScity,
                        sdid: item.houseSdid
                    })
                }
            })
            if(!this.selectItem.length){
                this.$alert('至少选中一个房源');
            }
        },
        //提交预约看房
        commitRequest() {
            let scity = this.cityCode ? this.cityCode : this.currentCity.value;
            let params = {
                appointDate: this.appointDate, //预约时间
                appointMobile: this.mobile, //手机号
                appointName: this.username, //姓名
                appointRange:this.rangetime ,//预约时段类型
                brokerId: this.brokerId,      //经纪人id 
                houseList: this.selectItem
              };
              if (
                scity == "" ||
                this.brokerId == "" ||
                this.username == "" ||
                this.rangetime == "" ||
                this.appointDate == ""
            ) {
                this.$alert("信息不能为空!");
            }else {
                this.$http.post(this.$url.URL.APPOINT_HOUSE, params).then(response => {
                    if(response.data.status==1){
                        this.$alert("提交成功");
                        this.readyHouseListRequest();
                        this.order = true;
                    }
                });
            }
        },
        appoint(item,e,index) {
            if(index ==0){
                this.fontcolor=index
                this.appointDate =item.all
            }
             if(index ==1){
                this.fontcolor=index
                this.appointDate =item.all
            }
             if(index ==2){
                this.fontcolor=index
                this.appointDate =item.all
            }
             if(index ==3){
                this.fontcolor=index
                this.appointDate =item.all
            }
             if(index ==4){
                this.fontcolor=index
                this.appointDate =item.all
            }
             if(index ==5){
                this.fontcolor=index
                this.appointDate =item.all
            }
        },
        //时间位数补齐  
        PrefixInteger(num, n) {
            return (Array(n).join(0) + num).slice(-n);
        },
        range(e,index) {
             this.rangetime = e.target.innerHTML
             if(index ==0){
                    this.num=index
                this.rangetime = "ALL_DAY"
             
             }
             if(index ==1){
                     this.num=index
                this.rangetime = "FORENOON"
             
             }
             if(index ==2){
                   this.num=index
                this.rangetime = "AFTERNOON"
               
             }
             if(index ==3){
                 this.num=index
                this.rangetime = "NIGHT"
                 
             }
        }
    },
    components: {
        oHouseList,
        oEmpty
    }
}
</script>

<style lang="less" scoped>

ul > li {
  display: flex;
  flex-flow: row nowrap;
  padding: 20px 0;
  border-bottom: 1px solid #cacaca;
  // 左边
  .image {
    flex: 232px 0 0;
    width: 232px;
    height: 175px;
    margin-right: 35px;
    background: #e6e6e6;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 中间
  .description {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      font-size: 22px;
      color: #000000;
    }
    .info {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    .attention {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    .tag > span {
      padding: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      &:nth-of-type(1) {
        background: #edf9ff;
        color: #00a8ff;
      }
      &:nth-of-type(2) {
        background: #fff2ed;
        color: #ff7f50;
      }
      &:nth-of-type(3) {
        background: #ebfff3;
        color: #00b969;
      }
    }
  }
  // 右边
  .r-content {
    flex: 150px 0 0;
    width: 150px;
    text-align: right;
    .collection {
      font-size: 16px;
      margin-bottom: 30px;
      color: #000000;
    }
    .totalPrice {
      color: #fe0000;
      font-size: 14px;
      margin-bottom: 30px;
      span {
        font-size: 24px;
        margin-right: 10px;
      }
    }
    .sellPrice {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
.inpt{
    margin: auto;
}
.orderdiv{
    height: 80px;
    padding: 40px;
}
.btn{
    border: 0;
    margin-left: 70px;
    border-radius: 5px;
    font-size: 16px;
    width: 150px;
    height: 40px;
    text-align: center;
    background: #fe0000;
    color: white;
}
dl, dt, dd, ul, ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
.book-time {
    border-top: 1px solid #f1f1f1;
    padding: 12px 35px;
}
.book-time .desc {
    font-size: 16px;
    line-height: 16px;
    margin: 20px 0;
}
.book-time .date-picker .dates .date {
    cursor: pointer;
    width: 94px;
    height: 100px;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
}
 .book-time .date-picker .dates .date {
    margin-left: 25px;
    cursor: pointer;
    width: 94px;
    height: 53px;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
}
.book-time .date-picker .dates .date.selected {
    border: 1px solid #fe0000;
}
 .book-time .time-picker {
    margin-left: 25px;
    margin-top: 30px;
}
.book-time .time-picker>span.selected {
    background: #fe0000;
    color: #fff;
    border-color:#fe0000;
}
.book-time .time-picker>span {
    width: 11%;
    border: 1px solid #dbdbdb;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    line-height: 38px;
    padding: 0;
    // color: #394043;
}
.book-time input {
    margin-left: 15px;
    line-height: 28px;
    height: 30px;
    font-size: 16px;
    padding: 0 15px;
    border: 1px solid #d9dcde;
    border-radius: 2px;
    width: 300px;
}
.call{
    margin-top: 20px;
}
.mesg{
    margin-left: 25px;
}

.brokerList {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 614px;
  height: 642px;
  transform: translateX(-50%);
  background: #efefef;
  h3{
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #ffffff;
    background: #fe0000;
  }
  ul{
    max-height: 530px;
    overflow: auto;
    >li{
      overflow: hidden;
      cursor: pointer;
      height: 124px;
      position: relative;
      >div{
        margin: 0 10px;
        height: 124px;
        padding: 28px 0;
        box-sizing: border-box;
        // border-bottom: 1px solid #cacaca;
        .image {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #f5f5f5;
          position: absolute;
          top: 20px;
          left: 20px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .content {
          overflow: hidden;
          margin-left: 120px;
          display: flex;
          flex-flow: row nowrap;
          >div{
            flex: 1;
          }
          .one{
            .name{
              font-size: 16px;
              margin-bottom: 10px;
              span{
                font-size: 24px;
                color: rgba(0, 0, 0, 0.8);
                margin-right: 10px;
              }
            }
            .decription{
              margin: 0 15px 10px 0;
              span{
                font-size: 14px;
              }
            }
            .tag{
              display: flex;
              flex-flow: row nowrap;
              white-space: nowrap;
              span{
                font-size: 12px;
                margin-right: 10px;
                padding: 5px;
                &:nth-of-type(1){
                    background: #edf9ff;
                    color: #00a8ff;
                }
                &:nth-of-type(2){
                    background: #fff2ed;
                    color: #ff7f50;
                }
                &:nth-of-type(3){
                    background: #ebfff3;
                    color: #00b969;
                }
              }
            }
          }
          .two{
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            span{
              font-size: 24px;
              color: #ff0000;
            }
          }
          .three{
              margin-left: 60px;
            div{
              font-size: 16px;
              &:nth-of-type(1) {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
      &:hover{
        background: #ffffff;
      }
    }
  }
}
.pagination{
	width: 360px;
	margin-top: 20px;
	margin-left: 15%;
}
.form-ft{
    margin-right: 225px;
    margin-top: 30px;
  button{
    cursor: pointer;
    display: block;
    width: 280px;
    height: 40px;
    line-height: 40px;
    background: #fe0000;
    border: 0;
    margin: 0 auto;
    font-size: 18px;
    color: #ffffff;
    outline: none;
  }
}
.bgColor{
    background: #fe0000!important;
    border-color: #fe0000!important;
	color: #ffffff;
}
.close {
    cursor: pointer;  
     width: 24px;
    height: 25px;
    position: absolute;
    line-height: 20px;
    text-align: center;
    top: 10px;
    left: 587px;
    color: white;
    background: #535353;
    border-radius: 15px;
}
.oPagination{
    text-align: center;
}
</style>