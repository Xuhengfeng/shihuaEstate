/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 21:51:34 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-23 17:04:56
 */
<template>
	<div>
		<o-header :houseTypeId="houseTypeId" 
              :keyword="keyword"
              :placeholder="'请输入区域丶商圈或小区名开始找房'"
              @query="query"></o-header>
		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl">
                <li class="title">位置: 区域</li>
								<li :key="index" :data-id="index" v-for="(item,index) in listone" :class="{querybtn:queryone==index}" @click="address(item, index, $event)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">售价:</li>
								<li :key="index" v-for="(item, index) in listtwo" :class="{querybtn:querytwo==index }" @click="shoujia(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputone" @focus="changeshow" /><span>-</span>
									<input type="text" value="" v-model="inputtwo" @focus="changeshow" /> <span>万</span>
									<button @click="okbtnone(1)" v-if="showBtn">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">面积:</li>
								<li :key="index" v-for="(item, index) in listthree" :class="{querybtn:querythree==index }" @click="mianji(item, index)">{{item.name}}</li>
								<li><input type="text" value="" v-model="inputthree" @focus="changeshowone"  /><span>-</span>
									<input type="text" value="" v-model="inputfour" @focus="changeshowone" />   <span>平</span>
									<button @click="okbtnone(2)" 	v-if="showBtnone">确定</button>
								</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">户型:</li>
								<li :key="index" v-for="(item, index) in listfour"  :class="{querybtn:queryfour==index }" @click="fangxing(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">装修:</li>
								<li :key="index" v-for="(item, index) in listfive"  :class="{querybtn:queryfive==index }" @click="zhuangxiu(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
							  <li class="title">楼龄:</li>
								<li :key="index" v-for="(item, index) in listsix"  :class="{querybtn:querysix==index }" @click="louling(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">朝向:</li>
								<li :key="index" v-for="(item, index) in listseven"  :class="{querybtn:queryseven==index }" @click="chaoxiang(item, index)">{{item.name}}</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu_kind">
                <li class="title">特色:</li>
								<li :key="index" v-for="(item, index) in listeight"  :class="{querybtn:queryeight==index }" @click="teshe(item, index)">{{item.name}}</li>
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

				<!--列表内容-->
				<div class="leftContent">
          <!-- 条件筛选 -->
					<div class="orderFilter">
						<!-- <div class="orderTag">
							<ul>
								<li v-for="(item, index) in [1,1]"><h3><a>{{item}}</a></h3></li>
							</ul>
						</div> -->
						<!-- <div class="filterAgain">
							<div class="title">筛选:</div>
							<ul>
								<li v-for="(item, index) in listnine"><h3><a>{{item}}</a></h3></li>
							</ul>
						</div> -->
					</div>

          <!-- 提示 -->
          <div class="resultDes" ref="resultDes">
            <h2 class="total">共找到<span style="color: red;"> {{querycount.count}} </span>套{{this.selectCity.name}}二手房</h2>
            <div class="listContentLine"></div>
          </div>
          
					<!-- 列表 -->
					<div class="item">
						<ul v-show="houseList.length">
							<li :key="index" v-for="(item,index) in houseList">
								<div class="image" @click="toSkip(item)">
									<img :src="item.housePic"/>
								</div>
								<div class="direciton">
									<div class="introduce" @click="toSkip(item)" >{{item.houseTitle}}
                    <!-- <span class="fr" @click.stop="collection(item,$event)">收藏</span> -->
                    <span class="contrast fr" @click.stop="addContrast(item, $event)">{{item.contentFlag?item.contentFlag:'加入对比'}}</span>
                  </div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" />
                    <span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</span>
										<span class="fr prices">{{item.saleTotal}}<span class="wan">万</span></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" />
                    <span class="word">{{item.houseTag}}</span><span class="fr">单价{{item.salePrice }}元/平米</span>
                  </div>
									<div class="introduce ">
										<span class="intrspan one">{{item.houseFeature}}</span>
										<span class="intrspan two">{{item.areaName}}</span>
										<span class="intrspan three">随时看房</span>
									</div>
								</div> 
							</li>
						</ul>
            <div class="noContent" v-show="!houseList.length">暂无数据!</div>
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
      houseTypeId: 11,//地图 二手房 租房  小区 11 12 13
      keyword: '',//搜索框关键词
      list:["默认排序", "最新", "总价", "房屋单价", "面积"],
      listone: [],
      listtwo: [],
      listthree: [],
      listfour: [],
      listfive: [],
      listsix: [],
      listseven: [],
      listeight: [],
      listnine:["随时看房", "新上", "满五年", "世华独家"],
      num: 0,
      showBtn: false,
      showBtnone: false,
      querycount: {//检索总数量
        count: 0
      },
      queryone: 0, //二手房区域
      querytwo: 0, //二手房售价
      querythree: 0, //二手面积域
      queryfour: 0, //二手房房型
      queryfive: 0, //二手房装修
      querysix: 0, //二手房楼龄
      queryseven: 0, //二手房朝向
      queryeight: 0, //二手房特色
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
      params: {//请求参数体
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
      houseList: [], //二手房列表
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
      contrastList: [],//对比清单列表
      collectionFlag: true, //收藏标识
    };
  },
  created() {
    //初始化修正请求参数体
    this.params.scity = this.selectCity.value;
    this.params.keyword = this.keyword;

    this.render(this.selectCity.value);
  },
  computed: {
    //监控store的contrastList变化
    refresh() {
      return this.$store.state.contrastList;
    },
    logined() {
      return this.$store.state.logined;
    }
  },
  watch: {
    $route: {
      handler(val){
        //初始化搜索框关键词
        this.keyword = val.query.word;
        //修正请求参数体
        this.params.pageNo = 1;
        this.params.keyword = val.query.word;
        //房源列表请求
        this.houseRequest(); 
        //房源总数量请求
        this.countRequest();
      }
    },
    //监听计算属性
    refresh() {
      //请求二手的列表
      this.$http
        .post(this.$url.URL.HOUSE_QUERY, this.params)
        .then(response => {
          //每次对比清单操作的时候,修正对比清单列表
          this.contrastList = this.refresh;
          this.refresh.forEach(item=>{
            response.data.data.forEach(item2=>{
              if(item.sdid==item2.sdid){
                item2.contentFlag = '已加入对比';
              }
            })
          })
          //刷新列表
          this.houseList = response.data.data;
        });
    }
  },
  methods: {
    //收藏房源
    collection(item,e) {
      //未登录用户提示弹窗登录
      if(!this.logined) return this.changeDialog(1);
      //判断当前点击对象是否已收藏
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.HOUSECOLLECTION_ADD +this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });
      }else{
           this.$http
        .post(this.$url.URL.HOUSECOLLECTION_CANCEL + this.selectCity.value +"/"+ item.sdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    //加入对比清单
    addContrast(item, e) {
      //未登录用户提示弹窗登录
      if(!this.logined) return this.$store.commit('OPENLOGINDIALOG', 1);
      let payload = {
        contrastList: this.refresh,
        item: item
      }
      if(item.contentFlag == '已加入对比') {
        return;
      }else{
        if(this.refresh.length<4){
          this.$set(item, 'contentFlag', '已加入对比');
          this.$refs.fly.drop(e.target);
          this.$store.dispatch('addOne', payload);
        }else{
          this.$alert('对比清单最多4个!', '添加失败', {
            confirmButtonText: '确定'
          });
        }
      }
    },
    toSkip(item) {
      this.$router.push({ path: "/buyhouse/twohandhousedetail/" + item.sdid});
    },
    render(city) {
      //房源列表请求
      this.houseRequest();
      //请求搜索条件
      this.tagsRequest(city);
      //获取搜索二手房总数量
      this.countRequest();
      //获取对比清单列表
      this.contrastListRequest();
    },
    //请求对比清单列表
    contrastListRequest() {
      this.$http.get(this.$url.URL.TWOHOUSELIST_CONTRAST)
      .then((res)=>{
        try{
          if(res.data.data.length) {
            this.contrastList = res.data.data;
            //初始化清单列表
            this.$store.dispatch('showlist', res.data.data);
          }
        }catch(e){}
      });
    },
    //搜索条件
    tagsRequest(city) {
      this.$http
        .get(this.$url.URL.AREA_DISTRICTS + city) //区域
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listone = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "SELL_PRICE") //房源售价
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});          
          this.listtwo = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_AREA") //面积
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listthree = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_HUXING") //房型
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listfour = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_DECORATION") //装修
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listfive = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_AGE") //房源楼龄
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listsix = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_DIRECTION") //朝向
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listseven = response.data.data;
        });
      this.$http
        .get(this.$url.URL.DICTIONARY_DICTYPE + "HOUSE_FEATURE") //特色
        .then(response => {
          response.data.data.unshift({value: null, name: "不限"});
          this.listeight = response.data.data;
        });
    },
    //房源列表请求
    houseRequest() {
      this.keyword = this.$route.query.word;
      this.params.keyword = this.$route.query.word;
      let params = {'keyword': this.keyword, 'scity': this.selectCity.value};
      let newParams = Object.assign({}, this.params, params);
      this.$http
      .post(this.$url.URL.HOUSE_QUERY, newParams)
      .then(response=>{
        this.houseList = response.data.data;
      })
    },
    //搜索
    query(item) {
      this.params.keyword = item.keyword;
      this.$router.push({path: "/buyHouse",query:{word: item.keyword,type: 0}})
    },
    //翻页
    handleCurrentChange(val) {
      this.params.pageNo = val;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
      this.houseRequest();
    },
    //点击区域条件
    address(item, index, e) {
      this.queryone = index;
      this.params.areaId = item.id;
      this.houseRequest(); 
      this.countRequest();
    },
    //售价
    shoujia(item, index) {
      this.querytwo = index;
      this.params.pageNo = 1;
      if(item.value){
        this.params.minPrice = item.value.split("-")[0];
        this.params.maxPrice = item.value.split("-")[1];
      }else{
        this.params.minPrice = null;  
        this.params.maxPrice = null;  
      }
      this.houseRequest(); 
      this.countRequest();
    },
    //面积
    mianji(item, index) {
      this.querythree = index;
      this.params.pageNo = 1;
      try{
        this.params.minBuildArea = item.value.split("-")[0];
        this.params.maxBuildArea = item.value.split("-")[1];
      }catch(e){
        this.params.minBuildArea = null;
        this.params.maxBuildArea = null;
      }
      this.houseRequest(); 
      this.countRequest();
    },
    //房型
    fangxing(item, index) {
      this.queryfour = index;
      this.params.roomsNum = item.value;
      this.params.pageNo = 1;
      this.houseRequest(); 
      this.countRequest();
    },
    //装修
    zhuangxiu(item, index) {
      this.queryfive = index;
      this.params.houseDecor = item.value;
      this.params.pageNo = 1;
      this.houseRequest(); 
      this.countRequest();
    },
    //楼龄
    louling(item, index) {
      this.querysix = index; 
      this.params.useYear = item.value;
      this.params.pageNo = 1;
      this.houseRequest(); 
      this.countRequest();
    },
    //朝向
    chaoxiang(item, index) {
      this.queryseven = index;
      this.params.houseDirec = item.value;
      this.params.pageNo = 1;
      this.houseRequest(); 
      this.countRequest();
    },
    //特色
    teshe(item, index) {
      this.queryeight = index;
      this.params.houseFeature = item.value;
      this.params.pageNo = 1;
      this.houseRequest(); 
      this.countRequest();
    },
    //请求房源数量
    countRequest() {
      this.$http.post(this.$url.URL.HOUSE_QUERYCOUNT, this.params).then(response => {
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
      this.params.pageNo = 1;
      if (num == 1) {
        this.params.minPrice = this.inputone;
        this.params.maxPrice = this.inputtwo;
        this.houseRequest(); 
        this.countRequest();
      } else {
        this.params.minPrice = this.inputthree;
        this.params.maxPrice = this.inputfour;
        this.houseRequest(); 
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
.item {
  position: relative;
  ul li{
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
}

.m-checkbox {
  display: inline-block;
  background-image: url(../../imgs/buyhouse/check.png);
  width: 12px;
  height: 12px;
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

//没有搜索到任何数据
.noContent{
  color: #5e7382;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.pageFooter{
  overflow: hidden;
  padding-top: 20px;
}

//内容
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
</style>





