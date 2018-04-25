/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:09:22 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-25 18:24:55
 */
<template>
  <div class="sellRent">
	  	<o-top-bar></o-top-bar>
		<div class="main">
			<div class="container">
				<div class="form-box" v-show="!brokerFlag">
					<div class="form-hd">
						<div v-for="(item,index) in items">
							<div @click="changeItem(index)">{{item}} <input type="radio" :checked="checked==index?true:false"></div>
						</div>
					</div>
					<div class="form-bd">
						<ul>
							<li>
								<div>姓名</div>
								<input type="username" placeholder="请输入你的姓名" v-model="username">
							</li>
							<li>
								<div>电话</div>
								<input type="telphone"  placeholder="请输入你的电话" v-model="telphone">
							</li>
							<li>
								<div>城市</div>
								<div class="city">
									<input placeholder="请输入你的城市" readonly v-model="cityValue" @click="toggleCity()">
									<ul v-if="cityFlag">
										<li v-for="item in cityList">{{item}}</li>
										<!-- <li>2</li>
										<li>3</li>
										<li>4</li>
										<li>5</li> -->
									</ul>
								</div>
							</li>
							<li>
								<div>小区</div>
								<input type="text"  placeholder="请输入房源小区名称" v-model="houseTyName">
							</li>
							<li>
								<div>房屋编号</div>
								<div class="houseNum">
									<input type="text"  placeholder="栋座号" v-model="houseOne">
									<input type="text"  placeholder="单元号" v-model="houseTwo">
									<input type="text"  placeholder="门牌号" v-model="houseThree">
								</div>
							</li>
							<li>
								<div>具体地址</div>
								<input type="text" placeholder="请输入房源具体地址" v-model="address">
							</li>
							<li>
								<div>经纪人</div>
								<div class="broker">
									<input type="text" placeholder="选择你的经纪人" readonly v-model="brokerValue" @click="toggleBroker()">
								</div>
							</li>
						</ul>
					</div>
					<div class="form-ft">
						<button>提交</button>
						<p>我们将在最短时间内和您联系!</p>
					</div>
				</div>
				<div class="brokerList" v-show="brokerFlag">
					<h3>选择经纪人</h3>
					<ul>
						<li v-for="item in [1,1,1]">
							<div class="image">
								<img src="" alt="">
							</div>
							<div class="content">
								<div class="one">
									<div class="name"></div>
									<div class="decirption"></div>
									<div class="tag"></div>
								</div>
								<div class="two">
									
								</div>
								<div class="three">
									<div>联系电话</div>
									<div class="cellme">121212121</div>
								</div>
							</div>
						</li>
					</ul>
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
			username: '',//用户名
			telphone: '',//手机号
			cityValue: '',//选择城市
			brokerValue: '',//经纪人
			cityFlag: false,//城市
			brokerFlag: false,//经纪人
			cityList: [1,3],//城市列表
			brokerList: [1,3],//经纪人列表
			houseTyName: '',//小区名称
			houseOne: '',//栋座号
			houseTwo: '',//单元号
			houseThree: '',//门牌号
			address: '',//地址
			items: ['我要出售', '我要出租'],
			options: [{name: 1,id: 1}],
			//出售 出租
			IPS: [this.$url.URL.IP_HOUSEENTRUSTAPPLYSELLHOUSE, this.$url.URL.IP_HOUSEENTRUSTAPPLYRENTHOUSE],
			checked: 0,
			IPSnum: 0,
			selectCity: JSON.parse(localStorage.selectCity)
		}
	},
	methods: {
		changeItem(num) {
			this.checked = num;
			this.IPSnum = num;
		},
		toggleCity() {
			this.cityFlag = !this.cityFlag;
			this.brokerFlag = false;
		},
		toggleBroker() {
			this.cityFlag = false;
			this.brokerFlag = !this.brokerFlag;
		},
		cityListRequest() {
			//城市
			
		},
		brokerListRequest() {
			//经纪人
			
		},
		commitRequest() {
			let city = selectCity.value;
			let params = {
				"cityCode": city,//城市编码
				// "brokerId": this.data.brokerId,//经纪人id
				// "linkman": this.data.inputValue1,//姓名
				// "phone": this.data.inputValue2,//联系电话
				// "buildingName": this.data.inputValue3,//小区名字
				// "buildNum": this.data.inputValue4,//栋号
				// "unitNum": this.data.inputValue5,//单元号
				// "roomNum": this.data.inputValue6,//房号
				// "address": this.data.inputValue7,//详细地址
			}
		}
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
.form-box,
.brokerList{
	position: absolute;
	top: 100px;
	left: 50%;
	width: 614px;
	height: 642px;
	transform: translateX(-50%);
	background: #ffffff;
}
.city,
.broker{
	flex: 1;
	position: relative;
}
.city input,
.broker input{
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-indent: 10px;
	font-size: 14px;
	color: #000000;
	border: 1px solid #cacaca;
	box-sizing: border-box;
}
.city ul{
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	height: 200px;
	background: #ffffff;
	border: 1px solid #cacaca;
	box-sizing: border-box;
	text-indent: 10px;
	overflow-y: scroll;
	overflow-x: hidden;
	z-index: 1000;
}
.city li{
	margin-bottom: 0!important;
	border-bottom: 1px solid #cacaca
}
.city li:hover{
	background: red;
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
.form-hd>div:nth-of-type(1) input,
.form-hd>div:nth-of-type(2) input{
	cursor: pointer;
}
.form-hd>div:nth-of-type(1)>div{
	float: right;
	margin-right: 22px;
	cursor: pointer;
}
.form-hd>div:nth-of-type(2)>div{
	float: left;
	margin-left: 22px;
	cursor: pointer;
}

/* form 身体 */
.form-bd{
	margin: 0 114px 0 74px;
}
.form-bd ul li{
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

//经纪人列表
.brokerList{
	background: #efefef;
}
.brokerList h3{
	text-align: center;
}
.brokerList .image{
	float: left;
	width: 90px;
	height: 90px;
	background: red;
}
.brokerList .content{
	overflow: hidden;
}
.brokerList ul li{
	overflow: hidden;
	border-bottom:1px solid #cacaca;
	margin: 0 10px;
}
</style>


