
<template>
	<div>
		<!--内容部分-->
		<div class="content">
			<div class="container">
				<!--右侧部分-->
				<div class="sidebar fr">
					<div style="margin-top: 100px;"><span style="font-size: 16px;">购房指南</span><span class="fr" style="font-size: 12px;color: rgba(0,0,0,0.7);">更多</span></div>
					<ul>
						<li class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-039-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
					</ul>
					<div class="adverTisementLine"></div>
					<div style="font-size: 16px;color: color: rgba(0,0,0,0.8);margin-top: 30px;">下载世华易居APP</div>
					<div style="margin-top: 30px;"><img src="../../imgs/buyhouse/erwm.png"/></div>
				</div>
				<!--左侧内容-->
				<div class="leftContent">
					
					<div class="item">
						<ul>
							<li>
								<div class="image">
									<img :src="brokerdetail.photo"/>
								</div>
								<div class="direciton">
									<div class="introduce" >{{brokerdetail.emplName}}</div>
									<div class="introduce">
                      <span class="word">所属门店：{{brokerdetail.deptName}}</span>
										 <span class="fr prices">{{brokerdetail.grade}}.0<span class="grade">评分</span></span>
                     	 <span class="fr brokerccloect"   @click="addcollectborker(brokerdetail,$event)" v-if="!brokerdetail.isCollect">收藏</span>
                        	 <span class="fr brokerccloect"  @click="addcollectborker(brokerdetail,$event)"  v-if="brokerdetail.isCollect">已收藏</span>
                                     </div> 
                                     <div class="introduce">
                                    	 <span class="word">收藏经纪人</span>
						
                                     </div> 
                                     <div class="introduce">
                                    	 <span class="word">世华工号：{{brokerdetail.emplAccNo}}</span>
										 
                                     </div> 
                                     <div class="introduce">
                                    	 <span class="word">联系电话：{{brokerdetail.phone}}</span>
										
                                     </div> 
								</div> 
							</li>
						</ul>
					</div>
                    <div class="peoplemes">
                        <div class="fl message">
                            <ul>
                                <li>入职时间：{{brokerdetail.joinDate}}</li>
                                  <li>综合评价：{{brokerdetail.emplFlag}}</li>
                                    <li>主营板块：科技园区</li>
                            </ul> 
				        </div> 
                        <div class="fr message">
                            <ul class="watchsee">
                                <li>{{brokerdetail.historyDealNum}}</li>
                                  <li>历史成交</li>
                            </ul> 
                             <ul class="watchsee">
                                <li>{{brokerdetail.byCollectNum}}</li>
                                  <li>被收藏</li>
                            </ul> 
                             <ul class="watchsee">
                                <li>{{brokerdetail.houseSeeNum}}</li>
                                  <li>带看量</li> 
                            </ul> 
				        </div> 
                    </div>

                    <!-- <div class="five">
                <div class="guanlianxiaoqu">
                    <div class="title">关联小区</div>
                    <div class="image fl">
                      <img src="bulidinfo.housePic" alt="" />
                    </div>
                    <div class="direciton">
                      <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;"> <span class="fr" style="font-size: 16px;color: ">收藏</span></div>
                      <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">90天成交套|套正在出租</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);"><span style="font-size: 14px;">万</span></span></div>
                      <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">建成</span><span class="fr">单价元/平米</span></div>
                      <div class="introduce ">
                        <span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); "></span>
                        <span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
                        <span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
                      </div>
                    </div>
                 </div>
                </div> -->

                 <div class="five">
                <div class="tongxiaoqu">
                    <div class="title">他在售房源</div>
                    <ul>
                      <li v-for="item in brokerhouselist">
                        <div class="image fl" @click="toSkip(item)">
                          <img :src="item.housePic" />
                        </div>
                        <div class="direciton">
                          <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle}} <span class="fr collect" @click.stop="collection(item,$event)">收藏</span></div>
                          <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.saleTotal}}<span style="font-size: 14px;">万</span></span></div>
                          <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseTag}}</span><span class="fr">单价{{item.salePrice }}元/平米</span></div>
                          <!-- <div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div> -->
                          <div class="introduce ">
                            <span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">{{item.houseFeature}}</span>
                            <span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">{{item.areaName}}</span>
                            <span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
                <div class="zhoubian">
                  <div class="title">他在租房源</div>
                  <ul>
                    <li v-for="item in brokerrenthouselist">
                      <div class="image fl"  @click="toSkip(item)">
                         <img :src="item.housePic" />
                      </div>
                      <div class="direciton">
                        <div class="" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle}} <span class="fr" @click.stop="collection(item,$event)">收藏</span></div>
                        <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.rentPrice}}<span style="font-size: 14px;">元/月</span></span></div>
                        <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseType}}   {{item.builtArea}}平米</span></div>
                        <!-- <div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div> -->
                        <div class="introduce ">
                          <span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">{{item.houseFeature}}</span>
                          <span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">{{item.areaName}}</span>
                          <span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
        </div>


				</div>
			</div>
		</div>
	</div>
