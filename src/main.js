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
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
Vue.use(Share)
Vue.component('icon', Icon)

//全局配置过滤器
import vfilter from "./common/js/vfilter.js"
for (let key in vfilter) {
    Vue.filter(key, vfilter[key])
}
//url路径
import URL from './common/js/url.js'
Vue.prototype.$url = URL;
Vue.config.productionTip = false;

/**       
* 对Date的扩展，将 Date 转化为指定格式的String       
* 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
* 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
* eg:       
* (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
* (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
* (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
* (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
* (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
*/
Date.prototype.$format = function(fmt) { 
  var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "周日",         
    "1" : "星期一",         
    "2" : "星期二",         
    "3" : "星期三",         
    "4" : "星期四",         
    "5" : "星期五",         
    "6" : "星期六"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;       
};
//解析url
Vue.prototype.$parseURL = function(url) {
    var urlStr=url.split("?")[1].split("&");
    var urlparams = {};
    for( let i=0;i<urlStr.length;i++){
        var item = urlStr[i].split("=")
        urlparams[item[0]]=item[1]
    }
    return urlparams;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


console.log('%c我怎么都不想睡', 'color:red;background:#fff')
console.log('%c天特别的亮夜特别的黑。', 'color:red;background:#fff')
console.log('%c当我深深的呼吸。', 'color:red;background:#fff')
console.log('%c心中充满想你的甜蜜。', 'color:red;background:#fff')
console.log('%c想和你走在雨中。', 'color:red;background:#fff')
console.log('%c想要你牵我的手。', 'color:red;background:#fff')
console.log('%c这感觉这一切就好像飘在外太空。只有我们存在。', 'color:red;background:#fff')
console.log('%c快加入我们吧！QQ:564297479', 'color:red;background:#fff')
