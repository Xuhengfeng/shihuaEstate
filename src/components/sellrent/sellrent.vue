<template>
	<div>
		<o-header></o-header>
		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl quyu">位置:  <span style="color: rgba(239,31,31,0.85);">区域</span></ol>
							<ol class="fl">
								<li>清秀区</li>
								<li>西乡塘区</li>
								<li>江南区</li>
								<li>兴宁 区</li>
								<li>良庆区区</li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">售价:  <span style="color: rgba(239,31,31,0.85);">全部</span></ol>
							<ol class="fl quyu_kind">
								<li>50万以下</li>
								<li>50-100万</li>
								<li>100-150万</li>
								<li>150-200万</li>
								<li>200万以上</li>
								<li><input type="text"/><span>-</span><input type="text" /> <span>万</span></li>
							</ol>
						</li>
						<li>
							<ol class="fl quyu">房型:  <span style="color: rgba(239,31,31,0.85);">全部</span> </ol>
							<ol class="fl quyu_kind">
								<li>一室</li>
								<li>二室</li>
								<li>三室</li>
								<li>四室</li>
								<li>五室</li>
								<li>五室以上 </li>
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
					<!--<div class="advertisement"></div>
					<div class="advertisement" style="margin-top:  20px;"></div>-->
				<!--	<div class="adverTisementLine"></div>-->
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
								<li><h3><a>最新</a></h3></li>
								<li><h3><a>总价</a></h3></li>
								<li><h3><a>房屋单价</a></h3></li>
								<li><h3><a>面积</a></h3></li>
							</ul>
						</div>
						<div class="filterAgain">
							<div class="title">筛选</div>
							<ul>
								<li><h3><a>随时看房</a></h3></li>
								<li><h3><a>新上</a></h3></li>
								<li><h3><a>满五年</a></h3></li>
								<li><h3><a>世华独家</a></h3></li>
							</ul>
						</div>
					</div>
					<div class="resultDes">
						<h2 class="total">共找到<span style="color: red;"> 27114 </span>套南宁二手房</h2>
					</div>
					<div class="item">
						<ul>
							<router-link tag="li" to="/buyhouse/twohandhousedetail/:id">
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr"style="font-size: 16px;color: ">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">200<sapn style="font-size: 14px;">万</sapn></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</router-link>
							<router-link tag="li" to="/buyhouse/twohandhousedetail/:id">
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr" style="font-size: 16px;">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">200<sapn style="font-size: 14px;">万</sapn></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</router-link>
							<router-link tag="li" to="/buyhouse/twohandhousedetail/:id">
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr"style="font-size: 16px;">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">200<sapn style="font-size: 14px;">万</sapn></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</router-link>
							<router-link tag="li" to="/buyhouse/twohandhousedetail/:id">
								<div class="image fl">
									<img src="../../imgs/buyhouse/tu1.png" alt="" />
								</div>
								<div class="direciton">
									<div class="introduce" style="font-size: 22px;color: rgba(0,0,0,0.85);font-weight: bold;">西乡塘区大学路片区 梵谷水郡 两居室 满五唯一 <span class="fr"style="font-size: 16px;">收藏</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" /><span class="word">森雅谷润筑园|2室2厅|90平|东北朝向|精装</span> <span class="fr" style="font-size: 24px;color: rgba(239,31,31,0.85);">200<sapn style="font-size: 14px;">万</sapn></span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" /><span class="word">中楼层(共30层)2010年搭建-大运新城</span><span class="fr">单价120000元/平米</span></div>
									<div class="introduce"><img src="../../imgs/buyhouse/guangzhu.png" /><span class="word">519人关注/共119次带看/一个月内发布</span></div>
									<div class="introduce ">
										<span class="intrspan" style="background-color: #e5f2ff;color: rgba(0,85,164,0.85); ">学区房</span>
										<span class="intrspan"  style="background-color: #fde8e8;color: rgba(239,31,31,0.85);margin-left: 10px;">地铁旁边</span>
										<span class="intrspan"  style="background-color: #e6f4eb;color: rgba(5,149,63,0.85);margin-left: 10px;">随时看房</span>
									</div>
								</div>
							</router-link>
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
		<!--<div class="push">
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
		</div>-->
	</div>
</template>

<script>
	import oHeader from "../../base/header/header";
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
		components: {
			oHeader
			
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
		line-height: 24px;
	}
	.filter ol li{
		margin-left: 30px;
		float: left;
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
	.quyu{
		font-size: 14px;
		font-weight: bold;
	}
	.quyu_kind{
		font-size: 12px;
	}
	.quyu_kind>li>input{
		height: 20px;
		width: 37px;
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
		margin-top: -20px;
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
	    font-size: 14px;
	    font-weight: bold;
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
		cursor: pointer;
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