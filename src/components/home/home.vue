<template>
	<div class="home">
		<div class="header">
			<div class="container">
				<div class="fl">
					<router-link to="" class="logo">
						<img src="../../imgs/logo.png"/>
					</router-link>
					<span class="location">
						<i class="iconfont icon-location">南宁</i>
					</span>
				</div>
				<div class="navmenu fr">
					<ul class="item1">
						<router-link tag="li" to="/buyhouseguide">
							<i class="iconfont icon-yonghu"><span class="login">登录</span>/<span class="logout">退出</span></i>
						</router-link>
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
					<div class="search-hd">
						<span>二手房</span>
						<span>租房</span>
						<span>小区</span>
					</div>
					<div class="search-bd">
						<i class="tip iconfont icon-sanjiaoxing-up"></i>
						<input class="search-box" placeholder="请输入区域丶商圈或小区名开始找房"></input>
						<div class="search-box-btn fr">开始找房</div>
					</div>
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
								<img src="../../imgs/home/bannerV2.jpg"/>
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
		<div class="section bgColor2">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">小区</span>
					<span class="foryouselect">为你推荐</span>
					<span class="morehouse fr"><router-link tag="li" to="">更多二手好房</router-link></span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1,1]">
							<div class="image">
								<img src="../../imgs/home/bannerV2.jpg"/>
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
								<img src="../../imgs/home/bannerV2.jpg"/>
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
								<img src="../../imgs/home/bannerV2.jpg"/>
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
					<h4 class="description">锁定真实房源 哪怕市场变化</h4>
					<p>购房宝APP 提供二手房丶新居丶租房丶商业地产真实信息,</br>
					   一键委托,快速交易
					</p>
					<div class="btngroup">
						<div>Android</div>
						<div>iPhone</div>
					</div>
					<div class="QRcode">
						<div class="image">
							<img src="../../imgs/home/bottomApp.png" alt="" />
						</div>
						<div>扫一扫,关注我们</div>
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
				num: 0
			}
		},
		methods: {
			showBtn(type) {
				this.num = type;
			}
		},
		mounted: function(){

		}
		
	}
</script>

<style scoped="scoped">

.header{
	width: 100%;
	height: 717px;
	background-color: #F5F5F5;
	background-image: url(../../imgs/home/bannerV2.jpg);
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
	line-height: 32px;
	background: rgba(0,0,0,0.2);
	border-radius: 15px;
	text-align: center;
	color: #fff;
	font-size: 15px;
	vertical-align: middle;
}
.navmenu{
	position: relative;
}
.navmenu .item1{
	padding-top: 30px;
	overflow: hidden;
}
.navmenu .item1 li{
	float: right;
	margin-left: 31px;
	cursor: pointer;
	color: #FFFFFF;
	font-size: 23px;
}
.icon-yonghu,.login,.logout{
	font-size: 19 px;
	color: #FFFFFF;
}
.navmenu .item2{
	position: absolute;
	right: 0;
	width: 87px;
	background: #FFFFFF;
	margin-top: 15px;
}
.navmenu .item2 li{
	height: 33px;
	line-height: 33px;
	text-indent: 10px;
	border-bottom: 1px solid #a7a7a6;
}
.search-box-wrap{
	margin: 245px auto 0;
	width: 819px;
}
.search-box-wrap .search-hd{
	overflow: hidden;
}
.search-box-wrap .search-hd span{
	display: inline-block;
	margin-right: 50px;
	font-size: 23px;
	color: #FFFFFF;
}
.search-box-wrap .search-bd{
	margin-top: 25px;
	height: 86px;
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
}
.search-box-wrap .search-bd .search-box{
	flex: 1;
	font-size: 26px;
	text-indent: 30px;
	outline: none;
}
.search-box-wrap .search-bd .search-box-btn{
	height: 100%;
	line-height: 86px;
	background: #fe0000;
	width: 177px;
	font-size: 26px;
	color: #FFFFFF;
	text-align: center;
}


.statistics>div{
	display: flex;
	height: 208px;
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
	font-size: 35px;
	color: #595757;
}
.statistics .price+p,
.statistics .number+p{
	font-size: 20px;
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
	font-size: 36px;
	color: #010101;
}
.section .goods-hd .foryouselect{
	font-size: 36px;
	color: #595757;
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
	width: 332px;
	height: 350px;
	margin-right: 27px;
	float: left;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	box-sizing: border-box;
}
.section .goods-bd .image{
	width: 332px;
	height: 258px;
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
	margin-bottom: 10px;
	font-size: 20px;
	color: #000000;
	font-weight: bold;
}

/*购房指南*/
#purchaseGuide .goods-bd ul{
	margin-right: -60px;
}
#purchaseGuide .goods-bd li{
	width: 438px;
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
	height: 495px;
	background-color: #F5F5F5;
	background-image: url(../../imgs/home/bannerV2.jpg);
	background-repeat: no-repeat;
	background-position: center 0;
	background-size: 1920px auto;
	padding-top: 50px;
	box-sizing: border-box;
}
.advertisement .title{
	font-size: 30px;
	color: #FFFFFF;
}
.advertisement .description{
	color: #FFFFFF;
}
.advertisement .description+p{
	color: #FFFFFF;
}
.advertisement .btngroup{
	float: left;
}
.advertisement .btngroup div{
	background: #FFFFFF;
}
.advertisement .QRcode{
	float: left;
}
.QRcode .image{
	width: 152px;
	height: 152px;
}
.QRcode .image+div{
	color: #FFFFFF;
}
.QRcode .image img{
	width: 100%;
}

/*动画*/
@-webkit-keyframes pulse{
	0%{-webkit-transform:scale(1)}
	50%{-webkit-transform:scale(1.2)}
	100%{-webkit-transform:scale(1)}
}
</style>