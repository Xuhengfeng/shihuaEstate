/*
 * @Author: 徐横峰 
 * @Date: 2018-05-07 18:13:41 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-07-30 16:47:19
 */
<template>
	<div>
			<o-header :houseTypeId="houseTypeId" 
					:isShowQueryBox="false"
					></o-header>
		<div class="title container">
			<div class="tit fl">
				<p>{{buildlistinfo.buildName }}</p>
				<div>世华易居真房源 <span>更多房源信息请联系经纪人</span></div>
				<div class="fl">
					<div class="pc-slide">
						<div class="view">
							<div id="move" style="left: 0; top: 0;"></div>
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide"  v-for="item in buildlistinfo.housePicList">
										<img class="swimg" :src="item|imgfilterone" :onerror="null|imgonroorrOne">
									</div>
								</div>
							</div>
						</div>
						<div class="preview">
							<i class="iconfont xhf-icon-left arrow-left"></i>
               <i class="iconfont xhf-icon-right arrow-right"></i>
							<div class="swiper-container">
								<div class="swiper-wrapper">
									<div class="swiper-slide swiperimg" :class=" index==0?'active-nav': '' " v-for="(item,index) in buildlistinfo.housePicList"  @click="slideTo(item,index)">
										<img :src="item|imgfilter" :onerror="null|imgonroorr">
									</div>
								</div>
							</div>
						</div>
							 <div id="bigImg">
                    <img :src="magnifyImg" alt="图片"  :onerror="null|imgonroorrOne"/>
               </div>
							<div class="headtitle">小区位置</div>
									<div class="map">
				          <b-map :addr="selectCity"></b-map>
                </div>
							<div class="headtitle">小区信息</div>
									<div class="base" style="border-bottom: 0;">
									<div class="name">基本属性</div>
								<div class="contents">
										<ul>
											<li><span class="label">建筑时间</span>{{buildlistinfo.buildAge}}</li>
										<li><span class="label">栋数</span>{{buildlistinfo.totalBuildNum}}</li>
											<li><span class="label">小区面积</span>{{buildlistinfo.totalCoverArea }}</li>
										<!-- <li><span class="label">小区类型</span>{{buildlistinfo.buildType }} </li> -->
										<li><span class="label">车位数</span>{{buildlistinfo.carDownNum }}</li>
										<li><span class="label">绿化率</span>{{buildlistinfo.greenRatio }}</li>
											<li><span class="label">小区简介<br></span>{{buildlistinfo.buildSynop }}</li>
										</ul>
					  		</div>
							</div>
					<div class="base">
						<div class="name">附加属性</div>
 							<div class="contents">
 								<ul>
									<li><span class="label">银行</span>{{buildlistinfo.bankInfo }}</li>
									<li><span class="label">交通</span>{{buildlistinfo.transportInfo }}</li>
 									<li><span class="label">学校</span>{{buildlistinfo.schoolInfo }} </li><br>
									<li><span class="label">医院</span>{{buildlistinfo.hospitalInfo }}</li>
 								</ul>
 							</div>
 						</div>
						 	<div class="item">
								 <div class="headtitle"> 同小区房源 <div class="fr changetab"></div> <!-- <span @click="change(0)">二手房</span><span @click="change(1)">租房</span> --></div>
									<ul>
										<li v-for="item in samehouselist">
											<div class="image fl" @click="toSkip(item)" >
												<img :src="item.housePic|imgfilter" :onerror="null|imgonroorr"/>
											</div>
											<div class="direciton">
												<div class="introduceOn intrdex" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle}}</div>
													<div class="introduceOn"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection}}|{{item.houseFeature}}</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.salePrice }}<span style="font-size: 14px;">元/月</span></span></div>
												<div class="introduceOn"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseTag}}</span></div>
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
								<div class="collect fr">
									<div class="content fr">
										<div class="price ">
											<div class="text">
												<div class="unitPrice"><span class="unitPriceValue">{{buildlistinfo.avgSalePrice }}<span class="mintter">元/平米</span></span></div>
											</div>
											<div class="removeIcon"></div> 
										</div>
										<div class="aroundInfo">
											<div class="communityName"><span class="label">建筑时间</span>
												<span class="info">{{buildlistinfo.buildAge}}</span>
											</div>
											<div class="areaName"><span class="label">栋数</span><span class="info"><span>{{buildlistinfo.totalBuildNum}}</span>&nbsp;</span></div>
											<div class="visitTime"><span class="label">车位</span><span class="info">{{buildlistinfo.carDownNum }}</span></div>
											<div class="visitTime"><span class="label">小区类型</span><span class="info">{{buildlistinfo.buildType }}</span></div>
											<div class="visitTime"><span class="label">小区面积 </span><span class="info">{{buildlistinfo.totalCoverArea }}</span></div>
											<div class="visitTime"><span class="label">绿化率</span><span class="info">{{buildlistinfo.greenRatio }}</span></div>
										</div>
										<div class="duibi">
											 <div class="duibi_a" @click="addCollection($event)" v-if="!buildlistinfo.isCollect" >收藏房源</div>
             				   <div class="duibi_a" @click="addCollection($event)" v-if="buildlistinfo.isCollect" >已收藏</div>
												<div class="duibi_a"  @click="share()">分享房源</div>
											</div>
												<div class="callpeople">小区二手房</div>
												<ul class="twohangul">
													<li class="twohangright" v-for="item in houseList">
															<div  >
																<div class="image_r">
																<img :src="item.housePic|imgfilter" :onerror="null|imgonroorr">
																</div>
																<div class="text">
																	{{item.houseTitle}}{{item.houseType}}
																	</div>
															</div>
													</li>
											</ul>
									</div>
									 <div class="panel_login" v-if="shaer">
                   <i class="close_login" @click="cancelShare()">×</i>
                	  <share :config="config"></share>
                  </div>
								</div>
							</div>
						</div>

