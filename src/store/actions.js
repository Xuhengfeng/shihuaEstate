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
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-03 22:31:47
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
			axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {
				commit('DELETEONE', item);
			});
		})
	},
	//清空待看列表
	clearDaikan({commit}, item) {
		
		this.state.daikan.forEach((item)=>{
			axios.delete(API.URL.APPOINT_DELETE+item.id).then((response) => {
				commit('DELETETWO', item);
			});
		})
		localStorage.removeItem('daikan');//按key单个删除
	},
	//显示对比列表
	showlist({commit}, data) {
		let sdidStr = '';
		let city = JSON.parse(localStorage.selectCity).value;
			data.forEach((item)=> {
				sdidStr += item.sdid+'-';
			});
		//对比列表清单
		commit('SHOWLIST', data);
		//对比列表详情
		axios.get(API.URL.TWOHOUSE_CONTRAST+"?sdidStr="+sdidStr+"&scity="+city).then((response) => {
			commit('SHOWDEITALLIST', response.data.data);
		});
	},
	//显示待看列表
	showlistone({commit}, data) {
		let sdidStr = '';
		let city = JSON.parse(localStorage.selectCity).value;
			data.forEach((item)=> {
				sdidStr += item.sdid+'-';
			});
		//待看列表清单
		commit('SHOWLISTONE', data);
	},
	//删除对比清单中一个
	deleteOne({commit}, item) {
		axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {});
		commit('DELETEONE', item);
	},
	//删除待看清单中一个
	deleteTwo({commit}, item) {
		axios.delete(API.URL.APPOINT_DELETE +item.id).then((response) => {});
		commit('DELETETWO', item);
		localStorage.removeItem('daikan');//按key单个删除
	},
	//添加一个到对比清单(发请求)
	addOne({commit}, item) {
		// console.log(item)
		let params = {
			"houseId": item.id,
			"houseSdid": item.sdid
		}
		axios.put(API.URL.JOIN_CONTRAST, params).then((response) => {});
	},
	//添加一个到待看清单(不发请求)
	addTwo({commit}, item) {
		console.log(item)
		commit('SHOWLISTONE', item);
		// let params = {
		// 	"scity":  JSON.parse(localStorage.selectCity).value,
		// 	"sdid": item.sdid,
		// }
		// axios.post(API.URL.APPOINT_ADD, params).then((response) => {});
	}
}

