import API from '../common/js/url.js';
import axios from 'axios';
import Vue from 'vue'
import {Message, MessageBox, Dialog,Button, Pagination} from 'element-ui';//导入elementjs
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$alert = MessageBox.alert//弹出框
Vue.prototype.$confirm = MessageBox.confirm//弹出框
Vue.prototype.$message = Message//消息提示

//异步操作
export default {
	//修改登录状态
	login({commit}) {
		commit('LOGIN');
	},
	//退出
	logout({commit}) {
		axios.post(API.URL.USER_LOGOUT)
		.then(response => {
			commit('LOGOUT');
		});
	},
	//获取最新用户信息(例如头像 昵称 等)
	getUserInfo() {
		axios.post(API.URL.USER_DETAILINFO)
		.then(response => {
			//缓存最新用户信息
			sessionStorage.userInfo = JSON.stringify(response.data.data);
			//极光IM信息鉴权
			this.dispatch('auth_payload');
		});
	},
	//极光IM信息鉴权
	auth_payload({commit}) {
		axios.get(API.URL.USER_JIGUANGSIGN)
		.then(response => {
			sessionStorage.AuthJiG = JSON.stringify(response.data.data);
			//静默刷新登录
			this.dispatch('login');
		});
	},
	//清空对比列表
	clearAll({commit}) {
		this.state.contrastList.forEach((item)=>{
			axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {
				commit('CLEARALL', item);
			});
		})
	},
	//清空待看列表
	clearDaikan({commit}) {
		this.state.appinthouse.forEach((item)=>{
			axios.delete(API.URL.APPOINT_DELETE+item.id).then((response) => {
				commit('CLEARDAIKAN', item);
			});
		})
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
	//删除对比清单中一个
	deleteOne({commit}, item) {
		axios.delete(API.URL.CANCEL_CONTRAST+"?houseSdid="+item.sdid).then((response) => {});
		commit('DELETEONE', item);
	},
	// //删除待看清单中一个
	deleteTwo({commit}, item) {
		console.log(item)
		axios.delete(API.URL.APPOINT_DELETE +item.id).then((response) => {});
		commit('DELETETWO', item);
	},
	//添加一个到对比清单(发请求)
	addOne({commit}, item) {
		let params = {
			"houseId": item.id,
			"houseSdid": item.sdid
		}
		axios.put(API.URL.JOIN_CONTRAST, params).then((response) => {});
	},
}

