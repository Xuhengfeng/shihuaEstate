/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 13:08:55 
 * @Last Modified time: 2018-06-14 00:21:39
 */
<template>
    <div class="topBar">
        <div class="container navmenu">
            <div class="one fr">
                <div v-if="!isLogin">
                    <i class="iconfont xhf-icon-yonghu"></i>
                    <span class="login" @click="login()">登录</span> 
                    <span>/</span>
                    <span class="register" @click="register()">立即注册</span>
                </div>
                <div v-else>
                    <img class="headImage" :src="userInfo.headImage?userInfo.headImage:'../../imgs/home/avatar.png'">
                    <router-link tag="span" to="/mine">{{userInfo.nickname}}</router-link>
                    <span>/</span> 
                    <span class="logout"  @click="logout()">退出</span>
                    <ul>
                        <router-link tag="li" to="/mine">个人账户</router-link>
                        <router-link tag="li" to="/mine/indexseeone">预约看房</router-link>
                        <router-link tag="li" to="/mine/indexcollection">我的收藏</router-link>
                        <router-link tag="li" to="/mine/indexdelegation">我的委托</router-link>
                         <router-link tag="li" to="/mine/indexmessage">消息</router-link>
                    </ul>
                </div>
                <div>热线电话0779-3837272</div>
            </div>

            <ul class="two fl">
                <router-link tag="li" to="">更多
                    <ol class="item2">
                        <router-link tag="li" to="/houseestate" :class="wordColor=='a'?'bgColor':''">小区找房</router-link>
                        <router-link tag="li" to="/agencyBusiness" :class="wordColor=='b'?'bgColor':''">代办业务</router-link>
                        <router-link tag="li" to="/convenienceservices" :class="wordColor=='c'?'bgColor':''">便民服务</router-link>
                        <router-link tag="li" to="/housetuoguan" :class="wordColor=='d'?'bgColor':''">房屋托管</router-link>
                        <router-link tag="li" to="/decoration" :class="wordColor=='e'?'bgColor':''">装修</router-link>
                        <router-link tag="li" to="/publicgood" :class="wordColor=='f'?'bgColor':''">世华公益</router-link>
                        <router-link tag="li" to="/consultant" :class="wordColor=='g'?'bgColor':''">咨询</router-link>
                        <router-link tag="li" to="/buyhouseguide" :class="wordColor=='h'?'bgColor':''">购房指南</router-link>
                        <router-link tag="li" to="/industryconsultation" :class="wordColor=='j'?'bgColor':''">行业资讯</router-link>
                    </ol>
                </router-link>
                <router-link tag="li" to="/residence" :class="wordColor==1?'bgColor':''">旅居投资</router-link>
                <router-link tag="li" to="/forginwork" :class="wordColor==2?'bgColor':''">海外置业</router-link>
                <router-link tag="li" to="/shoper" :class="wordColor==3?'bgColor':''">找门店</router-link>
                <router-link tag="li" to="/broker" :class="wordColor==4?'bgColor':''">找经纪人</router-link>
                <router-link tag="li" to="" :class="wordColor==5?'bgColor':''">业主委托
                    <ol class="item2">
                        <router-link tag="li" to="/entrustmentrent/rent" :class="wordColor=='i'?'bgColor':''">我要租房</router-link>
						<router-link tag="li" to="/entrustmentrent/sell" :class="wordColor=='k'?'bgColor':''">我要出售</router-link>
                    </ol>
                </router-link>
                <router-link tag="li" to="/rentHouse" :class="wordColor==6?'bgColor':''">租房</router-link>
                <router-link tag="li" to="/newHouse" :class="wordColor==7?'bgColor':''">新房</router-link>
                <router-link tag="li" to="/buyHouse"  :class="wordColor==8?'bgColor':''">二手房</router-link>
                <router-link tag="li" to="/home">首页</router-link>
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
            houseTypeId: 11,
		};
    },
    computed: {
        isLogin() {
            return this.$store.state.logined;
        },
        userInfo() {
            return this.$store.state.LoginedUser;
        },
        wordColor() {
            return this.$store.state.wordcolor;
        },
    },
	methods: {
		changeDialog(num) {//显示对应的对话框
			this.showbox = num; 
		},
		login() {//登陆
			this.showbox = 1; 
			this.$refs.odialog.show();
		},
		register() {//注册
			this.showbox = 2;
			this.$refs.odialog.show();
        },
        logout() {//退出
            this.$store.dispatch('logout');
        }
    },
    mounted() {
        // $('.two>li').click(function() {
        //     console.log(this)
        // $(this).addClass('fontColor').siblings().removeClass('fontColor');
        // })
    },
    components: {
        oDialog
    }
  
}
</script>
<style lang="less" scoped>

.topBar{
    background: #394043;
    height: 70px;
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
}
.navmenu{
    overflow: visible!important;
    .one{
        line-height: 70px;
        position: relative;
        font-size: 16px;
        >div:nth-of-type(1){
            position: relative;
            float: right;
            text-align: right;
            width: 190px;
            &:hover ul{
                visibility: visible;
                li:hover{ color: #ff4343}
            }
            ul{
                position: absolute;
                right: 20px;
                top: 70px;
                width: 80px;
                z-index:999;
                background: #FFFFFF;
                visibility: hidden;
                >li{
                    color: black;
                    font-size: 14px;
                    height: 30px;
                    line-height: 30px;
                    text-align: left;
                    text-indent: 10px;
                    border-bottom: 1px solid #a7a7a6;
                    cursor: pointer;
                }
            }
        }
        >div:nth-of-type(2){
            float: right;
        }
    }
    .two{
        line-height: 70px;
        >li{
            position: relative;
            float: right;
            margin-right: 26px;
            cursor: pointer;
            ol{
                position: absolute;
                left: 0;
                top: 70px;
                width: 80px;
                z-index:999;
                background: #FFFFFF;
                visibility: hidden;
                >li{
                    color: black;
                    font-size: 14px;
                    height: 30px;
                    line-height: 30px;
                    text-indent: 10px;
                    border-bottom: 1px solid #a7a7a6;
                    cursor: pointer;
                }
            }
            &:hover{
                color: #ff4343;
                ol{
                    visibility: visible;
                    li:hover{color: #ff4343}
                }
            }

        }
    }
}
.fontColor{
    color: #ff4343!important;
}
/* 登录/退出 */
.navmenu .login:hover,
.navmenu .register:hover,
.navmenu .logout:hover{
    color: #ff4343;
    cursor: pointer;    
}
.icon-yonghu,
.login,
.logout {
	font-size: 19 px;
    color: #FFFFFF;
    cursor: pointer;
}
.headImage{
    position: absolute;
	width: 25px;
	height: 25px;
	border-radius: 50%;
    overflow: hidden;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
}
.bgColor{
   color: #ff4343!important;
}
// .bgColor1{
//     background: #ff4343;
// }


</style>
