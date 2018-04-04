<template>
	<div class="home">
		<div class="header">
			<div class="container">
				<div class="fl">
					<router-link to="" class="logo">
						<img src="../../imgs/home/logo1.png"/>
					</router-link>
					<el-button type="text" class="location" @click.native="changeCity()">
						<i class="iconfont icon-location">南宁</i>
					</el-button>
					<div class="shadowlay" v-if="toggleShow" @click="closeCity()"></div>
					<div class="city-change " v-if="cityChange">
						<!--关闭定位阴影-->
						<span class="close"  @click="closeCity()" ></span>
						
						<div class="title">选择城市
							<span class="city-tab">
							<span class="code1">热门城市:</span>
							<router-link tag="a" to="">北京</router-link>
							<router-link tag="a" to="">上海</router-link>
							<router-link tag="a" to="">深圳</router-link>
							</span>
						</div>
						<div class="title-line"></div>
						<div class="fc-main clear">
							<div class="fl citys-l">
								<ul>
									<li class="clear">
										<span class="code-title fl">B</span>
										<div class="city-enum fl">
											<a href="">北京</a>
											<a href="" >保亭</a>
											<a href="" >保定</a>		
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">C</span>
										<div class="city-enum fl">
											<a href="">成都</a>
											<a href="" >重庆</a>
											<a href="" >长沙</a>
											<a href="">澄迈</a>
											<a href="" >承德</a>
											<a href="" >滁州</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">D</span>
										<div class="city-enum fl">
											<a href="">大连</a>
											<a href="" >东莞</a>
											<a href="" >儋州</a>
											<a href="">定安</a>
											<a href="" >大理</a>
											<a href="" >德阳</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">F</span>
										<div class="city-enum fl">
											<a href="">佛山</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">G</span>
										<div class="city-enum fl">
											<a href="">广州</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">H</span>
										<div class="city-enum fl">
											<a href="">杭州</a>
											<a href="" >惠州</a>
											<a href="" >海口</a>
											<a href="">合肥</a>
											<a href="" >衡水</a>
											<a href="" >黄冈</a>
										</div>
									</li>
									<router-link tag="li" class="clear">
										<span class="code-title fl">J</span>
										<div class="city-enum fl">
											<a href="">济南</a>
											<a href="" >嘉兴</a>
											<a href="" >晋中</a>
										</div>
									</router-link>
									<li class="clear">
										<span class="code-title fl">K</span>
										<div class="city-enum fl">
											<router-link tag="a" to="">昆明</router-link>
										</div>
									</li>
								</ul>
							</div>
							<div class="fl citys-r">
								<ul>
									<li class="clear">
										<span class="code-title fl">L</span>
										<div class="city-enum fl">
											<a href="">陵水</a>
											<a href="" >廊坊</a>
											<a href="" >临高</a>
											<a href="" >乐东</a>
											<a href=" ">龙岩</a>
											<a href="">乐山</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">M</span>
										<div class="city-enum fl">
											<a href="">眉山</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">N</span>
										<div class="city-enum fl">
											<a href="">南京</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">Q</span>
										<div class="city-enum fl">
											<a href="">青岛</a>
											<a href="">琼海</a>
											<a href="">琼中</a>
											<a href="">泉州</a>
											<a href=""> 清远</a>
											<a href="">秦皇岛</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">S</span>
										<div class="city-enum fl">
											<a href="">上海</a>
											<a href="">深圳</a>
											<a href="">苏州</a>
											<a href="">石家庄</a>
											<a href="">沈阳</a>
											<a href="">三亚</a>
											<a href="">绍兴</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">T</span>
										<div class="city-enum fl">
											<a href="">天津</a>
											<a href="">太原</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">W</span>
										<div class="city-enum fl">
											<a href="">武汉</a>
											<a href="">无锡</a>
											<a href="">文昌</a>
											<a href="">万宁</a>
											<a href="">五指山</a>
											<a href="">威海</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">X</span>
										<div class="city-enum fl">
											<a href="">厦门</a>
											<a href="">西安</a>
											<a href="">西双版纳</a>
											<a href="">咸宁</a>
											<a href="">邢台</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">Y</span>
										<div class="city-enum fl">
											<a href="https://yt.lianjia.com/" title="烟台房产网">烟台</a>
										</div>
									</li>
									<li class="clear">
										<span class="code-title fl">Z</span>
										<div class="city-enum fl">
											<a href="">中山</a>
											<a href="">珠海</a>
											<a href="">郑州</a>
											<a href="">镇江</a>
											<a href="">张家口</a>
											<a href="">漳州</a>
										</div>
									</li>
								</ul>
							</div>
						</div>			
					</div>
					</div>
				<div class="navmenu fr">
					<ul class="item1">
						<li>
							<i class="iconfont icon-yonghu" v-if="rightnow">
								<span class="login" @click="loginResize()">登录</span>/
								<span class="logout" @click="rightResize()">立即注册</span>
							</i>
							<i class="iconfont icon-yonghu" v-else><span class="login">xxxx</span>/<span class="logout">退出</span></i>
						</li>
						<!--账号密码登陆-->
						<div class="shadowlay_login" v-if="cancel" @click="cancelShadow()"></div>
							<div class="panel_login " id="dialog"  v-if="loginshow == 1"  >
								<div class="panel_info">
									<i class="close_login" @click="cancelShadow()">×</i>
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
							
							<div class="shadowlay_login"  v-if="cancel" @click="cancelShadow()"></div>
							<div class="panel_login " id="dialog" style="height: 462px;"  v-if="loginshow == 2">
								<div class="panel_info" >
									<i class="close_login"  @click="cancelShadow()">×</i>
									<div class="panel_tab">
										<div class="title">
											<div class="fl">手机号码注册</div>
										</div>
										<div class="login_input">
											<input type="text" placeholder="请输入手机号" maxlength="11">
											<div class="login_input_resgize"><input  type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
											<input type="text" placeholder="请输入密码（最少六位，数字加字母）" maxlength="11">
											<input type="text" placeholder="请再次输入密码" maxlength="11">
										</div>
										<label class="check"><input type="checkbox" style="float: left;margin-top: 4px;"></input><span>同意</span><span style="color: red;">《世华服务协议》</span></label>
											<button class="org_btn">注册</button>	
											<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="loginResize()">去登陆</span></div>
									</div>
								</div>
							</div>
							<div class="shadowlay_login"  v-if="cancel" @click="cancelShadow()"></div>
							<div class="panel_login " id="dialog"  v-if="loginshow == 3" >
								<div class="panel_info">
									<i class="close_login" @click="cancelShadow()">×</i>
									<div class="panel_tab">
										<div class="title">
											<div class="fl">手机快捷登陆</div>
										</div>
										<div class="login_input">
											<input type="text" placeholder="请输入手机号" maxlength="11">
											<div class="login_input_resgize"><input  type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
										</div>
											<button class="org_btn">修改密码</button>	
											<div class="dl_login" @click="loginResize()">账号密码登录</div>
											<div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="rightResize()">去注册</span></div>
									</div>
								</div>
							</div>
						
						<div class="shadowlay_login"  v-if="cancel" @click="cancelShadow()"></div>
							<div class="panel_login " id="dialog" style="height: 462px;" v-if="loginshow == 4" >
								<div class="panel_info" >
									<i class="close_login" @click="cancelShadow()">×</i>
									<div class="panel_tab">
										<div class="title">
											<div class="fl">找回密码</div>
										</div>
										<div class="login_input">
											<input type="text" placeholder="请输入手机号" maxlength="11">
											<div class="login_input_resgize"><input  type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
											<input type="text" placeholder="请输入手机号" maxlength="11">
											<input type="text" placeholder="请输入手机号" maxlength="11">
										</div>
											<button class="org_btn">注册</button>	
											<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="rightResize()">去注册</span></div>
									</div>
								</div>
							</div>
					
						
						
						
						<router-link tag="li" to="/buyhouseguide">购房指南</router-link>
						<router-link tag="li" to="/broker">经纪人</router-link>
						<router-link tag="li" to="/houseestate">小区</router-link>
						<router-link tag="li" to="/sellrent">我要售/租</router-link>
						<router-link tag="li" to="/renthouse">我要租房</router-link>
						<router-link tag="li" to="/buyhouse">我要买房</router-link>
						<router-link tag="li" to="/home">首页</router-link>
					</ul>
					<ul class="item2">
						<router-link tag="li" to="">消息</router-link>
						<router-link tag="li" to="">个人账户</router-link>
						<router-link tag="li" to="">预约看房</router-link>
						<router-link tag="li" to="">我的收藏</router-link>
						<router-link tag="li" to="">我的委托</router-link>
					</ul>
				</div>
				<div class="search-box-wrap">
					<div class="search-hd" >
						<span @click="zuFang(1)">二手房</span>
						<span @click="zuFang(2)">租房</span>
						<span @click="zuFang(3)">小区</span>
					</div>
					<div class="search-bd">
						<i ref="sanjiao" class="tip iconfont icon-sanjiaoxing-up"></i>
						<input class="search-box" :placeholder="souText"></input>
						<div class="search-box-btn fr">开始找房</div>
					</div>
					<router-link tag="div" to="/home/maplookhouse" class="maplookhouse">
						<i ref="sanjiao" class="tip iconfont icon-sanjiaoxing-up"></i>
						<span>地图找房</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="statistics">
			<div class="container">
				<div>
					<p class="price">5000,00 <span>元</span></p>
					<p>全市一月均价</p>
				</div>
				<div>
					<p class="number">500,000 <span>套</span></p>
					<p>世华一月份成交量</p>
				</div>
			</div>
		</div>
		<div class="section bgColor1">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">二手好房</span>
					<span class="foryouselect">为你精选</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1,1]">
							<div class="image">
								<img src="../../imgs/home/ershou.png"/>
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
		<div class="section bgColor2" id="purchaseGuide">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">小区</span>
					<span class="foryouselect">为你推荐</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1]">
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png"/>
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
		<div class="section bgColor3">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">品质租房</span>
					<span class="foryouselect">时尚生活</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1,1]">
							<div class="image">
								<img src="../../imgs/home/zufang.png"/>
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
					<span class="twohandhouse">购房指南</span>
					<span class="foryouselect">了解更多房产知识</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1]">
							<div class="image">
								<img src="../../imgs/home/goufang.png"/>
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
		data(){
			return{
				datas:"",
				num: 0,
				dialogVisible: false,
				toggleShow: false,//取消定位阴影层
				loginshow: null,//登陆注册阴影层
				rightnow:true,  //登陆注册判断条件
				cancel:false,  //取消登陆阴影
				cityChange:null, //显示地位
				souText: '请输入区域丶商圈或小区名开始找房',
			};
		},
		methods: {
			showBtn(type) {
				this.num = type;
			},
			changeCity() {  //打开城市定位
				this.toggleShow = true;
				this.cityChange = true;
			},
			closeCity() {   //关闭城市定位
				this.toggleShow = false;
				this.cityChange = false;
			},
			zuFang(num) {  //替换搜索内容
				if(num ==1) {
					this.$refs.sanjiao.style.left = '0px'; 
					this.souText = '请输入区域丶商圈或小区名开始找房';
				}else if(num ==2) {
					this.$refs.sanjiao.style.left = '120px'; 
					this.souText = '请输区名开始租房';
				}else if(num ==3) {
					this.$refs.sanjiao.style.left = '220px'; 
					this.souText = '请输入区域丶名开始找房';
				}
			},
			loginResize() {  //点击登陆
				this.cancel = true; //阴影部分
				this.loginshow = 1;  //
			},
			rightResize() {   //点击注册
				this.cancel = true;
				this.loginshow = 2;
			},
			cancelShadow() {//点击取消 阴影
				this.cancel = false
				this.loginshow = null;
				
			},
			quckliyLogin() {//点击手机快捷登陆
				this.loginshow = 3;
			},
			findPassword() { //点击找回密码
				this.loginshow = 4;
			}
		},
		mounted: function(){
			console.log(this.$refs.test)
			console.log(this.$refs)
			this.$refs.test.height='800px!important';
		}
		
	}
