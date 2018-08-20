
<template>
	<!-- 我的 -->
	<div class="mine">
		<div class="container">
			<div>
				<div class="side">
					<div class="image">
						<img :src="userInfo.headImage"/>
					</div>
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
</template>
<script>
import router from "../../router";
export default {
  data() {
    return {
      refresh: false,
      num: 0,
      list: [
        { name: "账户首页", url: "/mine/indexhome" }, //账户首页
        { name: "待看列表", url: "/mine/indexseeone" }, //待看列表
        { name: "待看日程", url: "/mine/indexseetwo" }, //待看日程
        { name: "已看记录", url: "/mine/indexseethree" }, //已看记录
        { name: "看房报告", url: "/mine/indexseefour" }, //看房报告
        { name: "我的收藏", url: "/mine/indexcollection" }, //我的收藏
        { name: "我的委托", url: "/mine/indexdelegation" }, //我的委托
        { name: "我的经纪人", url: "/mine/indexbroker" }, //我的经纪人
        { name: "我的评论", url: "/mine/comment" }, //我的评论
        { name: "我的咨询", url: "/mine/indexconsult" }, //我的咨询
        { name: "消息", url: "/mine/indexmessage" }, //消息
        { name: "编辑资料", url: "/mine/indexeditInfo" } //编辑资料
      ]
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.LoginedUser;
    }
  },
  created() {
  	let path = this.$route.path;
  	if(path=="/mine/indexseeone" ){
  		this.num=1
    }
    if(path=="/mine/indexseetwo" ){
  		this.num=2
    }
    if(path=="/mine/indexseethree" ){
  		this.num=3
    }
    if(path=="/mine/indexseefour" ){
  		this.num=4
    }
  	if(path=="/mine/indexcollection" ){
  		this.num=5
  	}
  	if(path=="/mine/indexdelegation" ){
  		this.num=6
    }
    if(path=="/mine/indexbroker" ){
  		this.num=7
    }
    if(path=="/mine/comment" ){
  		this.num=8
    }
    if(path=="/mine/indexconsult" ){
  		this.num=9
    }
  	if(path=="/mine/indexmessage" ){
  		this.num=10
    }
    if(path=="/mine/indexeditInfo" ){
  		this.num=11
  	}

  },
  watch: {
    $route(to, from) {
      let path = to.path;
      if (path == "/mine/indexhome") {
        this.num = 0;
      }
      if (path == "/mine/indexseeone") {
        this.num = 1;
      }
      if (path == "/mine/indexcollection") {
        this.num = 5;
      }
      if (path == "/mine/indexdelegation") {
        this.num = 6;
      }
      if (path == "/mine/indexmessage") {
        this.num = 10;
      }
    }
  },
  methods: {
    clickrouter(index) {
      this.num = index;
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  margin: 20px 0 40px;
}
.mine > div > div {
  display: flex;
  flex-flow: row nowrap;
  .side {
    flex: 187px 0 0;
    width: 187px;
    margin-right: 30px;
    .image {
      width: 100%;
      height: 164px;
      background: url("../../imgs/home/defalut.jpg") no-repeat center center;
      background-size: cover;
      display: block;
      margin-bottom: 10px;
      color: #ffffff;
      img {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
    ul {
      width: 100%;
      display: block;
      li {
        text-align: center;
        height: 53px;
        line-height: 53px;
        background: #e5e5e5;
        border-bottom: 1px solid #ffffff;
        cursor: pointer;
        &:hover {
          background: red;
          color: #ffffff;
        }
      }
    }
  }
}
.content {
  flex: 1;
  min-height: 500px;
  overflow: hidden;
}
.bgColor {
  background: red !important;
  color: #ffffff;
}
</style>