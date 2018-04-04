<template>
	<div class="houseestate">
		小区
		<b-map></b-map>
	</div>
</template>

<script>
	import BMap  from "../../base/BMap/BMap";
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
			BMap
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	
</style>