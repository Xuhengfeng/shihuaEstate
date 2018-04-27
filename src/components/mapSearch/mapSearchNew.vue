/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 20:11:37 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-27 20:59:59
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
                    <img src="../../imgs/home/search.png" style="width:15px;height:15px;" @click="requestAllCityData()">
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
            </div>
            <div class="r-content">
              <div class="houselist-top">2</div>
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
import * as d3 from "d3";

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
      num: 0,             //修正ip
      agentInfo: '',      //side的info 
      pencil: '../../../static/pencil.ico',
      selectCity: JSON.parse(localStorage.selectCity),
      
      //二手房 租房 小区区域所有数据
      IPS: [this.$url.URL.HOUSE_SECONDHOUSE, this.$url.URL.HOUSE_RENTHOUSE, this.$url.URL.MAPHOUSEALL_TREE],
      //同小区二手房列表
      IPS2: [this.$url.URL.MAPHOUSEALL_USED_LIST],
      moveFlag: '1',       //移动标识
      mapname: '北海',

      scity: 'beihai'
    }
  },
  methods: {
    isShowHouseList() {

    },
    beginDraw() {},
    exitDraw() {},
    requestAllCityData() {},
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
      let DiTu = this.map.getZoom();
      // 获取经纬度范围参数
      let bs = this.map.getBounds();   //获取可视区域
      let bssw = bs.getSouthWest();   //可视区域左下角
      let bsne = bs.getNorthEast();   //可视区域右上角
      this.coordRequestData(DiTu,bsne.lng,bssw.lng,bsne.lat,bssw.lat)
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
        let DiTu = this.map.getZoom();
         // 获取经纬度范围参数
        let bs = this.map.getBounds();   //获取可视区域
        let bssw = bs.getSouthWest();   //可视区域左下角
        let bsne = bs.getNorthEast();   //可视区域右上角
        this.coordRequestData(DiTu,bsne.lng,bssw.lng,bsne.lat,bssw.lat)
      })
    },
    //放大缩小事件
    onScaleEvent(){
      this.map.addEventListener("zoomend", () => {
        this.moveFlag="1"
        let DiTu = this.map.getZoom();
        // 获取经纬度范围参数
        let bs = this.map.getBounds();   //获取可视区域
        let bssw = bs.getSouthWest();   //可视区域左下角
        let bsne = bs.getNorthEast();   //可视区域右上角
        this.coordRequestData(DiTu,bsne.lng,bssw.lng,bsne.lat,bssw.lat)
      })
    },
    mapbox() {
        let myGeo = new BMap.Geocoder();
        myGeo.getPoint(this.mapname, (point)=> {
          this.initMap(point.lng, point.lat);//初始化地图(中心) 
        })
    },
    addLabel(point, obj){
        //判断当前是处于什么zoom 级别的;
        let currentZoom = this.map.getZoom();
        if(this.titlenumber=='0'){
          //区域级别
          let html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.name}</p>
                      <p class="count">${obj.formatAvgPrice}套</p>
                    </div>`;
          //片区级别
          let html2=`<div class="bubble-2 bubble">
                        <p class="name">${obj.name}</p>
                        <p class="count">${obj.formatAvgPrice}套</p>
                      </div>`;

          //小区级别
          let html3 = `<div class="bubble-3 bubble">
                          <p class="name" 
                              data-areaName=${obj.name}
                              data-avgPrice=${obj.avgPrice}
                              data-buildName=${obj.buildName}
                              data-districtName=${obj.districtName}
                              data-formatAvgPrice=${obj.formatAvgPrice}
                              data-formatSaleCount=${obj.formatSaleCount}
                              data-buildSdid=${obj.buildSdid}>
                            <i class="num">${obj.buildName}<b> ${obj.formatAvgPrice}万</b> ${obj.formatSaleCount}</i>
                            <i class="num triangle"></i>
                          </p>
                      </div>`;
        }else{
           //区域级别
            let html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.name}</p>
                      <p class="count">${obj.formatRentCount}</p>
                    </div>`;
            //片区级别
            let html2=`<div class="bubble-2 bubble">
                          <p class="name">${obj.name}</p>
                          <p class="count">${obj.formatRentCount}</p>
                        </div>`;

            //小区级别
            let html3 = `<div class="bubble-3 bubble">
                            <p class="name" 
                                data-areaName=${obj.name}
                                data-avgPrice=${obj.avgPrice}
                                data-buildName=${obj.buildName}
                                data-districtName=${obj.districtName}
                                data-formatAvgPrice=${obj.formatAvgPrice}
                                data-formatSaleCount=${obj.formatSaleCount}
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
    attribute(e){//给海量点添加点击事件
      this.moveFlag="1"
        let p = e.target.point;
        let currentZoom = this.map.getZoom();
        if(currentZoom>16) {
            this.map.centerAndZoom(p, 18)
            this.itembtn(p);
        }else if(currentZoom>14&&currentZoom<=16){
            this.map.centerAndZoom(p, 17)
        }else{
            this.map.centerAndZoom(p, 15)
        }
    },
    coordRequestData(levels,x1,x2,y1,y2){//根据坐标请求接口
    console.log(this.IPS)
      this.$http.post(this.IPS[this.num],{
        level:levels,
        scity:this.scity,
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
    }
  },
  mounted() {
    this.mapbox();
  }
}
</script>

<style scoped="scoped">
/* 第一块 */
.header {
  position: relative;
  z-index: 100;
  background: #ffffff;
}
.header .header-hd {
  overflow: hidden;
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #eee;
}
.header-hd .logo {
  float: left;
  width: 240px;
  height: 60px;
  background: url("../../imgs/buyhouse/logored.png") no-repeat center center;
}
.header-hd .logo img {
  vertical-align: middle;
}
.header-hd .menu {
  overflow: hidden;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.header-hd ul li {
  float: right;
  width: 100px;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}
.header-hd ul li:hover {
  color: #ff4343;
}
.header-hd .sign > div {
  font-size: 12px;
  color: #666;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-right: 12px;
  margin-left: 40px;
}
.login,
.logout {
  color: #666;
  padding: 0 10px;
}

/* 第二块 */
.header .header-bd {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
}
.header .search-bar {
  position: relative;
  vertical-align: middle;
  height: 100%;
  width: 438px;
  border-right: 1px solid #eee;
}
.header .search-bar input {
  height: 100%;
  width: 400px;
  box-sizing: border-box;
  margin-left: 20px;
  padding: 13px 60px 10px 0;
  outline: none;
  border: 0;
  font-size: 13px;
}
.header .search-bar img {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.header-bd .filters,
.header-bd .tools {
  height: 50px;
  line-height: 50px;
}
.header-bd .filters > li {
  float: left;
  height: 100%;
  width: 80px;
  border-right: 1px solid #eee;
  text-align: center;
  position: relative;
}
.header-bd .tools > li {
  float: right;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
}
.filters-content {
  position: absolute;
  left: 0;
  z-index: 1100;
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
 
}
.side .showController {
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
.side .agent-info{
  height: 112px;
  padding-left: 24px;
}
.side .r-content{
  height: 100%;
  padding-left: 24px;
  border-top: 1px solid #cacaca;
}
.side ul{
  width: 400px;
  height: 100%;
  overflow-y: scroll;
}
.side ul li{
  padding: 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #cacaca;
  margin: 0 10px;
}
.side ul li .image{
  width: 120px;
  height: 100px;
  margin-right: 10px;
} 
.side .image img{
  width: 100%;
  height: 100%;
}
.side ul li .item-content{
  overflow: hidden;
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



