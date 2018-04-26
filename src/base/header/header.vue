/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:27:54 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-25 13:09:16
 */

<template>
	<div class="header">
		<div class="container">
			<div class="logo fl">
				<img src="../../imgs/buyhouse/logored.png" />
			</div>
			<div class="searchBox fl">
				<input type="text" placeholder="请输入区域商圈开始找房" />
				<img src="../../imgs/buyhouse/sousuo.png" alt="" />
			</div>
			<div class="menu fr">
				<ul class="menuright fl">
					<li><img src="../../imgs/buyhouse/diwei.png" /></li>
					<router-link tag="li" :to="/mapSearch/+houseTypeId"  class="mapSearchHouse">地图找房</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			houseTypeId: 11
		}
	},
	methods: {
	
	}
}
</script>

<style scoped>
.header {
	background-color: #F9F9F9;;
	width: 100%;
	padding: 50px 0;
	overflow: hidden;
}

.menuright {
	height: 40px;
	overflow: hidden;
	font-size: 18px;
}

.menuright>li {
	line-height: 40px;
	float: left;
	margin-right: 26px;
	
}

.searchBox input {
	position: absolute;
	padding: 20px;
	width: 514px;
	height: 46px;
	box-sizing: border-box;
	margin-left: 46px;
}

.searchBox img {
	position: relative;
	left: 514px;
	top: 10px;
}
</style>