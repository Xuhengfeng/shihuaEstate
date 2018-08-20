/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-08-20 21:27:39
 */
import router from '../router/index'
//同步处理
export default {
	//打开登录 注册对话框
	OPENLOGINDIALOG(state, num) {
		state.loginDialogNum = num;
	},
 	//初始化登录状态, 防止刷新状态还原
	FIRSTSTATUS(state) {
		if(sessionStorage.logined) {
			let user = JSON.parse(sessionStorage.userInfo);
			state.logined=true;
			state.LoginedUser=Object.assign({}, user);
		}
	},
	//登录
	LOGIN(state) {
		//先让登录状态变为登录了
		//同时缓存登录状态
		state.logined = true;
		sessionStorage.logined = true;
		let user = JSON.parse(sessionStorage.userInfo);
		//取登录之后缓存sessionStorage的信息
		state.LoginedUser = Object.assign({}, user);
	},
	//退出
	LOGOUT(state) {
		//清空所有关于登录缓存
		sessionStorage.clear();
		//清空状态
		state.logined = false;
		state.LoginedUser = null;

		state.loginDialogNum = null;
		router.push({path: "/"});
	},
	//修改topbar样式
	WORDCOLOR(state, payload){
		state.wordcolor = payload;
	}
}