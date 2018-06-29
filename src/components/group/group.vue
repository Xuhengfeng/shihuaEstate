<template>
<div>
	<div class="header">
		<div class="container">
			<div class="logo fl">
				<img src="../../imgs/buyhouse/logored.png" />
			</div>
			<!-- <div class="menu">我要咨询</div> -->
		</div>
	</div> 
    <!-- 我的 -->
        <div class="mine">
            <div class="container">
                <div>
                    <div class="side">
                        <ul>
                            <router-link :key="index" v-for="(item,index) in list" :to="item.url" @click.native="clickrouter(index)">
                                <li :class="index==num?'bgColor':''">{{item.name}}</li>
                            </router-link>
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
</div>
    
</template>

<script>
export default {
	data() {
		return {
			num:0,
            list: [
                {name: '集团简介',url: '/group/groupintourde'},//集团简介
                {name: '集团文化', url: '/group/groupculture'},//集团文化
				{name: '关于我们', url: '/group/aboutgroup'},//关于我们
			]
		}
	},
	methods: {
        clickrouter(index) {
          this.num = index;
		}
	}
}
</script>

<style lang="less" scoped>
.header {
	background-color: #F9F9F9;;
	width: 100%;
	padding: 50px 0;
	overflow: hidden;
	.searchBox{
		display:flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		margin-left: 46px;
		height: 46px;
		width: 514px;
		background: #ffffff;
		input{
			flex: 1;
			text-indent: 20px;
			outline: none;
		}
		div{
			flex: 100px 0 0;
			width: 100px;
			height: 100%;
			background: url('../../imgs/buyhouse/sousuo.png') no-repeat center center;
			cursor: pointer;
		}
	}
	.menuright {
		height: 40px;
		overflow: hidden;
		font-size: 18px;
	}
}

.mine{
	margin: 20px 0 40px;
}
.mine>div>div{
	display: flex;
	flex-flow: row nowrap;
	.side{
		flex: 187px 0 0;
		width: 187px; 
		margin-right: 30px;
		ul{
			width: 100%;
			display: block;
			li{
				text-align: center;
				height: 53px;
				line-height: 53px;
				background: #e5e5e5;
				border-bottom: 1px solid #ffffff;
				cursor: pointer;
				&:hover{
					background: red;
					color: #ffffff;
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
	color: #ffffff;
}
</style>