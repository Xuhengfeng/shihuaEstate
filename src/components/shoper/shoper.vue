
<template>
	<div>
		<o-header :houseTypeId="houseTypeId"></o-header>
		<!--内容部分-->
		<div class="content">
			<div class="container">
				<!--右侧部分-->
				<!-- <div class="sidebar fr">
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
				</div> -->
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
							<div class="listContentLine"></div>
						</div>
					
					<div class="item">
						<ul>
							<li :key="index" v-for="(item,index) in shoper">
								<!-- <div class="image" @click="toSkip(item)">
									<img :src="item.photo"/>
								</div> -->
								<div class="direciton">
									<div class="introduce" @click="toSkip(item)" >{{item.deptName }} </div>
									<div class="introduce">
                   						 <span class="word">{{item.addr}}</span>
										 <span class="fr prices"><img src="../../imgs/buyhouse/diwei.png" @click="getLocation(item)"/></span>
										 <span class="fr phone">{{item.telNum}}</span>
                   					</div> 
									<!-- <div class="introduce">
									<span class="word">{{item.houseType}}   {{item.builtArea}}平米</span><span class="fr">{{item.houseType}}</span>
									</div> -->
								</div> 
							</li>
						</ul>
					</div>
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
      houseTypeId: 11, //二手房
      // list:["默认排序", "最新", "总价", "房屋单价", "面积"],
      listone: [],
      listtwo: [],
      listthree: [],
      // listnine:["随时看房", "新上", "满五年", "世华独家"],
      num: 0,
      showBtn: false,
      showBtnone: false,
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
       querycount: {//检索总数量
        count: 0
      },
      params: {
        areaId: null,
        districtId: null,
        houseDecor: "",
        houseDirec: "",
        houseFeature: "",
        houseForm: "",
        keyword: "",
        maxBuildArea: null,
        maxRentPrice: null,
        minBuildArea: null,
        minRentPrice: null,
        pageNo: 1,
        pageSize: null,
        roomsNum: null,
        scity: null
      },
      shoper: [], //门店列表
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    this.params.scity = this.selectCity.value;
    this.render(this.selectCity.value);
  },
  methods: {
    getLocation(item){
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          location.href=`http://api.map.baidu.com/direction?origin=${r.point.lat},${r.point.lng}&destination=${item.py},${item.px}&mode=driving&region=北海&output=html`;
        }
        else {
          alert('failed'+this.getStatus());
        }        
      },{enableHighAccuracy: true})
    },
    handleCurrentChange(val) {
      this.render(null, val);		
    },
    render(city, num) {
      //请求经纪人的列表
      this.$http
        .post(this.$url.URL.SHOPERS_LIST, {
          scity: city,
          pageNo: num
        })
        .then(response => {
          this.shoper = response.data.data;    
          console.log(this.shoper )        
        });
        this.countRequest();

    },
     //请求门店数量
    countRequest() {
      this.$http.post(this.$url.URL.SHOPERS_COUNT, this.params).then(response => {
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
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .direciton{
    margin-top: 15px;
    flex: 1;
    display: flex;
    height: 65px;
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
.pageFooter{
  overflow: hidden;
  padding-top: 20px;
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
  color: rgba(0, 0, 0, 0.7);
}
.prices {
    font-family: tahoma;
    position: relative;
    right: 485px;
    font-size: 24px!important;
    color: rgba(239, 31, 31, 0.85);
    cursor: pointer;
  
}
.phone{
 font-family: tahoma;
 right: 100px;
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





