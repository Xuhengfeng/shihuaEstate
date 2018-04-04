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
		
  </div>
</template>

<script>
import oFooter from "./base/footer/footer";
export default {
  data() {
    return {
			isShowFooter: 0//隐藏
		};
  },
  components: {
    oFooter
	},
	watch: {
    '$route' (to, from) {
      var path = to.path;
      if (path == "/home/mapSearch") {
        sessionStorage.isShowFooter = 0;
        this.isShowFooter = 0;
      } else {
        sessionStorage.isShowFooter = 1;
        this.isShowFooter = 1;
      }
    }
	},
  mounted() {
    // this.$router.beforeEach((to, form, next) => {
    //   var path = to.path;
    //   if (path == "/home/mapSearch") {
    //     sessionStorage.isShowFooter = 0;
    //     this.isShowFooter = 0;
    //   } else {
    //     sessionStorage.isShowFooter = 1;
    //     this.isShowFooter = 1;
    //   }
    //   next();
    // });
  }
};
</script>

<style scoped="scoped">
#app {
  width: 100%;
  height: 100%;
}
</style>
