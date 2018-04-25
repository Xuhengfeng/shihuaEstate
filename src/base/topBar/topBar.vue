/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 13:08:55 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-25 22:34:57
 */
<template>
    <div class="navmenu">
        <div class="container">
            <ul class="item1">
                <ol class="banner_right fr">
                    <li style="height: 70px;margin-top: -2px;">
                        <i class="iconfont icon-yonghu" v-if="true" style="font-size: 14px;">
                            <span class="login" @click="login()">登录</span>/
                            <span class="logout" @click="register()">立即注册</span>
                        </i>
                        <i class="iconfont icon-yonghu" v-else><span class="login">xxxx</span>/<span class="logout">退出</span></i>
                        <ul class="item4">
                            <router-link tag="li" to="">消息</router-link>
                            <router-link tag="li" to="">个人账户</router-link>
                            <router-link tag="li" to="">预约看房</router-link>
                            <router-link tag="li" to="">我的收藏</router-link>
                            <router-link tag="li" to="">我的委托</router-link>
                        </ul>
                    </li>

                    <li style="font-size: 14px;">热线电话0779-3837272</li>
                </ol>

                <ol class="navlist fl">
                    <router-link tag="li" to="">更多
                        <ul class="item2">
                            <router-link tag="li" to="/houseestate">小区找房</router-link>
                            <router-link tag="li" to="">代办贷款</router-link>
                            <router-link tag="li" to="">异地服务</router-link>
                            <router-link tag="li" to="">房屋托管</router-link>
                            <router-link tag="li" to="">装修</router-link>
                            <router-link tag="li" to="">世华公益</router-link>
                            <router-link tag="li" to="">咨询</router-link>
                            <router-link tag="li" to="">购房指南</router-link>
                            <router-link tag="li" to="">行业咨询</router-link>
                        </ul>
                    </router-link>
                    <router-link tag="li" to="/buyhouseguide">旅居投资</router-link>
                    <router-link tag="li" to="/buyhouseguide">海外置业</router-link>
                    <router-link tag="li" to="/broker">找门店</router-link>
                    <router-link tag="li" to="/broker">找经纪人</router-link>
                    <router-link tag="li" to="">业主委托
                        <ul class="item2">
                            <router-link tag="li" to="/entrustmentrent">我要租房</router-link>
                            <router-link tag="li" to="/entrustmentrent">我要出售</router-link>
                        </ul>
                    </router-link>
                    <router-link tag="li" to="/sellrent">租房</router-link>
                    <router-link tag="li" to="/renthouse">新房</router-link>
                    <router-link tag="li" to="/buyhouse">二手房</router-link>
                    <router-link tag="li" to="/home">首页</router-link>
                </ol>
            </ul>
        </div>
        <!-- 对话框 登录 注册 修改密码  -->
		<o-dialog ref="odialog" :showbox="showbox" @changeDialog="changeDialog"></o-dialog>	
    </div>
</template>
<script>
import oDialog from "../../base/dialog/dialog";
export default {
    data() {
		return {
			showbox: 0,
			houseTypeId: 11
		};
	},
	methods: {
		changeDialog(num) {//显示对应的对话框
			this.showbox = num; 
		},
		login() {//点击登陆
			this.showbox = 1; 
			this.$refs.odialog.show();
		},
		register() {//点击注册
			this.showbox = 2;
			this.$refs.odialog.show();
		}
	},
    components: {
        oDialog,
    }
  
}
</script>
<style scoped>
.header {
	background-color: #F9F9F9;;
	width: 100%;
	padding: 50px 0;
	overflow: hidden;
}

.searchBox input {
	position: absolute;
	padding: 20px;
	width: 514px;
	height: 46px;
	box-sizing: border-box;
	margin-left: 46px;
}
.navmenu {
    background: #394043;
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
}
.navmenu .container {
    width: 1170px;
    margin: 0 auto;
    overflow: visible;
    height: 70px;
}

.navmenu .item1 {
    line-height: 70px;
    
}

.navmenu .item1 ol>li{
    float: right;
    margin-left: 26px;
    cursor: pointer;
    position: relative;
}
.item1>ol>li>ul{
    z-index:999;
    position: absolute;
    left: 0;
    width: 80px;
    background: #FFFFFF;
    visibility: hidden;
}
.item1>ol>li:hover ul{
    visibility: visible;
}

.item1>ol>li>ul>li{
    color: black;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-indent: 10px;
    border-bottom: 1px solid #a7a7a6;
}
.navmenu .item1 li:hover,
.navmenu .item1 li .login:hover,
.navmenu .item1 li .logout:hover{
    color: @fontColor1;
}
.navlist{
    font-size: 16px;
}
</style>
