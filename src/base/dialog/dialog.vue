/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-05-17 23:08:17 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-08-21 01:43:30
 * @描述: 登录 注册 组件封装
 */
<template>
  <!-- 用户登录 、注册dialog组件 -->
  <div class="dialog">
    <transition name="bounce">
        <div class="panel_login" v-if="showFlag">
            <i class="close_login" @click.stop="cancel()">×</i>
            <div class="panel_tab" v-if="showbox == 1">
              <!-- 账号密码登录 -->
              <div class="title">账号密码登录</div>
              <div class="inputGroup">
                  <input type="text" 
                       v-model="phonenum1" 
                       placeholder="请输入手机号"
                       autocomplete="off"
                       @keyup.enter="login()"
                       maxlength="11"/>
                  <input type="password" 
                      v-model="password1" 
                      maxlength="20" 
                      autocomplete="off"
                      @keyup.enter="login()"
                      placeholder="请输入登录密码"/>
                <div class="fr fontColor" @click="jump(4)">忘记密码</div>
                <button @click="login()">登录</button>
                <div class="fl fontColor" @click="jump(3)">手机快捷登录</div>
                <div class="come_login">没有账号？<span style="color: #ff1010;cursor: pointer;" @click="jump(2)">去注册</span></div>
              </div>
            </div>
            <!-- 手机号码注册 -->
            <div class="panel_tab" v-if="showbox == 2">
              <div class="title">手机号码注册</div>
               <div class="inputGroup" >
                <input type="text" 
                      v-model="phonenum2" 
                      placeholder="请输入手机号" 
                      autocomplete="off"
                      maxlength="11"/>
                <div class="AuthCode">
                <input type="text" 
                       v-model="msgcode1" 
                       autocomplete="off"
                       placeholder="请输入验证码"/>
                       <button :class="disabled1?'sendCode':''" @click="sendMsgCode(1)">{{sendBtn1}}</button>
                </div>
                <input type="password" 
                      v-model="password2" 
                      placeholder="请输入密码（最少六位，数字加字母）" 
                      autocomplete="off"
                      maxlength="11"/>
                <input type="password" 
                      v-model="password3" 
                      placeholder="请再次输入密码" 
                      autocomplete="off"
                      maxlength="11"/>
                <div class="fontColor advantage">
							    <el-checkbox v-model="agree">同意</el-checkbox><span style="color:#ff4343;font-size:14px">《世华服务协议》</span>
                </div>
                <button @click="register()">注册</button>
                <div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="jump(1)">去登录</span></div>
              </div>
            </div>
            <!-- 手机快捷登陆 -->
            <div class="panel_tab" v-if="showbox == 3">
              <div class="title">手机快捷登陆</div>
              <div class="inputGroup" autocomplete="off">
                <input type="text"  
                      v-model="phonenum3" 
                      placeholder="请输入手机号" 
                      autocomplete="off"
                      maxlength="11"/>
                <div class="AuthCode"><input type="text" v-model="msgcode2" placeholder="请输入验证码" @keyup.enter="rapid()"><button :class="disabled2?'sendCode':''" @click="sendMsgCode(2)">{{sendBtn2}}</button></div>
                <button @click="rapid()">登录</button>
                <div class="dl_login"  @click="jump(1)">账号密码登录</div>
                <div class="come_login">没有账号？<span style="color:#ff4343;cursor:pointer;" @click="jump(2)">去注册</span></div>
              </div>
            </div>
            <!-- 找回密码 -->
            <div class="panel_tab" v-if="showbox == 4">
              <div class="title">找回密码</div>
              <div class="inputGroup" autocomplete="off">
                <input type="text" 
                      v-model="phonenum4" 
                      placeholder="请输入手机号" 
                      maxlength="11"
                      autocomplete="off"/>
                <div class="AuthCode">
                  <input type="text" 
                          v-model="msgcode3" 
                          autocomplete="off"
                          placeholder="请输入验证码"/>
                  <button :class="disabled3?'sendCode':''" @click="sendMsgCode(3)">{{sendBtn3}}</button>
                </div>
                <input type="password" 
                        v-model="password4" 
                        autocomplete="off"
                        placeholder="输入新密码(最少六位,数字加字母)"/>
                <input type="password" 
                        v-model="password5" 
                        autocomplete="off"
                        placeholder="输入新密码"/>
                            <button @click="findPassword()">确定</button>
                            <div class="come_login" style="margin-top: 15px;">已有账号？<span style="color: #ff1010;cursor: pointer;" @click="jump(2)">去注册</span></div>
              </div>
            </div>
        </div>
    </transition>
    <transition name="fade">
      <div class="shadowlay" v-if="showFlag" @click="cancel()"></div>
    </transition>
  </div>
