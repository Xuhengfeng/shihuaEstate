/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:14 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-30 17:50:25
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
		commit('CLEARALL')
	},
	showlist({commit}) {
		commit('SHOWLIST')
	}
}

