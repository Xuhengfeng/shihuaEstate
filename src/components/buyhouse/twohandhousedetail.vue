<template>
	<div>
		<o-header></o-header>
		<div class="title container">
			<div class="tit fl">
				<p>{{twohandhousedetail.houseTitle}}</p>
				<div>世华易居真房源 <span>更多房源信息请联系经纪人</span></div>
				<div class="fl">
					<div class="pc-slide">
						<div class="view">
							<div class="swiper-container">
								<a class="arrow-left" href="#"></a>
								<a class="arrow-right" href="#"></a>
								<div class="swiper-wrapper">
									<div class="swiper-slide " v-for="item in twohandhousedetail.housePicList">
											<img :src="item">
									</div>
								</div>
							</div>
						</div>
						<div class="preview">
							<a class="arrow-left" href="#"></a>
							<a class="arrow-right" href="#"></a>
							<div class="swiper-container">
								 <!-- active-nav -->
								<div class="swiper-wrapper">
									<div class="swiper-slide swiperimg" :class=" index==0?'active-nav': '' " v-for="(item,index) in twohandhousedetail.housePicList">
											<img :src="item">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="collect fr">
				<div class="collect_s">
					<div class="collect_a">收藏房源</div>
					<div class="collect_a">预约看房</div>
				</div>
				<div class="content fr">
					<div class="price ">
						<span class="total">{{twohandhousedetail.saleTotal}}</span>
						<span class="unit"><span>万</span>
						</span>
						<div class="text">
							<div class="unitPrice"><span class="unitPriceValue">{{twohandhousedetail.saleprice }}<i>元/平米</i></span></div>
							<div class="tax" id="tax-text">首付及贷款情况请咨询经纪人</div>
						</div>
						<div class="removeIcon"></div>
					</div>
					<div class="houseInfo">
						<div class="room">
							<div class="mainInfo">{{twohandhousedetail.houseType}}</div>
							<div class="subInfo">{{twohandhousedetail.houseForm }}</div>
						</div>
						<div class="type">
							<div class="mainInfo" title="南">{{twohandhousedetail.houseDirection }}</div>
							<div class="subInfo">{{twohandhousedetail.houseForm }}/{{twohandhousedetail.houseDecoration }}</div>
						</div>
						<div class="area">
							<div class="mainInfo">{{twohandhousedetail.builtArea }}平米</div>
							<div class="subInfo">{{twohandhousedetail.buildAge }}年建/塔楼</div>
						</div>
					</div>
					<div class="aroundInfo">
						<div class="communityName"><i></i><span class="label">小区名称</span>
							<a href="/xiaoqu/2411048689454/" target="_blank" class="info ">帝港海湾豪园</a>
							<a href="#around" class="map">地图</a>
						</div>
						<div class="areaName"><i></i><span class="label">所在区域</span><span class="info">&nbsp;<a>{{twohandhousedetail.areaName }}</a></span>
							<a href="" class="supplement" title="" style="color:#394043;"></a>
						</div>
						<div class="visitTime"><i></i><span class="label">看房时间</span><span class="info">提前预约随时可看</span></div>
					</div>
					<div class="duibi">
							<div class="duibi_a">加入对比</div>
							<div class="duibi_a">分享房源</div>
					</div>
					<div class="callpeople">联系经纪人</div>
					<div class="fl peopleintrode">
							<div class="fl"><img :src="twohandhousedetail.broker.photo"></div>
							<div class="fr">
								<ul>
									<li>{{twohandhousedetail.broker.emplName}}</li>
									<li>{{twohandhousedetail.broker.phone}}</li>
									<li>亲自勘察，真实房源，竭诚为您服务</li>
								</ul>
							</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="container">
			<div class="fl">
			<div class="headtitle">房源位置</div>
				<b-map></b-map>
				<!--房源信息-->
				<div class="" style="width:700px;">
						<div class="headtitle">房源信息</div>
					<div class="introContent">
						<div class="base" style="border-bottom: 0;">
							<div class="name">基本属性</div>
							<div class="contents">
								<ul>
									<li><span class="label">房屋户型</span>{{twohandhousedetail.houseType}}</li>
									<li><span class="label">所在楼层</span>{{twohandhousedetail.houseForm}} (共{{twohandhousedetail.floorNum}}层)</li>
									<li><span class="label">建筑面积</span>{{twohandhousedetail.builtArea}}㎡</li>
									<li><span class="label">户型结构</span>{{twohandhousedetail.houseForm}}</li>
									<li><span class="label">套内面积</span></li>
									<li><span class="label">建筑类型</span>{{twohandhousedetail.houseRight}}</li>
									<li><span class="label">房屋朝向</span>{{twohandhousedetail.houseDirection}}</li>
									<li><span class="label">建筑结构</span>{{twohandhousedetail.houseStruc}}</li>
									<li><span class="label">装修情况</span>{{twohandhousedetail.houseDecoration}}</li>
									<li><span class="label">梯户比例</span></li>
									<li><span class="label">配备电梯</span>{{twohandhousedetail.elevator}}</li>
									<li><span class="label">产权年限</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="" style="width:200px;">
					<div class="headtitle">房源动态</div>
					<div class="introContent">
						<div class="base" style="border-bottom: 0;">
							<div class="name">近7日带看(次)</div>
							<div class="contents">
								<ul>
									<li>近30日带看(次)</li>
									<li>收藏房源(人)</li>
								</ul>
							</div>
						</div>
						<div class="base" style="border: 0;">
							<div class="name" style="font-size: 30px;color: #000000;">{{twohandhousedetail.day7Num }}</div>
							<div class="contents">
								<ul>
									<li style="font-size: 30px;color: #000000;">{{twohandhousedetail.day30Num }}</li>
									<li style="font-size: 30px;color: #000000;">{{twohandhousedetail.collectNum }}</li>
								</ul>
							</div>
						</div>
						<div>带看记录</div>
            <ul class="daikan">
              <li> 看房日期 </li>
              <li> 带看人 </li>
              <li> 联系经纪人</li>
            </ul>
             <ul class="daikan"  v-for="item in housesee">
              <li> {{item.seeDate}} </li>
              <li> {{item.emplName}} </li>
              <li> {{item.phone}}</li>
            </ul>
            
					</div>
				</div>
					<div class="headtitle">关联小区</div>
				<div class="item">
					<ul>
						<li>
							<div class="image fl">
								<img :src="bulidinfo.housePic" alt="" />
							</div>
							<div class="direciton">
								<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">{{bulidinfo.buildName}} <span class="fr" style="font-size: 16px;color: ">收藏</span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">90天成交{{bulidinfo.saleCount }}套|{{bulidinfo.rentCount }}套正在出租</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{bulidinfo.avgSalePrice }}<span style="font-size: 14px;">万</span></span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{bulidinfo.areaName}}  {{bulidinfo.districtName}}/{{bulidinfo.buildAge}}建成</span><span class="fr">单价{{bulidinfo.avgRentPrice }}元/平米</span></div>
								<div class="introduce ">
									<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">{{bulidinfo.buildType}}</span>
									<span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
									<span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
								</div>
							</div>
						</lik>
							<div class="headtitle">同小区房源</div>
						<li v-for="item in samehouseused">
							<div class="image fl" @click="toSkip(item)">
								<img :src="item.housePic"  />
							</div>
							<div class="direciton">
								<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">{{item.houseTitle}} <span class="fr" style="font-size: 16px;color: ">收藏</span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection}}|{{item.houseFeature}}</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.saleTotal }}<span style="font-size: 14px;">万</span></span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseTag}}</span><span class="fr">单价{{item.salePrice }}元/平米</span></div>
								<!-- <div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div> -->
								<div class="introduce ">
									<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
									<span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
									<span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
								</div>
							</div>
						</li>
						<div class="headtitle">周边房源</div>
						<li v-for="item in rimhousing">
							<div class="image fl"  @click="toSkip(item)">
								<img src="item.housePic" />
							</div>
							<div class="direciton">
								<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">{{item.houseTitle }} <span class="fr" style="font-size: 16px;color: ">收藏</span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName }}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.saleTotal }}<span style="font-size: 14px;">万</span></span></div>
								<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价{{item.salePrice }}元/平米</span></div>
								<!-- <div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div> -->
								<div class="introduce ">
									<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
									<span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
									<span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import oHeader from "../../base/header/header";
