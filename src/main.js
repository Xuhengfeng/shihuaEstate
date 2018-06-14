// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './common/js/axios';
import store from './store'//共享数据
import $ from 'jquery';
import "babel-polyfill";//兼容ie
import Icon from './base/mySvg/mySvg';

Vue.component('icon', Icon)

//url路径
import URL from './common/js/url.js'
Vue.prototype.$url = URL;

Vue.config.productionTip = false

Date.prototype.$format = function (fmt) { //注册全局时间格式化
  var o = { 
  "M+" : this.getMonth()+1, //月份 
  "d+" : this.getDate(), //日 
  "h+" : this.getHours(), //小时 
  "m+" : this.getMinutes(), //分 
  "s+" : this.getSeconds(), //秒 
  "q+" : Math.floor((this.getMonth()+3)/3), //季度 
  "S" : this.getMilliseconds() //毫秒 
  }; 
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt; 
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
