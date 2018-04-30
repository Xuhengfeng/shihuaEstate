/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-30 23:53:03
 */
// 主要是同步处理
export default {
	LOGIN(state) {
		//先让登录状态变为登录了
		//同时缓存登录状态
		state.logined = true;
		sessionStorage.logined = true;
		//去sessionStorage取用户数据
		//再把用户数据发下去
		let user = JSON.parse(sessionStorage.getItem('userInfo'));
		state.LoginedUser = Object.assign({}, user);
	},
	LOGOUT(state) {
		//及时清空缓存 提高用户安全 
		sessionStorage.logined = '';
		sessionStorage.token = '';
		sessionStorage.userInfo = '';
		//清空状态
		state.logined = '';
		state.LoginedUser = {};
	},
	CLEARALL(state, data) {
		//重新刷新二手房数据
		state.twoHouseList = data;

		//清空缓存
		localStorage.removeItem('contrastList');
		//清空对比清单列表
		state.contrastList = [];
	},
	SHOWLIST(state) {
		//显示对比清单列表
        state.contrastList = JSON.parse(localStorage.contrastList);
	}
	
	
}