</script>

<style scoped="scoped">
	
/*城市切换*/
.shadowlay_login{
	position:fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0,.2);
	z-index: 1000;
}
.shadowlay{
	position:fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0,.5);
	z-index: 995;
}
.city-change {
    width: 640px;
    height: 440px;
    background: #ffffff;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    border-radius: 2px;
    position: fixed;
    z-index: 999;
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
.city-change .title .city-tab{
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
    width: 12px;
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


.header{
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
.header .logo{
	display: inline-block;
	width: 188px;
	height: 52px;
	vertical-align: middle;
}
.header .logo img{
	width: 100%;
	height: 100%;
}
.header .location{
	display: inline-block;
	width: 69px;
	height: 32px;
	line-height: 10px;
	background: rgba(0,0,0,0.2);
	border-radius: 15px;
	text-align: center;
	color: #fff;
	font-size: 15px;
	vertical-align: middle;
	margin-left: 16px;
}
.navmenu{
	position: relative;
}
.navmenu .item1{
	width: 800px;
	overflow: hidden;
}
.navmenu .item1 li{
	float: right;
	margin-left: 26px;
	cursor: pointer;
	color: #FFFFFF;
	font-size: 18px;
}
.navmenu .item1 li:hover{
	color: red;
}
.navmenu .item1 li .login:hover{
	color: red;
}
.navmenu .item1 li .logout:hover{
	color: red;
}

.icon-yonghu,.login,.logout{
	font-size: 19 px;
	color: #FFFFFF;
}
.navmenu .item2{
	position: absolute;
	right: 0;
	width: 80px;
	background: #FFFFFF;
	margin-top: 15px;
}
.navmenu .item2 li{
	height: 30px;
	line-height: 30px;
	text-indent: 10px;
	border-bottom: 1px solid #a7a7a6;
}
.search-box-wrap{
	position: relative;
	margin: 245px auto 0;
	width: 670px;
}
.search-box-wrap .search-hd{
	overflow: hidden;
}
/* 地图找房 */
.search-box-wrap .maplookhouse{
	position: absolute;
	right: -250px;
	top: 70px;
	width: 200px;
	height: 50px;
	background: red;
	z-index: 1100;
}
.search-box-wrap .search-hd span{
	display: inline-block;
	margin-right: 50px;
	font-size: 20px;
	color: #FFFFFF;
	cursor: pointer;
}
.search-box-wrap .search-bd{
	margin-top: 25px;
	height: 70px;
	background: #FFFFFF;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	text-align: center;
	position: relative;
}
.search-bd .tip{
	position: absolute;
	top: -18px;
	left: 0px;
	color: #FFFFFF;
	font-size: 26px;
	transition: all .3s ease;
}
.search-box-wrap .search-bd .search-box{
	flex: 1;
	font-size: 18px;
	text-indent: 30px;
	outline: none;
}
.search-box-wrap .search-bd .search-box-btn{
	height: 100%;
	line-height: 70px;
	background: #fe0000;
	width: 146px;
	font-size: 18px;
	color: #FFFFFF;
	text-align: center;
}


.statistics>div{
	display: flex;
	height: 248px;
	flex-flow: row nowrap;
	-webkit-justify-content: center;
	justify-content: center;
	text-align: center;
	align-items: center;
}
.statistics>div>div{
	flex: 1;
}
.statistics .price,
.statistics .number{
	font-size: 49px;
}
.statistics .price span,
.statistics .number span{
	font-size: 28px;
	color: #595757;
}
.statistics .price+p,
.statistics .number+p{
	margin-top: 22px;
	margin-right: 80px;
	font-size: 19px;
	color: #000000;
}

/*内容片段*/
.section{
	overflow: hidden;
	height: 532px;
	box-sizing: border-box;
}
.section .container{
	height: 100%;
	padding-top: 55px;
}
.section .goods-hd{
	padding-left: 10px;
}
.section .goods-hd .twohandhouse{
	font-weight: bold;
	font-size: 28px;
	color: #010101;
}
.section .goods-hd .foryouselect{
	font-size: 29px;
	color: #595757;
	margin-left: 5px;
}
.section .morehouse li{
	font-size: 20px;
	color: #717171;
	margin-top: 10px;
}
.section .goods-bd{
	margin-top: 46px;
}
.section .goods-bd ul{
	margin-right: -30px;
}
.section .goods-bd li{
	width: 272px;
	height: 305px;
	margin-right: 27px;
	float: left;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	box-sizing: border-box;
}
.section .goods-bd .image{
	width: 272px;
	height: 213px;
}
.section .image img{
	width: 100%;
	height: 100%;
	vertical-align: top;
}
.section .description{
	padding: 20px;
	height: 95px;
	overflow: hidden;
	box-sizing: border-box;
	background: #FFFFFF;
}
.section .description p:first-of-type{
	/*margin-bottom: 10px;*/
	font-size: 20px;
	color: #000000;
	font-weight: bold;
}

/*购房指南*/
#purchaseGuide .goods-bd ul{
	margin-right: -60px;
}
#purchaseGuide .goods-bd li{
	width: 358px;
	margin-right: 50px;
}
#purchaseGuide .goods-bd li .image{
	width: 100%;
	overflow: hidden;
}
#purchaseGuide .goods-bd li .image:hover img{
	animation:pulse 1s .2s ease both;
}
/*bgColor*/
.bgColor1,.bgColor3{
	background: #FFFFFF;
}
.bgColor2,.bgColor4{
	background: #e5e5e5;
}