</template>

<script>
import oHeader from "../../base/header/header";
import oFly from "../../base/fly/fly";
export default {
  data() {
    return {
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
      brokerdetail:"",
      brokerhouselist:"",
      brokerrenthouselist:"",
      scity:null,
      collectionFlag: true, //收藏标识
    };
  },
  created() {
    this.scity = this.selectCity.value;
    this.render();
  },
  computed: {
    logined() {
      return this.$store.state.logined;
    }
  },
  methods: {

    //收藏经纪人
    addcollectborker(item,e) {
      if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.BROKERS_ADD + this.selectCity.value +"/"+ item.id)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.BROKERS_CANCEL+ this.selectCity.value +"/"+ item.id)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    //收藏房源
    collection(item,e) {
      if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.HOUSECOLLECTION_ADD + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.HOUSECOLLECTION_CANCEL + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    render() {
       let id =  this.$route.params.id
       //请求经纪人的详情
      this.$http
        .get(this.$url.URL.BROKERS + this.scity + "/" + id)
        .then(response => {
          this.brokerdetail = response.data.data;         
        });
        //请求他在售房源列表
         this.$http
        .get(this.$url.URL.BROKERS_HOUSELIST + this.scity + "/" + id + "?pageNo=1")
        .then(response => {
          this.brokerhouselist = response.data.data;         
        });
         //请求他在租房源列表
         this.$http
        .get(this.$url.URL.BROKERS_RENTHOUSELIST + this.scity + "/" + id + "?pageNo=1")
        .then(response => {
          this.brokerrenthouselist = response.data.data;           
        });
    },
    changeshow() {
      this.showBtn = true;
    },
    changeshowone() {
      this.showBtnone = true;
    },
    okbtnone(num) {
      if (num == 1) {
        this.params.minRentPrice = this.inputone;
        this.params.maxRentPrice = this.inputtwo;
        this.requestServerData(this.params);
        this.requestCountData(this.params);
      } else {
        this.params.minRentPrice = this.inputthree;
        this.params.maxRentPrice = this.inputfour;
        this.requestServerData(this.params);
        this.requestCountData(this.params);
      }
    }
  },
};
</script>

<style lang="less" scoped>

//高亮
.querybtn {
  color: #ff4343;
  font-weight: bold;
}

//列表项 
.item ul li{
  overflow: hidden;
  display: flex;
  height: 120px;
  margin-top: 30px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .image{
    flex: 127px 0 0;
    width: 127px;
    height: 144px;
    margin-right: 25px;
    background: #f5f5f5;
     border-radius: 50%;
    cursor: pointer;
    img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .direciton{
    flex: 1;
    display: flex;
    height: 90px;
    flex-flow: column nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      font-size: 22px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      cursor: pointer;
    }
  }
}
.peoplemes{
    margin-top: 32px;
    height: 150px;
  border: 1px solid #cacaca;
    .message{
        width:380px;
        border-right: 1px solid #cacaca;
        padding: 30px 40px;
    ul>li{
       
        line-height: 30px;
    }
    .watchsee{
        float: left;
        margin-left: 70px;
    }
  }
}

.m-checkbox {
  display: inline-block;
  background-image: url(../../imgs/buyhouse/check.png);
  width: 12px;
  height: 12px;
}
.quyu {
  font-size: 14px;
  font-weight: bold;
}
.quyu_kind {
  cursor: pointer;
  font-size: 12px;
}
.quyu_kind > li > input {
  height: 20px;
  width: 37px;
}

