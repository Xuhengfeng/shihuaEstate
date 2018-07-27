/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 18:52:11 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-07-05 15:18:19
 */
<template>
  <div id="app">
    <!-- 头部start -->
    <div v-if="isShowTop == 1">
			<o-top-bar></o-top-bar>
		</div>
    <!-- 头部end -->
    
    <!-- 侧边栏start -->
    <div v-if="isShowSide == 1">
      <o-side-bar></o-side-bar>
    </div>
    <!-- 侧边栏end -->

   	<!-- 缓存组件,created只触发一次啦 -->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>

		<!-- 设置不缓存的页面 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>

    <!-- 脚步start -->
		<div v-if="isShowFooter == 1">
			<o-footer></o-footer>
		</div>
    <!-- 脚步end -->

    <!-- 聊天 -->
    <o-we-chat ref="oChat" @afresh="afresh"></o-we-chat>

    <!-- 对话框 登录 注册 修改密码  -->
		<o-dialog ref="odialog" :showbox="loginDialogNum"></o-dialog>	
  </div>
</template>

<script>
import oTopBar from "./base/topBar/topBar";
import oFooter from "./base/footer/footer";
import oSideBar from "./base/sideBar/sidebar";
import oWeChat from "./base/weChat/weChat";
import oDialog from "./base/dialog/dialog";
import "../static/js/jmessage-sdk-web.2.6.0.min.js";

