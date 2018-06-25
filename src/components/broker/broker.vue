
<template>
	<div>
		<o-header :houseTypeId="houseTypeId" 
              :keyword="keyword"
              :placeholder="'请输入经纪人姓名'"
              @query="query"></o-header>
		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl">
                <li class="title">位置: 区域</li>
								<li :key="index" v-for="(item, index) in citylist" :class="{querybtn:queryone==index}" @click="address(item, index)">{{item.name}}</li>
							</ol>
						</li>
            <li>
							<ol class="fl">
                <li class="title">片区:</li>
								<li :key="index" v-for="(item, index) in district" :class="{querybtn:querytwo==index}" @click="districtBtn(item, index)">{{item.name}}</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
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
					<div class="orderFilter">
						<!-- <div class="orderTag">
							<ul>
								<li v-for="(item, index) in list"><h3><a>{{item}}</a></h3></li>
							</ul>
						</div>
						<div class="filterAgain">
							<div class="title">筛选:</div>
							<ul>
								<li v-for="(item, index) in listnine"><h3><a>{{item}}</a></h3></li>
							</ul>
						</div> -->
					</div>
						<div class="resultDes">
							<h2 class="total">共找到<span style="color: red;"> {{querycount.count}} </span>位{{this.selectCity.name}}经纪人</h2>
							<div class="listContentLine"></div>
						</div>
					
					<div class="item">
						<ul>
							<li :key="index" v-for="(item,index) in broker">
								<div class="image" @click="toSkip(item)">
									<img :src="item.photo" @error="avatar"/>
								</div>
								<div class="direciton">
									<h2 @click="toSkip(item)"><span class="name">{{item.emplName}}</span><span class="position">{{item.positionName}}</span><a @click.stop="startChat(item)"></a></h2>
									<div class="introduce">
                   	  <span class="word">{{item.deptName}}</span>
										  <span class="fr prices">{{item.grade}}.0<span class="grade">评分</span></span>
                     	<span class="fr call">联系电话：{{item.phone}}</span>
                  </div> 
									<div class="introduce ">
										<span class="intrspan one">销售达人</span>
										<span class="intrspan two">销售达人</span>
										<span class="intrspan three">销售达人</span>
									</div>
								</div> 
							</li>
						</ul>
					</div>

					<!-- 分页器 -->
          <div class="pageFooter">
              <div class="fl" style="color: rgba(0,0,0,0.5);font-size: 12px;">
                <router-link to="home">世华易居网南宁二手房</router-link>>
                <router-link to="buyhouse">南宁二手房</router-link>
              </div>
              <el-pagination class="fr oPagination"
                  @current-change="handleCurrentChange"
                  background
                  layout="prev, pager, next"
                  prev-text="上一页"
                  next-text="下一页"
                  :current-page.sync="params.pageNo"
                  :total="querycount.count">
              </el-pagination>
          </div>
				</div>
			</div>
		</div>
		<!-- 飞入的物体 -->
    <o-fly class="fly" ref="fly"></o-fly>
	</div>
</template>

