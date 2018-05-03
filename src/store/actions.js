import API from '../common/js/url.js';
import axios from 'axios';
import Vue from 'vue'
import {Message, MessageBox, Dialog,Button, Pagination} from 'element-ui';//导入elementjs
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$alert = MessageBox.alert//弹出框
Vue.prototype.$confirm = MessageBox.confirm//弹出框
Vue.prototype.$message = Message//消息提示
/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:14 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-03 15:48:39
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
		this.state.contrastList.forEach((item)=>{
			axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {});
			commit('CLEARALL');
		})
	},
	//显示对比列表
	showlist({commit}, data) {
		commit('SHOWLIST', data)
	},
	//删除对比清单中一个
	deleteOne({commit}, item) {
		axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {});
		commit('DELETEONE', item);
	},
	//添加一个到对比清单
	addOne({commit}, item) {
		let params = {
			"houseId": item.id,
			"houseSdid": item.sdid
		}
		axios.put(API.URL.JOIN_CONTRAST, params).then((response) => {});
	}
}

