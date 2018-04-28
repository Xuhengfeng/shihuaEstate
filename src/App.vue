<template>
  <div id="app">
    <!-- 头部start -->
    <div v-if="isShowTop == 1">
			<o-top-bar></o-top-bar>
		</div>
    <!-- 头部end -->
    
    <!-- 侧边栏start -->
    <div>
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
  </div>
</template>

<script>
import oTopBar from "./base/topBar/topBar";
import oFooter from "./base/footer/footer";
import oSideBar from "./base/sideBar/sidebar";
export default {
  data() {
    return {
      isShowTop:  0, //显示1 隐藏0
      isShowFooter: 0 //显示1 隐藏0
    };
  },
  created() {
    // 初始化 state
    if(sessionStorage.logined) {
      this.$store.state.logined=true;
    }
  },
  components: {
    oTopBar,
    oSideBar,
    oFooter,
    // mySvg
  },
  watch: {
    $route(to, from) {
      var path = to.path;
      if (
        path == "/mapSearch/11" ||
        path == "/mapSearch/12" ||
        path == "/mapSearch/13"
      ) {
        this.isShowFooter = 0;
      } 
      else if(path == "/home"){
        this.isShowTop = 0;
        this.isShowFooter = 1;
      } 
      else {
        this.isShowTop = 1;        
        this.isShowFooter = 1;
      }
    }
  }
};
</script>

<style lang="less">
@import "common/css/reset.css";/*重置样式*/
@import 'common/css/base.less';/*base和iconfont样式*/
@import "common/css/variable.less";/*颜色和字体样式*/
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
