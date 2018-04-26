/*
 * @Author: 徐横峰 
 * @Date: 2018-04-26 14:05:54 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-27 00:30:43
 */
<template>
	<!-- 我的 -->
	<div class="mine">
		<div class="container">
			<div>
				<div class="side">
					<div class="image">
						<img src="" alt="">
					</div>
					<ul>
						<li :key="index" :class="index==num?'bgColor':''" v-for="(item,index) in list" @click="routerLink(item,index)">{{item}}</li>
					</ul>
				</div>
				<div class="content">
					<!-- 缓存组件 -->
					<keep-alive>
						<router-view v-if="$route.meta.keepAlive"></router-view>
					</keep-alive>

					<!-- 设置不缓存的页面 -->
					<router-view v-if="!$route.meta.keepAlive"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			num: 0,
			list: ['账户首页','待看列表','已看记录','看房报告','我的收藏','我的委托','我的经纪人','我的咨询','消息','编辑资料']
		}
	},
	methods:{
		// 跳转子路由
		routerLink(item,index) {
			this.num = index;
			switch(index) {
				case 0:this.$router.push({path:'indexhome'});break;//账户首页
				case 1:this.$router.push({path:'indexseeone'});break;//待看列表
				case 2:this.$router.push({path:'indexseetwo'});break;//待看日程
				case 3:this.$router.push({path:'indexseethree'});break;//已看记录
				case 4:this.$router.push({path:'indexseefour'});break;//看房报告
				case 5:this.$router.push({path:'indexcollection'});break;//我的收藏
				case 6:this.$router.push({path:'indexdelegation'});break;//我的委托
				case 7:this.$router.push({path:'indexbroker'});break;//我的经纪人
				case 8:this.$router.push({path:'indexconsult'});break;//我的咨询
				case 9:this.$router.push({path:'indexmessage'});break;//消息
				case 10:this.$router.push({path:'indexeditInfo'});break;//编辑资料
			}
		}
	}
}
</script>

<style lang="less" scoped>
.mine{
	margin-top: 20px;
}
.mine>div>div{
	display: flex;
	flex-flow: row nowrap;
	.side{
		flex: 187px 0 0;
		width: 187px; 
		margin-right: 30px;
		.image{
			width: 100%;
			height: 164px;
			background: red;
			display: block;
			margin-bottom: 10px;
		}
		ul{
			width: 100%;
			display: block;
			li{
				text-align: center;
				height: 53px;
				line-height: 53px;
				background: #e5e5e5;
				border-bottom: 1px solid #ffffff;
				&:hover{
					background: red;
				}
			}
		}
	}
}
.content{
	flex: 1;
	min-height: 500px;
	overflow: hidden;
}
.bgColor{
	background: red!important;
}
</style>