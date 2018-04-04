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
						</li>

						<li style="font-size: 14px;">热线电话0779-3837272</li>
					</ol>

					<ol class="fl">
						<router-link tag="li" to="/buyhouseguide">购房指南</router-link>
						<router-link tag="li" to="/broker">经纪人</router-link>
						<router-link tag="li" to="/houseestate">小区</router-link>
						<router-link tag="li" to="/sellrent">我要售/租</router-link>
						<router-link tag="li" to="/renthouse">我要租房</router-link>
						<router-link tag="li" to="/buyhouse">我要买房</router-link>
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

				<div class="shadowlay_login" v-if="cancel" @click="cancelShadow()"></div>
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
				<div class="shadowlay_login" v-if="cancel" @click="cancelShadow()"></div>
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

				<div class="shadowlay_login" v-if="cancel" @click="cancelShadow()"></div>
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
						<li>在售</li>
						<li>成交</li>
						<li>小区</li>
						<li>地图找房</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl">位置: 区域</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>西乡塘区</li>
								<li>江南区</li>
								<li>兴宁 区</li>
								<li>良庆区区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">售价:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">面积:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">房型:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">装修:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">楼龄:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
						<li>
							<ol class="fl">朝向:</ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
								<li>清秀区</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<!--内容部分-->
		<div class="content">
			<div class="container">
				<!--右侧部分-->
				<div class="sidebar fr">
					<div class="advertisement"></div>
					<div class="advertisement" style="margin-top:  20px;"></div>
					<div class="adverTisementLine"></div>
					<div style="margin-top: 34px;"><span style="font-size: 16px;">购房指南</span><span class="fr" style="font-size: 12px;color: rgba(0,0,0,0.7);">更多</span></div>
					<ul>
						<li class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-039-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
					</ul>
					<div class="adverTisementLine"></div>
					<div style="font-size: 16px;color: color: rgba(0,0,0,0.8);margin-top: 30px;">下载世华易居APP</div>
					<div style="margin-top: 30px;"><img src="../../imgs/buyhouse/erwm.png"/></div>
				</div>
				<!--左侧内容-->
				<div class="leftContent">
					<div class="orderFilter">
						<div class="orderTag">
							<ul>
								<li class="selected"><h3><a>默认排序</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
							</ul>
						</div>
						<div class="filterAgain">
							<div class="title">筛选</div>
							<ul>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
								<li><h3><a>默认排</a></h3></li>
							</ul>
						</div>
					</div>
					<div class="resultDes">
						<h2 class="total">共找到<span> 27114 </span>套南宁二手房</h2>
					</div>
					<div class="item">
						<ul>
							<li>
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr">200万</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</li>
							<li>
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr">200万</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</li>
							<li>
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr">200万</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</li>
							<li>
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr">200万</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="fl" style="color: rgba(0,0,0,0.5);font-size: 12px;">世华易居网南宁二手房>南宁二手房</div>
					<!--分页器-->
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000"
					  class="fr">
					</el-pagination>
				</div>
			</div>
		</div>
		<!--推荐小区-->
		<div class="push">
		<div class="container">
			<div class="newHousePush">
				<div class="tilte">
					<div class="fl" style="font-weight: bold;font-size: 24px;color: rgba(1,1,1,0.8);">推荐小区</div>
					<div class="fr">更多小区</div>
				</div>
				<ul class="newHousePushContainer">
					<li>
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
					<li class="newHousePushContainer_i">
						<a href="" class="pic"><img src="../../imgs/buyhouse/tu2.png"/></a>
						<div class="newHousePushPrice">
							<div class="fl">500元/平</div>
							<div class="fr">2001建设</div>
						</div>
					</li>
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
		background: rgba(0, 0, 0, .5);
		z-index: 995;
	}
	
	.navmenu {
		background: #394043;
		font-size: 18px;
	}
	
	.container {
		width: 1170px;
		margin: 0 auto;
	}
	
	.navmenu .item1 {
		line-height: 70px;
		overflow: hidden;
	}
	
	.navmenu .item1 li {
		float: right;
		margin-left: 26px;
		cursor: pointer;
		color: #FFFFFF;
		font-size: 18px;
	}
	
	.header {
		background-color: #f5f5f6;
		width: 100%;
		padding: 50px 0;
	}
	
	.container.logo>img {
		width: 154px;
		height: 43px;
	}
	
	.menuright {
		overflow: hidden;
		font-size: 18px;
	}
	
	.menuright>li {
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
	
	.filter{
	width: 1150px;
    margin-top: 26px;
    padding: 25px 35px;
    background-color: #fbfbfb;
    box-shadow: 0 1px 2px -1px rgba(0,0,0,0.2);
    font-size: 12px;
    line-height: 1;
    position: relative;
    font-size: 14px;
		
	}
	.filter>ul>li{
		margin-top: 24px;
		display: block;
		overflow: hidden;
	}
	.filter ol li{
		margin-left: 30px;
		float: left;
	}
	.filter>ul>li:nth-of-type(1)>ol:nth-of-type(2) {
		
		margin-left: 68px;
	}
	.filter>ul>li>ol:nth-of-type(2) {
		margin-left: 100px;
	}
	
	.m-checkbox{
	 display: inline-block;
	 background-image: url(../../imgs/buyhouse/check.png);
	 width: 12px;
   	 height: 12px;
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
		font-size: 13px;
	}
	
	
	/*content部分css*/
	
	.content{
		margin-top: 26px;
	}
	.leftContent{
		overflow: hidden;
	}
	.sidebar{
		width: 180px;
		margin-left: 60px;
	}
	.content .leftContent .orderFilter .orderTag {
	    border-bottom: 2px solid red;
	    line-height: 0;
	}
	.content .leftContent .orderFilter .orderTag ul {
	    display: inline-block;
	    width: 90%;
	    line-height: 47.5px;
	}
	.content .leftContent .orderFilter .orderTag ul li.selected {
   		 background-color: red;
	}

	.content .leftContent .orderFilter .orderTag ul li {
   		 display: inline-block;
	}
	.content .leftContent .orderFilter .orderTag ul li a {
	    text-align: center;
	    line-height: 1;
	    vertical-align: middle;
	    padding: 0 25px;
	    font-size: 15px;
	    color: #394043;
	    text-decoration: none;
	}
	h1, h2, h3, h4, h5, h6 {
	    margin: 0;
	    padding: 0;
	    font-size: 100%;
	    font-weight: normal;
	}
	.content .leftContent .orderFilter .filterAgain {
	    font-size: 12px;
	    line-height: 50px;
	}
	.content .leftContent .orderFilter .filterAgain .title {
	    display: inline-block;
	    font-weight: bold;
	    color: #333333;
	}
	.content .leftContent .orderFilter .filterAgain ul {
	    display: inline-block;
	    margin-left: 15px;
	}
	.content .leftContent .orderFilter .filterAgain ul li {
	    display: inline-block;
	    margin-right: 20px;
	}
	.content .leftContent .resultDes {
	    line-height: 55px;
	}
	.content .leftContent .resultDes .total {
	    font-weight: bold;
	    font-size: 22px;
	    color: #394043;
	}
	.listContentLine{
		border-bottom: 1px solid #f1f1f1;
	}
	.introduce{
		
		margin-left: 215px;
		height: 19px;
		margin-top: 17px;
	}
	.introduce span{
		font-size: 14px;
	}
	.direciton{
		margin-left: 50px;
	}
	.introduce .word{
		vertical-align: top;
		margin-left: 10px;
		color: rgba(0,0,0,0.7);
	}
	.intrspan{
		
		width: 70px;
		display: inline-block;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.sidebar .advertisement{
		width: 180px;
		height: 180px;
		background: #ef1f1f;
	}
	.adverTisementLine{
		margin-top: 34px ;
		border: 1px solid #cccccc;
	}
	.zhinan{
		margin-top: 10px;
		font-size: 12px;
		color: rgba(0,0,0,0.9);
	}
	.zhinan_date{
		margin-top: 10px;
		font-size: 12px;
		color: rgba(0,0,0,0.5);
	}
	.item{
		margin-bottom: 80px;
		overflow: hidden;
	}
	.item ul li{
		margin-top: 60px;
	}
	
	/*推荐小区*/
	.push{
		padding: 50px;
		background: #f5f5f6;
	}
	.newHousePush{
		width: 1150px;
	}
	.newHousePush .tilte{
		overflow: hidden;
	}
	.newHousePush ul{
		margin-top: 30px;
		width: 1200px;
		overflow: hidden;
	}
	.newHousePush ul>li{
		float: left
	}
	.newHousePushContainer_i{
		margin-left: 12px;
	}
	.newHousePushContainer_i img{
		vertical-align: top;
	}
	.newHousePushPrice{
		padding: 20px;
		overflow: hidden;
		background: white;
	}
</style>