/*ad广告*/
.advertisement{
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
.advertisement .title{
	font-size: 60px;
	color: #000000;
}
.advertisement .description{
	font-size: 29px;	
	color: #000000;
	font-family: "microsoft yahei light";
	margin-top: 5px;
}
.advertisement .description+p{
	margin-top: 5px;
	font-size: 15px;
	color: #595757;
}
.advertisement .btngroup{
	margin-top: 50px;
	float: left;
}
.advertisement .btngroup div{
	margin-top: 12px;
}
.advertisement .QRcode{
	margin-top: 30px;
	margin-left: 15px;
	float: left;
}
.QRcode .image{
	width: 135px;
	height: 132px;
}
.QRcode .image+div{
	color: #FFFFFF;
}
.QRcode .image img{
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
    box-shadow: 1px 3px 14px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 3px 14px rgba(0,0,0,0.3);
    -webkit-box-shadow: 1px 3px 14px rgba(0,0,0,0.3);
    -o-box-shadow: 1px 3px 14px rgba(0,0,0,0.3);
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
.login_input{
	margin-left: 10%;
}
.login_input>input{
	 width: 282px;
    height: 43px;
    line-height: 43px;
    color: #333333;
    padding-left: 16px; 
    margin-top: 10px;


}
.login_input_resgize{
	 width: 305px;
    height: 60px;
}
.login_input_resgize>input{
	width: 145px;
	height: 43px;
    line-height: 43px;
    color: #333333;
    padding-left: 16px; 
    margin-top: 10px;

}

.login_input_resgize>button{
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

.forget{
	position: absolute;
	left:295px ;
	color: #000000;
	font-size: 14px;
	margin-top: 10px;
	cursor: pointer;
	
	
}
.dl_login{
	position: absolute;
	left:50px ;
	color: #000000;
	font-size: 14px;
	margin-top: 10px;
	cursor: pointer;
	
	
}
.org_btn{
	background: red;
    height:50px;
    color: #fff;
    width: 301px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 40px;
    margin-left: 38px;
    
}
.come_login{
	width: 128px;
	height: 16px;
	font-size: 16px;
	margin-top: 46px;
	margin-left: 115px;
}
.check{
	position: absolute;
	top: 305px;
	margin-left: 40px;
	height: 18px;
	line-height: 18px;
	
}




/*底部*/
.content{
	width: 470px;
	height: 167px;	
}
/*动画*/
@-webkit-keyframes pulse{
	0%{-webkit-transform:scale(1)}
	50%{-webkit-transform:scale(1.2)}
	100%{-webkit-transform:scale(1)}
}

</style>