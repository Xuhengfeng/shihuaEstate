/*
 * @Author: 徐横峰 
 * @Date: 2018-05-04 14:34:35 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-05 16:10:12
 */
<template>
	<div>
		<o-header></o-header>
    <div class="section container">
        <!-- 左侧main内容 -->
        <div class="main">
            <h3>{{twohandhousedetail.houseTitle}}</h3>
            <div>世华易居真房源 <span>更多房源信息请联系经纪人</span></div>
            <div class="one">
              <div class="pc-slide">
                <div class="view image">
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
                    <div class="swiper-wrapper">
                      <div class="swiper-slide swiperimg" :class=" index==0?'active-nav': '' " v-for="(item,index) in twohandhousedetail.housePicList">
                          <img :src="item">
                      </div>
                    </div>
                  </div>
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
                      <div>{{twohandhousedetail.day7Num }}</div>
                      <div>{{twohandhousedetail.day30Num }}</div>
                      <div>{{twohandhousedetail.collectNum }}</div>
                    </div>
                  </div>

                  <div class="recodr">
                    <div>带看记录</div>
                    <div>
                      <div> 看房日期 </div>
                      <div> 带看人 </div>
                      <div> 联系经纪人</div>
                    </div>
                    <div class="list" v-for="(item,index) in housesee">
                      <div> {{item.seeDate}} </div>
                      <div> {{item.emplName}} </div>
                      <div> {{item.phone}}</div>
                    </div>
                    <div class="list" v-show="!housesee.length">
                        <div style="text-align:center!important;">暂无更多的记录!</div>
                    </div>
                  </div>
                   <div class="more">
                     <div @click="changeNum(1)"></div>
                     <div @click="changeNum(2)">></div>
                   </div>
                </div>
            </div>

            <div class="five">
                <div class="guanlianxiaoqu">
                    <div class="title">关联小区</div>
                    <div class="image fl">
                      <img :src="bulidinfo.housePic" alt="" />
                    </div>
                    <div class="direciton">
                      <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">{{bulidinfo.buildName}} <span class="fr" style="font-size: 16px;color: ">收藏</span></div>
                      <div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">90天成交{{bulidinfo.saleCount }}套|{{bulidinfo.rentCount }}套正在出租</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">{{bulidinfo.avgSalePrice }}<span style="font-size: 14px;">万</span></span></div>
                      <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">{{bulidinfo.areaName}}  {{bulidinfo.districtName}}/{{bulidinfo.buildAge}}建成</span><span class="fr">单价{{bulidinfo.avgRentPrice }}元/平米</span></div>
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
                      <li v-for="item in samehouseused">
                        <div class="image fl" @click="toSkip(item)">
                          <img :src="item.housePic"  />
                        </div>
                        <div class="direciton">
                          <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle}} <span class="fr" @click.stop="collection($event)" style="font-size: 16px;color: ">收藏</span></div>
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
                    </ul>
                </div>
                <div class="zhoubian">
                  <div class="title">周边房源</div>
                  <ul>
                    <li v-for="item in rimhousing">
                      <div class="image fl"  @click="toSkip(item)">
                        <img :src="item.housePic" />
                      </div>
                      <div class="direciton">
                        <div style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;" @click="toSkip(item)">{{item.houseTitle }} <span class="fr" @click.stop="collection($event)" style="font-size: 16px;color: ">收藏</span></div>
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

        <!-- 右侧sidebar -->
        <div class="side">
            	<div class="btn">
                <div @click="addCollection($event)" v-if="!twohandhousedetail.isCollect" >收藏房源</div>
                 <div @click="addCollection($event)" v-if="twohandhousedetail.isCollect" >已收藏</div>
                <div  @click.stop="addContrast(twohandhousedetail, $event)">{{twohandhousedetail.contentFlag?twohandhousedetail.contentFlag:'预约看房'}}</div> 
              </div>

              <div class="content">
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
                  <div class="peopleintrode">
                      <div class="fl"><img :src="twohandhousedetail.broker.photo"></div>
                      <ul>
                        <li class="broker">{{twohandhousedetail.broker.emplName}}</li>
                        <li class="telphone">{{twohandhousedetail.broker.phone}}</li>
                        <li class="decription">亲自勘察，真实房源，竭诚为您服务</li>
                      </ul>
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
import BMap from "../../base/BMap/BMap";
import oFly from "../../base/fly/fly";
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
      daikan:[],//待看列表
      page: 1,//默认带看记录是第一页
      scity: JSON.parse(localStorage.selectCity),//用户选定城市
      collectionFlag: true//收藏标识
    };
  },
  components: {
    oHeader,
    BMap,
    oFly
  },
  created() {
    this.daikan =  localStorage.daikan?JSON.parse(localStorage.daikan): [];
	  this.render();
  },
   computed: {
     //监控store的contrastList变化 声明一个计算属性控制刷新数据
    refresh() {
      return this.$store.state.daikan;
    },
    //获取用户登录状态
    logined() {
      return this.$store.state.logined;
    }
  },
   watch: {
    //监听计算属性
    refresh() {
      // //请求二手的详情
      console.log('refresh')
      // this.$http.get(this.$url.URL.HOUSE_GETDETAILINFO + this.scity.value + "/" + this.$route.params.id)
      //   .then(response => {
      //     // console.log(response.data.data)
      //     let arr = Array.from(response.data.data);
      //     //修正数据 根据本地缓存修正response数据
      //     arr.forEach((item)=>{
      //       this.daikan.forEach((item2)=>{
             
      //         if(item.sdid == item2.id){
      //           item.contentFlag = '已预约';
      //           item2.contentFlag = '已预约';
      //         }
      //       })
      //     })
      //     this.twohandhousedetail = response.data.data; 
      //   });
    }
  },
  methods: {
    //更多 带看记录
    moreSeelog() {
      //带看记录
      this.$http.get(this.$url.URL.HOUSE_HOUSESEE  + this.id + "?pageNo=" + this.page)
      .then(response =>{
            this.housesee =  response.data.data
      })
    },
    //上一页 下一页
    changeNum(num) {
      if(num==1){
        this.page--;
        this.page<=0?this.page=1:this.page;
        this.moreSeelog();
      }else if(num==2){
        if(this.housesee.length){
          this.page++;
          this.moreSeelog();
        }
      }
    },
    //加入待看清单
    addContrast(item, e) {
      console.log(item)
      if(!this.logined) return this.$alert('用户未登录!');
      //判断当前点击对象是否存在 
      if(JSON.stringify(this.daikan).indexOf(JSON.stringify(item)) == '-1') {
        console.log(11)
        if(this.daikan.length >= 4){
          if(item.contentFlag == '已预约'){
            return;
          }else{
            this.$alert('待看清单最多4个!', '添加失败', {
              confirmButtonText: '确定'
            });
          }
        }else{
          if(item.contentFlag == '已预约') {
            return;
          }else{
            console.log('来了')
            console.log(item)
            this.daikan.push(item);
            window.localStorage.daikan = JSON.stringify(this.daikan);
            this.$refs.fly.drop(e.target);
            this.$set(item, 'contentFlag', '已预约');
            this.$store.dispatch('addTwo', this.daikan);
            console.log(this.daikan)
            console.log(this.$store.state.daikan)
          }
        }
      }
    },
    //收藏房源
    addCollection(e) {
      if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.HOUSECOLLECTION_ADD + "/"+ this.scity.value +"/"+  this.buildsdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.HOUSECOLLECTION_CANCEL + "/"+ this.scity.value +"/"+ this.buildsdid)
        .then(response => {
            e.target.innerHTML = '收藏房源'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
      //收藏房源
    collection(e) {
      console.log(111)
      if(!this.logined){
        return this.$alert('用户未登录!');
      }
      if(this.collectionFlag){
         this.$http
        .post(this.$url.URL.HOUSECOLLECTION_ADD + "/"+ this.scity.value +"/"+  this.buildsdid)
        .then(response => {
            e.target.innerHTML = '已收藏'
        });

      }else{
           this.$http
        .post(this.$url.URL.HOUSECOLLECTION_CANCEL + "/"+ this.scity.value +"/"+ this.buildsdid)
        .then(response => {
            e.target.innerHTML = '收藏'
        });
      }
      this.collectionFlag = !this.collectionFlag;
    },
    //切换房源
	  toSkip(item) {
      let path = "/buyhouse/twohandhousedetail/" + item.sdid;
      this.$router.push({ path: path });
      this.render();
    },
    //二手房详情
    render() {
      let sdid = this.$route.params.id;
      let city = this.scity.value;
      this.$http.get(this.$url.URL.HOUSE_GETDETAILINFO + city + "/" + sdid)
        .then(response => {
          this.twohandhousedetail = response.data.data;
          this.buildsdid =  response.data.data.buildSdid;
          this.px = response.data.data.px;
          this.py = response.data.data.py;
          this.id = response.data.data.id
           
           //获取待看清单列表
          this.$http.get(this.$url.URL.APPOINT_DETAILLIST+"?pageNo=1")
          .then((res)=>{
            if(res.data.data.length) {
              console.log(res.data.data)
              this.daikan = res.data.data;
              
              //初始化清单列表
              this.$store.commit('FIRSTSTATUS', res.data.data);
            }
          });

            //带看记录
            this.$http.get(this.$url.URL.HOUSE_HOUSESEE  + this.id+"?pageNo=1")
            .then(response =>{
                this.housesee =  response.data.data
            })
       

            //二手房周边
            this.$http.post(this.$url.URL.HOUSE_RIMHOUSING, {
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

          //同小区房源
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

<style lang="less" scoped>
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
      .recodr{
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
                font-size: 16px;
                color: #394043;
                .unitPriceValue {font-weight: bold;color: #394043}
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