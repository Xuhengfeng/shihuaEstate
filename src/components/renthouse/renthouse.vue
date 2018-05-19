<template>
	<div>
		<o-header :houseTypeId="houseTypeId" 
              :keywordTypeId="keywordTypeId" 
              :keyword="keyword"
              @query="query"></o-header>
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
							<ol class="fl quyu">价格:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listtwo" :class="{querybtn:querytwo==index }" @click="shoujia(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputone" @focus="changeshow" /><span>-</span>
									<input type="text" value="" v-model="inputtwo" @focus="changeshow" /> <span>万</span>
									<button @click="okbtnone(1)" v-if="showBtn">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">房型:</ol>
							<ol class="fl quyu_kind">
								<li v-for="(item, index) in listthree" :class="{querybtn:querythree==index }" @click="fangxing(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputthree" @focus="changeshowone"  /><span>-</span>
									<input type="text" value="" v-model="inputfour" @focus="changeshowone" />   <span>平</span>
									<button @click="okbtnone(2)" 	v-if="showBtnone">确定</button>
								</li>
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
							<h2 class="total">共找到<span style="color: red;"> {{queryRentcount.count}} </span>套{{this.selectCity.name}}二手房</h2>
							<div class="listContentLine"></div>
						</div>
					
					<div class="item">
						<ul>
							<li :key="index" v-for="(item,index) in renthouse">
								<div class="image" @click="toSkip(item)">
									<img :src="item.housePic"/>
								</div>
								<div class="direciton">
									<div class="introduce" @click="toSkip(item)" >{{item.houseTitle}}
                    <span class="fr" @click.stop="collection(item,$event)">收藏</span>
                  </div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" />
                    <span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</span>
										<span class="fr prices">{{item.rentPrice}}<span class="wan">元/月</span></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" />
                   <span class="word">{{item.houseType}}   {{item.builtArea}}平米</span><span class="fr">{{item.houseType}}</span>
                  </div>
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
           @current-change="handleCurrentChange"
					  background
					  layout="prev, pager, next"
             prev-text="上一页"
					   next-text="下一页"
					  :total="1000"
					  class="fr pagination">
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
      houseTypeId: 12, //地图 二手房 租房  小区 11 12 13
      keywordTypeId: 0, //关键词类型 二手房 新房 租房 0 1 2
      keyword: '',//关键词

      // list:["默认排序", "最新", "总价", "房屋单价", "面积"],
      listone: [],
      listtwo: [],
      listthree: [],
      // listnine:["随时看房", "新上", "满五年", "世华独家"],
      num: 0,
      showBtn: false,
      showBtnone: false,
      queryRentcount: {
        count: ""//租房房总数量
      },
      queryone: null, //租房房区域
      querytwo: null, //租房价格
      querythree: null, //租房房型
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
      params: {//这个是用来查询参数列表 不变的
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
        scity: null,
        useYear:null
      },
      renthouse: [], //租房列表
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
     handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.query(null, val);		
    },
    //收藏房源
    collection(item,e) {
      console.log(this.logined)
        if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.RENTHCOLLECTION_ADD + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.RENTHCOLLECTION_CANCEL + "/"+ this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    toSkip(item) {
      let path = "/rentHouseDetail/" + item.sdid;
      this.$router.push({ path: path });
    },
    render(city) {
      //请求租房的列表(搜索)
      this.keyword = this.$route.query.word;
      this.keywordTypeId = parseInt(this.$route.query.type);
      this.query();
      
      //获取搜索租房总数量
      this.$http
        .post(this.$url.URL.RENTHOUSE_QUERYCOUNT, {
          scity: city,
          pageNo: 1
        })
        .then(response => {
          this.queryRentcount = response.data.data;
        });

      //请求搜索条件
      this.$http
        .get(this.$url.URL.AREA_DISTRICTS + city
        ) //区域
        .then(response => {
          this.listone = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_RENTAL") //房源售价
        .then(response => {
		  this.listtwo = response.data.data;
		  console.log(this.listtwo)
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_HUXING") //房型
        .then(response => {
          this.listthree = response.data.data;
        });
      
      
    },
    //搜索
    query(item , num) {
      if(item) this.keyword = item.keyword;
      let params = {'keyword': this.keyword, 'pageNo': num, 'scity': this.selectCity.value};
      this.$http
      .post(this.$url.URL.RENTHOUSE_QUERY, params)
      .then(response=>{
        this.renthouse = response.data.data;
      })
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
      this.params.minRentPrice = item.value.split("-")[0];
      this.params.maxRentPrice = item.value.split("-")[1];
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //房型
    fangxing(item, index) {
      this.querythree = index;
      this.params.roomsNum = item.value;
      this.requestServerData(this.params);
      this.requestCountData(this.params);
    },
    //请求过滤搜索条件数据
    requestServerData(params) {
      this.$http.post(this.$url.URL.RENTHOUSE_QUERY, params).then(response => {
        this.renthouse = response.data.data;
      });
    },
    //请求租房源数量
    requestCountData(params) {
      this.$http.post(this.$url.URL.RENTHOUSE_QUERYCOUNT, params).then(response => {
        this.queryRentcount = response.data.data;
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
    height: 100%;
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

.introduce span {
  font-size: 14px;
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





