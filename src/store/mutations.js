/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-28 14:00:25
 */
export default {
	LOGIN(state) {
		// 先让登录状态变为登录了
		state.logined = true
		sessionStorage.logined = true;
		// // 然后去sessionStorage取用户数据
		// let user = JSON.parse(sessionStorage.getItem('user'))
		// // 再把用户数据发下去
		// state.LoginedUser.name = user.name
		// state.LoginedUser.avatar = user.avatar
		// state.LoginedUser.username = user.username
	},
	LOGOUT(state) {
		state.logined = false
		sessionStorage.logined = '';
		// state.LoginedUser.name = ''
		// state.LoginedUser.avatar = ''
		// state.LoginedUser.username = ''
	}
	
}