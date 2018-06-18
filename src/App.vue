/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 18:52:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-18 16:58:08
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
    <o-we-chat ref="oChat" :history="history"></o-we-chat>

  </div>
</template>

<script>
import oTopBar from "./base/topBar/topBar";
import oFooter from "./base/footer/footer";
import oSideBar from "./base/sideBar/sidebar";
import oWeChat from "./base/weChat/weChat";
export default {
  data() {
    return {
      isShowTop:  0, //显示1 隐藏0
      isShowSide: 1, //显示1 隐藏0
      isShowFooter: 0, //显示1 隐藏0
      city: null,
      history: [],//历史漫游消息
      ownId: null,//自己的id;
    };
  },
  created() {
    //初始化
    this.$store.commit('FIRSTSTATUS');
    this._mapquerys();

    // 极光IM 全局挂载
    window.JIM = new JMessage({ debug: true });
    //用户刷新时初始化极光IM
    let isLogin = this.$store.state.logined;
    isLogin&&this.Jiguang_Init();
  },
  computed: {
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
    //用户登录
    isLogin() {
      return this.$store.state.logined;
    },
    //极光IM
    AuthJiG() {
      return this.$store.state.AuthJiG;
    }
  },
  watch: {
    //监听路由路径
    $route(to, from) {
      let path = to.path;
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
    isLogin(val) {
      //用户登录时初始化极光IM
      this.isLogin&&this.Jiguang_Init();
    }
  },
  components: {
    oTopBar,
    oSideBar,
    oFooter,
    oWeChat
  },
  methods:{
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
            this.Jiguang_userInfo();//用户信息
            this.Jiguang_syncConversation();//离线消息同步监听
            this.Jiguang_conversation();//对话列表
            this.$refs.oChat.Jiguang_onMsg();//监听消息
        })
        .onFail(data => {});
    },
    //用户获取极光IM信息
    Jiguang_userInfo() {
      JIM.getUserInfo({
        username: this.userInfo.easemobUsername,
        appkey: this.AuthJiG.appkey
      }).onSuccess(data => {
        console.log("获取用户Im信息成功：" + JSON.stringify(data));
        this.ownId = 15857009521;
      });
    },
    //用户获取极光IM会话列表
    Jiguang_conversation() {
      JIM.getConversation()
        .onSuccess(data => {
          // console.table(data);
        })
        .onFail(data => {
          // console.log("会话列表失败:" + JSON.stringify(data));
        });
    },
    //离线消息同步监听
    Jiguang_syncConversation(){
      JIM.onSyncConversation(data=> {
        //扩展属性
        data[0].msgs.forEach(item=>{
            if(item.content.from_id == this.ownId){
              item.content.val = 2;
            }else{
              item.content.val = 1;
            }
        })
        this.history = data[0].msgs;
        console.log(this.history)
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
				let newData = response.data.data;
				//初始化待看清单列表
				this.$store.commit('CHUSHIHUA', newData);
				})
    }
  }
};
</script>

<style lang="less">
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
}
</style>
