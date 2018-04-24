<template>
  <div class="dialog">
       <!-- 用户登入start -->
		<div class="panel_login " id="dialog"  v-if="showbox">
			<div class="panel_info">
				<i class="close_login" @click="cancel()">×</i>
				<div class="panel_tab" v-if="showbox == 1">
					<div class="title">
						<div class="fl">账号密码登录</div>
					</div>
					<div class="login_input">
						<input type="text" v-model="phonenum" placeholder="请输入手机号" maxlength="11">
						<input type="password" v-model="password" placeholder="请输入登录密码" maxlength="20">
					</div>
					<div class="forget" @click="findPassword()">忘记密码</div>
					<button class="org_btn" @click="loginRequest()">登录</button>
					<div class="dl_login" @click="quckliyLogin()">手机快捷登录</div>
					<div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="register()">去注册</span></div>
				</div>
				
				<div class="panel_tab" v-if="showbox == 2">
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
					<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="login()">去登陆</span></div>
				</div>

				<div class="panel_tab" v-if="showbox == 3">
					<div class="title">
						<div class="fl">手机快捷登陆</div>
					</div>
					<div class="login_input">
						<input type="text" placeholder="请输入手机号" maxlength="11">
						<div class="login_input_resgize"><input type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
					</div>
					<button class="org_btn">修改密码</button>
					<div class="dl_login" @click="login()">账号密码登录</div>
					<div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="register()">去注册</span></div>
				</div>

				<div class="panel_tab" v-if="showbox == 4">
					<div class="title">
						<div class="fl">找回密码</div>
					</div>
					<div class="login_input">
						<input type="text" placeholder="请输入手机号" maxlength="11">
						<div class="login_input_resgize"><input type="text" placeholder="请输入验证码"><button>获取验证码</button></div>
						<input type="text" placeholder="请输入密码(最少六位,数字加字母)" maxlength="11">
						<input type="text" placeholder="再次输入密码" maxlength="11">
					</div>
					<button class="org_btn">注册</button>
					<div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="register()">去注册</span></div>
				</div>
			</div>
		</div>
		<!-- 用户登入end -->
        <div class="shadowlay" v-if="showbox" @click="cancel()"></div>
  </div>
</template>
<script>
    export default {
        props: {
            toggleShow: {
                type: Boolean,
                value: false
            },
            showbox: {
                type: Number,
                value: ""
            }
        },
        data() {
            return {
                showbox: 1,
                phonenum: null,//手机号
				password: null,//密码
            }
        },
        methods: {
            cancel() {
                this.showbox = null;
            },
            
			loginRequest() {//登录请求
				this.$http.post(this.$url.URL.USER_LOGIN,{
					"deviceCode": "web",
					"mobile": this.phonenum,
					"password": this.password
				})
				.then((res)=>{
					this.cancelshadow();
					if(res.data.status=='500') {
						this.$alert(res.data.msg);
					}
				});
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
			}
        }
    }
</script>
<style scope="scope">
	.shadowlay {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .5);
		z-index: 995;
	}
	
	/*登陆注册*/
	.panel_login {
		width: 381px;
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
		padding: 40px 0 20px;
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
		color: #000000;
		padding-left: 16px;
		margin-top: 10px;
		border-radius:3px;
		border: 1px solid #999999;
	}
	input::-webkit-input-placeholder{
		color: #cacaca;
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
		border: 0px;
	}
	
	.forget {
		position: absolute;
		left: 285px;
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
		border: 0px;
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
	
</style>


