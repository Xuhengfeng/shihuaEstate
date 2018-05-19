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
    //里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
    height: {type: Number,default: 300},
    longitude: {}, //定义经度
    latitude: {}, //定义纬度
    addr: {type:Object,default:{}}, //地址
    chengshi: {}
  },
  mounted() {
    this.ready();
  },
  methods: {
    ready() {
      let that = this;
      that.map = new BMap.Map("bMap");
      var point = new BMap.Point(116.331398, 39.897445);//城市的坐标
      that.map.centerAndZoom(point, 12);

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          that.map.addOverlay(mk);
          that.map.panTo(r.point);
          //						alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        } else {
          //						alert('failed' + this.getStatus());
        }
      });
    },
    tabMap(num) {
      var local = new BMap.LocalSearch(this.map, {
        renderOptions: {
          map: this.map,
          autoViewport: true
        }
      });
            console.log(typeof num)
            console.log(this.addr.name)
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