/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 10:10:58 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-28 11:49:56
 */
<template>
	<!-- 房源对比 -->
	<div class="houseContrast">
		<o-header></o-header>
		<div class="container main">
			<div class="one">
				<div>
					<h3>对比房源</h3>
					<div>勾选可标记感兴趣的信息</div>
					<div><input type="checkBox">突出优势项</div>
					<div><input type="checkBox">隐藏相同项</div>
				</div>
				<div v-for="item in [1,1,1,1]">
					<div class="image">
						<img src="" alt="">
						<span class="label">200万</span>
					</div>
					<div class="content">
						内容内容内容内容内容内容内容内容
						内容内容内容内容内容内容内容内容
					</div>
				</div>
			</div>
			<div class="two">
				<table>
					<th>核心信息</th>
					<tr>
						<td>房源特色</td>
						<td>房源特色</td>
						<td>房源特色</td>
						<td>房源特色</td>
						<td>房源特色</td>
					</tr>
					<tr>
						<td>建筑面积</td>
						<td>建筑面积</td>
						<td>建筑面积</td>
						<td>建筑面积</td>
						<td>建筑面积</td>
					</tr>
					<tr>
						<td>单价</td>
						<td>单价</td>
						<td>单价</td>
						<td>单价</td>
						<td>单价</td>
					</tr>
					<tr>
						<td>户型</td>
						<td>户型</td>
						<td>户型</td>
						<td>户型</td>
						<td>户型</td>
					</tr>
					<tr>
						<td>朝向</td>
						<td>朝向</td>
						<td>朝向</td>
						<td>朝向</td>
						<td>朝向</td>
					</tr>
					<tr>
						<td>装修</td>
						<td>装修</td>
						<td>装修</td>
						<td>装修</td>
						<td>装修</td>
					</tr>
					<tr>
						<td>年代</td>
						<td>年代</td>
						<td>年代</td>
						<td>年代</td>
						<td>年代</td>
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
						<td>套内面积</td>
						<td>套内面积</td>
						<td>套内面积</td>
						<td>套内面积</td>
					</tr>
					<tr>
						<td>房屋类型</td>
						<td>房屋类型</td>
						<td>房屋类型</td>
						<td>房屋类型</td>
						<td>房屋类型</td>
					</tr>
					<tr>
						<td>建筑类型</td>
						<td>建筑类型</td>
						<td>建筑类型</td>
						<td>建筑类型</td>
						<td>建筑类型</td>
					</tr>
					<tr>
						<td>建筑结构</td>
						<td>建筑结构</td>
						<td>建筑结构</td>
						<td>建筑结构</td>
						<td>建筑结构</td>
					</tr>
					<tr>
						<td>配备电梯</td>
						<td>配备电梯</td>
						<td>配备电梯</td>
						<td>配备电梯</td>
						<td>配备电梯</td>
					</tr>
					<tr>
						<td>产权年限</td>
						<td>产权年限</td>
						<td>产权年限</td>
						<td>产权年限</td>
						<td>产权年限</td>
					</tr>
					<tr>
						<td>房屋用途</td>
						<td>房屋用途</td>
						<td>房屋用途</td>
						<td>房屋用途</td>
						<td>房屋用途</td>
					</tr>
					<tr>
						<td>产权</td>
						<td>产权</td>
						<td>产权</td>
						<td>产权</td>
						<td>产权</td>
					</tr>
				</table>
			</div>
			<div class="five">
				<table>
					<th>小区信息</th>
					<tr>
						<td>小区名称</td>
						<td>小区名称</td>
						<td>小区名称</td>
						<td>小区名称</td>
						<td>小区名称</td>            
					</tr>
					<tr>
						<td>小区均价</td>
						<td>小区均价</td>
						<td>小区均价</td>
						<td>小区均价</td>
						<td>小区均价</td>
					</tr>
					<tr>
						<td>建筑年代</td>
						<td>建筑年代</td>
						<td>建筑年代</td>
						<td>建筑年代</td>
						<td>建筑年代</td>
					</tr>
					<tr>
						<td>楼栋总数</td>
						<td>楼栋总数</td>
						<td>楼栋总数</td>
						<td>楼栋总数</td>
						<td>楼栋总数</td>
					</tr>
					<tr>
						<td>房屋总数</td>
						<td>房屋总数</td>
						<td>房屋总数</td>
						<td>房屋总数</td>
						<td>房屋总数</td>
					</tr>
					<tr>
						<td>物业费用</td>
						<td>物业费用</td>
						<td>物业费用</td>
						<td>物业费用</td>
						<td>物业费用</td>
					</tr>
					<tr>
						<td>总车位数</td>
						<td>总车位数</td>
						<td>总车位数</td>
						<td>总车位数</td>
						<td>总车位数</td>     
					</tr>
				</table>
			</div>
			<div class="six">
				<table>
					<th>配套信息</th>
					<tr>
						<td>交通</td>
						<td>交通</td>
						<td>交通</td>
						<td>交通</td>
						<td>交通</td>
					</tr>
					<tr>
						<td>学校</td>
						<td>学校</td>
						<td>学校</td>
						<td>学校</td>
						<td>学校</td>
					</tr>
					<tr>
						<td>医院</td>
						<td>医院</td>
						<td>医院</td>
						<td>医院</td>
						<td>医院</td>
					</tr>
					<tr>
						<td>银行</td>
						<td>银行</td>
						<td>银行</td>
						<td>银行</td>
						<td>银行</td>
					</tr>
					<tr>
						<td>超市</td>
						<td>超市</td>
						<td>超市</td>
						<td>超市</td>
						<td>超市</td>
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
			
		}
	},
	methods: {
		
	},
	components: {
		oHeader
	}
}
</script>

<style lang="less" scoped>
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
		flex: 1;
		.image{
			position: relative;
			width: 235px;
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
			width: 235px;
			padding: 10px;
			border: 1px solid #cacaca;
			border-top: 0;
			box-sizing: border-box;
		}
	}
}
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
			border: 1px solid #b2b2b2;
			height: 48px;
			line-height: 48px;
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
