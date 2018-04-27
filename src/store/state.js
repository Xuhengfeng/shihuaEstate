/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:18 
 * @Last Modified by:   徐横峰 
 * @Last Modified time: 2018-04-28 00:21:18 
 */
const state = {
	// 登录状态为没登录
	logined: false,
	// 用户信息数据,目前只需要avatar和name,还是把username也加上吧
	LoginedUser: {
	 name: '',
	 avatar: '',
	 username: ''
	}
}
export default state;