/*
 * @Author: 徐横峰 
 * @Date: 2018-05-04 14:34:35 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-05 16:10:12
 */
<template>
	<div>
		<o-header :houseTypeId="houseTypeId" 
              :isShowQueryBox="false"
              ></o-header>
    <div class="section container">
        <!-- 左侧main内容 -->
        <div class="main">
            <h3>{{sellrentdetail.houseTitle}}</h3>
            <div>世华易居真房源 <span>更多房源信息请联系经纪人</span></div>
            <div class="one">
              <div class="pc-slide">
                <div class="view image">
                  <div id="move" style="left: 0; top: 0;"></div>
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide " v-for="item in sellrentdetail.housePicList">
                          <img :src="item" :onerror="null|imgonroorrOne">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="preview">
                  <i class="iconfont xhf-icon-left arrow-left"></i>
                  <i class="iconfont xhf-icon-right arrow-right"></i>
                  <div class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiperimg" :class=" index==0?'active-nav': '' " v-for="(item,index) in sellrentdetail.housePicList" @click="slideTo(item,index)">
                          <img :src="item" :onerror="null|imgonroorr">
                      </div>
                    </div>
                  </div>
                </div>
                 <div id="bigImg">
                    <img :src="magnifyImg" alt="图片"  :onerror="null|imgonroorrOne"/>
                </div>
              </div>
            </div>
            <div class="two">
                <div class="title">房源位置</div>
                <div class="map">
				            <b-map :addr="scity"></b-map>
                </div>
            </div>
            <div class="three">
                <div class="title">房源信息</div>
                <div class="introContent">
                    <div class="base" style="border-bottom: 0;">
                      <div class="name">基本属性</div>
                      <div class="contents">
                        <ul>
                          <li><span class="label">房屋户型</span>{{sellrentdetail.houseType}}</li>
                          <li><span class="label">所在楼层</span>{{sellrentdetail.houseForm}} (共{{sellrentdetail.floorNum}}层)</li>
                          <li><span class="label">建筑面积</span>{{sellrentdetail.builtArea}}㎡</li>
                          <li><span class="label">户型结构</span>{{sellrentdetail.houseForm}}</li>
                          <li><span class="label">房屋朝向</span>{{sellrentdetail.houseDirection}}</li>
                          <li><span class="label">建筑结构</span>{{sellrentdetail.houseStruc}}</li>
                          <li><span class="label">装修情况</span>{{sellrentdetail.houseDecoration}}</li>
                          <li><span class="label">配备电梯</span>{{sellrentdetail.elevator}}</li>
													<li><span class="label">物业费</span>{{sellrentdetail.houseManageFee }}</li> 
                        </ul>
                      </div>
                  </div>
                </div>
            </div>
            <div class="four">
                <div class="title">房源动态</div>
                <div class="introContent">
                  <div class="content-hd">
                    <div class="name">
                      <div>近7日带看(次)</div> 
                      <div>近30日带看(次)</div> 
                      <div>收藏房源(人)</div> 
                    </div>
                    <div class="num">
                      <div>{{sellrentdetail.day7Num }}</div>
                      <div>{{sellrentdetail.day30Num }}</div>
                      <div>{{sellrentdetail.collectNum }}</div>
                    </div>
                  </div>

                  <div class="daikan">
                    <div>带看记录</div>
                    <div>
                      <div> 看房日期 </div>
                      <div> 带看人 </div>
                      <div> 联系经纪人</div>
                    </div>
                    <div class="list" v-for="(item,index) in renthousesee">
                      <div> {{item.seeDate}} </div>
                      <div> {{item.emplName}} </div>
                      <div> {{item.phone}}</div>
                    </div>
                    <div class="list" v-show="!renthousesee.length">
                        <div style="text-align:center!important;">暂无更多的记录!</div>
                    </div>
                  </div>
                   <div class="more">
                     <div @click="changeNum(1)"><i class="iconfont xhf-icon-left"></i></div>
                     <div @click="changeNum(2)"><i class="iconfont xhf-icon-right"></i></div>
                   </div>
                </div>
            </div>

            <div class="five">
                <div class="guanlianxiaoqu">
                    <div class="title">关联小区</div>
                    <div class="image fl" @click="toSkipone(bulidinfo)">
                      <img :src="bulidinfo.housePic" :onerror="null|imgonroorr">
                    </div>
                    <div class="direciton">
                      <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">{{bulidinfo.buildName}}</div>
                      <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">90天成交{{bulidinfo.saleCount }}套|{{bulidinfo.rentCount }}套正在出租</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{bulidinfo.avgSalePrice }}<span style="font-size: 14px;">元/月</span></span></div>
                      <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{bulidinfo.areaName}}  {{bulidinfo.districtName}}/{{bulidinfo.buildAge}}建成</span></div>
                      <div class="introduce ">
                        <span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">{{bulidinfo.buildType}}</span>
                        <span class="intrspan" style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
                        <span class="intrspan" style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
                      </div>
                    </div>
                </div>
                <div class="tongxiaoqu">
                    <div class="title">同小区房源</div>
                    <ul>
                      <li v-for="item in samehouserent">
                        <div class="image fl" @click="toSkip(item)">
                          <img :src="item.housePic|imgfilter" :onerror="null|imgonroorr" />
                        </div>
                        <div class="direciton">
                       <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle}}   <!--  <span class="fr" @click.stop="collection($event)" style="font-size: 16px;color: ">收藏</span> --></div>
                          <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection}}|{{item.houseFeature}}</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.rentPrice }}<span style="font-size: 14px;">元/月</span></span></div>
                          <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{item.houseTag}}</span></div>
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
                <div class="zhoubian">
                  <div class="title">周边房源</div>
                  <ul>
                    <li v-for="item in rentrimhousing">
                      <div class="image fl"  @click="toSkip(item)">
                        <img :src="item.housePic|imgfilter" :onerror="null|imgonroorr" />
                      </div>
                      <div class="direciton">
                        <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle }} <!--  <span class="fr" @click.stop="collection($event)" style="font-size: 16px;color: ">收藏</span> --></div>
                        <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">{{item.districtName }}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{item.rentPrice }}<span style="font-size: 14px;">元/月</span></span></div>
                        <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span></div>
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

        <!-- 右侧sidebar -->
        <div class="side">
            	<div class="btn">
                <div @click="addCollection($event)" v-if="!sellrentdetail.isCollect" >收藏房源</div>
                 <div @click="addCollection($event)" v-if="sellrentdetail.isCollect" >已收藏</div>
              </div>

              <div class="content">
                  <div class="price ">
                    <span class="total">{{sellrentdetail.saleTotal}}</span>
                    <div class="text">
                      <div class="unitPrice"><span class="unitPriceValue">{{sellrentdetail.rentPrice}}<span class="unitPriceValueWored">元/月</span></span></div>
                    </div>
                    <div class="removeIcon"></div>
                  </div>
                  <div class="houseInfo">
                    <div class="room">
                      <div class="mainInfo">{{sellrentdetail.houseType}}</div>
                      <div class="subInfo">{{sellrentdetail.houseForm }}</div>
                    </div>
                    <div class="type">
                      <div class="mainInfo" title="南">{{sellrentdetail.houseDirection }}</div>
                      <div class="subInfo">{{sellrentdetail.houseForm }}/{{sellrentdetail.houseDecoration }}</div>
                    </div>
                    <div class="area">
                      <div class="mainInfo">{{sellrentdetail.builtArea }}平米</div>
                      <div class="subInfo">{{sellrentdetail.buildAge }}年建/塔楼</div>
                    </div>
                  </div>
                  <div class="aroundInfo">
                    <div class="areaName"><i></i><span class="label">所在区域</span><span class="info">&nbsp;<a>{{sellrentdetail.areaName }}</a></span>
                      <a href="" class="supplement" title="" style="color:#394043;"></a>
                    </div>
                    <div class="visitTime"><i></i><span class="label">看房时间</span><span class="info">提前预约随时可看</span></div>
                  </div>
                  <div class="duibi">
                      <div class="duibi_a" @click="share()">分享房源</div>
                  </div>
                  <div class="callpeople">联系经纪人</div>
                  <div class="peopleintrode">
                      <div class="fl"><img :src="sellrentdetail.broker.photo"></div>
                      <ul>
                        <li class="broker">{{sellrentdetail.broker.emplName}}</li>
                        <li class="telphone">{{sellrentdetail.broker.phone}}</li>
                        <li class="decription">亲自勘察，真实房源，竭诚为您服务</li>
                      </ul>
                  </div>
                  <div class="panel_login" v-if="shaer">
                   <i class="close_login" @click="cancelShare()">×</i>
                  <share :config="config"></share>
                  </div>
              </div>
        </div>
    </div>
    <!-- 飞入的物体 -->
    <!-- <o-fly class="fly" ref="fly"></o-fly> -->
	</div>

