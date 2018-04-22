<template>
    <!-- 地图找房 -->
    <div class="mapSearch">
        <div class="header">
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
                    <input v-model="inputKeyword" type="text" placeholder="输入小区或地铁附站开始找房">
                    <img src="../../imgs/home/search.png" style="width:15px;height:15px;" @click="requestAllCityData()">
                </div>
                <ul class="filters fl">
                    <li> 
                        <span>售价<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li>111</li>
                        </div>
                    </li>
                    <li>
                        <span>户型<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li>111</li>
                        </div>
                    </li>
                    <li>
                        <span>面积<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li>111</li>
                        </div>
                    </li>
                    <li>
                        <span>更多选项<i class="iconfont icon-location"></i>  </span>
                        <div class="filters-content">
                            <li>111</li>
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
            发呆发斯蒂芬
            <div class="showController" @click="isShowHouseList">></div>
        </div>
        <div class="changeZoom">
            <button id="zoom_in">+</button>
            <button id="zoom_out">-</button>
        </div>
    </div>
</template>

<script>
//自定义百度地图label样式
import '../../common/css/mapSearch.css';

// 引入d3库
import * as d3 from "d3";

export default {
  data() {
    return {
      map: null,//地图实例
      usedAreaDetails: [],//使用房源(区域 片区 小区)tree数据
      rentAreaDetails: [],//租房房源

      inputKeyword: '',//输入关键词
      isShowSide: true,//是否显示side
      polygon: '',//绘图
      circleNum: 1,//开始画圈找房1 取消画圈找房2
      metroNum: 1,//开始地铁找房1 取消地铁找房2
      pencil: '../imgs/home/pencil.ico',
      selectCity: JSON.parse(localStorage.selectCity),
      //二手房 租房 小区
      IPS: [this.$url.URL.MAPHOUSEALLTREE, this.$url.URL.MAPHOUSEALLTREE, this.$url.URL.MAPHOUSEALLTREE],
    }
  },
  created() {
    //创建地址解析器实例
    let myGeo = new BMap.Geocoder();
    myGeo.getPoint(this.selectCity.name, (point)=> {
      this.initMap(point.lng, point.lat);//初始化地图(中心) 
    })
    //请求所有数据
    this.requestAllCityData();
  },
  methods: {
    //显示房源列表
    isShowHouseList() {
      this.isShowSide?this.$refs.side.style.left="0":this.$refs.side.style.left="-438px";
      this.isShowSide = !this.isShowSide
    },
    //区域级别房源 二手房 租房 小区
    requestAllCityData() {
      let houseType = this.$route.params.houseTypeId;
      let num;
      if(houseType == 11) {
        num = 0;
      }else if(houseType == 22) {
        num = 1;
      }else if(houseType == 33) {
        num = 2;
      }
      this.$http.post(this.IPS[num], {
        scity: this.selectCity.value
      })
      .then(res=> {
        this.usedAreaDetails = res.data.data.usedAreaDetails;
        this.rentAreaDetails = res.data.data.rentAreaDetails;
        //初始化区域级别数据显示
        this.usedAreaDetails.forEach((item)=>{
            let point = new BMap.Point(item.px, item.py);
            this.addLabel(point, item);
        })
      })
    },
    //这里百度地图start------------------------------------------------------------------------<<<<<<<<<<
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
      let pt = new BMap.Point(lng, lat);//初始时候 首先获取到目的城市的坐标 例如: 北海站坐标109.134582,21.459389
      this.map.centerAndZoom(pt, 12);//初始中心点和缩放比例
    },
    //创建地图label 
    addLabel(point, obj){
        //判断当前是处于什么zoom 级别的;
        let currentZoom = this.map.getZoom();

        //区域级别 和 片区级别 
        let html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.areaName}</p>
                      <p class="num">${obj.avgPrice}</p>
                      <p class="count">${obj.formatAvgPrice}套</p>
                    </div>`;
        //片区级别
        let html2=`<div class="bubble-2 bubble">
                      <p class="name">${obj.districtName}</p>
                      <p class="num">${obj.avgPrice}</p>
                      <p class="count">${obj.formatAvgPrice}套</p>
                    </div>`;

        //小区级别
        let html3 = `<div class="bubble-3 bubble">
                      <p class="name">${obj.buildName} <strong>${obj.formatAvgPrice}万</strong> ${obj.formatSaleCount}</p>
                      <i class="iconfont icon-sanjiaoxing-down"></i>
                    </div>`;
                    
        let content;
        if(currentZoom==15||currentZoom==16) {
          content = html3;
        }else if(currentZoom==13||currentZoom==14){
          content = html2;
        }else{
          content = html1;
        }
        

        let label = new BMap.Label(content, {
            offset: new BMap.Size(-40,-40),
            position: point //指定文本标注所在的地理位置               
          })
          label.setStyle({
            border: 0,
            backgroundColor: 'none',
            overflow: 'hidden',
            width: '86px',
            height: '86px'
          })
      this.map.addOverlay(label); //将标注添加到地图中
      
      label.addEventListener('click',(e)=>{
        //重新设置中心位置 
        this.map.setCenter(e.point);
        
        //改变zoom 进入下一级;
        if(currentZoom<=12) {//区域级别 
          //清空覆盖物
          this.map.clearOverlays();    
          this.map.setZoom(14);
        }else if(currentZoom>12&&currentZoom<=14) {//片区级别
          //清空覆盖物
          this.map.clearOverlays();  
          this.map.setZoom(16);
        }else if(currentZoom>14) { 
          //show 左边 房源列表选项
          this.isShowSide=false;
          this.$refs.side.style.left="0";
        }
      }) 
    },
    //设置地图事件
    setMapEvent() {
      this.map.enableScrollWheelZoom();
      this.map.enableKeyboard();
      this.map.enableDragging();
      this.map.enableDoubleClickZoom();
    },
    //这里百度地图end------------------------------------------------------------------<<<<<<<<<<

    //画圈找房start--------------------------------------------------------------------<<<<<<<<<<
    //修改svg
    changeSvg() {
      const style = "position:absolute;top:-500px;left:-500px;width:2536px;height:1281px";
      this.svg = d3.select("svg")
                .attr("x", "2536px")
                .attr("y", "1281px")
                .attr("fill", "none")
                .attr("stroke-linecap", "round")
                .attr("viewBox", "-500 -500 2536 1281")
                .attr("style", style)
                .attr("fill", "rgba(0,0,0,.3)");
    },
    //获取坐标
		getMouse(e){
      var e=e||window.event;
      var mouse={x:0,y:0};
			// mouse.x=e.pageX+this.amendment().newLeft;
      // mouse.y=e.pageY-111+this.amendment().newTop;
      mouse.x=e.pageX;
      mouse.y=e.pageY-111;
			return mouse;
    },
    //修正鼠标位置参数
    amendment() { 
      let str1 = document.querySelector(".BMap_mask").getAttribute("style").split(";")[1];//left
      let str2 = document.querySelector(".BMap_mask").getAttribute("style").split(';')[2];//top
          str1 = str1.replace(/[^-?\d+]/ig," ");
          str2 = str2.replace(/[^-?\d+]/ig," ");
      let newLeft = parseInt(str1);
      let newTop = parseInt(str2);
      return {
        newLeft: newLeft,
        newTop: newTop
      }
    },
    //点击画图按钮进入绘图
    beginDraw() {
      //初始化绘图
      //清空覆盖物
      this.map.clearOverlays(); 
      this.polygon = new BMap.Polygon(); 
      this.map.addOverlay(this.polygon);
    
      //鼠标样式替换
      console.log(document.querySelector("svg"))
      document.querySelector("svg").style.cursor = 'url('+this.pencil+'),default';
      this.circleNum = 2;
      this.map.disableDragging();//设置地图禁止拖拽   

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
        // this.map.setViewport(xyArr);//调整视野
        this.map.enableDragging();//设置地图打开拖拽
        mapNode.onmousemove = null;
        mapNode.onmousedown = null;
        mapNode.onmouseup = null;
        document.querySelector("svg").style.cursor = '';
      }
    },
    
    exitDraw() {// 结束画圈
      this.map.clearOverlays();   
      this.circleNum = 1;
      this.renderViewArea();
    },

    //画圈找房end---------------------------------------------------------------------------<<<

    //地图可视区域的房源数据
    viewArea() {
      this.map.addEventListener("dragend", ()=>{//拖动结束
        var bs = this.map.getBounds();   //获取可视区域
        var bssw = bs.getSouthWest();   //可视区域左下角
        var bsne = bs.getNorthEast();   //可视区域右上角
        console.log(bssw, bsne)
        //tode 请求区域数据
      })
    },
    renderViewArea() {
      //清空覆盖物
      this.map.clearOverlays();    
      let currentZoom = this.map.getZoom();
      if(currentZoom<=12) {//区域级别
        //区域级别数据显示
        this.usedAreaDetails.forEach((item)=>{
          let point = new BMap.Point(item.px, item.py);
          this.addLabel(point, item);
        })
      }else if(currentZoom>12&&currentZoom<=14) {//片区级别
        //片区级别数据显示
        this.usedAreaDetails.forEach((item)=>{
          item.usedDistrictDetails.forEach((item2)=>{
            let point = new BMap.Point(item2.px, item2.py);
            this.addLabel(point, item2);
          })
        })
      }else if(currentZoom>=15) {//小区级别
        //小区级别数据显示
        this.usedAreaDetails.forEach((item)=>{
          item.usedDistrictDetails.forEach((item2)=>{
            item2.usedHousingDetails.forEach((item3)=>{
              let point = new BMap.Point(item3.px, item3.py);
              this.addLabel(point, item3);
            })
          })
        })
      }
    }
  },
  mounted() {
    this.changeSvg();  //修改svg
    setTimeout(()=> {
      this.map.addEventListener("zoomend", ()=>{
        if(this.circleNum == 2){
          //绘图状态

        }else if(this.circleNum == 1){
          //未绘图状态
          this.renderViewArea();
        }
      });
    },1000)
   
  }
};
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



