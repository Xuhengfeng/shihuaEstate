<template>
	<!--脚部start-->
	<footer>
		<div class="footer">
			<div class="container">
				<div class="friendship">
					<!--a站外 router-link站内-->
					<span><a href="">关于世华易居</a></span>  <span style="margin-left: 28px;">|</span>
					<span><a href="">联系我们</a></span>   <span style="margin-left: 28px;">|</span>
					<span><a href="">隐私声明</a></span>   <span style="margin-left: 28px;">|</span>
					<span><a href="">南宁小区</a></span>   <span style="margin-left: 28px;">|</span>
					<span><a href="">南宁小区联系人</a></span>
				</div>
				<div class="footer-bd">
					<div class="footer-bd-one">
						<img src="../../imgs/home/logo2.png" alt="" />
					</div>
					<div class="footer-bd-two">
						<div><img src="../../imgs/home/phone.png" style="margin-right: 10px;" /><span style="font-size: 45px;">0779-3837272</span></div>
						<div style="margin-left: 47px;">
							<p class="adress">地址:广西北海市北海大道与湖南路交界</p>
							<p class="adress">邮编:537100</p>
							<p class="adress">东旭华庭106号铺</p>
						</div>
					</div>
					<div class="footer-bd-three">
						<div>
							<div class="image">
								<img src="../../imgs/home/bigerwm.png" alt="" />
							</div>
							<div style="font-size: 16px;margin-top: 5px;">扫一扫,关注我们</div>
						</div>
						<div>
							<div class="image">
								<img src="../../imgs/home/bigerwm.png" alt="" />
							</div>
							<div style="font-size: 16px;margin-top: 5px;">扫一扫,关注我们</div>
						</div>
					</div>
				</div>
				<div class="footer-ft">
					<p >
						Copyright 2018 广西世华房地产代理公司 桂ICP 100321123
					</p>
					<p >
						联系电话: 0779-3837272 | 地址:广西北海市北海大道与湖南路交界东旭华庭106号铺
					</p>
				</div>
			</div>
		</div>
	</footer>
	<!--脚部end-->
</template>

<script>
</script>

<style>
.footer{
	width: 100%;
	height: 380px;
	background-color: #F5F5F5;
	background-image: url(../../imgs/home/di.png);
	background-repeat: no-repeat;
	background-position: center 0;
	background-size: 1920px auto;
	padding-top: 30px;
	box-sizing: border-box;
}
.footer .friendship{
	height: 23px;
	text-align: center;
	color: #FFFFFF;
	font-size: 19px;
}
.footer .friendship span a{
	margin-left: 28px;
	color: #FFFFFF;
}
.footer .footer-bd{
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	margin-top: 80px;
}

.footer-bd .footer-bd-one,
.footer-bd .footer-bd-three{
	flex: 400px 0 0;
	width:400px;
}
.footer-bd .footer-bd-two{
	flex: 1;
}
.footer-bd .footer-bd-two div:nth-of-type(1){
	color: #FFFFFF;
}
.footer-bd .footer-bd-two p{
	color: #FFFFFF;
	line-height: 1;
}
.footer-bd .footer-bd-three>div{
	float: left;
	width: 128px;
	margin-left: 44px;
}
.footer-bd .image{
	height: 126px;
}
.footer-bd .image+div{
	color: #FFFFFF;
}
.footer-bd .image img{
	width: 100%;
	height: 100%;
}
.footer-ft{
	margin-top: 25px;
	height: 47px;
	text-align: center;
}
.footer-ft p{
	margin-top: 10px;
	color: #FFFFFF;
	line-height: 1;
}
.adress{
	margin-top: 10px;
	font-size: 16px;
}
</style>