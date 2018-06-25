/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 20:11:37 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-25 17:22:38
 */
<template>
    <!-- 地图找房 -->
    <div class="mapSearch">
        <div class="header" ref="header">
            <div class="header-hd">
                <router-link to="" tag="div" class="logo"></router-link>
                <div class="sign fr">
                    <div v-if="true">
                        <span class="login">登录</span><span class="logout">注册</span>
                    </div>
                    <div v-else><span class="login">徐横峰</span>|<span class="logout">退出</span></div>
                </div>
                <div class="menu fr">
                    <ul>
                        <router-link tag="li" to="/buyhouseguide">购房指南</router-link>
                        <router-link tag="li" to="/broker">经纪人</router-link>
                        <router-link tag="li" to="/houseestate">小区</router-link>
                        <router-link tag="li" to="/sellrent">我要售/租</router-link>
                        <router-link tag="li" to="/renthouse">我要租房</router-link>
                        <router-link tag="li" to="/buyhouse">我要买房</router-link>
                        <router-link tag="li" to="/home">首页</router-link>
                    </ul>
                </div>
            </div>    
            <div class="header-bd">
                <div class="search-bar fl">
                    <input v-model="inputKeyword" type="span" placeholder="输入小区或地铁附站开始找房">
                    <img src="../../imgs/home/search.png" style="width:15px;height:15px;" @click="searchHouse()">
                </div>
                <ul class="filters fl">
                    <li> 
                        <span>售价<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li></li>
                        </div>
                    </li>
                    <li>
                        <span>户型<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li></li>
                        </div>
                    </li>
                    <li>
                        <span>面积<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li></li>
                        </div>
                    </li>
                    <li>
                        <span>更多选项<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li></li>
                        </div>
                    </li>
                </ul>
                <ul class="tools fr">
                   <!-- 学校找房 和商圈找房   -->
                    <li v-if="metroNum == 1">
                        <i class="iconfont icon-location"></i>地铁找房                        
                    </li>
                    <li v-if="metroNum == 2">
                        <i class="iconfont icon-location"></i>地铁找房                        
                    </li>

                    <li @click="beginDraw()" v-if="circleNum == 1">
                        <i class="iconfont icon-location"></i>画圈找房                    
                    </li>
                    <li @click="exitDraw()" v-if="circleNum == 2" style="color:#ff4343">
                        <i class="iconfont icon-location"></i>退出画圈找房                      
                    </li>
                </ul>
            </div>
        </div> 
        <div id="map">
         
        </div>
        <!-- 房源列表 -->
        <div class="side" ref="side">
            <div class="agent-info">
              <div class="title">{{agentInfo.buildname}}</div>
              <div class="content">
                  <span class="big">{{agentInfo.avgprice}}元/平</span>
                  <span>参考均价</span>
              </div>
            </div>
            <div class="r-content">
              <div class="houselist-top" v-if="num==0">本小区在售<span>{{agentInfo.formatsalecount}}</span>套房源</div>
              <div class="houselist-top" v-else>本小区在租<span>{{agentInfo.formatsalecount}}</span>套房源</div>
              <ul>
                <li :key="index" v-for="(item,index) in smallArea">
                  <div class="image fl"><img :src="item.housePic"></div>
                  <div class="item-content">
                      <div class="item-title">{{item.houseTitle}}</div>
                      <div class="description">{{item.areaName}} {{item.districtName}} {{item.houseDirection}}</div>                        
                      <div  class="houseTypeInfo">
                        <span>{{item.houseType}}</span>{{item.builtArea}}m²
                      </div>

                      <div class="houseLabel">
                        
                      </div>

                    <div v-if="flagPrice" class="housePrice">{{item.saleTotal}}万
                        <span>{{item.salePrice}}元/平米</span>
                    </div>
                    <div v-if="!flagPrice" class="housePrice">{{item.rentPrice}}
                        <span>元/月</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="showController" @click="isShowHouseList">
              <i class="map_icon">
                <icon class="icon_close_houselist" ref="icon_close_houselist" :style="{left: sideLeft}" name ="sprite" :w="24" :h="24"></icon>
              </i>
            </div>
        </div>
        <div class="changeZoom">
            <button id="zoom_in" @click="mapZoom(1)">+</button>
            <button id="zoom_out" @click="mapZoom(2)">-</button>
        </div>
    </div>
