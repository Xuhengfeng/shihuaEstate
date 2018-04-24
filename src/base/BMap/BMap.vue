<template>
	<div class="bmap-wrapper">
		<div class="container" style="position:relative">
			<div class="bmap">
				<ul>
					<li @click="tabMap(1)">交通</li>
					<li @click="tabMap(2)">购物</li>
					<li @click="tabMap(3)">学校</li>
					<li @click="tabMap(4)">餐饮</li>
					<li @click="tabMap(5)">医疗</li>
					<li @click="tabMap(6)">娱乐</li>
				</ul>
				<div id="map" style="height: 342px;width: 713px;">
					大师傅
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {　　　　
		data() {　　　　　　
			return {　　　　　　　　
				style: {　　　　　　　　　　
					width: '100%',
					　　　　　　　　　　height: this.height + 'px'　　　　　　　　
				},
				map: null　　　　　　
			}　　　　
		},
		　　　　props: { //里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
			　　　　　　
			height: {　　　　　　　　
				type: Number,
				　　　　　　　　default: 300　　　　　　
			},
			　　　　longitude: {}, //定义经度
			　　　　　latitude: {}, //定义纬度
			addr: {}, //地址
			chengshi: {}　　　　
		},
		　　　　mounted() {

			this.ready()　　　　
		},
		methods: {
			ready() {
				let that = this;
				that.map = new BMap.Map("map");
				var point = new BMap.Point(116.331398, 39.897445);
				that.map.centerAndZoom(point, 12);

				var geolocation = new BMap.Geolocation();
				// 开启SDK辅助定位
				geolocation.enableSDKLocation();
				geolocation.getCurrentPosition(function(r) {
					if(this.getStatus() == BMAP_STATUS_SUCCESS) {
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
				if(num == '1') {
					local.searchNearby("交通", "南山");
				} else if(num == '2') {
					local.searchNearby("购物", "南山");
				} else if(num == '3') {
					local.searchNearby("学校", "南山");
				} else if(num == '4') {
					local.searchNearby("餐饮", "南山");
				} else if(num == '5') {
					local.searchNearby("医疗", "南山");
				} else if(num == '6') {
					local.searchNearby("娱乐", "南山");
				}
			}
		}　　
	}
</script>

<style scope="scope">
	.bmap{
		width: 713px!important;		
		height: 392px;
		border: 1px solid black;
		overflow: hidden;
		position: relative;
	}
	.bmap-wrapper ul {
		width: 713px!important;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-content: center;
		height: 70px;
		line-height: 70px;
		text-align: center;
	}
	
	.bmap-wrapper ul li {
		font-size: 25px;
		cursor: pointer;
		flex: 1;
	}
</style>