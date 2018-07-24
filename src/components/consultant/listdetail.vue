
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
									<img :src="listdetail.photo"/>
								</div>
								<div class="direciton">
									<div class="introduce" >{{listdetail.label}}</div>
									<div class="introduce">
										 <!-- <span class="fr prices">5.0<span class="grade">评分</span></span> -->
                     	 <!-- <span class="fr brokerccloect" @click="toSkip(listdetail)">向他咨询</span> -->
                                     </div> 
                                     <div class="introduce">
                                    	 <span class="word">{{listdetail.summary}}</span>
										 
                                     </div> 
								</div> 
							</li>
						</ul>
					</div>
                    <div class="peoplemes">
                        <div class="fl message">
                            <ul>
                                  <li>顾问简介：{{listdetail.summary}}</li>
                                    <li>主营板块：{{listdetail.label}}</li>
                            </ul> 
				        </div> 
                        <div class="fr message">
                             <ul class="watchsee">
                                <li>{{listdetail.problemNum }}</li>
                                  <li>被提问数</li>
                            </ul> 
                             <ul class="watchsee">
                                <li>{{listdetail.answerNum }}</li>
                                  <li>回答</li> 
                            </ul> 
				        </div> 
                    </div>
            <div class="titlep" style="margin-top:35px;">热门咨询</div>

          <div class="hot-box">
                  <div class="hot-item">
                  <div class="h-box " v-for="item in listdetail.answerList">
                      <div class="fl"  >
                          <p>{{item.content}}</p>
                      </div>
                      <!-- <div class="fr">
                          <span>
                              <i>11</i>
                              个回答
                          </span>
                      </div> -->
                      <div class="clear"></div>
                  </div>
                   <div class="noContent" v-show="!listdetail.length">暂无数据!</div>
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
      listdetail:"",
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

     toSkip(listdetail) {
                //未登录用户提示弹窗登录
              if(!this.logined){
                  
                  return this.$store.commit('OPENLOGINDIALOG', 1);
                  this.$router.push({ path: "/mine/indexcollection"});
              } else{
                console.log(listdetail)
                      // this.$router.push({ path: "/myproblem/", query:{id: listdetail.employeeId, name: listdetail.name}});
              }
              
          },
      
    render() {
       let id =  this.$route.params.id
       //顾问详情
        this.$http
            .get(this.$url.URL.CONSULTANT_INFO +"?employeeId="+id, {
                scity: this.scity,
            })
            .then(response => {
            this.listdetail= response.data.data;
            });
    },
    changeshow() {
      this.showBtn = true;
    },
    changeshowone() {
      this.showBtnone = true;
    },
  }
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
    height: 120px;
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
     margin-top: 10px;
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
  right: 6px;
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

.hot-item:first-child {
    display: block;
}
 .h-box {
    padding: 20px 0;
    border-bottom: 1px dashed #e1e1e1;
}
.h-box .fl {
    width:680px;
    line-height: 25px;
}
.h-box>ul {
    width: 588px;
    line-height: 25px;
}
.h-box .fr {
    width: 75px;
    height: 60px;
    background-color: #f8f8f8;
    border-radius: 50%;
    color: #999;
    font-size: 12px;
    text-align: center;
    padding-top: 15px;
    line-height: 22px;
    margin-top: 7px;
}
 .h-box .fl a {
    font-size: 16px;
    color: #333;
    font-weight: 700;
}
 .h-box .fl p {
    color: #555;
    font-size: 12px;
}
.clear:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden; 
    font-size: 0; 
    line-height: 0;
}

</style>





