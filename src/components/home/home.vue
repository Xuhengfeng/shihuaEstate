<template>
	<div class="home">
		<div class="header">
			<div class="shadowlay" v-if="toggleShow" @click="cancelshadow()"></div>
			<div class="container">
				<div class="fl">
					<router-link to="" class="logo">
						<img src="../../imgs/home/logo1.png" />
					</router-link>
					<el-button type="text" class="location" @click.native="changeCity()">
						<span class="iconfont icon-location">{{address}}</span>
					</el-button>
					<div class="city-change " v-if="cityChange">
						<!-- icon 关闭阴影层 -->
						<span class="close" @click="cancelshadow()"></span>

						<div :key="index1" v-for="(item1,index1) in city">
							<div class="title">选择城市
								<span class="city-tab">
								<span class="code1">{{item1.title}}</span>
								<router-link to=""
											 tag="a" 
											 :key="index2"
											 v-for="(item2,index2) in item1.item">
											 {{item2.name}}
								</router-link>
								</span>
							</div>
							<div class="title-line"></div>
							<div class="fc-main clear">
								<div class="fl citys-l">
									<ul>
										<li class="clear" :key="index1" v-for="(item1,index1) in city" >
											<span class="code-title fl">{{item1.title}}</span>
											<div class="city-enum fl">
												<router-link  to="/home"  
															  tag="a" 
															  :key="index2"
															  v-for="(item2,index2) in item1.item"
															  @click.native="changeAddress(item2)">
															  {{item2.name}}
												</router-link>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="navmenu fr">
					<ul class="item1">
						<router-link tag="li" to="">
							<i class="iconfont icon-yonghu" v-if="userLoginFlag">
								<span class="login" @click="login()">登录</span>/
								<span class="logout" @click="register()">立即注册</span>
							</i>
							<i class="iconfont icon-yonghu" v-else><span class="login">xxxx</span>/<span class="logout">退出</span></i>
							<ul class="item4">
								<router-link tag="li" to="">消息</router-link>
								<router-link tag="li" to="">个人账户</router-link>
								<router-link tag="li" to="">预约看房</router-link>
								<router-link tag="li" to="">我的收藏</router-link>
								<router-link tag="li" to="">我的委托</router-link>
							</ul>
						</router-link>
						<!--账号密码登陆-->
						<div class="panel_login " id="dialog" v-if="loginshow == 1">
							<div class="panel_info">
								<i class="close_login" @click="cancelshadow()">×</i>
								<div class="panel_tab">
									<div class="title">
										<div class="fl">账号密码登录</div>
									</div>
									<div class="login_input">
										<input type="text" placeholder="请输入手机号" maxlength="11">
										<input type="text" placeholder="请输入登录密码" maxlength="20">
									</div>
									<div class="forget" @click="findPassword()">忘记密码</div>
									<button class="org_btn">登录</button>
									<div class="dl_login" @click="quckliyLogin()">手机快捷登录</div>
									<div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="rightResize()">去注册</span></div>
								</div>
							</div>
						</div>

						<div class="panel_login " id="dialog" style="height: 462px;" v-if="loginshow == 2">
							<div class="panel_info">
								<i class="close_login" @click="cancelshadow()">×</i>
								<div class="panel_tab">
									<div class="title">
										<div class="fl">手机号码注册</div>
									</div>
									<div class="login_input">
										<input type="text" placeholder="请输入手机号" maxlength="11">
										<div class="login_input_resgize"><input type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
										<input type="text" placeholder="请输入密码（最少六位，数字加字母）" maxlength="11">
										<input type="text" placeholder="请再次输入密码" maxlength="11">
									</div>
									<label class="check"><input type="checkbox" style="float: left;margin-top: 4px;"></input><span>同意</span><span style="color: red;">《世华服务协议》</span></label>
									<button class="org_btn">注册</button>
									<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="loginResize()">去登陆</span></div>
								</div>
							</div>
						</div>

						<div class="panel_login " id="dialog" v-if="loginshow == 3">
							<div class="panel_info">
								<i class="close_login" @click="cancelshadow()">×</i>
								<div class="panel_tab">
									<div class="title">
										<div class="fl">手机快捷登陆</div>
									</div>
									<div class="login_input">
										<input type="text" placeholder="请输入手机号" maxlength="11">
										<div class="login_input_resgize"><input type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
									</div>
									<button class="org_btn">修改密码</button>
									<div class="dl_login" @click="loginResize()">账号密码登录</div>
									<div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="rightResize()">去注册</span></div>
								</div>
							</div>
						</div>

						<div class="panel_login " id="dialog" style="height: 462px;" v-if="loginshow == 4">
							<div class="panel_info">
								<i class="close_login" @click="cancelshadow()">×</i>
								<div class="panel_tab">
									<div class="title">
										<div class="fl">找回密码</div>
									</div>
									<div class="login_input">
										<input type="text" placeholder="请输入手机号" maxlength="11">
										<div class="login_input_resgize"><input type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
										<input type="text" placeholder="请输入手机号" maxlength="11">
										<input type="text" placeholder="请输入手机号" maxlength="11">
									</div>
									<button class="org_btn">注册</button>
									<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="rightResize()">去注册</span></div>
								</div>
							</div>
						</div>

						<router-link tag="li" to="/more">更多
							<ul>
								<router-link tag="li" to="">小区找房</router-link>
								<router-link tag="li" to="">代办贷款</router-link>
								<router-link tag="li" to="">异地服务</router-link>
								<router-link tag="li" to="">房屋托管</router-link>
								<router-link tag="li" to="">装修</router-link>
								<router-link tag="li" to="">世华公益</router-link>
								<router-link tag="li" to="">咨询</router-link>
								<router-link tag="li" to="">购房指南</router-link>
								<router-link tag="li" to="">行业咨询</router-link>
							</ul>
						</router-link>
						<router-link tag="li" to="/buyhouseguide">旅居投资</router-link>
						<router-link tag="li" to="/broker">海外置业</router-link>
						<router-link tag="li" to="/houseestate">找门店</router-link>
						<router-link tag="li" to="/sellrent">业主委托
							<ul>
								<router-link tag="li" to="">我要租房</router-link>
								<router-link tag="li" to="">我要出售</router-link>
							</ul>
						</router-link>
						<router-link tag="li" to="/sellrent">租房</router-link>
						<router-link tag="li" to="/renthouse">新房</router-link>
						<router-link tag="li" to="/buyhouse">二手房</router-link>
						<router-link tag="li" to="/home">首页</router-link>
					</ul> 
				</div>
				<div class="search-box-wrap">
					<div class="search-hd">
						<span @click="placeholderText(1)">二手房</span>
						<span @click="placeholderText(2)">租房</span>
						<span @click="placeholderText(3)">小区</span>
					</div>
					<div class="search-bd">
						<i ref="sanjiao" class="tip iconfont icon-sanjiaoxing-up"></i>
						<input class="search-box" :placeholder="souText" v-model="searchinput"></input>
						<div class="search-box-btn fr" @click="searchBuyHouse()">开始找房</div>
					</div>
					<!-- :to="{name:'mapSearch',params:{houseType:'二手房'}}" -->
					<router-link tag="div" :to="/mapSearch/+houseTypeId"  class="mapSearchHouse">
						<i class="iconfont icon-location"></i>
						<span>地图找房</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="statistics">
			<div class="container">
				<div>
					<p class="price">{{houseUsed.avgPrice}} <span>元</span></p>
					<p>全市{{houseUsed.month}}月均价</p>
				</div>
				<div>
					<p class="number">{{houseUsed.suiteCount }}<span>套</span></p>
					<p>世华{{houseUsed.month}}月份成交量</p>
				</div>
			</div>
		</div>
		<div class="section bgColor1">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">二手好房</span>
					<span class="foryouselect">为你精选</span>
					<span class="morehouse fr"><router-link tag="li" to="/buyhouse">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<router-link to="/buyhouse/twohandhousedetail/:id" tag="li" :key="index" v-for="(item,index) in houseRecmdlist">
							<div class="image">
								<img :src=item.housePic />
							</div>
							<div class="description">
								<p>{{item.houseTitle}}</p>
								<p>{{item.districtName}} {{item.houseType}} {{item.builtArea}}平米</p>
							</div>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
		<div class="section bgColor2" id="purchaseGuide">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">优质小区</span>
					<span class="foryouselect">为你推荐</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in hotBuilding">
							<div class="image">
								<img :src=item.housePic />
							</div>
							<div class="description">
								<p>{{item.buildName}}</p>
								<p><div class="fl">{{item.avgSalePrice}}元/平</div> <div class="fr">{{item.buildAge}}年建</div></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="section bgColor3">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">时尚租房</span>
					<span class="foryouselect">品质生活</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in rentHouseRecmdlist">
							<div class="image">
								<img :src= item.housePic />
							</div>
							<div class="description">
								<p>{{item.houseTitle}}</p>
								<p>{{item.districtName}} {{item.houseType}} {{item.builtArea}}平米</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="section bgColor2" id="purchaseGuide">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">新盘推荐</span>
					<span class="foryouselect">新起点</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1]">
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png" />
							</div>
							<div class="description">
								<p>梵谷水郡两居室, 满五唯一</p>
								<p>梵谷水郡 两室一厅 100平米</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="section bgColor4" id="purchaseGuide">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">行业资讯</span>
					<span class="foryouselect">了解更多房产知识</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1]">
							<div class="image">
								<img src="../../imgs/home/goufang.png" />
							</div>
							<div class="description">
								<p>梵谷水郡两居室, 满五唯一</p>
								<p>梵谷水郡 两室一厅 100平米</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="advertisement">
			<div class="container">
				<div class="content">
					<h3 class="title">世华易居APP</h3>
					<h4 class="description">锁定真实房源 哪怕市场变幻</h4>
					<p>购房宝APP 提供二手房丶新房丶租房丶商业地产真实信息,</br>
						一键委托,快速交易。更有世华地产公司强大品牌支持，买卖放心。
					</p>
					<div class="btngroup">
						<div><img src="../../imgs/home/Android.png" alt="" /></div>
						<div><img src="../../imgs/home/iphone.png" alt="" /></div>
					</div>
					<div class="QRcode">
						<div class="image">
							<img src="../../imgs/home/erwm.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				datas: "",
				num: 0,
				toggleShow: false, //取消定位阴影层
				userLoginFlag: true, //用户登录状态
				cityChange: null, //显示地位
				souText: '请输入区域丶商圈或小区名开始找房',
				city: [], //城市列表
				defaultCity: "",
				address: '定位中...',//获取默认城市
				loginshow: null,
				houseRecmdlist:[] , //二手房为你精选
				rentHouseRecmdlist:[],  //时尚租房
				hotBuilding:[],    //热门小区
				houseUsed:"",  //房源统计
				houseTypeId: 11,
				searchinput:'',
				params: {
				  "areaId": null,
				  "districtId": null,
				  "houseDecor": "",
				  "houseDirec": "",
				  "houseFeature": "",
				  "houseForm": "",
				  "keyword": "",
				  "maxBuildArea": null,
				  "maxPrice": null,
				  "minBuildArea": null,
				  "minPrice": null,
				  "pageNo": 1,
				  "pageSize": null,
				  "roomsNum": null,
				  "scity": null
				}
			};
		},
		created() {
			this.params.scity = JSON.parse(window.localStorage.selectCity).value;
			let that = this;
			let geoc = new BMap.Geocoder(); 
			let geolocation = new BMap.Geolocation();
			//首次进入 判断是否选择了指定地址
			if(window.localStorage.selectCity) {
				that.address = window.localStorage.selectCity?window.localStorage.selectCity.name:'北海';
			}else{
				geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){//定位逆地址解析成功
						let point = new BMap.Point(r.point.lng,r.point.lat);
						geoc.getLocation(point, function(rs){
							that.address = (rs .address).slice(3,5)
							window.localStorage.address = that.address
						});    
					}else{//定位逆地址解析不成功
						that.address = window.localStorage.selectCity?window.localStorage.selectCity.name:'北海';
					}    
				});
			}
		},
		methods: {
			showBtn(type) {
				this.num = type;
			},
			changeCity() { //打开城市定位
				this.toggleShow = true;
				this.cityChange = true;
			},
			placeholderText(num) {//搜索placeholder内容
				if(num == 1) {
					this.$refs.sanjiao.style.left = '0px';
					this.souText = '请输入区域丶商圈或小区名开始找房';					
				} else if(num == 2) {
					this.$refs.sanjiao.style.left = '120px';
					this.souText = '请输区名开始租房';				
				} else if(num == 3) {
					this.$refs.sanjiao.style.left = '220px';
					this.souText = '请输入区域丶名开始找房';				
				}
			},
			login() { //点击登陆
				this.toggleShow = true;
				this.cityChange = false;
				this.loginshow = 1; 
			},
			register() { //点击注册
				this.toggleShow = true;
				this.cityChange = false;				
				this.loginshow = 2;
			},
			cancelshadow() { //取消悬浮窗口
				this.toggleShow = false;
				this.cityChange = false;
				this.loginshow = null;
			},
			quckliyLogin() { //点击手机快捷登陆
				this.loginshow = 3;
			},
			findPassword() { //点击找回密码
				this.loginshow = 4;
			},
			changeAddress(item) {
				this.cancelshadow();
				this.address=item.name;
				var pinyin = require("chinese-to-pinyin");
				var name = pinyin(item.name, {noTone: true})	
					name = name.replace(/\s+/g,"");			
				let selectCity = {
					value: name,
					name: this.address
				}
				window.localStorage.selectCity = JSON.stringify(selectCity);	
			},
			searchBuyHouse() {
				console.log(this.searchinput)
			 this.$router.push({path:"/buyhouse", params: this.searchinput});
			}
		},
		mounted() {
			//请求城市列表
			let hot_city = "热门";
			let hot_city_len = 2;
			let map = {
				"hot": {
					title: hot_city,
					item: []
				}
			}
			this.$http.get(this.$url.URL.DICTIONARY_CITYS)
				.then((response) => {
					response.data.data.forEach((obj, index) => { //城市数据 重新map排列
						if(index < hot_city_len) {
							map['hot'].item.push({
								'name': obj.name,
								'key': obj.value.slice(0, 1).toUpperCase(),
								'value': obj.value
							})
						}
						const type = obj.value.slice(0, 1).toUpperCase();
						if(!map[type]) {
							map[type] = {
								title: type,
								item: []
							}
						}
						map[type].item.push({
							'name': obj.name,
							'key': obj.value.slice(0, 1).toUpperCase(),
							'value': obj.value
						})
						let hot = [],
							ret = [];
						for(let key in map) {
							let val = map[key];
							if(val.title.match(/[a-zA-Z]/)) {
								ret.push(val)
							} else if(val.title === hot_city) {
								hot.push(val)
							}
						}
						ret.sort((a, b) => {
							return a.title.charCodeAt() - b.title.charCodeAt()
						})
						this.city = hot.concat(ret);
					})
				})
				//获取首页房源统计
				
				this.$http.get(this.$url.URL.STATISTICS_HOUSEUSED +JSON.parse(window.localStorage.selectCity).value)
				.then((response)=>{
					this.houseUsed = response.data.data
					console.log(this.houseUsed)
				})
				

			//获取首页二手房列表为你精选STATISTICS_HOUSEUSED
				this.$http.get(this.$url.URL.HOUSE_RECMDLIST +JSON.parse(window.localStorage.selectCity).value)
				.then((response)=>{
					this.houseRecmdlist = response.data.data
				})
				
					
			//获取首页热门小区
			
				this.$http.get(this.$url.URL.HOTBUILDING+JSON.parse(window.localStorage.selectCity).value , {  
						params:{
							pageNo :1,
							pageSize:3							                 
						}
				})
				.then((response)=>{
					this.hotBuilding = response.data.data
					
				})
			
				
			//获取首页时尚租房
			
				this.$http.get(this.$url.URL.RENTHOUSE_RECMDLIST +JSON.parse(window.localStorage.selectCity).value)
				.then((response)=>{
					this.rentHouseRecmdlist = response.data.data
				})
			
		}
	}
