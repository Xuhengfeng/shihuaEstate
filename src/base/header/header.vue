/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:27:54 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-07 17:33:50
 */
<template>
	<div class="header">
		<div class="container">
			<div class="logo fl">
				<img src="../../imgs/buyhouse/logored.png" />
			</div>
			<div class="searchBox fl">
				<input type="text" placeholder="请输入关键词进行检索" v-model="word"  @keyup.enter="query"/>
				<div @click.stop="query()"></div>
			</div>
			<div class="menu fr">
				<ul class="menuright fl">
					<li><img src="../../imgs/buyhouse/diwei.png" /></li>
					<router-link  class="mapSearchHouse" tag="li" :to="{path:'mapSearch',query:{houseType:houseTypeId}}">地图找房</router-link>
				</ul>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
	props: {
		//地图 二手房 租房  小区 11 12 13
		houseTypeId: {
			type: Number,
			default: 11
		},
		//关键词
		keyword: {
			type: String,
			default: ''
		},
		//关键词类型 二手房 新房 租房 0 1 2
		keywordTypeId: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			word: ''//关键词
		}
	},
	created() {
		this.word = this.keyword;
	},
	methods: {
		query() {
			let params = {
				keyword: this.word,
				keywordTypeId: this.keywordTypeId
			}
			return this.$emit('query', params);
		}
	}
}
</script>

<style lang="less" scoped>
.header {
	background-color: #F9F9F9;;
	width: 100%;
	padding: 50px 0;
	overflow: hidden;
	.searchBox{
		display:flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		margin-left: 46px;
		height: 46px;
		width: 514px;
		background: #ffffff;
		input{
			flex: 1;
			text-indent: 20px;
			outline: none;
		}
		div{
			flex: 100px 0 0;
			width: 100px;
			height: 100%;
			background: url('../../imgs/buyhouse/sousuo.png') no-repeat center center;
			cursor: pointer;
		}
	}
	.menuright {
		height: 40px;
		overflow: hidden;
		font-size: 18px;
		li{
			float: left;
			line-height: 40px;
			margin-right: 26px;
		}
	}
}
</style>