</template>

<script>
	import oHeader from "../../base/header/header";
	import BMap from "../../base/BMap/BMap";
	import '../../../static/js/jquery-3.2.1.min.js';
	import '../../../static/js/swiper-3.3.1.min.js'
	export default {
		data() {
			return {
				houseTypeId: 11, //地图 二手房 租房  小区 11 12 13
				keywordTypeId: 0, //关键词类型 二手房 新房 租房 0 1 2
				keyword: '',//关键词
				showed:true,
				 magnifyImg: null,//放大图片的路径
			 buildlistinfo: {
					 //小区房详情
					broker: {
						emplName: "",
						photo: ""
					}
				},
				buildsdid: "", //同小区sdid
				cancel: false, //取消登陆阴影
				samehouselist: [], //同小区二手房房源列表
				houseList:[],//小区二手房
				num: 0,           //切换ip
				//二手房 租房
				IPS: [this.$url.URL.MAPHOUSEALL_USED_LIST, this.$url.URL.MAPHOURENT_USED_LIST],
				selectCity: JSON.parse(localStorage.selectCity),//当前城市
				 collectionFlag: true, //收藏标识
				 shaer:false,
					config: {
								// url                 : '', // 网址，默认使用 window.location.href
								// source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
								// title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
								// description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
								// image               : '', // 图片, 默认取网页中第一个img标签
								sites               : [ 'weibo','wechat', 'qq','qzone',], // 启用的站点
								// disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
								// wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
								// wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
					}
			};
		},
		 watch: {
			$route: {
				handler(val){
					this.keyword = val.query.word;
					this.houseRequest();
				}
			}
		},
		 created() {
			this.render();
		},
		computed: {
			//获取用户登录状态
			logined() {
				return this.$store.state.logined;
			}
		},
		methods: {
			//翻页
			handleCurrentChange(val) {
				this.params.pageNo = val;
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0
				this.houseRequest();
			},
			//收藏房源
			addCollection(e) {
				if(!this.logined){
					return this.$alert('用户未登录!');
				}
				if(this.collectionFlag){
					this.$http
					.post(this.$url.URL.BUILDCOLLECTION_ADD +this.selectCity.value +"/"+this.buildsdid)
					.then(response => {
							e.target.innerHTML = '已收藏'
					});

				}else{
						this.$http
					.post(this.$url.URL.BUILDCOLLECTION_CANCEL +this.selectCity.value +"/"+this.buildsdid)
					.then(response => {
							e.target.innerHTML = '收藏房源'
					});
				}
				this.collectionFlag = !this.collectionFlag;
			},
			 //收藏房源
			collection(e) {
				if(!this.logined){
					return this.$alert('用户未登录!');
				}
				if(this.collectionFlag){
					this.$http
					.post(this.$url.URL.BUILDCOLLECTION_ADD + "/"+ this.selectCity.value +"/"+ this.buildsdid)
					.then(response => {
							e.target.innerHTML = '已收藏'
					});

				}else{
						this.$http
					.post(this.$url.URL.BUILDCOLLECTION_CANCEL + "/"+ this.selectCity.value +"/"+ this.buildsdid)
					.then(response => {
							e.target.innerHTML = '收藏'
					});
				}
				this.collectionFlag = !this.collectionFlag;
			},
			toSkip(item) {
				this.$router.push({ path:"/buyhouse/twohandhousedetail/"+ item.sdid});
			},
			render() {
				//小区详情BUILDSECOND_HOUSELIST
				let sdid = this.$route.params.id;
				let city = this.selectCity.value;
				this.$http.get(this.$url.URL.BUILDLISTINFO + city + "/" + sdid)
				.then(response => {
					this.buildlistinfo = response.data.data;
					this.magnifyImg = this.buildlistinfo.housePicList[0];
					this.buildsdid = response.data.data.sdid;
					this.px = response.data.data.px;
					this.py = response.data.data.py;

					//小区二手房
					this.$http.get(this.$url.URL.BUILDSECOND_HOUSELIST + city + "/" + this.buildsdid +"?pageNo=1")
					.then(response => {
						this.houseList= response.data.data;
					});
					//同小区二手房房源
					this.neayHouseRequest(0, this.buildsdid);
				}); 

				
			},
			//房源列表请求
			houseRequest() {
				this.keyword = this.$route.query.word;
				let params = {'keyword': this.keyword, 'scity': this.selectCity.value};
				this.$http
				.post(this.$url.URL.BUILDLIST, params)
				.then(response=>{
					this.houseList = response.data.data;
				})
			},
			//搜索
			query(item) {
				this.$router.push({path: "/rentHouse",query:{word: item.keyword,type: 1}})
			},
			//同小区二手房房源
			neayHouseRequest(num, sdid) {
				this.$http.get(this.IPS[num] + this.selectCity.value + "/" + sdid,
					{
						pageNo: 1,
						pageSize: 10
					}
				)
				.then(response => {
					this.samehouselist= response.data.data;
				});
			},
			change(num) {
					//同小区二手房房源
					this.neayHouseRequest(num, this.buildsdid);
					
			},
			share(){
					this.shaer=true
			},
			cancelShare(){
					this.shaer=false
			},
			slideTo(item,index) {
      this.magnifyImg = item;
      this.viewSwiper.slideTo(index);
    },
		},
		components: {
			oHeader,
			BMap
		},
		mounted() {
			setTimeout(function(){
				//实例1
					var viewSwiper = new Swiper('.view .swiper-container', {
					onSlideChangeStart: function() {
						updateNavPosition()
					}
				})

				//上一页
				$('.view .arrow-left,.preview .arrow-left').on('click', function(e) {

					e.preventDefault()
					if(viewSwiper.activeIndex == 0) {
						viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
						return
					}
					viewSwiper.slidePrev()
				});
				// // 移入移出
				// $('.view').mouseover(()=>{
				// 	$(".view .arrow-left,.view .arrow-right").show();
				// }).mouseout(()=>{
				// 	$(".view .arrow-left,.view .arrow-right").hide();
				// })
				  //放大镜
      $('.view')
      .mousemove(function(ent){
          $('#move,#bigImg').show();
          var e = ent||event;
          //文档位置
          var x = e.pageX;
          var y = e.pageY;
          //坐标原点对齐
          x = x - $(this).offset().left;
          y = y - $(this).offset().top;
          //move的位置
          x = x - $('#move').width()/2;
          y = y - $('#move').height()/2;
          //边界限制
          var maxLeft = $(this).width()-$('#move').width();
          var maxTop = $(this).height()-$('#move').height();
          if(x<=0){
              x = 0;
          }else if(x>=maxLeft){
              x = maxLeft;
          }
          if(y<=0){
              y = 0;
          }else if(y>=maxTop){
              y = maxTop;
          }
          //移动的比例
          var bLeft = x / maxLeft * ($('#bigImg img').width()-$('#bigImg').width());
          var bTop =  y / maxTop * ($('#bigImg img').height()-$('#bigImg').height());
          $('#move').css({'left': x, 'top': y});
          $('#bigImg img').css({'marginLeft': -bLeft, 'marginTop': -bTop});
				})
				.mouseout(function(){
						$('#move,#bigImg').hide();
				})

				//下一页
				$('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
					e.preventDefault()
					if(viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
						viewSwiper.slideTo(0, 1000);
						return
					}
					viewSwiper.slideNext()
				})
				
				//实例2
				var previewSwiper = new Swiper('.preview .swiper-container', {
					//visibilityFullFit: true,
					slidesPerView: 'auto',
					allowTouchMove: false,
					onTap: function() {
						viewSwiper.slideTo(previewSwiper.clickedIndex)
					}
				})

				function updateNavPosition() {
					$('.preview .active-nav').removeClass('active-nav')
					var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
					if(!activeNav.hasClass('swiper-slide-visible')) {
						if(activeNav.index() > previewSwiper.activeIndex) {
							var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
							previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
						} else {
							previewSwiper.slideTo(activeNav.index())
						}
					}
				}
			},100);
		}
	}
