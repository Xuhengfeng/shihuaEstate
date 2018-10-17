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
                <li>更多
                    <ol class="item2">
                        <!-- 外链 -->
                        <li><a :href='"http://shyj.cn/custAppApi/buildController/estate?scity="+pinyinCity' :class="wordColor=='a'?'bgColor':''" style="color:#000">小区找房</a></li>
                        <router-link tag="li" to="/agencyBusiness" :class="wordColor=='b'?'bgColor':''">代办业务</router-link>
                        <router-link tag="li" to="/convenienceservices" :class="wordColor=='c'?'bgColor':''">便民服务</router-link>
                        <router-link tag="li" to="/housetuoguan" :class="wordColor=='d'?'bgColor':''">房屋托管</router-link>
                        <router-link tag="li" to="/decoration" :class="wordColor=='e'?'bgColor':''">装修</router-link>
                        <router-link tag="li" to="/publicgood" :class="wordColor=='f'?'bgColor':''">世华公益</router-link>
                        <router-link tag="li" to="/consultant" :class="wordColor=='g'?'bgColor':''">咨询</router-link>
                        <router-link tag="li" to="/buyhouseguide" :class="wordColor=='h'?'bgColor':''">购房指南</router-link>
                        <router-link tag="li" to="/industryconsultation" :class="wordColor=='j'?'bgColor':''">行业资讯</router-link>
                    </ol>
                </li>
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
                <!-- 外链 -->
                <li><a :href='"http://shyj.cn/custAppApi/house_r/renthouse?scity="+pinyinCity' :class="wordColor==6?'bgColor':''">租房</a></li>
                <router-link tag="li" to="/newHouse" :class="wordColor==7?'bgColor':''">新房</router-link>
                <li><a :href='"http://shyj.cn/custAppApi/house_c/twohouse?scity="+pinyinCity' :class="wordColor==8?'bgColor':''">二手房</a></li>
                <li><a :href="'http://shyj.cn/custAppApi/index/'+pinyinCity">首页</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
		return {
			showbox: 0,
            houseTypeId: 11,
            pinyinCity: 'beihai',//城市拼音
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
        }
    },
    created() {
        var pinyinCity = JSON.parse(localStorage.selectCity).value;
    },
	methods: {
		//登陆
        login() {
            this.$store.commit('OPENLOGINDIALOG', 1);
        },
        //注册
        register() {
            this.$store.commit('OPENLOGINDIALOG', 2);			
        },
        //退出
        logout() {
            this.$store.dispatch('logout');
        },
        //解析url
        parseUrl(url) {
            try{
                var urlStr=url.split("?")[1].split("&");
                var urlparams = {};
                for( let i=0;i<urlStr.length;i++){
                    var item = urlStr[i].split("=")
                    urlparams[item[0]]=item[1]
                }
                return urlparams;
            }
            catch(err){}
        }  
    },
    mounted() {
        window.addEventListener('storage',function(e){      
            console.log(e)
        })
    }
}
</script>
<style lang="less" scoped>
.topBar {
  background: #394043;
  height: 70px;
  font-size: 18px;
  color: #FFFFFF;
  position: relative;
}
.navmenu {
  overflow: visible!important;
}
.navmenu a{
    color: #fff;
}
.navmenu .one {
  line-height: 70px;
  position: relative;
  font-size: 16px;
}
.navmenu .one > div:nth-of-type(1) {
  position: relative;
  float: right;
  text-align: right;
  width: 190px;
}
.navmenu .one > div:nth-of-type(1):hover ul {
  visibility: visible;
}
.navmenu .one > div:nth-of-type(1):hover ul li:hover {
  color: #ff4343;
}
.navmenu .one > div:nth-of-type(1) ul {
  position: absolute;
  right: 20px;
  top: 70px;
  width: 80px;
  z-index: 999;
  background: #FFFFFF;
  visibility: hidden;
}
.navmenu .one > div:nth-of-type(1) ul > li {
  color: black;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  text-indent: 10px;
  border-bottom: 1px solid #a7a7a6;
  cursor: pointer;
}
.navmenu .one > div:nth-of-type(2) {
  float: right;
}
.navmenu .two {
  line-height: 70px;
}
.navmenu .two > li {
  position: relative;
  float: right;
  margin-right: 26px;
  cursor: pointer;
}
.navmenu .two > li ol {
  position: absolute;
  left: 0;
  top: 70px;
  width: 80px;
  z-index: 999;
  background: #FFFFFF;
  visibility: hidden;
}
.navmenu .two > li:hover,
.navmenu .two > li:hover>a
{
    color: #ff4343;
}
.navmenu .two > li:hover ol {
    visibility: visible;
}
.navmenu .two > li ol > li {
  color: black;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-indent: 10px;
  border-bottom: 1px solid #a7a7a6;
  cursor: pointer;
}
.navmenu .two > li:hover ol li:hover,
.navmenu .two > li:hover ol li:hover a{
  color: #ff4343!important;
}
/* 登录/退出 */
.navmenu .login:hover,
.navmenu .register:hover,
.navmenu .logout:hover {
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
.headImage {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  top: 50%;
  left: 20px;
  transform: translatey(-50%);
}
.bgColor {
  color: #ff4343!important;
}
textarea {
  width: 400px;
  height: 300px;
  font-size: 12px;
}

</style>
