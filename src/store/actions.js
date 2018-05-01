import state from "./state";
import axios from 'axios';
import API from '../common/js/url.js';
/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:14 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-01 14:07:21
 */
//异步操作
export default {
	//登录
	login({commit}) {
		commit('LOGIN')
	},
	//退出
	logout({commit}) {
		commit('LOGOUT')
	},
	//清空对比列表
	clearAll({commit}) {
		commit('CLEARALL')
	},
	//显示对比列表
	showlist({commit}) {
		commit('SHOWLIST')
	},
	//删除对比列表中一个
	deleteOne({commit}, data) {
		commit('DELETEONE', data)
	}
}