import BMap from "../../base/BMap/BMap";
import "../../../static/js/jquery-3.2.1.min.js";
import "../../../static/js/swiper-3.3.1.min.js";

export default {
  data() {
    return {
      datas: "",
      num: 0,
      dialogVisible: false,
      loginshow: null, //登陆注册阴影层
      rightnow: true, //登陆注册判断条件
      cancel: false, //取消登陆阴影
      twohandhousedetail: {
        //二手房详情
        broker: {
          emplName: "",
          photo: ""
        }
      },
      bulidinfo: "", //关联小区
      samehouseused: [], //同小区房源列表
      rimhousing: "", //周边房源
      buildsdid: "", //同小区sdid
      housesee:[],   //约看
      id:"",//带看id
	    scity: JSON.parse(window.localStorage.selectCity)//用户选定城市
    };
  },
  watch: {
    $route() {
		this.render();
	}
  },
  components: {
    oHeader,
    BMap
  },
  created() {
	  this.render();
  },
  methods: {
	toSkip(item) {
      let path = "/buyhouse/twohandhousedetail/" + item.sdid;
      this.$router.push({ path: path });
    },
    render() {
      //二手房详情
      let sdid = this.$route.params.id;
      let city = this.scity.value;
      console.log(city)
      this.$http
        .get(this.$url.URL.HOUSE_GETDETAILINFO + city + "/" + sdid)
        .then(response => {
          this.twohandhousedetail = response.data.data;
          this.buildsdid =  response.data.data.buildSdid;
          this.px = response.data.data.px;
          this.py = response.data.data.py;
          this.id = response.data.data.id
           
          //带看记录
        this.$http.get(this.$url.URL.HOUSE_HOUSESEE  + this.id ,{
                 headers: {
                    "scity": city
                },
                params: {
                  pageNo: 1
                }
        })
         .then(response =>{
               this.housesee =  response.data.data
         })
       

          //二手房周边
          this.$http
            .post(this.$url.URL.HOUSE_RIMHOUSING, {
              pageNo: 1,
              pageSize: 10,
              px: this.px,
              py: this.py,
              buildSdid: this.buildsdid,
              scity: city
            })
            .then(response => {
              this.rimhousing = response.data.data;
            });

          //关联小区
          this.$http
            .get(this.$url.URL.BULIDINFO + city + "/" + this.buildsdid)
            .then(response => {
              this.bulidinfo = response.data.data;
            });

          // //同小区房源
          this.$http
            .get(
              this.$url.URL.MAPHOUSEALL_USED_LIST +
                city +
                "/" +
                this.buildsdid,
              {
                pageNo: 1,
                pageSize: 10
              }
            )
            .then(response => {
              this.samehouseused = response.data.data;
            });
        });
    }
  },
  mounted() {
    setTimeout(function() {
      var viewSwiper = new Swiper(".view .swiper-container", {
        onSlideChangeStart: function() {
          updateNavPosition();
        }
      });

      $(".view .arrow-left,.preview .arrow-left").on("click", function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == 0) {
          viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
          return;
        }
        viewSwiper.slidePrev();
      });
      $(".view .arrow-right,.preview .arrow-right").on("click", function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
          viewSwiper.slideTo(0, 1000);
          return;
        }
        viewSwiper.slideNext();
      });

      var previewSwiper = new Swiper(".preview .swiper-container", {
        //visibilityFullFit: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        onTap: function() {
          viewSwiper.slideTo(previewSwiper.clickedIndex);
        }
      });

      function updateNavPosition() {
        $(".preview .active-nav").removeClass("active-nav");
        var activeNav = $(".preview .swiper-slide")
          .eq(viewSwiper.activeIndex)
          .addClass("active-nav");
        if (!activeNav.hasClass("swiper-slide-visible")) {
          if (activeNav.index() > previewSwiper.activeIndex) {
            var thumbsPerNav =
              Math.floor(previewSwiper.width / activeNav.width()) - 1;
            previewSwiper.slideTo(activeNav.index() - thumbsPerNav);
          } else {
            previewSwiper.slideTo(activeNav.index());
          }
        }
      }
    }, 1000);
  }
};
</script>

