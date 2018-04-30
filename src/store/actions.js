import state from "./state";
import axios from 'axios';
import API from '../common/js/url.js';
/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:14 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-01 00:12:20
 */
// 主要是异步处理

export default {
	login({commit}) {
		commit('LOGIN')
	},
	logout({commit}) {
		commit('LOGOUT')
	},
	clearAll({commit}) {
		console.log(1111)
		//请求二手的列表
		axios.post(API.URL.HOUSE_QUERY, {
          scity: 'beihai',
          pageNo: 1
        })
        .then(response => {
          if(localStorage.contrastList) {
            //修正数据 根据本地缓存修正response数据
            response.data.data.forEach((item)=>{
              JSON.parse(localStorage.contrastList).forEach((item2)=>{
                if(item.sdid == item2.sdid){
                  item.contentFlag = '已加入对比';
                }
              })
            })
		  }
		  commit('CLEARALL', response.data.data);
        });
	},
	showlist({commit}) {
		commit('SHOWLIST')
	}
}

