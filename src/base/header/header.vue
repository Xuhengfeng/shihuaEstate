<template>
	<div>
	<div class="navmenu">
			<div class="container">
				<ul class="item1">
					<ol class="banner_right fr">
						<li style="height: 70px;margin-top: -2px;">
							<i class="iconfont icon-yonghu" v-if="rightnow" style="font-size: 14px;">
							<span class="login" @click="loginResize()">登录</span>/
							<span class="logout" @click="rightResize()">立即注册</span>
						</i>
							<i class="iconfont icon-yonghu" v-else><span class="login">xxxx</span>/<span class="logout">退出</span></i>
							<ul class="item4">
								<router-link tag="li" to="">消息</router-link>
								<router-link tag="li" to="">个人账户</router-link>
								<router-link tag="li" to="">预约看房</router-link>
								<router-link tag="li" to="">我的收藏</router-link>
								<router-link tag="li" to="">我的委托</router-link>
							</ul>
						</li>

						<li style="font-size: 14px;">热线电话0779-3837272</li>
					</ol>

					<ol class="fl">
						<router-link tag="li" to="/buyhouseguide">更多
							<ul class="item2">
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
						<router-link tag="li" to="/buyhouseguide">海外置业</router-link>
						<router-link tag="li" to="/broker">找门店</router-link>
						<router-link tag="li" to="/houseestate">业主委托
							<ul class="item2">
								<router-link tag="li" to="">我要租房</router-link>
								<router-link tag="li" to="">我要出售</router-link>
							</ul>
						</router-link>
						<router-link tag="li" to="/sellrent">租房</router-link>
						<router-link tag="li" to="/renthouse">新房</router-link>
						<router-link tag="li" to="/buyhouse">二手房</router-link>
						<router-link tag="li" to="/home">首页</router-link>
					</ol>
				</ul>
				<!--账号密码登陆-->
				<div class="shadowlay_login" v-if="cancel" @click="cancelShadow()"></div>
				<div class="panel_login " id="dialog" v-if="loginshow == 1">
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

	
				<div class="panel_login " id="dialog" style="height: 462px;" v-if="loginshow == 2">
					<div class="panel_info">
						<i class="close_login" @click="cancelShadow()">×</i>
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
						<i class="close_login" @click="cancelShadow()">×</i>
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
						<i class="close_login" @click="cancelShadow()">×</i>
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

			</div>
		</div>
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
						<li>地图找房</li>
					</ul>
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
				dialogVisible: false,
				loginshow: null, //登陆注册阴影层
				rightnow: true, //登陆注册判断条件
				cancel: false, //取消登陆阴影
			};
		},
		methods: {

			loginResize() { //点击登陆
				this.cancel = true; //阴影部分
				this.loginshow = 1; //
			},
			rightResize() { //点击注册
				this.cancel = true;
				this.loginshow = 2;
			},
			cancelShadow() { //点击取消 阴影
				this.cancel = false
				this.loginshow = null;

			},
			quckliyLogin() { //点击手机快捷登陆
				this.loginshow = 3;
			},
			findPassword() { //点击找回密码
				this.loginshow = 4;
			}
		},

	}
</script>

<style scoped="scoped">
	.shadowlay_login {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .2);
		z-index: 995;
	}
	
	.navmenu {
		background: #394043;
		font-size: 18px;
			color: #FFFFFF;
		position: relative;
	}
	
	.container {
		width: 1170px;
		margin: 0 auto;
		overflow: visible;
		height: 70px;
	}
	
	.navmenu .item1 {
		line-height: 70px;
		
	}
	
	.navmenu .item1 ol>li{
		padding-bottom: 20px;
		float: right;
		margin-left: 26px;
		cursor: pointer;
		position: relative;
		
		
	}
	.item1>ol>li>ul{
		z-index:999;
		position: absolute;
		left: 0;
		width: 80px;
		background: #FFFFFF;
		visibility: hidden;
	}
	.item1>ol>li:hover ul{
		visibility: visible;
	}
	
	.item1>ol>li>ul>li{
		color: black;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		text-indent: 10px;
		border-bottom: 1px solid #a7a7a6;
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
	
	.header {
		background-color: #F9F9F9;;
		width: 100%;
		padding: 50px 0;
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



</style>