export default {
  data() {
    return {
      isShowTop:  0, //显示1 隐藏0
      isShowSide: 1, //显示1 隐藏0
      isShowFooter: 0, //显示1 隐藏0
      city: null
    };
  },
  components: {
    oTopBar,
    oSideBar,
    oFooter,
    oWeChat,
    oDialog
  },
  created() {
    //初始化vuex
    this.$store.commit('FIRSTSTATUS');
    // this._mapquerys();

    //极光IM 全局挂载 刷新
    window.JIM = new JMessage({debug: false});
    this.isLogin&&this.afresh();
  },
  computed: {
    //打开登录 注册对话框
    loginDialogNum() {
      return this.$store.state.loginDialogNum;
    },
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
    //极光IM
    AuthJiG() {
      return this.$store.state.AuthJiG;
    },
    //是否登录
    isLogin() {
      return this.$store.state.logined;
    },
    	// num() {
      //       return this.$store.state.wordcolor;
  	  // },
  },
  watch: {
    //打开登录 注册对话框
    loginDialogNum() {
      if(this.loginDialogNum==null){
        this.$refs.odialog.hide();  
      }else{
        this.$refs.odialog.show();
      }
    },
    //监听路由路径
    $route(to, from) {
      let path = to.path;
      console.log(path)
      if(path == "/residence"){
        this.$store.commit('WORDCOLOR',1);
      }
      if(path == "/forginwork"){
        this.$store.commit('WORDCOLOR',2);
      }
      if(path == "/shoper"){
        this.$store.commit('WORDCOLOR',3);
      }
      if(path == "/broker"){
        this.$store.commit('WORDCOLOR',4);
      }
      if(path == "/entrustmentrent/rent"){
        this.$store.commit('WORDCOLOR',5);
      }
       if(path == "/rentHouse"){
        this.$store.commit('WORDCOLOR',6);
      }
      if(path == "/newHouse"){
        this.$store.commit('WORDCOLOR',7);
      }
      if(path == "/buyHouse"){
        this.$store.commit('WORDCOLOR',8);
      }
      if(path == "/houseestate"){
        this.$store.commit('WORDCOLOR','a');
      }
      if(path == "/agencyBusiness"){
        this.$store.commit('WORDCOLOR','b');
      }

      if(path == "/convenienceservices"){
          this.$store.commit('WORDCOLOR','c');
       }

      if(path == "/housetuoguan"){
         this.$store.commit('WORDCOLOR','d');
        }

      if(path == "/decoration"){
          this.$store.commit('WORDCOLOR','e');
        }

      if(path == "/publicgood"){
         this.$store.commit('WORDCOLOR','f');
        }
        if(path == "/consultant"){
         this.$store.commit('WORDCOLOR','g');
        }

        if(path == "/buyhouseguide"){
         this.$store.commit('WORDCOLOR','h');
        }

        if(path == "/industryconsultation"){
         this.$store.commit('WORDCOLOR','j');
        }
         if(path == "/entrustmentrent/rent"){
         this.$store.commit('WORDCOLOR','i');
        }
         if(path == "/entrustmentrent/sell"){
         this.$store.commit('WORDCOLOR','k');
        }
        //  if(path == "/mine"){
        //  this.$store.commit('WORDCOLOR','o');
        // }
        //  if(path == "/mine/indexseeone"){
        //  this.$store.commit('WORDCOLOR','p');
        // }
        // if(path == "/mine/indexcollection"){
        //  this.$store.commit('WORDCOLOR','q');
        // }
        // if(path == "/mine/indexdelegation"){
        //  this.$store.commit('WORDCOLOR','r');
        // }
        //  if(path == "/mine/indexmessage"){
        //  this.$store.commit('WORDCOLOR','s');
        // }
        




      // if(path == "/indexcollection"){
      //   this.$store.commit('wordcolor',5);
      // }
      //  if(path == "/indexseeone"){
      //   this.$store.commit('WORDCOLOR',1);
      // }
      //   if(path == "/indexseeone"){
      //   this.$store.commit('WORDCOLOR',1);
      // }
      //   if(path == "/indexseeone"){
      //   this.$store.commit('WORDCOLOR',1);
      // }
      if (path == "/mapSearch") {
        this.isShowTop = 0;
        this.isShowFooter = 0;
        this.isShowSide = 0;
      } 
      else if(path == "/home"||path == "/"){
        this.isShowTop = 0;
        this.isShowSide = 1;   
        this.isShowFooter = 1;
      } 
      else {
        this.isShowTop = 1;     
        this.isShowSide = 1;   
        this.isShowFooter = 1;
      }
    },
    //是否登录
    isLogin() {
      this.isLogin&&this.afresh();
    }
  },
  methods:{
    //聊天掉线重新用户登录 
    afresh() {
      this.$store.dispatch('getUserInfo');
      //重新初始化IM
      this.Jiguang_Init();
    },
    //初始化极光IM
    Jiguang_Init() {
      let that = this;
        JIM.init({
            appkey: this.AuthJiG.appkey,
            random_str: this.AuthJiG.random_str,
            signature: this.AuthJiG.signature,
            timestamp: this.AuthJiG.timestamp,
            flag: 1,
        })
        .onSuccess(data => {
            that.Jiguang_login();//极光登录
        })
        .onFail(error => {});
    },
    //极光登录
    Jiguang_login() {
      JIM.login({
        username: this.userInfo.easemobUsername,
            password: this.userInfo.easemobPassword
        })
        .onSuccess(data => {
            this.Jiguang_onDisconnect();//监听是否在线
            this.Jiguang_userInfo();//用户信息
            this.Jiguang_conversation();//这里首次会话列表
            this.Jiguang_syncConversation();//这里首次同步监听离线消息
            this.$refs.oChat.Jiguang_onMsg();//监听消息
        })
        .onFail(data => {});
    },
    //监听是否在线
    Jiguang_onDisconnect() {
      JIM.onDisconnect(res=>{
        this.afresh();
      })
    },   
    //获取极光IM信息
    Jiguang_userInfo() {
      JIM.getUserInfo({
        username: this.userInfo.easemobUsername,
        appkey: this.AuthJiG.appkey
      }).onSuccess(data => {
        //console.log("获取用户Im信息成功：" + JSON.stringify(data));
      });
    },
    //获取极光IM会话列表
    Jiguang_conversation() {
      JIM.getConversation()
      .onSuccess(data => {
        this.$store.commit('FIREND', data.conversations);
      })
      .onFail(data => {});
    },
    //离线消息同步监听
    Jiguang_syncConversation(){
      JIM.onSyncConversation(data=> {
        //缓存历史漫游消息
        this.$store.commit('HISTORY', data);
      });
    },
    _mapquerys(){
      this.$http.get(this.$url.URL.DEFAULT_CITY)
				.then((response)=>{
          localStorage.selectCity = JSON.stringify(response.data.data);
          this._appinthouse();
				})
    },
    _appinthouse() {
      this.$http.get(this.$url.URL.APPOINT_DETAILLIST +"?pageNo="+1,{
					scity: JSON.parse(localStorage.selectCity),//用户选定城市
				})
				.then(response =>{
          //初始化待看清单列表
          this.$store.commit('CHUSHIHUA', response.data.data);
				})
    }
  }
};
</script>

<style lang="less">
// 全局样式
@import "../static/css/reset.css";/*重置样式*/
@import "../static/css/iconfont.css";/*字体图标*/
@import 'common/css/base.less';/*base样式*/
@import "common/css/variable.less";/*颜色和字体样式*/
@import "common/css/resetElement.less";/*重置element样式*/
html,body{
  width:100%;
  height:100%;
  #app{
    color:@color-theme;
    width:100%;
    height:100%;
    font-size:@font-size-medium-x;
  }			
  .noContent{
    color: #5e7382;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
}
</style>
