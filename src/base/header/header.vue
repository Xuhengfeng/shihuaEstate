<template>
	<div>
	<div class="navmenu">
			<div class="container">
				<ul class="item1">
					<ol class="banner_right fr">
						<li style="height: 70px;margin-top: -2px;">
							<i class="iconfont icon-yonghu" v-if="true" style="font-size: 14px;">
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
						</li>

						<li style="font-size: 14px;">热线电话0779-3837272</li>
					</ol>

					<ol class="navlist fl">
						<router-link tag="li" to="">更多
							<ul class="item2">
								<router-link tag="li" to="/houseestate">小区找房</router-link>
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
						<router-link tag="li" to="/broker">找经纪人</router-link>
						<router-link tag="li" to="">业主委托
							<ul class="item2">
								<router-link tag="li" to="/entrustmentrent">我要租房</router-link>
								<router-link tag="li" to="/entrustmentrent">我要出售</router-link>
							</ul>
						</router-link>
						<router-link tag="li" to="/sellrent">租房</router-link>
						<router-link tag="li" to="/renthouse">新房</router-link>
						<router-link tag="li" to="/buyhouse">二手房</router-link>
						<router-link tag="li" to="/home">首页</router-link>
					</ol>
				</ul>
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
						<router-link tag="li" :to="/mapSearch/+houseTypeId"  class="mapSearchHouse">地图找房</router-link>
					</ul>
				</div>
			</div>
		</div>
		<!-- 对话框 登录 注册 修改密码  -->
		<o-dialog ref="odialog" :showbox="showbox" @changeDialog="changeDialog"></o-dialog>	
	</div>	
</template>

<script>
	import oDialog from "../../base/dialog/dialog";
	export default {
		data() {
			return {
				showbox: 0,
				houseTypeId: 11
			};
		},
		components:{
			oDialog,
		},
		methods: {
			changeDialog(num) {//显示对应的对话框
				this.showbox = num; 
			},
			login() {//点击登陆
				this.showbox = 1; 
				this.$refs.odialog.show();
			},
			register() {//点击注册
				this.showbox = 2;
				this.$refs.odialog.show();
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
	.navlist{
		font-size: 16px;
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
		color: black;
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
		border: 0px;
	}
	.forget{
		position: absolute;
		left:285px ;
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
		border: 0px;
	    
	}
	.come_login{
		width: 128px;
		height: 16px;
		font-size: 16px;
		margin-top: 46px;
		margin-left: 115px;
		color: black;
	}
	.check{
		position: absolute;
		top: 305px;
		margin-left: 40px;
		height: 18px;
		line-height: 18px;
		font-size: 12px;
		color: black;
	}



</style>