</template>
<script>
import md5 from "js-md5";
export default {
  props: {
    showbox: {
      //对应的内容
      type: Number,
      value: ""
    }
  },
  data() {
    return {
      setpassword: 'text',//文本域
      //1去登入
      phonenum1: null, //手机号
      password1: null, //密码

      //2去注册
      phonenum2: null,
      password2: null,
      password3: null,
      msgcode1: null, //验证码

      //3点击手机快捷登录
      phonenum3: null,
      msgcode2: null,

      //4点击找回密码
      phonenum4: null,
      password4: null,
      password5: null,
      msgcode3: null,

      //状态判断
      showFlag: false,
      disabled1: false,
      disabled2: false,
      disabled3: false,
      sendBtn1:'发送验证码',//手机号码注册
      sendBtn2:'发送验证码',//手机快捷登录
      sendBtn3:'发送验证码',//忘记密码
      agree: false, //是否同意《世华服务协议》
      times: 60,//计时器
    };
  },
  methods: {
    //清空所有的文本框
    clearAllInput() {
      //登录的
      this.phonenum1 = null;
      this.password1 = null;

      //注册的
      this.phonenum2 = null;
      this.password2 = null;
      this.password3 = null;
      this.msgcode1 = null;
      this.agree = false;

      //手机快捷登录的
      this.phonenum3 = null;
      this.msgcode2 = null;

      //找回密码的
      this.phonenum4 = null;
      this.password4 = null;
      this.password5 = null;
      this.msgcode3 = null;      
    },
    //显示
    show() {
      this.showFlag = true;
    },
    //隐藏
    hide() {
      this.showFlag = false;
    },
    //关闭
    cancel() {
      this.hide();
      this.clearAllInput();
      this.$store.commit('OPENLOGINDIALOG', null);
    },
    //登录
    login() {
      console.log('111')
      this.$http
        .post(this.$url.URL.USER_LOGIN, {
          deviceCode: "web",
          mobile: this.phonenum1,
          password: this.password1
        })
        .then(res => {
          if(res.data.status == 1) {
            let code = res.data.data;
            sessionStorage.token = code;
            this.$message({message: "登录成功",type: 'success'});
            this.$store.dispatch("getUserInfo");
            this.phonenum1 = '';
            this.password1 = '';
            this.cancel();
          }else{
            this.$alert(res.data.msg);
          }
        });
    },
    //注册
    register() {
      //校验
      switch(true){
        case !this.phonenum2: return this.$alert('手机不能为空!');
        case !(/^1[34578]\d{9}$/).test(this.phonenum2): return this.$alert('手机格式不对!');
        case !this.msgcode1: return this.$alert('验证码不能为空!');
        case !this.password2,!this.password3: return this.$alert("密码不能为空!");
        case !(/^[\w]{6,12}$/).test(this.password2)||!(/^[\w]{6,12}$/).test(this.password3): return this.$alert('密码的格式为6-12位，只能是字母、数字和下划线!');
        case this.password2 !== this.password3: return this.$alert("两次密码不一致!");
        case !this.agree: return this.$alert("请同意世华服务协议,谢谢配合!");
      }
      this.$http
        .post(this.$url.URL.USER_REGISTER, {
          deviceCode: "web",
          mobile: this.phonenum2,
          password: this.password2,
          smsCode: this.msgcode1
        })
        .then(res => {
          if(res.data.status == 1) {
            this.$alert("注册成功!");
            this.jump(1);//去登入
          }else{
            this.$alert(res.data.msg);
          }
        });
    },
    //快捷登录
    rapid() {
      this.$http
        .post(this.$url.URL.SMSCODE_LOGIN, {
          deviceCode: "web",
          mobile: this.phonenum3,
          smsCode: this.msgcode2
        })
        .then(res => {
          if (res.data.status == 1) {
            sessionStorage.token = res.data.data;
            this.$message({message: "登录成功",type: 'success'});
            this.$store.dispatch("getUserInfo");
            this.cancel();
          }else{
            this.$alert(res.data.msg);
          }
        });
    },
    //找回密码 (设置密码登录)
    findPassword() {
      //校验
      switch(true){
        case !this.phonenum4: return this.$alert('手机不能为空!');
        case this.phonenum4.length!==11: return this.$alert('手机格式不对!');
        case !this.msgcode3: return this.$alert('验证码不能为空!');
        case !this.password4,!this.password5: return this.$alert("密码不能为空!");
        case !(/^[\w]{6,12}$/).test(this.password4)||!(/^[\w]{6,12}$/).test(this.password5): return this.$alert('密码的格式为6-12位，只能是字母、数字和下划线!');
        case this.password4 !== this.password5: return this.$alert("两次密码不一致!");
      }
      this.$http
        .post(this.$url.URL.SMSCODE_RESETLOGIN, {
          confirmPassword: this.password4,
          mobile: this.phonenum4,
          newPassword: this.password5,
          smsCode: this.msgcode3
        })
        .then(res => {
          if(res.status == 200) {
            this.$alert('修改成功！', {
              confirmButtonText: '确定',
              callback: () => {this.jump(1)}
            })
          }else{
            this.$alert(res.data.msg);
          }
        });
    },
    //倒计时
    countDown(num) {
      let timer;
      this.times = 60;
      timer = setInterval(()=> {
        this.times--;
        if (this.times <= 0) {
          this.times = 0; 
          clearInterval(timer);//清空定时器
          switch(num){
            case 1:this.sendBtn1='发送验证码';this.disabled1=false;break;
            case 2:this.sendBtn2='发送验证码';this.disabled2=false;break;
            case 3:this.sendBtn3='发送验证码';this.disabled3=false;break;
          }
        } else {
          switch(num){
            case 1:this.sendBtn1=this.times + 's重试';this.disabled1=true;break;
            case 2:this.sendBtn2=this.times + 's重试';this.disabled2=true;break;
            case 3:this.sendBtn3=this.times + 's重试';this.disabled3=true;break;
          }
        }
      }, 1000);
    },
    //发送验证码
    sendMsgCode(num) {
      switch(num){
        case 1:this.disabled1==false&&this.sendMsgCodeRequest(num);break;
        case 2:this.disabled2==false&&this.sendMsgCodeRequest(num);break;
        case 3:this.disabled3==false&&this.sendMsgCodeRequest(num);break;
      }
    },  
    //发送验证码请求
    sendMsgCodeRequest(num) {
      let mobile, operateType;
      switch(num) {
        case 1:mobile = this.phonenum2;operateType = "REGISTER";break;
        case 2:mobile = this.phonenum3;operateType = "LOGIN";break;
        case 3:mobile = this.phonenum4;operateType = "RESET_PASSWORD";break;
      }
      //非空校验 正则校验
      if(mobile == undefined) {
        return this.$alert('手机不能为空!');
      }else if(!(/^1[34578]\d{9}$/).test(mobile)) {
        return this.$alert('手机格式不对!');
      }

      //手机号签名
      let key = mobile + "29e94f94-8664-48f2-a4ff-7a5807e13b68";
      this.$http.post(this.$url.URL.FETCHSMSCODE, {
        deviceCode: "web",
        mobile: mobile,
        operateType: operateType,
        sign: md5(key.toUpperCase())
      })
      .then(res => {
        //成功时候开启倒计时
        res.data.status==1&&this.countDown(num);
        //不成功不开启倒计时
        res.data.status!=1&&this.$alert(res.data.msg);
      });
    },
    //弹框num 1去登入 2去注册 3点击手机快捷登录 4点击找回密码
    jump(num) {
      this.clearAllInput();//清空文本域
      this.times = 0;//清空定时器
      this.$store.commit('OPENLOGINDIALOG', num);
    }
  }
};
</script>
<style lang="less" scoped>
.shadowlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 995;
}

