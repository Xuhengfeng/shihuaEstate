<template>
  <div id="app">
  	<!-- 缓存组件,created只触发一次啦 -->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<!-- 设置不缓存的页面 -->
				<router-view v-if="!$route.meta.keepAlive"></router-view>
    <o-footer></o-footer>
  </div>
</template>

<script>
	import oFooter from "./base/footer/footer";
	export default {
	  components: {
	  	oFooter
	  }
	}
</script>

<style>
</style>
