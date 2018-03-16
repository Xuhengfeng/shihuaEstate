<template>
	<div class="home">
		<div class="header">
			<div class="container">
				<div class="topbar">
					<ul class="fr">
						<router-link tag="li" to="/home" :class="{bgBtn: num==0}" @click.native="showBtn(0)">首页</router-link>
						<router-link tag="li" to="/buyhouse" :class="{bgBtn: num==1}" @click.native="showBtn(1)">我要买房</router-link>
						<router-link tag="li" to="/renthouse" :class="{bgBtn: num==2}" @click.native="showBtn(2)">我要租房</router-link>
						<router-link tag="li" to="/sellrent" :class="{bgBtn: num==3}" @click.native="showBtn(3)">我要售/租</router-link>
						<router-link tag="li" to="/houseestate" :class="{bgBtn: num==4}" @click.native="showBtn(4)">小区</router-link>
						<router-link tag="li" to="/broker" :class="{bgBtn: num==5}" @click.native="showBtn(5)">经纪人</router-link>
						<router-link tag="li" to="/buyhouseguide" :class="{bgBtn: num==6}" @click.native="showBtn(6)">购房指南</router-link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				datas:"",
				num: 0
			}
		},
		methods: {
			showBtn(type) {
				this.num = type;
			}
		}
		
	}
</script>

<style scoped="scoped">
.bgBtn{
	background: yellow;
}
.header{
	width: 100%;
	height: 500px;
	background: green;
}
.topbar ul li{
	float: left;
	margin-right: 10px;
	cursor: pointer;
}
.topbar ul li:hover{
	color: red;
}
</style>