</template>

<script>
import './mapSearch.css';
export default {
  data() {
    return {
      map: null,          //地图实例
      usedAreaDetails: [],//使用房源(区域 片区 小区)tree数据
      rentAreaDetails: [],//租房房源
      smallArea: [],      //小区列表
      inputKeyword: '',   //输入关键词
      isShowSide: true,   //是否显示side
      sideLeft: '-171px', //默认
      polygon: '',        //绘图
      svg: '',            //svg对象
      circleNum: 1,       //开始画圈找房1 取消画圈找房2
      metroNum: 1,        //开始地铁找房1 取消地铁找房2
      flagPrice: true,    //是否显示价格
      agentInfo: '',      //side的info 
      pencil: '../../../static/pencil.ico',
      selectCity: localStorage.selectCity?JSON.parse(localStorage.selectCity):'beihai',
      num: 0,             //修正ip
      
      //二手房售房 租房 小区所有数据
      //同小区二手房套数列表
      IPS: [this.$url.URL.HOUSE_SECONDHOUSE, this.$url.URL.HOUSE_RENTHOUSE, this.$url.URL.MAPHOUSEALL_TREE],
      IPS2: [this.$url.URL.MAPHOUSEALL_USED_LIST, this.$url.URL.MAPHOURENT_USED_LIST],
      moveFlag: '1',       //手势标识 2表示移动 1表示放缩
      titlenumber: '0',    //显示文本类型
    }
  },
  created() {
    this.$route.query.houseType=="11"?this.num=0:this.num=1;
  },
  methods: {
    //显示房源列表
    isShowHouseList() {
      if(this.isShowSide){
        this.$refs.side.style.left="0"
        this.sideLeft = '-180px';
      }else{
        this.sideLeft = '-171px';
        this.$refs.side.style.left="-438px";
      }
      this.isShowSide = !this.isShowSide
    },
    //关键词  检索房源数据
    searchHouse() {

    },
    mapZoom(num) {
      num==1?this.map.zoomIn():this.map.zoomOut();
    },
    //初始化地图
    initMap(px, py) {
      this.createMap(px, py);
      this.setMapEvent();
    },
    //创建地图
    createMap(lng, lat) {
      //11 12      区域级别
      //13 14      片区级别
      //15 16      小区级别
      this.map = new BMap.Map("map", {
        minZoom: 11,
        maxZoom: 18
      });
      this.map.enableScrollWheelZoom(true)//启动滚轮放大缩小
      let pt = new BMap.Point(lng, lat);//初始时候 首先获取到目的城市的坐标 例如: 北海站坐标109.134582,21.459389
      this.map.centerAndZoom(pt, 12);//初始中心点和缩放比例 
      this.beforeCoordRequest();
    },
    //设置地图事件
    setMapEvent() {
      this.onMoveEvent();//移动事件
      this.onScaleEvent();//放大缩小事件
    },
    //移动事件
    onMoveEvent(){
      this.map.addEventListener("dragend", (e)=>{
        this.moveFlag="2"
        this.beforeCoordRequest();
      })
    },
    //放大缩小事件
    onScaleEvent(){
      this.map.addEventListener("zoomend", () => {
        this.moveFlag="1"
        this.beforeCoordRequest();
      })
    },
    mapbox() {
        let myGeo = new BMap.Geocoder();
        myGeo.getPoint(this.selectCity.name, (point)=> {
          this.initMap(point.lng, point.lat);//初始化地图(中心) 
        })
    },
    addLabel(point, obj){
        //判断当前是处于什么zoom 级别的;
        let currentZoom = this.map.getZoom();
        let html1,html2,html3;
        if(this.titlenumber=='0'){
          //区域级别
          html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.name}</p>
                      <p class="count">${obj.formatAvgPrice}套</p>
                    </div>`;
          //片区级别
          html2=`<div class="bubble-2 bubble">
                        <p class="name">${obj.name}</p>
                        <p class="count">${obj.formatAvgPrice}套</p>
                      </div>`;

          //小区级别
          let newSaleCount = obj.formatSaleCount?obj.formatSaleCount.slice(0,-1):null;
          let newPrice = Math.floor(obj.formatAvgPrice/10000) + '万';
          html3 = `<div class="bubble-3 bubble">
                          <p class="name" 
                              data-areaName=${obj.areaName}
                              data-avgPrice=${obj.avgPrice}
                              data-buildName=${obj.buildName}
                              data-districtName=${obj.districtName}
                              data-formatAvgPrice=${obj.formatAvgPrice}
                              data-formatSaleCount=${newSaleCount}
                              data-buildSdid=${obj.buildSdid}>
                            <i class="num">${obj.buildName}<b> ${newPrice}</b> ${obj.formatSaleCount}</i>
                            <i class="num triangle"></i>
                          </p>
                      </div>`;
        }else{
            //区域级别
            html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.name}</p>
                      <p class="count">${obj.formatRentCount}</p>
                    </div>`;
            //片区级别
            html2=`<div class="bubble-2 bubble">
                          <p class="name">${obj.name}</p>
                          <p class="count">${obj.formatRentCount}</p>
                        </div>`;

            //小区级别
            let newSaleCount = obj.formatSaleCount?obj.formatSaleCount.slice(0,-1):null;
            let newPrice = Math.floor(obj.formatAvgPrice/10000) + '万';
            html3 = `<div class="bubble-3 bubble">
                            <p class="name" 
                                data-areaName=${obj.name}
                                data-avgPrice=${obj.avgPrice}
                                data-buildName=${obj.buildName}
                                data-districtName=${obj.districtName}
                                data-formatAvgPrice=${obj.formatAvgPrice}
                                data-formatSaleCount=${newSaleCount}
                                data-buildSdid=${obj.buildSdid}>
                              <i class="num">${obj.buildName}<b> ${obj.formatRentCount}</i>
                              <i class="num triangle"></i>
                            </p>
                        </div>`;
        }
       
                    
        let content;
        //13 15     区域级别
        //15 16     片区级别
        //17        小区级别
      
        if(currentZoom>16) {
          content = html3;
        }else if(currentZoom>14&&currentZoom<=16){
          content = html2;
        }else{
          content = html1;
        }
        let label = new BMap.Label(content,{
            offset: new BMap.Size(-40,-40),
            position: point, //指定文本标注所在的地理位置 
          })
          label.setStyle({
            border: 0,
            backgroundColor: 'none',
            overflow: 'hidden',
            width: '86px',
            height: '86px'
          })
        this.map.addOverlay(label);
        label.addEventListener("click",this.attribute);//海量点添加点击事件
    },
    //给海量点添加点击事件
    attribute(e){
      this.moveFlag="1"
      let p = e.target.point;
      let currentZoom = this.map.getZoom();
      if(currentZoom>16) {
          this.map.centerAndZoom(p, 18);
          this.itembtn(e);
      }else if(currentZoom>14&&currentZoom<=16){
          this.map.centerAndZoom(p, 17);
      }else{
          this.map.centerAndZoom(p, 15);
      }
    },
    itembtn(e) {
      this.isShowSide=true;
      this.isShowHouseList();
      let str;
      let domTarget = e.domEvent.target.classList.contains('num');
      if(domTarget) {
        str = e.domEvent.target.parentNode.dataset;
      }else{
        str = e.domEvent.target.parentNode.parentNode.dataset;
      }
      console.log(str)
      let sdid = str.buildsdid;
      this.agentInfo=str;
      this.isShowSide=false;
      this.$refs.side.style.left="0";
      this.smallAreaRequest(sdid);
    },
    //小区套数列表
    smallAreaRequest(sdid) {
      this.$http.get(this.IPS2[this.num]+this.selectCity.value+"/"+sdid+"?pageNo="+1)
      .then(res=> {
        this.smallArea=res.data.data;
      })
    },
    //在可视区域内 请求
    beforeCoordRequest() {
      let DiTu = this.map.getZoom();
      // 获取经纬度范围参数
      let bs = this.map.getBounds();   //获取可视区域
      let bssw = bs.getSouthWest();   //可视区域左下角
      let bsne = bs.getNorthEast();   //可视区域右上角
      this.coordRequestData(DiTu,bsne.lng,bssw.lng,bsne.lat,bssw.lat)
    },
    //根据坐标请求接口
    coordRequestData(levels,x1,x2,y1,y2){
      this.$http.post(this.IPS[this.num],{
        level:levels,
        scity:this.selectCity.value,
        x1:x1,
        x2:x2,
        y1:y1,
        y2:y2
      })
      .then(res=>{
        if(this.moveFlag=='2'){
          let list=[]
          for(let i=0;i<res.data.data.length;i++){
            if(JSON.stringify(this.mapdata).indexOf(JSON.stringify(res.data.data[i]))==-1){
              list.push(res.data.data[i])
              this.mapdata.push(res.data.data[i])
            }
          }
          list.forEach((item)=>{
            let point = new BMap.Point(item.px, item.py);
            this.addLabel(point, item);
          })
        }else{
          this.mapdata=res.data.data
          this.map.clearOverlays(); //清空所有标注this.map.clearOverlays(); //清空所有标注
          this.mapdata.forEach((item)=>{
            let point = new BMap.Point(item.px, item.py);
            this.addLabel(point, item);
          })
        }
      })
    },

    //画圈找房start--------------------------------------------------------------------<<<<<<<<<<
    //获取坐标
		getMouse(e){
      var e=e||window.event;
      var mouse={x:0,y:0};
          mouse.x=e.pageX;
          mouse.y=e.pageY-111;
			return mouse;
    },
    //点击画图按钮进入绘图
    beginDraw() {
      //初始化绘图
      //清空覆盖物
      this.map.clearOverlays(); 
      this.polygon = new BMap.Polygon(); 
      this.map.addOverlay(this.polygon);
    
      //修改 头部 鼠标 样式
      //设置地图禁止拖拽   
      //修改svg
      //this.changeSvg(); 
      this.$refs.header.style.boxShadow="0 2px 10px rgba(0, 0, 0, .3)";
      document.querySelector("svg").style.cursor = 'url('+this.pencil+'),default';
      this.circleNum = 2;
      this.map.disableDragging();
      let mapNode = document.getElementById('map');
      let str='';
      let x1,y1;//起始点坐标
      let x2,y2;//结束点坐标
      let xyArr = '';//point数组
      mapNode.onmousedown = (e)=>{//开始画圈圈
        x1 =  this.getMouse(e).x;
        y1 =  this.getMouse(e).y;
        mapNode.onmousemove = (e)=>{
            x2 =  this.getMouse(e).x;
            y2 =  this.getMouse(e).y;
            //像素坐标转地理坐标(坐标同步)
            let p=new BMap.Pixel(x2,y2);  
            let point1=this.map.pixelToPoint(p);  
            let positionArray=new Array(point1.lng,point1.lat);   
                xyArr += positionArray[0]+", "+positionArray[1]+";"
                this.polygon.setPath(xyArr);
        }
      }
      mapNode.onmouseup = ()=>{//结束
        // this.map.setdivport(xyArr);//调整视野
        this.map.enableDragging();//设置地图打开拖拽
        mapNode.onmousemove = null;
        mapNode.onmousedown = null;
        mapNode.onmouseup = null;
        document.querySelector("svg").style.cursor = '';
      }
    },
    //结束画圈
    exitDraw() {
      this.map.clearOverlays();   
      this.circleNum = 1;
      this.drawStatus();
      this.$refs.header.style.boxShadow="none";
      document.querySelector("svg").style.cursor = '';
    },
    //判断绘图是否结束
    drawStatus() {
        if(this.circleNum == 1){
          //结束绘图
          this.beforeCoordRequest();
        }else{
          //开始绘图
          //清空覆盖物
          this.map.clearOverlays();    
        }
    }
    //画圈找房end---------------------------------------------------------------------------<<<
  },
  mounted() {
    this.mapbox();
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  z-index: 100;
  background: #ffffff;
  /* 第一块 */
  .header-hd {
    overflow: hidden;
    width: 100%;
    height: 59px;
    border-bottom: 1px solid #eee;
    .logo {
      float: left;
      width: 240px;
      height: 60px;
      background: url("../../imgs/buyhouse/logored.png") no-repeat center center;
      img {vertical-align: middle}
    }
    .sign{
      div{
        font-size: 12px;
        color: #666;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-right: 12px;
        margin-left: 40px;
        .login,.logout {
          color: #666;
          padding: 0 10px;
        }
      }
    }
    .menu {
      overflow: hidden;
      height: 60px;
      line-height: 60px;
      text-align: center;
      ul li {
        float: right;
        width: 100px;
        height: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        &:hover{color: #ff4343}
      }
    }
  }
  /* 第二块 */
  .header-bd {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
    .search-bar {
      position: relative;
      vertical-align: middle;
      height: 100%;
      width: 438px;
      border-right: 1px solid #eee;
      input {
        height: 100%;
        width: 400px;
        box-sizing: border-box;
        margin-left: 20px;
        padding: 13px 60px 10px 0;
        outline: none;
        border: 0;
        font-size: 13px;
      }
      img {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }
  .filters,.tools {height: 50px;line-height: 50px}
  .filters > li {
    float: left;
    height: 100%;
    width: 80px;
    border-right: 1px solid #eee;
    text-align: center;
    position: relative;
    .filters-content {
      position: absolute;
      left: 0;
      z-index: 1100;
    }
  }
  .tools > li {
    float: right;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
  }

}


/* 房源列表 */
.side {
  position: fixed;
  left: -438px;
  top: 111px;
  background: #ffffff;
  width: 438px;
  bottom: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  .agent-info{
    height: 112px;
    padding-left: 24px;
    .title{
      font-size: 22px;
      font-weight: bold;
      height: 24px;
      line-height: 24px;
      margin: 20px 0 10px 0;
      display: block;
    }
    .content{
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
      vertical-align: bottom;
      .big{
        font-size: 16px;
        color: #4a4a4a;
        vertical-align: 1px;
        font-weight: bold;
      }
    }
  }
  .r-content{
    height: 100%;
    padding-left: 24px;
    border-top: 1px solid #cacaca;
    .houselist-top{
      color: #333;
      font-weight: bold;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      span{color: #ff4343}
    }
    ul{
      width: 400px;
      height: 100%;
      overflow-y: scroll;
      li{
        display: flex;
        padding: 10px 0;
        overflow: hidden;
        border-bottom: 1px solid #cacaca;
        margin-right: 10px;
        .image{
          flex: 120px 0 0;
          width: 120px;
          height: 100px;
          margin-right: 10px;
          img{width: 100%; height: 100%}
        } 
        .item-content{
          flex: 1;
          .item-title{
            font-size:16px;
            color:#222222;
            line-height:1.2;
            text-align:justify;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            overflow:hidden;
          }
          .description,
          .houseTypeInfo,
          .housePrice{
            font-size:12px;
            color:#666666;
            margin-top:9px;
            line-height:1;
          }
          .houseTypeInfo{

          }
          .housePrice{
            color: #ff4343;
            span{color:#666666}
          }
        } 
      }
    }
  }
  .showController {
    position: absolute;
    right: -40px;
    top: 50%;
    width: 40px;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    text-align: center;
    transform: translateY(-50%);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.3), 0 -1px 0 rgba(0, 0, 0, 0.3),
      0 1px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
}






::-webkit-scrollbar  
{  
  width: 1px;  
  background-color: #cacaca;  
}  
.map_icon{
  width: 10px;
  height: 16px;
  top: 3px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
}
.icon_close_houselist {
  position: absolute;
  top: 0;
  display: block;
}
/* 改变zoom控件 */
.changeZoom {
  position: fixed;
  right: 20px;
  bottom: 50px;
}
.changeZoom button {
  background: #ffffff;
  padding: 20px;
  display: block;
  border: 0;
  outline: none;
  margin-bottom: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
</style>



