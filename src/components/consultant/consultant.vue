<template>
<div>
	<div class="header">
		<div class="container">
			<div class="logo fl">
				<img src="../../imgs/buyhouse/logored.png" />
			</div>
			<div class="searchBox fl">
				<input ref="oInput" type="text" :placeholder="placeholder" v-model="word"  @keyup.enter="query()"/>
				<div @click="query()"></div>
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
	props: {
		//地图 二手房 租房  小区 11 12 13
		houseTypeId: {
			type: Number,
			default: 11
		},
		//关键词
		keyword: {
			type: String,
			default: ''
		},
		//关键词类型 二手房 新房 租房 0 1 2
		keywordTypeId: {
			type: Number,
			default: 0
		},
		placeholder: {
			type: String,
			default: '请输入关键词进行检索',
		}
	},
	data() {
		return {
            word: '',//关键词
            num:0,
            list: [
				{name: '咨询首页', url: '/consultant/consultantindex'},//咨询首页
				{name: '买房咨询',url: '/consultant/consultantbuyhouse'},//买房咨询
				// {name: '交易过户', url: '/consultant/consultantbuyhouse'},//交易过户
                // {name: '卖房咨询',url: '/consultant/consultantbuyhouse'},//卖房咨询
                // {name: '租房咨询',url: '/consultant/consultantbuyhouse' },//租房咨询
                // {name: '其他咨询', url: '/consultant/consultantbuyhouse'},//其他咨询
			]
		}
	},
	created() {
		this.word = this.keyword;
		let path = this.$route.path;
		// console.log(path=="/mine/indexseeone")
		if(path=="/consultant/consultantindex" ){
			this.num=0
		}
		if(path=="/consultant/consultantbuyhouse" ){
			this.num=1
		}
    },
	methods: {
		query() {
			let params = {
				keyword: this.word,
				keywordTypeId: this.keywordTypeId
			}
			this.$refs.oInput.blur();
			return this.$emit('query', params);
        },
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