</script>

<style scoped="scoped">
	/*城市切换*/
	
	.shadowlay_login {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .2);
		z-index: 1000;
	}
	
	.shadowlay {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .5);
		z-index: 995;
	}
	
	.city-change {
		width: 640px;
		height: 440px;
		background: #ffffff;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		position: fixed;
		z-index: 1001;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		padding-bottom: 20px;
	}
	
	.city-change .close {
		cursor: pointer;
		display: inline-block;
		width: 30px;
		height: 30px;
		overflow: hidden;
		position: absolute;
		right: -15px;
		top: -15px;
		background: url(../../imgs/home/cuo.png);
		background-repeat: no-repeat;
	}
	
	.city-change .title {
		text-align: left;
		margin: 30px 40px 0 40px;
		font-size: 22px;
		color: #394043;
		font-weight: bold;
		position: relative;
	}
	
	.city-change .title .city-tab {
		display: inline-block;
		float: right;
	}
	
	.city-change .title .city-tab span {
		font-size: 14px;
		font-weight: normal;
		display: inline-block;
		margin-right: 9px;
		color: #999999;
	}
	
	.city-change .title .city-tab a {
		font-size: 14px;
		font-weight: normal;
		margin-left: 10px;
		color: #394043;
	}
	
	.city-change .title-line {
		width: 590px;
		height: 1px;
		background-color: #eeeeee;
		margin: 0 auto;
		margin-bottom: 25px;
		margin-top: 10px;
	}
	
	.city-change .fc-main {
		padding: 0 40px;
		height: 335px;
		overflow-y: auto;
	}
	
	.clear:after {
		content: '.';
		clear: both;
		display: block;
		height: 0;
		visibility: hidden;
		font-size: 0;
		line-height: 0;
	}
	
	.city-change .fc-main .citys-l {
		width: 50%;
		height: 100%;
	}
	
	.city-change .fc-main .citys-r {
		width: 50%;
		height: 100%;
	}
	
	.city-change .fc-main ul {
		display: inline-block;
	}
	
	.city-change .fc-main li .code-title {
		display: inline-block;
		margin-right: 10px;
		color: #999999;
	}
	
	.city-change .fc-main li .city-enum {
		height: 100%;
		max-width: 250px;
	}
	
	.city-change .fc-main li {
		line-height: 40px;
	}
	
	.city-change .fc-main li .city-enum a {
		margin-left: 7px;
		display: inline-block;
		color: #333333;
	}
	
	.city-change .fc-main li .city-enum {
		height: 100%;
		max-width: 250px;
	}
	
	.header {
		width: 100%;
		height: 587px;
		background-color: #F5F5F5;
		background-image: url(../../imgs/home/sousditu.png);
		background-repeat: no-repeat;
		background-position: center 0;
		background-attachment: fixed;
		background-size: 1920px 717px;
		padding-top: 50px;
		box-sizing: border-box;
	}
	
	.header .logo {
		display: inline-block;
		width: 188px;
		height: 52px;
		vertical-align: middle;
	}
	
	.header .logo img {
		width: 100%;
		height: 100%;
	}
	
	.header .location {
		display: inline-block;
		padding: 10px 8px;
		line-height: 10px;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 15px;
		text-align: center;
		color: #fff;
		font-size: 15px;
		vertical-align: middle;
		margin-left: 16px;
	}
	
	.navmenu {
		position: relative;
	}
	
	.navmenu .item1>li {
		float: right;
		margin-left: 26px;
		cursor: pointer;
		color: #FFFFFF;
		font-size: 18px;
		position: relative;
		z-index: 9999999;
		padding-bottom: 20px;
	}
	
	.navmenu .item1>li ul {
		position: absolute;
		left: 0;
		visibility: hidden;
		width: 80px;
		background: #FFFFFF;
		margin-top: 15px;
	}
	
	.navmenu .item1>li:hover ul {
		visibility: visible;
	}
	
	.navmenu .item1>li ul li {
		color: black;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		text-indent: 10px;
		border-bottom: 1px solid #a7a7a6;
	}
	
	.navmenu .item1 li:hover {
		color: red;
	}
	
	.navmenu .item1 li .login:hover {
		color: red;
	}
	
	.navmenu .item1 li .logout:hover {
		color: red;
	}
	
	.icon-yonghu,
	.login,
	.logout {
		font-size: 19 px;
		color: #FFFFFF;
	}
	
	.search-box-wrap{
		position: relative;
		margin: 245px auto 0;
		width: 670px;
	}
		
	.search-box-wrap .search-hd {
		overflow: hidden;
	}
	/* 地图找房 */
	.search-box-wrap .mapSearchHouse{
		position: absolute;
		right: -130px;
		top: 63px;
		width: 100px;
		height: 50px;
		line-height: 50px;
		background: red;
		font-size: 15px;
		color: #ffffff;
		text-align: center;
		z-index: 1100;
	}
	.search-box-wrap .search-hd span {
		display: inline-block;
		margin-right: 50px;
		font-size: 20px;
		color: #FFFFFF;
		cursor: pointer;
	}
	
	.search-box-wrap .search-bd {
		margin-top: 25px;
		height: 70px;
		background: #FFFFFF;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		text-align: center;
		position: relative;
	}
	
	.search-bd .tip {
		position: absolute;
		top: -18px;
		left: 0px;
		color: #FFFFFF;
		font-size: 26px;
		transition: all .3s ease;
	}
	
	.search-box-wrap .search-bd .search-box {
		flex: 1;
		font-size: 18px;
		text-indent: 30px;
		outline: none;
	}
	
	.search-box-wrap .search-bd .search-box-btn {
		height: 100%;
		line-height: 70px;
		background: #fe0000;
		width: 146px;
		font-size: 18px;
		color: #FFFFFF;
		text-align: center;
	}
	
	.statistics>div {
		display: flex;
		height: 248px;
		flex-flow: row nowrap;
		-webkit-justify-content: center;
		justify-content: center;
		text-align: center;
		align-items: center;
	}
	
	.statistics>div>div {
		flex: 1;
	}
	
	.statistics .price,
	.statistics .number {
		font-size: 49px;
	}
	
	.statistics .price span,
	.statistics .number span {
		font-size: 28px;
		color: #595757;
	}
	
	.statistics .price+p,
	.statistics .number+p {
		margin-top: 22px;
		margin-right: 80px;
		font-size: 19px;
		color: #000000;
	}
	/*内容片段*/
	
	.section {
		overflow: hidden;
		height: 532px;
		box-sizing: border-box;
	}
	
	.section .container {
		height: 100%;
		padding-top: 55px;
	}
	
	.section .goods-hd {
		padding-left: 10px;
	}
	
	.section .goods-hd .twohandhouse {
		font-weight: bold;
		font-size: 28px;
		color: #010101;
	}
	
	.section .goods-hd .foryouselect {
		font-size: 29px;
		color: #595757;
		margin-left: 5px;
	}
	
	.section .morehouse li {
		cursor: pointer;
		font-size: 20px;
		color: #717171;
		margin-top: 10px;
	}
	
	.section .goods-bd {
		margin-top: 46px;
	}
	
	.section .goods-bd ul {
		margin-right: -30px;
	}
	
	.section .goods-bd li {
		cursor: pointer;
		width: 272px;
		height: 305px;
		margin-right: 27px;
		float: left;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}
	
	.section .goods-bd .image {
		width: 272px;
		height: 213px;
	}
	
	.section .image img {
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	
	.section .description {
		padding: 20px;
		height: 95px;
		overflow: hidden;
		box-sizing: border-box;
		background: #FFFFFF;
		line-height: 30px;
	}
	
	.section .description p:first-of-type {
		/*margin-bottom: 10px;*/
		font-size: 16px;
		color: #000000;
		font-weight: bold;
		line-height: 25px;
	}
	/*购房指南*/
	
	#purchaseGuide .goods-bd ul {
		margin-right: -60px;
	}
	
	#purchaseGuide .goods-bd li {
		width: 358px;
		margin-right: 50px;
	}
	
	#purchaseGuide .goods-bd li .image {
		width: 100%;
		overflow: hidden;
	}
	
	#purchaseGuide .goods-bd li .image:hover img {
		animation: pulse 1s .2s ease both;
	}
	/*bgColor*/
	
	.bgColor1,
	.bgColor3 {
		background: #FFFFFF;
	}
	
	.bgColor2,
	.bgColor4 {
		background: #F9F9F9;
	}
	/*ad广告*/
	
	.advertisement {
		width: 100%;
		height: 485px;
		background-color: #F5F5F5;
		background-image: url(../../imgs/home/APP.png);
		background-repeat: no-repeat;
		background-position: center 0;
		background-size: 1920px auto;
		padding-top: 50px;
		box-sizing: border-box;
	}
	
	.advertisement .title {
		font-size: 60px;
		color: #000000;
	}
	
	.advertisement .description {
		font-size: 29px;
		color: #000000;
		font-family: "microsoft yahei light";
		margin-top: 5px;
	}
	
	.advertisement .description+p {
		margin-top: 5px;
		font-size: 15px;
		color: #595757;
	}
	
	.advertisement .btngroup {
		margin-top: 50px;
		float: left;
	}
	
	.advertisement .btngroup div {
		margin-top: 12px;
	}
	
	.advertisement .QRcode {
		margin-top: 30px;
		margin-left: 15px;
		float: left;
	}
	
	.QRcode .image {
		width: 135px;
		height: 132px;
	}
	
	.QRcode .image+div {
		color: #FFFFFF;
	}
	
	.QRcode .image img {
		width: 100%;
	}
	/*登陆注册*/
	
	.panel_login {
		width: 381px;
		height: 392px;
		background-color: #fff;
		position: fixed;
		z-index: 999;
		left: 50%;
		top: 50%;
		margin-left: -190px;
		margin-top: -205px;
		/*    padding-left: 20px;*/
		box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
		-o-box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
		z-index: 10000;
		border-radius: 2px;
	}
	
	.panel_login .panel_info {
		padding-top: 40px;
		/*width: 300px;*/
	}
	
	.panel_login .panel_info .close_login {
		cursor: pointer;
		position: absolute;
		right: 15px;
		top: 15px;
		padding: 4px;
	}
	
	.panel_login .panel_tab .title .fl {
		font-size: 20px;
		color: #333;
		font-weight: bold;
		margin-left: 35%;
		cursor: pointer;
	}
	
	.login_input {
		margin-left: 10%;
	}
	
	.login_input>input {
		width: 282px;
		height: 43px;
		line-height: 43px;
		color: #333333;
		padding-left: 16px;
		margin-top: 10px;
	}
	
	.login_input_resgize {
		width: 305px;
		height: 60px;
	}
	
	.login_input_resgize>input {
		width: 145px;
		height: 43px;
		line-height: 43px;
		color: #333333;
		padding-left: 16px;
		margin-top: 10px;
	}
	
	.login_input_resgize>button {
		background: red;
		width: 108px;
		height: 45px;
		line-height: 43px;
		border-radius: 5px;
		cursor: pointer;
		margin-left: 29px;
		font-size: 14px;
		color: #FFFFFF;
	}
	
	.forget {
		position: absolute;
		left: 295px;
		color: #000000;
		font-size: 14px;
		margin-top: 10px;
		cursor: pointer;
	}
	
	.dl_login {
		position: absolute;
		left: 50px;
		color: #000000;
		font-size: 14px;
		margin-top: 10px;
		cursor: pointer;
	}
	
	.org_btn {
		background: red;
		height: 50px;
		color: #fff;
		width: 301px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		margin-top: 40px;
		margin-left: 38px;
	}
	
	.come_login {
		width: 128px;
		height: 16px;
		font-size: 16px;
		margin-top: 46px;
		margin-left: 115px;
	}
	
	.check {
		position: absolute;
		top: 305px;
		margin-left: 40px;
		height: 18px;
		line-height: 18px;
	}
	/*底部*/
	
	.content {
		width: 470px;
		height: 167px;
	}
	/*动画*/
	
	@-webkit-keyframes pulse {
		0% {
			-webkit-transform: scale(1)
		}
		50% {
			-webkit-transform: scale(1.2)
		}
		100% {
			-webkit-transform: scale(1)
		}
	}
</style>