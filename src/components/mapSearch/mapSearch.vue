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
                    <li>
                        <i class="iconfont icon-location"></i>南宁                        
                    </li>
                    <li>
                        <i class="iconfont icon-location"></i>南宁                        
                    </li>
                </ul>
            </div>
        </div> 
        <div id="map"></div>
        <!-- 房源列表 -->
        <div class="side" ref="side">
            发呆发斯蒂芬
            <div class="showController" @click="isShowHouseList">></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,//地图实例
      areaList: [//地图找房
        {px:109.136307,py:21.460197,value:'北海站(区域)',
          districtList:[
            {px:109.153374,py:21.495076,'value':'片区11',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道111'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道112'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道113'}
            ]},
            {px:109.147338,py:21.489527,'value':'片区12',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道111'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道112'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道113'}
            ]},
            {px:109.153374,py:21.48502,'value':'片区13',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道111'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道112'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道113'}
            ]}
        ]},
        {px:109.175113,py:21.489796,'value':'南珠汽车站(区域)',
          districtList:[
            {px:109.09822473723126,py:21.463802752968178,'value':'片区21',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道221'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道222'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道223'}
            ]},
            {px:109.09822473723126,py:21.463802752968178,'value':'片区22',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道221'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道222'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道223'}
            ]},
            {px:109.09822473723126,py:21.463802752968178,'value':'片区23',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道221'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道222'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道223'}
            ]}
        ]},
        {px:109.128545,py:21.450509,'value':'海洋之窗(区域)',
          districtList:[
            {px:109.122868,py:21.448356,'value':'片区31',
              streetList:[
                {px:109.1187,py:21.43944,'value':'街道331'},
                {px:109.131707,py:21.436648,'value':'街道332'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道333'}
            ]},
            {px:109.152117,py:21.414441,'value':'片区32',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道331'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道332'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道333'}
            ]},
            {px:109.09822473723126,py:21.463802752968178,'value':'片区33',
              streetList:[
                {px:109.09822473723126,py:21.463802752968178,'value':'街道331'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道332'},
                {px:109.09822473723126,py:21.463802752968178,'value':'街道333'}
            ]}
        ]}
      ],
      inputKeyword: '',//输入关键词
      isShowSide: true,//是否显示side
    }
  },
  methods: {
    isShowHouseList() {
      this.isShowSide?this.$refs.side.style.left="0":this.$refs.side.style.left="-438px";
      this.isShowSide = !this.isShowSide
    },
    //区域级别房源
    requestAllCityData() {
      if(!this.inputKeyword) {
        this.$alert('输入关键词!')
      }else{
        this.$http.post(this.$url.URL.MAPHOUSEALL, {
          scity: "beihai"
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    //这里百度地图start------------------------------------------------------------------------<<<<<<<<<<
    initMap() {
      this.createMap(); //创建地图
      this.setMapEvent(); //设置地图事件
    },
    createMap() {//创建地图
      //11 12     区域级别
      //13 14      片区级别
      //15 16      街道级别
      this.map = new BMap.Map("map", {
        minZoom: 11,
        maxZoom: 18
      });
      let pt = new BMap.Point(109.134582,21.459389);//初始时候 首先获取到目的城市的坐标 例如: 北海站坐标
      this.map.centerAndZoom(pt, 12);//初始中心点和缩放比例
     
      //初始化区域级别数据显示
      this.areaList.forEach((item)=>{
          let point = new BMap.Point(item.px, item.py);
          this.addLabel(point, item);
      })
    },
    addLabel(point, obj){//创建label 
        //判断当前是处于什么zoom 级别的;
        let currentZoom = this.map.getZoom();

        //区域级别 和 片区级别 
        let html1=`<div class="bubble-2 bubble">
                      <p class="name">${obj.value}</p>
                      <p class="num">57万</p>
                      <p class="count">5000套</p>
                    </div>`;

        //街道级别
        let html2 = `<div class="bubble-3 bubble">
                      <p class="name">${obj.value}</p>
                      <i class="iconfont icon-sanjiaoxing-down"></i>
                    </div>`;
        let content;
        if(currentZoom == 16) {
          content = html2;
        }else{
          content = html1;
        }
        

        var label = new BMap.Label(content, {
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
        
        //进入下一级 改变 zoom 和 数据;
        if(currentZoom<=12) {//区域级别 
          //清空覆盖物
          this.map.clearOverlays();    
          this.map.setZoom(14);

          //片区级别数据显示 这里的obj是区域级别的遍历对象
          obj.districtList.forEach((item2)=>{
            let point = new BMap.Point(item2.px, item2.py);
            this.addLabel(point, item2);//递归 item2传给下一级别的obj
          })
        }else if(currentZoom>12&&currentZoom<=14) {//片区级别
          //清空覆盖物
          this.map.clearOverlays();  
          this.map.setZoom(16);

          //街道级别数据显示 这里的obj是片区级别的对象
          obj.streetList.forEach((item2)=>{
            console.log(item2)
            let point = new BMap.Point(item2.px, item2.py);
            this.addLabel(point, item2);
          })
        }else if(currentZoom>14) { 
          //show  左边 房源列表选项
        }
      }) 

    },
    setMapEvent() {//设置地图事件
      this.map.enableScrollWheelZoom();
      this.map.enableKeyboard();
      this.map.enableDragging();
      this.map.enableDoubleClickZoom();
    },
    //这里百度地图end------------------------------------------------------------------<<<<<<<<<<
  },
  mounted() {
    //初始化百度地图
    this.initMap();

    this.map.addEventListener("zoomend", ()=>{
        //清空覆盖物
        this.map.clearOverlays();    

        let currentZoom = this.map.getZoom();
        if(currentZoom<=12) {//区域级别
          //区域级别数据显示
          this.areaList.forEach((item)=>{
            let point = new BMap.Point(item.px, item.py);
            this.addLabel(point, item);
          })
        }else if(currentZoom>12&&currentZoom<=14) {//片区级别
          //片区级别数据显示
          this.areaList.forEach((item)=>{
            item.districtList.forEach((item2)=>{
              let point = new BMap.Point(item2.px, item2.py);
              this.addLabel(point, item2);
            })
          })
        }else if(currentZoom>15) {//街道级别
          //街道级别数据显示
          this.areaList.forEach((item)=>{
            item.districtList.forEach((item2)=>{
              item2.streetList.forEach((item3)=>{
                let point = new BMap.Point(item3.px, item3.py);
                this.addLabel(point, item3);
              })
            })
          })
        }
    })    
  }
};
</script>

<style scoped="scoped">
/* 第一块 */
.header .header-hd {
  overflow: hidden;
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
  height: 50px;
  border-bottom: 1px solid #eee;
}
.header .search-bar {
  position: relative;
  vertical-align: middle;
  height: 100%;
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
}
.filters-content {
  position: absolute;
  left: 0;
  z-index: 1100;
}

/* 房源列表 */
.side{
  position: fixed;
  left: -438px;
  top: 111px;
  background: #ffffff;
  width: 438px;
  bottom: 0;
  transition: all 0.3s ease;
  z-index: 1000;
}
.side .showController{
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
  box-shadow: 1px 0 0 rgba(0,0,0,0.3),
              0 -1px 0 rgba(0,0,0,0.3), 
              0 1px 0  rgba(0,0,0,0.3); 
  cursor: pointer;
}
</style>

<style>
/* 百度地图样式 ----------------------------------------------<<<<<<*/
#map {
  position: absolute;
  min-width: 1200px;
  top: 111px;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
}
.BMapLabel{
  width: auto!important;
  height: auto!important;
  overflow: visible!important;
}
.bubble:hover{
  background: red;
  border: 1px solid rgb(255,0,0);
}
.bubble-3:hover i{
  color: red;
}
.bubble-2{
  color:red;
  position:absolute;
  top:0;
  left:0;
  width:86px;
  height:86px;
  border-radius: 50%;
  text-align:center;
  background-size: cover;
  color: #ffffff;
  cursor: pointer;
  border: 1px solid rgb(83,145,244);
  background: rgba(83,145,244,1);
}
.bubble-2 .name,
.bubble-2 .num,
.bubble-2 .count{
  font-size:10px;
  margin-top:20px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding:0 10px
}
.bubble-2 .num{
  font-size:10px;
  margin-top:5px;
}
.bubble-2 .count{
  font-size:10px;
  margin-top:5px;
}
.bubble-3{
  height: 24px;
  line-height: 24px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.3);
  background: rgba(83,145,244,1);
  position: relative;
  color: #ffffff;
}
.bubble-3 .name{
  font-size:10px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding:0 10px
}
.bubble-3 i{
  position: absolute;
  top: 27px;
  left: 50%;
  font-size: 18px;
  color: rgba(83,145,244,1);
  line-height: 0;
}
/* 百度地图样式 ----------------------------------------------<<<<<<*/
</style>
