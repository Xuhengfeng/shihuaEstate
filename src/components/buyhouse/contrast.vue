/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 10:10:58 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-21 12:57:37
 */
<template>
	<!-- 房源对比 -->
	<div class="houseContrast">
		<o-header></o-header>
		<div class="section">
			<div class="container">
				<div class="one">
					<div>
						<h3>对比房源</h3>
						<div>勾选可标记感兴趣的信息</div>
						<div class="advantage">
							<el-checkbox v-model="checked1" @change="Advantage()">突出优势项</el-checkbox>
						</div>
						<div class="hideSame">
							<el-checkbox v-model="checked2" @change="">隐藏相同项</el-checkbox>
						</div>
					</div>
					<div v-for="(item,index) in houseList" v-if="item.housePic">
						<div class="image">
							<img :src="item.housePic"/>
							<span class="label">{{item.saleTotal}}万</span>
						</div>
						<div class="content">
							{{item.houseTitle}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container main">
			<div class="two">
				<table>
					<th>核心信息</th>
					<tr>
						<td>房源特色</td>
						<td v-for="item in contrastList" style="text-align:center">{{item.houseTag}}</td>
					</tr>
					<tr>
						<td>建筑面积</td>
						<td v-for="item in contrastList" :class="item.builtArea==builtAreaIndex?'fontColor':''">{{item.builtArea}} 平米</td>
					</tr>
					<tr>
						<td>单价</td>
						<td v-for="item in contrastList" :class="item.saleprice==priceIndex?'fontColor':''">{{item.saleprice}}元 / 平</td>
					</tr>
					<tr>
						<td>户型</td>
						<td v-for="item in contrastList">{{item.houseType}}</td>
					</tr>
					<tr>
						<td>朝向</td>
						<td v-for="item in contrastList">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>装修</td>
						<td v-for="item in contrastList" :class="item.houseDecoration==houseDecorationIndex?'fontColor':''">{{item.houseDecoration}}</td>
					</tr>
					<tr>
						<td>年代</td>
						<td v-for="item in contrastList" :class="item.buildAge==buildAgeIndex?'fontColor':''">{{item.buildAge}}</td>
					</tr>
				</table>
			</div>
			<div class="three">
				<table>
					<th>
						基础信息
					</th>
					<tr>
						<td>套内面积</td>
						<td v-for="item in contrastList">{{item.innerArea}}</td>
					</tr>
					<tr>
						<td>房屋类型</td>
						<td v-for="item in contrastList">{{item.houseForm}}</td>
					</tr>
					<tr>
						<td>建筑类型</td>
						<td v-for="item in contrastList">{{item.houseStruc}}</td>
					</tr>
					<tr>
						<td>建筑结构</td>
						<td v-for="item in contrastList">{{item.houseStruc}}</td>
					</tr>
					<tr>
						<td>配备电梯</td>
						<td v-for="item in contrastList">{{item.elevator}}</td>
					</tr>
					<tr>
						<td>产权年限</td>
						<td v-for="item in contrastList">{{item.buildRightYears}}</td>
					</tr>
					<tr>
						<td>房屋用途</td>
						<td v-for="item in contrastList">{{item.houseUse}}</td>
					</tr>
					<tr>
						<td>产权</td>
						<td v-for="item in contrastList">{{item.houseRight}}</td>
					</tr>
				</table>
			</div>
			<div class="five">
				<table>
					<th>小区信息</th>
					<tr>
						<td>小区名称</td>
						<td v-for="item in contrastList">{{item.buildName}}</td>          
					</tr>
					<tr>
						<td>小区均价</td>
						<td v-for="item in contrastList">{{item.avgSalePrice}}</td>
					</tr>
					<tr>
						<td>建筑年代</td>
						<td v-for="item in contrastList">{{item.houseBuildAge}}</td>
					</tr>
					<tr>
						<td>楼栋总数</td>
						<td v-for="item in contrastList">{{item.totalBuildNum}}</td>
					</tr>
					<tr>
						<td>房屋总数</td>
						<td v-for="item in contrastList">{{item.totalHouseNum}}</td>
					</tr>
					<tr>
						<td>物业费用</td>
						<td v-for="item in contrastList">{{item.manageFee}}</td>
					</tr>
					<tr>
						<td>总车位数</td>
						<td v-for="item in contrastList">{{item.carNum}}</td>   
					</tr>
				</table>
			</div>
			<div class="six">
				<table>
					<th>配套信息</th>
					<tr>
						<td>交通</td>
						<td v-for="item in contrastList">{{item.transportInfo}}</td>
					</tr>
					<tr>
						<td>学校</td>
						<td v-for="item in contrastList">{{item.schoolInfo}}</td>
					</tr>
					<tr>
						<td>医院</td>
						<td v-for="item in contrastList">{{item.hospitalInfo}}</td>
					</tr>
					<tr>
						<td>银行</td>
						<td v-for="item in contrastList">{{item.bankInfo}}</td>
					</tr>
					<tr>
						<td>超市</td>
						<td v-for="item in contrastList">{{item.supermarketInfo}}</td>
					</tr>
 				</table>
			</div>
		</div>
	</div>
</template>

<script>
import oHeader from "../../base/header/header";

export default {
	data() {
		return {
			houseList: [],//头部的
			priceIndex: null,//价格优势
			builtAreaIndex: null,//建筑面积优势
			buildAgeIndex: null,//年代优势
			houseDecorationIndex: null,//装修优势
			isAdvantage: true,//突出优势项
 			checked1: false,//突出优势项
 			checked2: false,//隐藏相同项
			contrastList: [],//表格的 要补起个数
		}
	},
	created() {
		this.requestContrast();
		//这个缓存第二次才走(这么做为了保留最后一次操作对比清单结果)
		if(localStorage.tempContrastlist) {
			let arr = JSON.parse(localStorage.tempContrastlist);
			this.houseList = arr;
			let newList = this.checkItem(arr.slice(0), arr.length);
			this.contrastList = newList;
		}
	},
	computed:{
		contrastDetailList() {
			return this.$store.state.contrastDetailList;
		}		
	},
	watch: {
		contrastDetailList() {
			let list = this.$store.state.contrastDetailList;
			localStorage.tempContrastlist = JSON.stringify(list);
			this.houseList = list.slice(0);
			let newList = this.checkItem(list, list.length);
			this.contrastList = newList;
		},
	},
	methods: {
		//突出优势项
		Advantage() {
			if(this.isAdvantage){
				this.comparePrice();
				this.compareBuiltArea();
				this.compareBuildAgeIndex();
				this.compareDecoration();
				this.isAdvantage = false;
			}else{
				this.isAdvantage = true;				
				this.priceIndex = null;
				this.builtAreaIndex = null;
				this.houseDecorationIndex = null;			
				this.buildAgeIndex = null;
			}
		},
		//价格优势
		comparePrice() {
			let arr = [];
			this.contrastList.forEach(item => {
				if(item.saleprice!==undefined){
					arr.push(item.saleprice)
				}
			});
			this.priceIndex = Math.max(...arr);
		},
		//建筑面积优势
		compareBuiltArea() {
			let arr = [];
			this.contrastList.forEach(item => {
				if(item.builtArea!==undefined){
					arr.push(item.builtArea)
				}
			});
			this.builtAreaIndex = Math.max(...arr);
		},
		//装修优势
		compareDecoration() {
			this.houseDecorationIndex="精装";
		},
		//年代优势
		compareBuildAgeIndex() {
			let arr = [];
			this.contrastList.forEach(item => {
				if(item.buildAge!==undefined){
					arr.push(parseInt(item.buildAge))
				}
			});
			this.buildAgeIndex = Math.min(...arr);
		},
		//获取对比清单列表
		requestContrast() {
			this.$http.get(this.$url.URL.TWOHOUSELIST_CONTRAST)
			.then((res)=>{
			  if(res.data.data.length) {
				this.houseList =  res.data.data;
				//初始化清单列表
				this.$store.dispatch('showlist', res.data.data);
			  }
			})
		},
		//item个数补齐
		checkItem(item, len) {
			let num = 4 - len;
			for(let i=0;i<num;i++) {
				item.push({});
			}
			return item;
		}
	},
	components: {
		oHeader
	}
}
</script>

<style lang="less" scoped>

// section 头部
.section{
	padding: 10px 0;
	box-shadow: 0 3px 8px rgba(0,0,0,.06);
	.one{
		display: flex;
		flex-flow: row nowrap;
		>div:first-child{
			width:  146px;
			h3{
				padding: 30px 0 12px;
				color: rgba(0,0,0,.8);
				font-size: 22px;
			}
			>div{
				font-size: 12px;
				color: rgba(0,0,0,.8);	
				&:nth-of-type(1){
					margin-bottom: 30px;		
				}
				.advantage{
					margin-bottom: 15px;
					font-size: 14px;
					color: #000000;	
					cursor: pointer;															
				}
				.hideSame{
					font-size: 14px;
					color: #000000;	
					cursor: pointer;					
				}
				input{
					margin-right: 5px;
				}
			}
		}
		>div:not(:first-child){
			flex: 0.25;
			border-left: 1px solid #eeeeee;
			padding: 0 10px; 
			.image{
				position: relative;
				height: 114px;
				img{
					width: 100%;
					height: 100%;
				}
				.label{
					position: absolute;
					left: 0;
					bottom: 10px;
					padding: 5px;
					background: rgba(255,0,0,.7);
					color: white;
				}
			}
			.content{
				padding: 10px;
				border: 1px solid #cacaca;
				border-top: 0;
				box-sizing: border-box;
			}
		}
	}
}

// body 表格
table{
	width: 99%;
	height: 48px;
	box-sizing: border-box;
	th{
		padding: 50px 0 22px;
		text-align: left;
		font-size: 22px;
		color: rgba(0,0,0,.3);
	}
	tr{
		td{
			overflow: hidden;
			width: 80px;
			height: 48px;
			line-height: 48px;
			max-width: 80px;
			max-height: 48px;
			border: 1px solid #eeeeee;
			box-sizing: border-box;
			&:nth-of-type(1) {
				text-align: center;
				color: #9c9fa1;
				font-weight: 600;
			}
			&:not(:nth-of-type(1)){
				padding-left: 20px;
			}
		}
		&:hover{
			td{
				border-bottom: 1px solid red;
			}
		}
	}
}
.main{
	margin-bottom: 45px; 
}
.fontColor{
	color: #ff4343;
}
</style>