</script>

<style lang="less" scoped>
  @import '../../../static/css/client.css';
	@import '../../../static/css/swiper-3.4.2.min.css';
	@import "../../../static/css/swiper-3.4.2.min.css";
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
	cursor: pointer;
}
.collect{
	margin-top: 100px;
}
.collect .collect_a {
  float: left;
  padding: 13px 27px;
  border: 1px solid gainsboro;
  margin-left: 14px;
}
.mintter{
	font-size: 16px;
}

.content {
  width: 380px;
  line-height: 1;
  margin-top: 70px;
}
.text{
	  width: 210px;
		height: 78px;
		line-height: 30px;
		margin: 0 auto;
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
	font-size: 46px;
  font-weight: bold;
  color: red;
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



.base {
  display: inline-block;
  width: 710px;
  vertical-align: top;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  line-height: 22px;
  padding: 20px 0;
}

.name {
  float: left;
  width: 188px;
  text-align: left;
  color: #999999;
  line-height: 23px;
}

.contents {
  width: 522px;
  float: left;
}

 .contents ul {
  font-size: 0;
}

 .contents ul li {
  display: inline-block;
  // width: 50%;
  line-height: 24px;
  font-size: 14px;
	color: #394043;
	margin-left: 25px;
}

.contents ul li .label {
  color: #999999;
  margin-right: 30px;
}
.item {
  width: 830px;
  margin-bottom: 80px;
  overflow: hidden;
}
.item ul li {
  // margin-top: 50px;
	float: left;
  cursor: pointer;
}
.introduce {
    margin-left: 16px;
    width: 700px;
    margin-left: 40px;
    height: 38px;
		position: relative;
    left: 42px;
}
.introduceOn{
	 margin-left: 16px;
		width: 535px;
    margin-left: 25px;
    height: 38px;
		float: left;
}
.introduce span {
  font-size: 14px;
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
  line-height: 50px;
  padding: 20px 10px;
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
.changetab {
	font-size: 18px;
	margin-right: 50px;
	color: #000000
}
.changetab span{
    margin-left: 40px;
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

.twohangright{
	border: 1px solid rgba(0, 0, 0, 0.3);
	width: 378px;
	float: right;

}
.image{
	margin: 0 auto;
  width: 232px;
  height: 175px;
	margin-top: 15px;
}
.image img{
	 width: 100%;
  height: 100%;
}

.image_r{
	margin: 0 auto;
  width: 272px;
  height: 175px;
	margin-top: 15px;
}
.image_r img {
  width: 100%;
  height: 100%;
}
.info{
	margin-left: 50px;
}

/*轮播切换*/


.pc-slide {
	position: relative;
  width: 714px;
  margin: 0 auto;
}
.view{
  position: relative;
  width: 714px;
  height: 400px;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
}
.view .arrow-left,
.view .arrow-right{
  position: absolute;
  top: 50%;
  font-size: 30px;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 100px;
  background: rgba(0,0,0,0.3);
  text-align: center;
  line-height: 100px;
  color: #f40;
  display: none;
  cursor: pointer;
}
.view .arrow-left{
  left: 0;
}
.view .arrow-right{
  right: 0;
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
  margin-right: 10px;
  text-align: center;
}
.swimg{
	width: 100%;
	height: 100%;
}
.preview .arrow-left,
.preview .arrow-right{
  position: absolute;
  top: 50%;
  width: 9px;
  height: 18px;
  font-size: 30px;
  transform: translateY(-50%);
  color: #f40;
}
.preview .arrow-left{
  left: 0;
}
.preview .arrow-right{
  right: 9px;
}

.preview .active-nav::before{
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #f40;
  box-sizing: border-box;
}

.swiperimg {
  width: 120px;
  height: 81px;
  img {
    width: 100%;
    height: 100%;
  }
}
.panel_login{
    background-color: #fff;
    position: fixed;
    z-index: 999;
   left: 78%;
    top: 105%;
    margin-left: -190px;
    margin-top: -205px;
    -webkit-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    padding: 40px 0 40px;
    -webkit-transition: top ease-in 0.5s;
    transition: top ease-in 0.5s;
}
.panel_login .close_login {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    padding: 4px;
    color: #000000;
}
/* 移动的盒子 */
#move{
  display: none;
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 1000;
  background: rgba(0,174,102,0.4);
  border: 1px solid rgba(5,113,68,0.4);
  cursor: move;
}
/* 图片放大区域 */
#bigImg{
  display: none;
  overflow: hidden;
  position: absolute;
 	left: 730px;
  top: 0;
  width: 430px;
  height: 492px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
/* 图片放大比例 */
#bigImg img{
  height: 800px;
}
</style>



