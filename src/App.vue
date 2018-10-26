/*
 * @Author: 徐横峰 
 * @Date: 2018-04-29 18:52:11 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-10-26 12:06:46
 */
<template>
  <div id="app">
    <!-- 头部 -->
		<o-top-bar v-if="isShowTop == 1"></o-top-bar>
    <!-- 侧边栏 -->
    <o-side-bar v-if="isShowSide == 1"
                :appointList="appointList"
                :contrastList="contrastList"
                @deleteOneAppoint ="deleteOneAppoint"
                @deleteOneContrast ="deleteOneContrast"
                @clearDaikan="clearDaikan"
                @clearAllContrast="clearAllContrast"
                ></o-side-bar>
                
   	<!-- 缓存组件,created只触发一次啦 -->
    <keep-alive>
    		<router-view v-if="$route.meta.keepAlive" ></router-view>
		</keep-alive>

		<!-- 设置不缓存的页面 -->
		<router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 脚步 -->
    <o-footer v-if="isShowFooter == 1"></o-footer>
    <!-- 对话框 登录 注册 修改密码  -->
		<o-dialog ref="odialog" :showbox="loginDialogNum"></o-dialog>	
  </div>
</template>

<script>
import oTopBar from "./base/topBar/topBar";
import oFooter from "./base/footer/footer";
import oSideBar from "./base/sideBar/sidebar";
import oWeChat from "./base/weChat/weChat";
import oDialog from "./base/dialog/dialog";
export default {
  data() {
    return {
      isShowTop:  0, //显示1 隐藏0
      isShowSide: 1, //显示1 隐藏0
      isShowFooter: 0, //显示1 隐藏0
      scity: null,     //当前选定的城市
      appointList: [],  //待看列表
      contrastList: [], //对比列表
      sdidStr: '',//拼接对比房源详情sdid
    };
  },
  components: {
    oTopBar,
    oSideBar,
    oFooter,
    oWeChat,
    oDialog
  },
  computed: {
    //打开登录 注册对话框
    loginDialogNum() {
      return this.$store.state.loginDialogNum;
    },
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
    //登录状态
    logined() {
      return this.$store.state.logined;
    },
    //预约看房数据变动
    appointFlag() {
      return this.$store.state.appointFlag;
    }
  },
  watch: {
    //打开登录 注册对话框
    loginDialogNum() {
      if(this.loginDialogNum==null){
        this.$refs.odialog.hide();  
      }else{
        this.$refs.odialog.show();
      }
    },
    //监听路由
    $route(to, from) {
      let pathTo = to.path;//目的
      var a=1,b=1,c=1;
      this.layout(a,b,c);
      switch(pathTo){
          case '/':
          case '/home':  
              var a=0,b=1,c=1; 
              this.layout(a,b,c);
              break;
          case '/mapSearch':
              var a=0,b=0,c=0; 
              this.layout(a,b,c);
              break;
          case '/residence':this.$store.commit('WORDCOLOR',1);break;
          case '/forginwork':this.$store.commit('WORDCOLOR',2);break;
          case '/shoper':this.$store.commit('WORDCOLOR',3);break;
          case '/broker': this.$store.commit('WORDCOLOR',4);break;
          case '/entrustmentrent/rent': this.$store.commit('WORDCOLOR',5);break;
          case '/rentHouse':this.$store.commit('WORDCOLOR',6);break;
          case '/newHouse':this.$store.commit('WORDCOLOR',7);break;
          case '/buyHouse': this.$store.commit('WORDCOLOR',8);break;
          case '/houseestate': this.$store.commit('WORDCOLOR','a');break;
          case '/agencyBusines': this.$store.commit('WORDCOLOR','b');break;
          case '/convenienceservices': this.$store.commit('WORDCOLOR','c');break;
          case '/housetuoguan': this.$store.commit('WORDCOLOR','d');break;
          case '/decoration': this.$store.commit('WORDCOLOR','e');break;
          case '/publicgood': this.$store.commit('WORDCOLOR','f');break;
          case '/consultant': this.$store.commit('WORDCOLOR','g');break;
          case '/buyhouseguide': this.$store.commit('WORDCOLOR','h');break;
          case '/industryconsultation': this.$store.commit('WORDCOLOR','j');break;
          case '/entrustmentrent/rent': this.$store.commit('WORDCOLOR','i');break;
          case '/entrustmentrent/sell': this.$store.commit('WORDCOLOR','k');break;
      }  
    },
    //登录状态
    logined() {
      if(this.logined){
        this.refreshAppointList();//刷新待看列表
        this.refreshContrast();//刷新对比列表
      }else{
        this.appointList = [];//清空待看列表
        this.contrastList = [];//清空对比列表
      }
    },
    //切换城市
    city() {
      this.refreshAppointList();//刷新待看列表
      this.refreshContrast();//刷新对比列表
    },
    //预约看房数据变动
    appointFlag() {
      this.refreshAppointList();//刷新待看列表
    }
  },
  created() {
    try{
      this.scity = JSON.parse(localStorage.selectCity).value;
    }catch(error){};
    this.$store.commit('FIRSTSTATUS');//初始化vuex
  },
  methods:{
    //通用布局
    layout(a,b,c) {
      this.isShowTop = a;     
      this.isShowSide = b;   
      this.isShowFooter = c;
    },
    //刷新待看列表
    refreshAppointList() {
      this.$http.get(this.$url.URL.APPOINT_DETAILLIST +"?pageNo=1&pageSize=4",{
        "scity":  this.scity
      })
      .then(res =>{
        try{
          this.appointList = res.data.data.slice(0,4);
        }catch(error){};
      })
    },
    //刷新对比列表
    refreshContrast() {
      let scity = JSON.parse(localStorage.selectCity).value||'beihai';
      this.$http.get(this.$url.URL.TWOHOUSELIST_CONTRAST +"?pageNo=1&pageSize=4",{
        "scity": scity
      })
      .then(res =>{
        let str = "";
        try{
          this.contrastList = res.data.data.slice(0,4);
          this.contrastList.forEach(item=>{
              str += item.sdid+"#"
          })
          refreshContrastDetail(str);
        }catch(error){};
      })
    },
    //删除待看中一个
    deleteOneAppoint(item) {
      this.$http.delete(this.$url.URL.APPOINT_DELETE +item.id).then(res => {
        this.$store.commit('CHANGEAPPOINT');
      });
    },
    //清空待看列表
    clearDaikan() {
      this.appointList.forEach(item =>{
        this.deleteOneAppoint(item);
      })
    },
     //删除对比中一个
    deleteOneContrast(item) {
      this.$http.delete(this.$url.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then(res => {
        this.$store.commit('CONTRASTF');
      });
    },
    //清空对比列表
    clearAllContrast() {
      this.contrastList.forEach(item =>{
        this.deleteOneContrast(item);
      })
    },
    //刷新对比详情
    refreshContrastDetail(sdidStr) {
      console.log(1212)
      this.$http.get(this.$url.URL.TWOHOUSE_CONTRAST+"?sdidStr="+sdidStr+"&scity="+this.city).then(res => {
        console.log(res.data.data);
      });
    }
  }
};
</script>

<style lang="less">
// 全局样式
@import "../static/css/reset.css";/*重置样式*/
@import "../static/css/iconfont.css";/*字体图标*/
@import 'common/css/base.less';/*base样式*/
@import "common/css/resetElement.less";/*重置element样式*/
html,body{
  width:100%;
  min-height:100%;
  #app{
    color:@color-theme;
    width:100%;
    height:100%;
    font-size:@font-size-medium-x;
  }			
}
.noContent{
  color: #5e7382;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
</style>
