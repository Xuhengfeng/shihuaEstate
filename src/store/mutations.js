/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-02 00:42:30
 */
//同步处理
export default {
	//初始化 state 数据, 防止刷新状态还原
	FIRSTSTATUS(state) {
		if(sessionStorage.logined) {
			state.logined=true;
			let user = JSON.parse(sessionStorage.userInfo);
			state.LoginedUser=Object.assign({}, user);
		}
		if(localStorage.contrastList) {
			state.contrastList = JSON.parse(localStorage.contrastList);
		}
	},
	//登录
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
	//退出
	LOGOUT(state) {
		//及时清空缓存 提高用户安全 
		sessionStorage.logined = '';
		sessionStorage.token = '';
		sessionStorage.userInfo = '';
		//清空状态
		state.logined = '';
		state.LoginedUser = {};
	},
	//清空对比清单列表
	CLEARALL(state) {
		//清空缓存
		localStorage.removeItem('contrastList');
		state.contrastList = [];
	},
	//显示对比清单列表
	SHOWLIST(state) {
        state.contrastList = JSON.parse(localStorage.contrastList);
	},
	//删除对比清单的某一个
	DELETEONE(state, data) {
		let arr = JSON.parse(localStorage.contrastList);
		let index =arr.findIndex((item)=>{
			return	data.sdid == item.sdid
		});
		arr.splice(index, 1);
		state.contrastList = arr;
		localStorage.contrastList = JSON.stringify(arr);
	}
	
	
}