<style scoped="scoped">
	@import '../../../static/css/swiper-3.4.2.min.css';
.title {
  padding: 24px;
}

.tit p {
  font-size: 24px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

.tit p span {
  margin-left: 15px;
}

.tit div {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.collect_s {
  margin-left: 120px;
}
.duibi {
  margin-top: 30px;
  margin-left: 20px;
}
.duibi .duibi_a {
  float: left;
  padding: 12px 27px;
  border: 1px solid gainsboro;
  margin-left: 30px;
}

.collect .collect_a {
  float: left;
  padding: 13px 27px;
  border: 1px solid gainsboro;
  margin-left: 14px;
}

.content {
  width: 380px;
  line-height: 1;
  margin-top: 70px;
}

.content .price {
  position: relative;
  height: 49px;
}

.content .price .total {
  display: inline-block;
  font-family: Tahoma;
  font-size: 46px;
  line-height: 46px;
  color: #e4393c;
  font-weight: bold;
  letter-spacing: -1px;
  max-width: 165px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content .price .unit {
  display: inline-block;
  font-size: 16px;
  color: #e4393c;
  height: 37px;
  vertical-align: 6px;
}

.content .price .unit span {
  display: block;
  margin-top: 9px;
}

.content .price .text {
  font-size: 12px;
  color: #333333;
  display: inline-block;
  margin-left: 15px;
  vertical-align: 6px;
}

.content .price .text .unitPrice {
  font-size: 16px;
  color: #394043;
}

.price .text .unitPrice .unitPriceValue {
  font-weight: bold;
  color: #394043;
}

.content .price .text .tax {
  margin-top: 11px;
  color: #394043;
  font-size: 12px;
}

.content .houseInfo {
  box-sizing: border-box;
  margin-top: 22px;
  width: 100%;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 30px 0;
}

.content .houseInfo .room {
  float: left;
  width: 33%;
}

.content .houseInfo .mainInfo {
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}

.content .houseInfo .subInfo {
  margin-top: 8px;
  font-size: 12px;
  color: #394043;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}

.content .houseInfo .type {
  float: left;
  width: 33%;
}

.content .aroundInfo {
  padding: 30px 0;
  line-height: 18px;
  border-bottom: 1px solid #eeeeee;
  font-size: 14px;
}

.content .aroundInfo .areaName {
  margin-top: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content .aroundInfo .visitTime {
  margin-top: 14px;
}

.content .aroundInfo .houseRecord {
  margin-top: 14px;
}

.brokerInfo {
  font-size: 0;
  padding-top: 40px;
  padding-bottom: 35px;
  border-bottom: 1px solid #eeeeee;
}

.newwrap .title {
  margin-bottom: 25px;
  font-weight: bold;
  font-size: 23px;
  line-height: 23px;
}

.introContent {
  text-align: justify;
}

.introContent .base {
  display: inline-block;
  width: 710px;
  vertical-align: top;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  line-height: 22px;
  padding: 20px 0;
}

.introContent .name {
  float: left;
  width: 188px;
  text-align: left;
  color: #999999;
  line-height: 23px;
}

.introContent .contents {
  width: 522px;
  float: left;
}

.introContent .contents ul {
  font-size: 0;
}

.introContent .contents ul li {
  display: inline-block;
  width: 50%;
  line-height: 24px;
  font-size: 14px;
  color: #394043;
}

.introContent .contents ul li .label {
  color: #999999;
  margin-right: 30px;
}

.item {
  width: 830px;
  margin-bottom: 80px;
  overflow: hidden;
}
.item ul li {
  margin-top: 50px;
  cursor: pointer;
}
.introduce {
  margin-left: 215px;
  height: 19px;
  margin-top: 29px;
}
.introduce span {
  font-size: 14px;
}
.direciton {
  margin-left: 50px;
}
.introduce .word {
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
.headtitle {
  font-size: 20px;
  line-height: 30px;
  margin-top: 60px;
}
.callpeople {
  width: 380px;
  float: left;
  line-height: 42px;
  text-align: center;
  height: 42px;
  background: red;
  color: white;
  margin-top: 25px;
}
.peopleintrode {
  width: 285px;
  margin-top: 20px;
}
.peopleintrode > div {
  font-weight: bold;
  font-size: 18px;
}
.peopleintrode > :nth-child(1) {
  width: 72px;
  height: 80px;
}
.peopleintrode > :nth-child(1) img {
  width: 100%;
  height: 100%;
}
.peopleintrode ul {
  line-height: 28px;
}
.peopleintrode > :nth-child(2) > ul > :nth-child(2) {
  color: red;
}
.peopleintrode > :nth-child(2) > ul > :nth-child(3) {
  font-size: 12px;
}
.image {
  width: 232px;
  height: 175px;
}
.image img {
  width: 100%;
  height: 100%;
}
.daikan{
  width: 550px;
  margin-top: 20px;
  display: flex;
  vertical-align: middle;
   justify-content: space-between;
}
/* .daikan li{
  width: 150px;
} */
/*轮播切换*/

.pc-slide {
  width: 714px;
  margin: 0 auto;
}

.view .swiper-container {
  width: 714px;
  height: 500px;
}

.view .arrow-left {
  background: url(../../imgs/buyhouse/index_tab_l.png) no-repeat left top;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -25px;
  width: 28px;
  height: 51px;
  z-index: 10;
}

.view .arrow-right {
  background: url(../../imgs/buyhouse/index_tab_r.png) no-repeat left bottom;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -25px;
  width: 28px;
  height: 51px;
  z-index: 10;
}

.preview {
  width: 100%;
  margin-top: 10px;
  position: relative;
}

.preview .swiper-container {
  width: 645px;
  height: 82px;
  margin-left: 35px;
}

.preview .swiper-slide {
  width: 87px;
  height: 82px;
  cursor: pointer;
}

.preview .slide6 {
  width: 82px;
}

.preview .arrow-left {
  background: url(../../imgs/buyhouse/feel3.png) no-repeat left top;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -9px;
  width: 9px;
  height: 18px;
  z-index: 10;
}

.preview .arrow-right {
  background: url(../../imgs/buyhouse/feel4.png) no-repeat left bottom;
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -9px;
  width: 9px;
  height: 18px;
  z-index: 10;
}

.preview img {
  padding: 1px;
}

.preview .active-nav img {
  padding: 0;
}
.swiperimg {
  width: 120px;
  height: 81px;
}
.swiperimg img {
  width: 100%;
  height: 100%;
}
</style>