//登陆注册
.panel_login{
  width: 381px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  margin-left: -190px;
  margin-top: -205px;
  box-shadow: 1px 3px 14px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  padding: 40px 0 40px;
    transition: top ease-in .5s;
}
.panel_login .close_login{
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 4px;
  color: #000000;
}
.panel_login .panel_tab .title {
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}
.inputGroup {
  width: 282px;
  margin: 0 auto;
}
.inputGroup input {
  height: 43px;
  width: 100%;
  line-height: 43px;
  color: #000000;
  text-indent: 16px;
  margin-top: 10px;
  border-radius: 3px;
  border: 1px solid #999999;
  transition: border-color ease-in-out .3s,box-shadow ease-in-out .3s;
}
input:focus{
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
}
.inputGroup button {
  width: 100%;
  background: #ff4343;
  height: 45px;
  line-height: 43px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  border: 0px;
  margin-top: 10px;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #cacaca;
  font-size: 15px;
}

.AuthCode > input {
  width: 160px;
  height: 43px;
  line-height: 43px;
  color: #333333;
  margin-top: 10px;
}

.AuthCode > button {
  float: right;
  background: #ff4343;
  width: 108px;
  height: 45px;
  line-height: 43px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  border: 0px;
  margin-top: 10px;
}

.dl_login {
  position: absolute;
  left: 50px;
  color: #000000;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
}
.come_login {
  height: 16px;
  font-size: 16px;
  margin-top: 46px;
  text-align: center;
  color: #000000;
}
.fontColor {
  margin-top: 10px;
  color: #000000;
  cursor: pointer;
}

// 发送验证码
.sendCode{
  background: rgba(0, 0, 0, 0.3)!important;
}

//阴影层动画
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

//注册和登录弹框动画
.bounce-enter-active{
  animation: bounce-in .5s;
}
.bounce-leave-active{
  // animation: bounce-out .5s;
}
@keyframes bounce-in {
  0%{transform: scale(0)}
  95%{transform: scale(1.05)}
  100%{transform: scale(1)}
}
@keyframes bounce-out {
  0%{transform: scale(1)}
  100%{transform: scale(0);opacity:0}
}

</style>


