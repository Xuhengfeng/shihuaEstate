/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 10:10:58 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-01 15:46:04
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
						<div><input type="checkBox">突出优势项</div>
						<div><input type="checkBox">隐藏相同项</div>
					</div>
					<div v-for="(item,index) in houseList">
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
						<td v-for="item in houseList2">{{item.houseTag}}</td>
					</tr>
					<tr>
						<td>建筑面积</td>
						<td v-for="item in houseList2">{{item.builtArea}}</td>
					</tr>
					<tr>
						<td>单价</td>
						<td v-for="item in houseList2">{{item.salePrice}}</td>
					</tr>
					<tr>
						<td>户型</td>
						<td v-for="item in houseList2">{{item.houseType}}</td>
					</tr>
					<tr>
						<td>朝向</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>装修</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>年代</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
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
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>房屋类型</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>建筑类型</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>建筑结构</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>配备电梯</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>产权年限</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>房屋用途</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>产权</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
				</table>
			</div>
			<div class="five">
				<table>
					<th>小区信息</th>
					<tr>
						<td>小区名称</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>          
					</tr>
					<tr>
						<td>小区均价</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>建筑年代</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>楼栋总数</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>房屋总数</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>物业费用</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>总车位数</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>   
					</tr>
				</table>
			</div>
			<div class="six">
				<table>
					<th>配套信息</th>
					<tr>
						<td>交通</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>学校</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>医院</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>银行</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
					</tr>
					<tr>
						<td>超市</td>
						<td v-for="item in houseList2">{{item.houseDirection}}</td>
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
			houseList2: [],//表格的 要补起个数
		}
	},
	created() {
		let len = 4 - JSON.parse(localStorage.contrastList).length;
		this.houseList = JSON.parse(localStorage.contrastList);
		this.houseList2 = JSON.parse(localStorage.contrastList);
		this.pushItem(len);
	},
	methods: {
		//item 个数补齐
		pushItem(num) {
			for(let i=0;i<num;i++) {
				this.houseList2.push({});
			}
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
				&:nth-of-type(2){
					margin-bottom: 15px;
					font-size: 14px;
					color: #000000;																
				}
				&:nth-of-type(3){
					font-size: 14px;
					color: #000000;						
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
				background: yellow;
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
			border: 1px solid #b2b2b2;
			&:nth-of-type(1) {
				text-align: center;
			}
			&:not(:nth-of-type(1)){
				text-indent: 20px;
			}
		}
	}
}
.main{
	margin-bottom: 45px; 
}
</style>
