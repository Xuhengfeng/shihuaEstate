/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:27:54 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-18 00:55:24
 */
<template>
	<div class="header">
		<div class="container">
			<div class="logo fl">
				<img src="../../imgs/buyhouse/logored.png" />
			</div>
			<div class="searchBox fl"  v-show="isShowQueryBox">
				<input ref="oInput" type="text" :placeholder="placeholder" v-model="word"  @keyup.enter="query()"/>
				<div @click="query()"></div>
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
		//占位字符串
		placeholder: {
			type: String,
			default: '请输入关键词进行检索',
		},
		//是否显示搜索框
		isShowQueryBox: {
			type: Boolean,
			default: true,
		}
	},
	data() {
		return {
			word: ''//关键词
		}
	},
	created() {
		this.word = this.keyword;
		console.log(this.word)
	},
	methods: {
		query() {
			let params = {
				keyword: this.word
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