</template>

<script>
import oHeader from "../../base/header/header";
import BMap from "../../base/BMap/BMap";
import oFly from "../../base/fly/fly";
import "../../../static/js/jquery-3.2.1.min.js";
import "../../../static/js/swiper-3.3.1.min.js";

export default {
  data() {
    return {
      houseTypeId: 11, //地图 二手房 租房  小区 11 12 13
      datas: "",
      num: 0,
      dialogVisible: false,
      loginshow: null, //登陆注册阴影层
      rightnow: true, //登陆注册判断条件
      cancel: false, //取消登陆阴影
      magnifyImg: null,//放大图片的路径
      sellrentdetail: {
        //租房详情
        broker: {
          emplName: "",
          photo: ""
        }
      },
      bulidinfo: "", //关联小区
      samehouserent: [], //同小区房源列表
      rentrimhousing: "", //周边房源
      buildsdid: "", //同小区sdid
      sdid:"", //租房详情sdid
      renthousesee:[],   //约看
      id:"",//带看id
      page: 1,//默认带看记录是第一页
	    scity: JSON.parse(localStorage.selectCity),//用户选定城市
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
  components: {
    oHeader,
    BMap
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
    //更多 带看记录
    moreSeelog() {
      //带看记录
      this.$http.get(this.$url.URL.HOUSE_RENTHOUSESEE  + this.id + "?pageNo=" + this.page)
      .then(response =>{
            this.renthousesee =  response.data.data
            // console.log(this.renthousesee)
      })
    },
    //上一页 下一页
    changeNum(num) {
      if(num==1){
        this.page--;
        this.page<=0?this.page=1:this.page;
        this.moreSeelog();
      }else if(num==2){
        if(this.renthousesee.length){
          this.page++;
          this.moreSeelog();
        }
      }
    },

    //收藏房源
    addCollection(e) {
      if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
        if(e.target.innerHTML=='已收藏') {
           this.$http
            .post(this.$url.URL.RENTHCOLLECTION_CANCEL + this.scity.value +"/"+ this.sdid )
            .then(response => {
                e.target.innerHTML = '收藏房源'
            });
        }else{
             this.$http
            .post(this.$url.URL.RENTHCOLLECTION_ADD + this.scity.value +"/"+  this.sdid )
            .then(response => {
                e.target.innerHTML = '已收藏'
            });
        }
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
        .post(this.$url.URL.RENTHCOLLECTION_ADD + "/"+ this.scity.value +"/"+  this.buildsdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.RENTHCOLLECTION_CANCEL + "/"+ this.scity.value +"/"+  this.buildsdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    share(){
        this.shaer=true
     },
     cancelShare(){
         this.shaer=false
     },
    //切换房源
	  toSkip(item) {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
      let path = "/rentHouseDetail/" + item.sdid;
      this.$router.push({ path: path });
      this.render();
    },
     toSkipone(bulidinfo) {
      this.$router.push({ path: "/estatedetail/" + bulidinfo.sdid});
    },
    
    //租房房详情
    render() {
      let sdid = this.$route.params.id;
      let city = this.scity.value;
      this.$http.get(this.$url.URL.RENTHOUSE_GETDATAILINFO + city + "/" + sdid)
        .then(response => {
          this.sellrentdetail = response.data.data;
          this.buildsdid =  response.data.data.buildSdid;
          this.magnifyImg = this.sellrentdetail.housePicList[0];
           this.sdid =  response.data.data.sdid;
          this.px = response.data.data.px;
          this.py = response.data.data.py;
          this.id = response.data.data.id
           
            //带看记录
            this.$http.get(this.$url.URL.HOUSE_RENTHOUSESEE  + this.id+"?pageNo=1")
            .then(response =>{
                this.renthousesee =  response.data.data
            })
       

            //租房周边
            this.$http.post(this.$url.URL.RENTHOUSE_RIMHOUSING, {
              pageNo: 1,
              pageSize: 10,
              px: this.px,
              py: this.py,
              buildSdid: this.buildsdid,
              scity: city
            })
            .then(response => {
              this.rentrimhousing = response.data.data;
              console.log(this.rentrimhousing)
            });

          //关联小区
          this.$http
            .get(this.$url.URL.BULIDINFO + city + "/" + this.buildsdid)
            .then(response => {
              this.bulidinfo = response.data.data;
            });

          //同小区房源
          this.$http
            .get(
              this.$url.URL.MAPHOURENT_USED_LIST +
                city +
                "/" +
                this.buildsdid,
              {
                pageNo: 1,
                pageSize: 10
              }
            )
            .then(response => {
              this.samehouserent = response.data.data;
            });
        });
    },
    slideTo(item,index) {
      this.magnifyImg = item;
      this.viewSwiper.slideTo(index);
    },
  },
  mounted() {
    setTimeout(function() {

      //实例1
      var viewSwiper = new Swiper(".view .swiper-container", {
        onSlideChangeStart: function() {
          updateNavPosition();
        }
      });
      
      // 上一页
      $(".view .arrow-left,.preview .arrow-left").on("click", function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == 0) {
          viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
          return;
        }
        viewSwiper.slidePrev();
      });
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

      // 下一页
      $(".view .arrow-right,.preview .arrow-right").on("click", function(e) {
        e.preventDefault();
        if (oSwiper1.activeIndex == oSwiper1.slides.length - 1) {
          oSwiper1.slideTo(0, 1000);
          return;
        }
        oSwiper1.slideNext();
      });
      // // 移入移出
      // $('.view').mouseover(()=>{
      //   $(".view .arrow-left,.view .arrow-right").show();
      // }).mouseout(()=>{
      //   $(".view .arrow-left,.view .arrow-right").hide();
      // })
      // 下一页
      $(".view .arrow-right,.preview .arrow-right").on("click", function(e) {
        e.preventDefault();
        if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
          viewSwiper.slideTo(0, 1000);
          return;
        }
        viewSwiper.slideNext();
      });
      // 实例2
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

<style lang="less" scoped>
@import '../../../static/css/client.css';
@import '../../../static/css/swiper-3.4.2.min.css';
.section{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
  .main{
    flex: 714px 0 0;
    width: 714px;
    >h3{
      font-size: 24px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.85);
    }
    >h3+div{
      font-size: 14px;
      margin: 12px  0 24px;
      color: rgba(0, 0, 0, 0.6);
    }
    .one{
      .image{
        width: 100%;
        height: 400px;
        overflow: hidden;
      }
    }
    .two{
      .title{font-size: 20px;margin: 60px 0  26px}
      .map{width: 100%}
    }
    .three{
      .title{font-size: 20px;margin: 60px 0  26px}
      .introContent {
        overflow: hidden;
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
          ul{
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;         
            align-items: center;   
            li{
              width: 50%;
              font-size: 14px;
              color: #394043;
              line-height: 24px;
              .label{color: #999999;margin-right: 30px}
            }
          }
        }
      }
    }
    .four{
      .title{font-size: 20px;margin: 60px 0  26px}
      .content-hd{
        padding: 10px 0;
        border-top: 1px solid #cacaca;
        border-bottom: 1px solid #cacaca;
        .name,.num{
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          div{flex: 1}
        }
        .num>div{
          font-size: 30px;
          margin-top: 25px;
          text-indent: 40px;
        }
      }
      .daikan{
        >div:nth-of-type(1){
          font-size: 16px;
          padding: 20px 0;
        }
        >div:nth-of-type(2){
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          div{flex: 1}
        }
        .list{
          padding: 20px 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          div{flex: 1}
        }
      }
      .more{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        margin-top: 10px;
        div{
          margin-right: 10px;
          padding: 5px;
          width: 50px;
          border: 1px solid #cacaca;
        }
      }
    }
    .five{
      .guanlianxiaoqu,
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
          margin-top: 29px;
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
    }
  }
  .side{
    flex: 380px 0 0;
    width: 380px;
    .btn{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      text-align: center;
      div{
        width: 112px;
        height: 46px;
        cursor: pointer;
        line-height: 46px;
        background: #ffffff;
        border: 1px solid #cacaca;
        margin-left: 10px;
        &:nth-of-type(2){background: red}
      }
    }
    .content{
        margin-top: 10px; 
          .price{
            position: relative;
            height: 49px;
            .total {
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
            .text {
              font-size: 12px;
              color: #333333;
              display: inline-block;
              margin-left: 15px;
              vertical-align: 6px;
              .unitPrice {
                color: #e4393c;
                margin-left: 75px;
                .unitPriceValue {font-weight: bold;color: #e4393c;font-size: 46px;}
                .unitPriceValueWored{font-size: 16px;}
              }
              .tax {
                margin-top: 11px;
                color: #394043;
                font-size: 12px;
              }
            }
            .unit{
              display: inline-block;
              font-size: 16px;
              color: #e4393c;
              height: 37px;
              vertical-align: 6px;
              span{display: block;margin-top: 9px}
            }
          }           
          .houseInfo {
            box-sizing: border-box;
            margin-top: 22px;
            width: 100%;
            border-top: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
            padding: 30px 0;
            .room {float: left;width: 33%}
            .mainInfo {
              font-size: 20px;
              font-weight: bold;
              color: #333333;
              overflow: hidden;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              white-space: nowrap;
            }
            .subInfo{
              margin-top: 8px;
              font-size: 12px;
              color: #394043;
              overflow: hidden;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              white-space: nowrap;
            }
            .type{float: left; width: 33%}
          }
          .aroundInfo {
            padding: 30px 0;
            line-height: 18px;
            border-bottom: 1px solid #eeeeee;
            font-size: 14px;
            .areaName {
              margin-top: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .visitTime {margin-top: 14px}
            .houseRecord {margin-top: 14px}
          }
          .duibi{
            display: flex;
            flex-flow: row nowrap;
            padding: 20px 0;
            border-top: 1px solid #eeeeee; 
            justify-content: center;
            text-align: center;
            div{
              width: 120px;
              height: 42px;
              line-height: 42px;    
              border: 1px solid #eeeeee;   
              &:first-child{margin-right:20px}       
            }
          }
          .callpeople {
            height: 42px;
            line-height: 42px;
            text-align: center;
            color: white;
            background: red;
          }
          .peopleintrode{
            margin-top: 20px;
            font-weight: bold;
            font-size: 18px;
            div{
              width: 72px;
              height: 80px;
              margin-right: 10px;
              img{width: 100%;height:100%}
            }
            ul li{line-height: 28px}
            .telphone{color: red}
            .decription{font-size: 12px}
          }
    }
  }
}


/*轮播切换*/
.pc-slide {
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
}
.swiperimg img {
  width: 100%;
  height: 100%;
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
   left: 1005px;
  top: 275px;
  width: 430px;
  height: 490px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
/* 图片放大比例 */
#bigImg img{
  height: 800px;
}

</style>