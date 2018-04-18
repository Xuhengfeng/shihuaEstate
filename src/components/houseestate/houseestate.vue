<template>
	<div class="houseestate">
		<o-header></o-header>
		小区
		<b-map></b-map>
		
	</div>
</template>

<script>
	import BMap  from "../../base/BMap/BMap";
	import oHeader from "../../base/header/header";
	export default {
		data() {
			return {
				datas: "",
				num: 0,
				dialogVisible: false,
				loginshow: null, //登陆注册阴影层
				rightnow: true, //登陆注册判断条件
				cancel: false, //取消登陆阴影
			};
		},
		components: {
			BMap,
			oHeader
			
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	
</style>