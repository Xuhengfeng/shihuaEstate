<template>
	<div class="bmap-wrapper">
      <ul>
        <li @click="tabMap(1)">交通</li>
        <li @click="tabMap(2)">购物</li>
        <li @click="tabMap(3)">学校</li>
        <li @click="tabMap(4)">餐饮</li>
        <li @click="tabMap(5)">医疗</li>
        <li @click="tabMap(6)">娱乐</li>
      </ul>
      <div id="bMap"></div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      map: null
    };
  },
  props: {
    longitude: {//定义经度
      type: Number,
      default: 0,
    }, 
    latitude: {//定义纬度
      type: Number,
      default: 0,
    }, 
    addr: {//地址
      type: Object,
      default: ()=>{return {}}
    }, 
    chengshi: {}
  },
  mounted() {
    this.ready();
    this.tabMap(1);
  },
  methods: {
    ready() {
      let that = this;
      that.map = new BMap.Map("bMap");
      let point = new BMap.Point(116.331398, 39.897445);//城市的坐标
      that.map.centerAndZoom(point, 12);
      let geolocation = new BMap.Geolocation();
      geolocation.enableSDKLocation();//开启SDK辅助定位
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          that.map.addOverlay(mk);
          that.map.panTo(r.point);
        } 
      });
    },
    tabMap(num) {
      var local = new BMap.LocalSearch(this.map, {
        renderOptions: {map: this.map,autoViewport: true}
      });
      switch(num){
        case 1:local.searchNearby('交通',this.addr.name);break;
        case 2:local.searchNearby('购物',this.addr.name);break;
        case 3:local.searchNearby('学校',this.addr.name);break;
        case 4:local.searchNearby('餐饮',this.addr.name);break;
        case 5:local.searchNearby('医疗',this.addr.name);break;
        case 6:local.searchNearby('娱乐',this.addr.name);break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bmap-wrapper{
  height: 392px;
  #bMap{
    height: 322px;
  }
  ul{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border: 1px solid #cacaca;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background: #ffffff;
    li{
      flex: 1;
      font-size: 25px;
      cursor: pointer;
    }
  }
}


</style>