.check {
  position: absolute;
  top: 305px;
  margin-left: 40px;
  height: 18px;
  line-height: 18px;
  font-size: 13px;
}

/*content部分css*/

.content {
  margin-top: 26px;
}
.leftContent {
  padding-bottom: 20px;
  overflow: hidden;
}
.sidebar {
  width: 180px;
  margin-left: 60px;
}
.content .leftContent .orderFilter .orderTag {
  border-bottom: 2px solid red;
  line-height: 0;
}
.content .leftContent .orderFilter .orderTag ul {
  display: inline-block;
  width: 90%;
  line-height: 47.5px;
}

.content .leftContent .orderFilter .orderTag ul li {
  display: inline-block;
}
.content .leftContent .orderFilter .orderTag ul li a {
  text-align: center;
  line-height: 1;
  vertical-align: middle;
  padding: 0 25px;
  font-size: 14px;
  font-weight: bold;
  color: #394043;
  text-decoration: none;
}

.content .leftContent .orderFilter .filterAgain {
  font-size: 12px;
  line-height: 50px;

}
.content .leftContent .orderFilter .filterAgain .title {
  display: inline-block;
  font-weight: bold;
  color: #333333;
}
.content .leftContent .orderFilter .filterAgain ul {
  display: inline-block;
  margin-left: 15px;
}
.content .leftContent .orderFilter .filterAgain ul li {
  display: inline-block;
  margin-right: 20px;
}
.content .leftContent .resultDes .total {
  font-weight: bold;
  font-size: 22px;
  color: #394043;
  margin: 50px 0 10px;
}
.listContentLine {
  border-bottom: 1px solid #f1f1f1;
}

.introduce span {
  font-size: 14px;
}

.introduce .word {
  line-height: 25px;
  vertical-align: top;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  font-family: tahoma;
  position: relative;
  top: 30px;
  right: 370px;
  font-size: 24px!important;
  color: rgba(239, 31, 31, 0.85);
  
}
.brokerccloect{
  height: 45px;
  width: 113px;
  border: 1px solid #cacaca;
  font-family: tahoma;
  position: relative;
  text-align: center;
  line-height: 45px;
  top: 30px;
  right: -65px;
}
.grade{
  margin-left: 4px;
  letter-spacing: 1px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6)
}
.wan {
  font-size: 14px;
}
.intrspan {
  width: 70px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.one {
  background-color: #e5f2ff;
  color: rgba(0, 85, 164, 0.85);
}
.two {
  background-color: #fde8e8;
  color: rgba(239, 31, 31, 0.85);
}
.three {
  background: #e1f5ed;
  color: #33be85;
}
.sidebar .advertisement {
  width: 180px;
  height: 180px;
  background: #ef1f1f;
}
.adverTisementLine {
  margin-top: 34px;
  height: 1px;
  background: #cccccc;
}
.zhinan {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.9);
}
.zhinan_date {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}


    .five{
      .tongxiaoqu,
      .zhoubian{
        .title{
          font-size: 20px;
          padding: 60px 0  30px;
          margin-bottom: 30px;
          border-bottom: 1px solid #cacaca;
        }
        .image{
          width: 232px;
          height: 175px;
          margin-right: 25px;
          img{width: 100%;height: 100%}
        }
        .introduce {
          margin-top: 25px;
          span{font-size: 14px}
          .word{
            vertical-align: top;
            margin-left: 10px;
            color: rgba(0, 0, 0, 0.7);
          }
          .intrspan {
            width: 70px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
        }

      }
      .tongxiaoqu,
      .zhoubian{
        li{
          margin: 50px 0 25px;
          cursor: pointer;
          overflow: hidden;
        }
      }
       .direciton{
    flex: 1;
    display: flex;
    height: 90px;
    flex-flow: column nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      font-size: 22px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      cursor: pointer;
      span{
        color:rgba(0,0,0,0.5);
        margin-left: 10px;
        padding: 5px;
        font-size: 10px;
        border: 1px solid #cacaca;
        visibility: hidden;
        &:hover{
          color: #000000;
        }
      }
    }
  }
  &:hover .direciton>div:nth-of-type(1) span{
    visibility: visible;
  }
    }


</style>





