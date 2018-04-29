/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 21:51:34 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-29 23:20:35
 */
<template>
	<div>
		<o-header></o-header>
		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl quyu">位置: 区域</ol>
							<ol class="fl">
								<li v-for="(item, index) in listone" :class="{querybtn:queryone==index }" @click="address(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">售价:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listtwo" :class="{querybtn:querytwo==index }" @click="shoujia(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputone" @focus="changeshow" /><span>-</span>
									<input type="text" value="" v-model="inputtwo" @focus="changeshow" /> <span>万</span>
									<button @click="okbtnone(1)" v-if="showBtn">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">面积:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listthree" :class="{querybtn:querythree==index }" @click="mianji(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputthree" @focus="changeshowone"  /><span>-</span>
									<input type="text" value="" v-model="inputfour" @focus="changeshowone" />   <span>平</span>
									<button @click="okbtnone(2)" 	v-if="showBtnone">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">房型:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listfour"  :class="{querybtn:queryfour==index }" @click="fangxing(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">装修:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listfive"  :class="{querybtn:queryfive==index }" @click="zhuangxiu(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">楼龄:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listsix"  :class="{querybtn:querysix==index }" @click="louling(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">朝向:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listseven"  :class="{querybtn:queryseven==index }" @click="chaoxiang(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">特色:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listeight"  :class="{querybtn:queryeight==index }" @click="teshe(item, index)">{{item.name}}</li>
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
							<h2 class="total">共找到<span style="color: red;"> {{querycount.count}} </span>套{{this.selectCity.name}}二手房</h2>
							<div class="listContentLine"></div>
						</div>
					
					<div class="item">
						<ul>
							<li v-for="item in buyhouse">
								<div class="image" @click="toSkip(item)">
									<img :src="item.housePic"  alt="" />
								</div>
								<div class="direciton">
									<div class="introduce intrdex " @click="toSkip(item)" >{{item.houseTitle}}<span class="fr"style="font-size: 16px;color:rgba(0,0,0,0.5); " @click.stop="addCollection($event)">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</span>
										<span class="fr prices">{{item.saleTotal}}<span class="wan">万</span></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseTag}}</span><span class="fr">单价{{item.salePrice }}元/平米</span></div>
									<div class="introduce ">
										<span class="intrspan one">{{item.houseFeature}}</span>
										<span class="intrspan two">{{item.areaName}}</span>
										<span class="intrspan three">随时看房</span>
									</div>
								</div> 
							</li>
						</ul>
					</div>
					<div class="fl" style="color: rgba(0,0,0,0.5);font-size: 12px;">世华易居网南宁二手房>南宁二手房</div>
					<!--分页器-->
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000"
					  class="fr">
					</el-pagination>
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
      selectCity: JSON.parse(window.localStorage.selectCity),
      // list:["默认排序", "最新", "总价", "房屋单价", "面积"],
      listone: [],
      listtwo: [],
      listthree: [],
      listfour: [],
      listfive: [],
      listsix: [],
      listseven: [],
      listeight: [],
      // listnine:["随时看房", "新上", "满五年", "世华独家"],
      datas: "",
      num: 0,
      showBtn: false,
      showBtnone: false,
      dialogVisible: false,
      loginshow: null, //登陆注册阴影层
      rightnow: true, //登陆注册判断条件
      cancel: false, //取消登陆阴影
      buyhouse: null, //二手房列表
      querycount: {
        //二手房总数量
        count: ""
      },
      queryone: null, //二手房区域
      querytwo: null, //二手房售价
      querythree: null, //二手面积域
      queryfour: null, //二手房房型
      queryfive: null, //二手房装修
      querysix: null, //二手房楼龄
      queryseven: null, //二手房朝向
      queryeight: null, //二手房特色
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
      params: {
        areaId: null,
        districtId: null,
        houseDecor: "",
        houseDirec: "",
        houseFeature: "",
        houseForm: "",
        keyword: "",
        maxBuildArea: null,
        maxPrice: null,
        minBuildArea: null,
        minPrice: null,
        pageNo: 1,
        pageSize: null,
        roomsNum: null,
        scity: null
      }
    };
  },
  created() {
	this.params.scity = this.selectCity.value;
	let city = this.selectCity.value;
    this.render(city);
  },
  methods: {
    //收藏房源
    addCollection(e) {
      console.log(e.target)
      this.$refs.fly.drop(e.target)
    },
    toSkip(item) {
      let path = "/buyhouse/twohandhousedetail/" + item.sdid;
      this.$router.push({ path: path });
    },
    render(city) {
      //请求二手的列表
      this.$http
        .post(this.$url.URL.HOUSE_QUERY, {
          scity: city,
          pageNo: 1
        })
        .then(response => {
          this.buyhouse = response.data.data;
        });
      //获取搜索二手房总数量
      this.$http
        .post(this.$url.URL.HOUSE_QUERYCOUNT, {
          scity: city,
          pageNo: 1
        })
        .then(response => {
          this.querycount = response.data.data;
        });

      //请求搜索条件
      this.$http
        .get(this.$url.URL.AREA_DISTRICTS + city
        ) //区域
        .then(response => {
          this.listone = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "SELL_PRICE") //房源售价
        .then(response => {
          this.listtwo = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_AREA") //面积
        .then(response => {
          this.listthree = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_HUXING") //房型
        .then(response => {
          this.listfour = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_DECORATION") //装修
        .then(response => {
          this.listfive = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_AGE") //房源楼龄
        .then(response => {
          this.listsix = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_DIRECTION") //朝向
        .then(response => {
          this.listseven = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_FEATURE") //特色
        .then(response => {
          this.listeight = response.data.data;
        });
    },
    //点击区域条件
    address(item, index) {
      this.queryone = index;
      this.params.areaId = item.id;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //售价
    shoujia(item, index) {
      this.querytwo = index;
      this.params.minPrice = item.value.split("-")[0];
      this.params.maxPrice = item.value.split("-")[1];
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //面积
    mianji(item, index) {
      this.querythree = index;
      this.params.minBuildArea = item.value.split("-")[0];
      this.params.maxBuildArea = item.value.split("-")[1];
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //房型
    fangxing(item, index) {
      this.queryfour = index;
      this.params.roomsNum = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //装修
    zhuangxiu(item, index) {
      this.queryfive = index;
      this.params.houseDecor = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    louling(item, index) {
      this.querysix = index; //楼龄
      //				this.params.minBuildArea = item.value.split('-')[0];
      //				this.params.maxBuildArea = item.value.split('-')[1];
      //				this.requestServerData(this.params);
    },
    //朝向
    chaoxiang(item, index) {
      this.queryseven = index;
      this.params.houseDirec = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //特色
    teshe(item, index) {
      this.queryeight = index;
      this.params.houseFeature = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //请求过滤搜索条件数据
    requestServerData(params) {
      this.$http.post(this.$url.URL.HOUSE_QUERY, params).then(response => {
        this.buyhouse = response.data.data;
      });
    },
    //请求二手房源数量
    requestCountData(params) {
      this.$http.post(this.$url.URL.HOUSE_QUERYCOUNT, params).then(response => {
        this.querycount = response.data.data;
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
        this.params.minPrice = this.inputone;
        this.params.maxPrice = this.inputtwo;
        this.requestServerData(this.params);
        this.requestCountData(this.params);
      } else {
        this.params.minPrice = this.inputthree;
        this.params.maxPrice = this.inputfour;
        this.requestServerData(this.params);
        this.requestCountData(this.params);
      }
    }
  },
  components: {
	oHeader,
	oFly
  }
};
</script>

<style  scoped>
.filter {
  width: 1150px;
  margin-top: 26px;
  padding: 25px 35px;
  background-color: #fbfbfb;
  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  line-height: 1;
  position: relative;
  font-size: 14px;
}

.filter > ul > li {
  margin-top: 24px;
  display: block;
  overflow: hidden;
  line-height: 24px;
}
.filter ol li {
  cursor: pointer;
  float: left;
  text-align: left;
  width: 100px;
  white-space: nowrap;
}
.filter > ul > li:nth-of-type(1) > ol:nth-of-type(2) {
  margin-left: 68px;
}
.filter > ul > li > ol:nth-of-type(2) {
  margin-left: 100px;
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
/*登陆注册*/

.panel_login {
  width: 381px;
  height: 392px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  margin-left: -190px;
  margin-top: -205px;
  /*    padding-left: 20px;*/
  box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  border-radius: 2px;
}

.panel_login .panel_info {
  padding-top: 40px;
  /*width: 300px;*/
}

.panel_login .panel_info .close_login {
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 4px;
}

.panel_login .panel_tab .title .fl {
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-left: 35%;
  cursor: pointer;
}

.login_input {
  margin-left: 10%;
}

.login_input > input {
  width: 282px;
  height: 43px;
  line-height: 43px;
  color: #333333;
  padding-left: 16px;
  margin-top: 10px;
}

.login_input_resgize {
  width: 305px;
  height: 60px;
}

.login_input_resgize > input {
  width: 145px;
  height: 43px;
  line-height: 43px;
  color: #333333;
  padding-left: 16px;
  margin-top: 10px;
}

.login_input_resgize > button {
  background: red;
  width: 108px;
  height: 45px;
  line-height: 43px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 29px;
  font-size: 14px;
  color: #ffffff;
}

.forget {
  position: absolute;
  left: 295px;
  color: #000000;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
}

.dl_login {
  position: absolute;
  left: 50px;
  color: #000000;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
}

.org_btn {
  background: red;
  height: 50px;
  color: #fff;
  width: 301px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  margin-left: 38px;
}

.come_login {
  width: 128px;
  height: 16px;
  font-size: 16px;
  margin-top: 46px;
  margin-left: 115px;
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
.intrdex {
  font-size: 22px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: bold;
  cursor: pointer;
}
.introduce span {
  font-size: 14px;
}
.direciton {
  flex: 1;
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.introduce .word {
  vertical-align: top;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  font-size: 24px;
  color: rgba(239, 31, 31, 0.85);
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
  margin-left: 10px;
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

/* 列表项 */
.item ul li {
  height: 175px;
  margin-top: 65px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  overflow: hidden;
}
.item ul li .image {
  flex: 232px 0 0;
  width: 232px;
  height: 175px;
  margin-right: 25px;
  background: #f5f5f5;
  cursor: pointer;
}
.image > img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.querybtn {
  color: #ff4343;
  font-weight: bold;
}

/*推荐小区*/
.push {
  padding: 50px;
  background: #f5f5f6;
}
.newHousePush {
  width: 1150px;
}
.newHousePush .tilte {
  overflow: hidden;
}
.newHousePush ul {
  margin-top: 30px;
  width: 1200px;
  overflow: hidden;
}
.newHousePush ul > li {
  float: left;
}
.newHousePushContainer_i {
  margin-left: 12px;
}
.newHousePushContainer_i img {
  vertical-align: top;
}
.newHousePushPrice {
  padding: 20px;
  overflow: hidden;
  background: white;
}
</style>


<!--推荐小区-->
		<!--<div class="push">
		<div class="container">
			<div class="newHousePush">
				<div class="tilte">
					<div class="fl" style="font-weight: bold;font-size: 24px;color: rgba(1,1,1,0.8);">推荐小区</div>
					<div class="fr">更多小区</div>
				</div>
				<ul class="newHousePushContainer">
					<li>
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		</div>-->