<script>
import oHeader from "../../base/header/header";
import oFly from "../../base/fly/fly";
export default {
  data() {
    return {
      showbox: null, //显示对应的dialog
      houseTypeId: 11,//二手房
      keyword: '',//搜索框关键词
      queryone: 0, //城区样式
      querytwo: 0, //片区样式
      citylist: null,//城区
      district: null,//片区
      num: 0,//城区id
      districtNum: 0,//片区id
      showBtn: false,
      showBtnone: false,
      querycount: {//检索总数量
        count: 0
      },
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
      params: {//请求参数体
        areaId: 1,
        districtId: 1,
        keyword: null,
        pageNo: 1,
        pageSize: null,
        positiId: 0,
        scity: null,
        sortMode: null
      },
      broker: [], //经纪人列表
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    this.params.scity = this.selectCity.value;
    this.render(this.selectCity.value);
  },
  computed: {
    //用户登录
    logined() {
      return this.$store.state.logined;
    },
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
  },
  watch: {
    $route: {
      handler(val){
        //初始化搜索框关键词
        this.keyword = val.query.word;
        //修正请求参数体
        this.params.pageNo = 1;
        this.params.keyword = val.query.word;
        this.brokerRequest();
        this.countRequest();
      }
    }
  },
  methods: {
    //打开聊天
    startChat(item) {
      //未登录用户提示弹窗登录
      if(!this.logined) return this.$store.commit('OPENLOGINDIALOG', 1);
      //装饰item
      let newItem = {
        avatar: item.photo,
        appkey: this.userInfo.brokerAppKey,
        name: item.emplName,
        nickName: item.emplName,
        username: item.chatUsername,
        password: item.chatUsername.split('_').join(''),
        id: item.id,
        mtime: new Date().getTime()
      }
      //添加经纪人到会话列表中
      this.$store.commit('ADDFIREND', newItem);         
    },
    //翻页
    handleCurrentChange(val) {
      this.params.pageNo = val;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
      this.brokerRequest();
    },
    avatar(item){
      item.photo = require('../../imgs/home/avatar.png')
    },
    toSkip(item) {
      let path = "/brokerdetail/" + item.id;
      this.$router.push({ path: path });
    },
    render(city) {
      //请求经纪人的列表
      this.brokerRequest();
      //获取搜索经纪人总数量
      this.countRequest();
      //请求搜索条件
      this.tagsRequest(city);
    },
    //搜索条件
    tagsRequest(city) {
      this.$http
        .get(this.$url.URL.AREA_DISTRICTS + city) //区域
        .then(response => {
          // 初始化城区和片区
          this.citylist = response.data.data;
          this.district = response.data.data[0].districts;
        });
    },
    //点击区域条件
    address(item, index) {
      //修正城区
      this.queryone = index;
      this.params.areaId = item.id;
      //修正片区
      this.querytwo = 0;
      this.district = item.districts;
      //修正页数
      this.params.pageNo = 1;
      //请求
      this.brokerRequest();
      this.countRequest();
    },
    //点击片区
    districtBtn(item, index) {
      this.querytwo = index;
      this.params.districtId = item.id;
      this.params.pageNo = 1;
      //请求
      this.brokerRequest();
      this.countRequest();
    },
    //房源列表请求
    brokerRequest() {
      this.keyword = this.$route.query.word;
      this.params.keyword = this.$route.query.word;
      let params = {'keyword': this.keyword, 'scity': this.selectCity.value};
      let newParams = Object.assign({}, this.params, params);
      this.$http
      .post(this.$url.URL.BROKERS_LIST, newParams)
      .then(response=>{
        this.broker = response.data.data;
      })
    },
    //请求经纪人数量
    countRequest() {
      this.$http.post(this.$url.URL.BROKERS_LISTCOUNT, this.params).then(response => {
        this.querycount = response.data.data;
      });
    },
    //搜索
    query(item) {
      this.params.keyword = item.keyword;
      this.$router.push({path: "/broker",query:{word: item.keyword,type: 0}})
    },
    changeshow() {
      this.showBtn = true;
    },
    changeshowone() {
      this.showBtnone = true;
    },
    okbtnone(num) {
      this.params.pageNo = 1;
      if (num == 1) {
        this.params.minPrice = this.inputone;
        this.params.maxPrice = this.inputtwo;
        this.brokerRequest(); 
        this.countRequest();
      } else {
        this.params.minPrice = this.inputthree;
        this.params.maxPrice = this.inputfour;
        this.brokerRequest(); 
        this.countRequest();
      }
    }
  },
  components: {
    oHeader,
    oFly
  }
};
</script>

<style lang="less" scoped>
//筛选条件
.filter {
  overflow: hidden;
  margin-top: 26px;
  background-color: #fbfbfb;
  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.2);
  position: relative;
  border-bottom: 1px solid #cacaca;
  box-sizing: border-box;
  padding: 24px 0 0 35px;
  ul{
    >li{
      overflow: hidden;
      height: 25px;
      line-height: 25px;
      margin-bottom: 24px;
      ol{
        >li{
          cursor: pointer;
          float: left;
          text-align: left;
          width: 90px;
          white-space: nowrap;
        }
        .title{
          width: 110px;
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  } 
}
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
  border-bottom: 1px solid #cacaca;
  margin-top: 30px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .image{
    flex: 90px 0 0;
    width: 90px;
    height: 90px;
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
    h2{
      .name{
        color: rgb(85, 85, 85);
        font-weight: 700;
        float: left;
        text-overflow: ellipsis;
        font-size: 20px;
        white-space: nowrap;
        height: 32px;
        line-height: 20px;
        vertical-align: middle;
        overflow: hidden;
        margin-right: 10px;
      }
      .position{
        background: #f1f1f1;
        padding: 4px;
        color: #888888;
        margin-right: 5px;
        border-radius: 2px;
        font-size: 12px;
      }
      a{
        display: inline-block;
        height: 22px;
        width: 80px;
        background: url('../../imgs/chatInline.png') 0 0 no-repeat;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
}

//没有搜索到任何数据
.noContent{
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  color: #5e7382;
  
}
.pageFooter{
  overflow: hidden;
  padding-top: 20px;
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

.leftContent {
  padding-bottom: 20px;
  overflow: hidden;
}
.sidebar {
  width: 180px;
  margin-left: 60px;
}

.content {
  margin-top: 26px;
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
  vertical-align: top;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  font-family: tahoma;
  position: relative;
  right: 370px;
  font-size: 24px!important;
  color: rgba(239, 31, 31, 0.85);
  
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

</style>





