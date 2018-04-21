<template>
  <div>
     <o-header></o-header>
  </div>
</template>
<script>
	import oHeader from "../../base/header/header";
	export default {
		data() {
			return {
				// list:["默认排序", "最新", "总价", "房屋单价", "面积"],
				// listnine:["随时看房", "新上", "满五年", "世华独家"],
				datas: "",
				num: 0,
				showBtn: false,
				showBtnone:false,
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
			},
		}, 
		components: {
			oHeader
			
		},

    }
</Script>
