import API from '../common/js/url.js';
import axios from 'axios';
import router from '../router/index'

//异步操作
export default {
	//初始化登录
	login({commit}) {
		commit('LOGIN');
	},
	//退出
	logout({commit}) {
		axios.post(API.URL.USER_LOGOUT)
		.then(res => {
			commit('LOGOUT');
			router.push({path: "/"});
		});
	},
	//获取最新用户信息(例如头像 昵称 等)
	getUserInfo() {
		axios.post(API.URL.USER_DETAILINFO)
		.then(res => {
			//缓存最新用户信息
			sessionStorage.userInfo = JSON.stringify(res.data.data);
			//静默刷新登录
			this.dispatch('login');
		});
	}
}


	
	
	

