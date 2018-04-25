/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:09:22 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-25 15:48:22
 */
<template>
  <div class="sellRent">
	  	<o-top-bar></o-top-bar>
		<div class="main">
			<div class="container">
				<div class="form-box">
					<div class="form-hd">
						<div>我要出售 <input type="radio"></div>
						<div>我要出租 <input type="radio"></div>
					</div>
					<div class="form-bd">
						<ul>
							<li>
								<div>姓名</div>
								<input type="text" placeholder="请输入你的姓名">
							</li>
							<li>
								<div>电话</div>
								<input type="text"  placeholder="请输入你的电话">
							</li>
							<li>
								<div>城市</div>
								<div class="selectGroup">
									<select name="" id="">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<select name="" id="">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<select name="" id="">
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
								</div>
							</li>
							<li>
								<div>小区</div>
								<input type="text"  placeholder="请输入房源小区名称">
							</li>
							<li>
								<div>房屋编号</div>
								<div class="houseNum">
									<input type="text"  placeholder="栋座号">
									<input type="text"  placeholder="单元号">
									<input type="text"  placeholder="门牌号">
								</div>
							</li>
							<li>
								<div>具体地址</div>
								<input type="text" placeholder="请输入房源具体地址">
							</li>
							<li>
								<div>经纪人</div>
								<input type="text" placeholder="选择你的经纪人">
							</li>
						</ul>
					</div>
					<div class="form-ft">
						<button>提交</button>
						<p>我们将在最短时间内和您联系!</p>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
import oTopBar from "../../base/topBar/topBar";
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	}, 
	components: {
		oTopBar
	},

}
</script>
<style lang="less" scoped>
@import "../../common/css/theme.less";
.sellRent .main{
	height: 797px;
	background:#F5F5F5 url(../../imgs/home/sousditu.png) no-repeat center center;
	background-position: center center;
	background-size: auto 797px; 
	box-sizing: border-box;
	position: relative;
}
.form-box{
	position: absolute;
	top: 100px;
	left: 50%;
	width: 614px;
	height: 642px;
	transform: translateX(-50%);
	background: #ffffff;
}
.selectGroup{
	flex: 1;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}
.selectGroup select{
	height: 40px;
	width: 90px;
	line-height: 40px;
	text-indent: 10px;
	font-size: 20px;
	color: #000000;
	border: 1px solid #cacaca;
	box-sizing: border-box;
}
/* form 头部 */
.form-hd{
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	height: 105px;
	line-height: 105px;
	font-size: 20px;
}
.form-hd>div{
	flex: 1;
}
.form-hd>div:nth-of-type(1){
	text-align: right;
	margin-right: 22px;
}
.form-hd>div:nth-of-type(2){
	text-align: left;
	margin-left: 22px;
}

/* form 身体 */
.form-bd{
	margin: 0 114px 0 74px;
}
.form-bd ul li{
	overflow: hidden;
	height: 40px;
	line-height: 40px;
}
.form-bd ul li{
	display: flex;
	flex-flow: row nowrap;
	margin-bottom: 18px;
}
.form-bd ul li>div:nth-of-type(1){
	margin-right: 22px;
	text-align: right;
	width: 110px;
	font-size: 20px;
	color: #000000;
}
.form-bd ul li>input{
	flex: 1;
	text-indent: 10px;
	font-size: 14px;
	color: #000000;
	border: 1px solid #cacaca;
	box-sizing: border-box;
}
.houseNum {
	flex: 1;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}
.houseNum input{
	height: 40px;
	width: 90px;
	line-height: 40px;
	text-indent: 10px;
	font-size: 14px;
	color: #000000;
	border: 1px solid #cacaca;
	box-sizing: border-box;
}
input::-webkit-input-placeholder {
  color: #cacaca;
  font-size: 14px;
}
/* form 脚步 */
.form-ft button{
	display: block;
	width: 280px;
	height: 40px;
	line-height: 40px;
	background: red;
	border: 0;
	margin: 0 auto;
	font-size: 18px;
	color: #ffffff;
}
.form-ft p{
	text-align: center;
	font-size: 14px;
	color: #272c30;
	opacity: 0.6;
	margin-top: 17px;
} 
</style>


