
<template>
	<div>
		<o-header :houseTypeId="houseTypeId"></o-header>
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
							<ol class="fl quyu">均价:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listtwo" :class="{querybtn:querytwo==index }" @click="shoujia(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputone" @focus="changeshow" /><span>-</span>
									<input type="text" value="" v-model="inputtwo" @focus="changeshow" /> <span>万</span>
									<button @click="okbtnone(1)" v-if="showBtn">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">楼龄:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listthree" :class="{querybtn:querythree==index }" @click="louling(item, index)">{{item.name}}</li>
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
							<h2 class="total">共找到<span style="color: red;"> {{buildlistcount.count}} </span>套{{this.selectCity.name}}房</h2>
							<div class="listContentLine"></div>
						</div>
					
					<div class="item">
						<ul>
							<li :key="index" v-for="(item,index) in buildlist">
								<div class="image" @click="toSkip(item)">
									<img :src="item.housePic"/>
								</div>
								<div class="direciton">
									<div class="introduce" @click="toSkip(item)" >{{item.buildName}}
									<span class="fr" @click.stop="collection(item,$event)">收藏</span>
              		 </div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" />
                    				<span class="word">{{item.areaName}}{{item.districtName}}/在{{item.buildAge}}年建成</span>
                             <span class="fr cout">{{item.saleCount}}<span class="wan">套</span></span>
									<span class="fr prices">{{item.avgSalePrice}}<span class="wan">元/平米</span></span>	
                 </div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" />
                  					 <span class="word">在售{{item.saleCount}}套/在租{{item.rentCount}}套</span><span class="fr word">在售小区</span>
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
      houseTypeId: 11, //二手房
      // list:["默认排序", "最新", "总价", "房屋单价", "面积"],
      listone: [],
      listtwo: [],
      listthree: [],
      // listnine:["随时看房", "新上", "满五年", "世华独家"],
      num: 0,
      showBtn: false,
      showBtnone: false,
      buildlistcount: {
        //小区房总数量
        count: ""
      },
      queryone: null, //小区区域
      querytwo: null, //小区房价格
      querythree: null, //小区楼龄
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
     params: {
		"areaId": null,
		"districtId": null,
		"keyword": "",
		"maxBuildArea": null,
		"maxSellPrice ": null,
		"minBuildArea": null,
		"minSellPrice ": null,
		"pageNo": 1,
		"pageSize": null,
		"useYear": null,
		"scity": null
	},
      buildlist: [], //小区列表
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
       collectionFlag: true, //收藏标识
    };
  },
  created() {
    this.params.scity = this.selectCity.value;
    this.render(this.selectCity.value);
  },
  computed: {
    //获取用户登录状态
    logined() {
      return this.$store.state.logined;
    }
  },
  
  methods: {
    //收藏房源
    collection(item,e) {
      console.log(this.logined)
        if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.BUILDCOLLECTION_ADD + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.BUILDCOLLECTION_CANCEL + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    toSkip(item) {
      let path = "/estatedetail/" + item.sdid;
      this.$router.push({ path: path });
    },
    render(city) {
      //请求小区的列表
      this.$http
        .post(this.$url.URL.BUILDLIST, {
          scity: city,
          pageNo: 1
        })
        .then(response => {
          this.buildlist = response.data.data;            
        });

      //获取搜索小区房总数量
      this.$http
        .post(this.$url.URL.BUILDLIST_COUNT, {
          scity: city,
          pageNo: 1
        })
        .then(response => {
          this.buildlistcount = response.data.data;
        });

      //请求搜索条件
      this.$http
        .get(this.$url.URL.AREA_DISTRICTS + city
        ) //区域
        .then(response => {
          this.listone = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "SELL_UNIT_PRICE" + "/" + city) //均价
        .then(response => {
		  this.listtwo = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_AGE") //楼龄
        .then(response => {
          this.listthree = response.data.data;
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
      this.params.minSellPrice = item.value.split("-")[0];
      this.params.maxSellPrice = item.value.split("-")[1];
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //楼龄
    louling(item, index) {
      this.querythree = index;
      this.params.useYear = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //请求过滤搜索条件数据
    requestServerData(params) {
      this.$http.post(this.$url.URL.BUILDLIST, params).then(response => {
        this.buildlist = response.data.data;
      });
    },
    //请求小区房源数量
    requestCountData(params) {
      this.$http.post(this.$url.URL.BUILDLIST_COUNT, params).then(response => {
        this.buildlistcount = response.data.data;
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
  >ul{
    margin-top: 24px;
    margin-left: 35px;
    >li{
      overflow: hidden;
      height: 25px;
      line-height: 25px;
      margin-bottom: 24px;
      >ol{
        >li{
          cursor: pointer;
          float: left;
          text-align: left;
          width: 100px;
          white-space: nowrap;
        }
        &:nth-of-type(1){
          width: 110px;
          font-size: 14px;
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
  height: 175px;
  border-bottom: 1px solid #cacaca;
  padding: 33px 0;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .image{
    flex: 232px 0 0;
    width: 232px;
    height: 175px;
    margin-right: 25px;
    background: #f5f5f5;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .direciton{
    flex: 1;
    display: flex;
	height: 60%;
	margin-top: 40px;
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


.introduce .word {
   font-size: 14px;
  vertical-align: top;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  margin-right: 230px;
  font-size: 24px;
  color: rgba(239, 31, 31, 0.85);
    font-weight: bold;
}
.cout{
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
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





