/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:18 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-03 22:32:21
 */
const state = {
	logined: false,   //登录状态为没登录
	LoginedUser: {},  //用户信息数据
	contrastList: [], //缓存对比清单
	// daikan:[],        //待看清单
	contrastDetailList: [], //缓存对比清单详情
}

export default state;