/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 18:52:11 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-08-19 14:26:42
 */
<template>
  <div id="app">
    <!-- 头部 -->
		<o-top-bar v-if="isShowTop == 1"></o-top-bar>
    <!-- 侧边栏 -->
    <o-side-bar v-if="isShowSide == 1"></o-side-bar>
   	<!-- 缓存组件,created只触发一次啦 -->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<!-- 设置不缓存的页面 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 脚步 -->
    <o-footer v-if="isShowFooter == 1"></o-footer>
    <!-- 聊天 -->
    <!-- <o-we-chat ref="oChat" @afresh="afresh"></o-we-chat> -->
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
  },
  computed: {
    //打开登录 注册对话框
    loginDialogNum() {
      return this.$store.state.loginDialogNum;
    },
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    }
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
    //监听路由
    $route(to, from) {
      let pathTo = to.path;//目的
      var a=1,b=1,c=1;
      this.layout(a,b,c);
      switch(pathTo){
          case '/':
          case '/home':  
              var a=0,b=1,c=1; 
              this.layout(a,b,c);
              break;
          case '/mapSearch':
              var a=0,b=0,c=0; 
              this.layout(a,b,c);
              break;
          case '/residence':this.$store.commit('WORDCOLOR',1);break;
          case '/forginwork':this.$store.commit('WORDCOLOR',2);break;
          case '/shoper':this.$store.commit('WORDCOLOR',3);break;
          case '/broker': this.$store.commit('WORDCOLOR',4);break;
          case '/entrustmentrent/rent': this.$store.commit('WORDCOLOR',5);break;
          case '/rentHouse':this.$store.commit('WORDCOLOR',6);break;
          case '/newHouse':this.$store.commit('WORDCOLOR',7);break;
          case '/buyHouse': this.$store.commit('WORDCOLOR',8);break;
          case '/houseestate': this.$store.commit('WORDCOLOR','a');break;
          case '/agencyBusines': this.$store.commit('WORDCOLOR','b');break;
          case '/convenienceservices': this.$store.commit('WORDCOLOR','c');break;
          case '/housetuoguan': this.$store.commit('WORDCOLOR','d');break;
          case '/decoration': this.$store.commit('WORDCOLOR','e');break;
          case '/publicgood': this.$store.commit('WORDCOLOR','f');break;
          case '/consultant': this.$store.commit('WORDCOLOR','g');break;
          case '/buyhouseguide': this.$store.commit('WORDCOLOR','h');break;
          case '/industryconsultation': this.$store.commit('WORDCOLOR','j');break;
          case '/entrustmentrent/rent': this.$store.commit('WORDCOLOR','i');break;
          case '/entrustmentrent/sell': this.$store.commit('WORDCOLOR','k');break;
      }  
    }
  },
  methods:{
    layout(a,b,c) {
      this.isShowTop = a;     
      this.isShowSide = b;   
      this.isShowFooter = c;
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
  min-height:100%;
  #app{
    color:@color-theme;
    width:100%;
    height:100%;
    font-size:@font-size-medium-x;
  }			
}
.noContent{
  color: #5e7382;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
</style>
