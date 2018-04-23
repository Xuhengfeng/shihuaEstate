<template>
  <div id="app">
  	<!-- 缓存组件,created只触发一次啦 -->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>

		<!-- 设置不缓存的页面 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<div v-if="isShowFooter == 1">
			<o-footer></o-footer>
		</div>
		<!-- <my-svg></my-svg> -->
  </div>
</template>

<script>
import oFooter from "./base/footer/footer";
// import mySvg from "./base/mySvg/mySvg";
export default {
  data() {
    return {
      isShowFooter: 0 //隐藏
    };
  },
  components: {
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
        sessionStorage.isShowFooter = 0;
        this.isShowFooter = 0;
      } else {
        sessionStorage.isShowFooter = 1;
        this.isShowFooter = 1;
      }
    }
  }
};
</script>

<style scoped="scoped">
#app {
  width: 100%;
  height: 100%;
}
</style>
