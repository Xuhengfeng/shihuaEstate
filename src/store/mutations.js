/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-07-26 14:11:38
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
			state.AuthJiG = JSON.parse(sessionStorage.AuthJiG);
		}
	},
	//初始化待看列表数据
	CHUSHIHUA(state,payload){
		payload != null
		? state.appinthouse = payload
		: state.appinthouse = [];
	},
	//登录
	LOGIN(state) {
		//先让登录状态变为登录了
		//同时缓存登录状态
		state.logined = true;
		sessionStorage.logined = true;
		let user = JSON.parse(sessionStorage.userInfo);
		//取登录之后缓存sessionStorage的信息
		//然后分发下去
		state.LoginedUser = Object.assign({}, user);
		state.AuthJiG = JSON.parse(sessionStorage.AuthJiG);
	},
	//退出
	LOGOUT(state) {
		//清空所有关于登录缓存
		sessionStorage.clear();

		//清空状态
		state.logined = false;
		state.LoginedUser = null;
		state.userAuthJiGuang = null;
		state.AuthJiG = null;

		state.chat = false;
		state.conversations = [];
		state.history = [];
		state.currentLineBroker = null;
		state.loginDialogNum = null;

		router.push({path: "/"});
		
		//用户退出极光IM
		window.JIM.loginOut();
	},
	//清空对比清单列表
	CLEARALL(state) {
		state.contrastList = [];
	},
	//清空待看清单列表
	CLEARDAIKAN(state) {
		state.appinthouse = [];
	},
	//显示对比清单列表
	SHOWLIST(state, payload) {
		state.contrastList = payload;
	},
	//显示对比清单
	SHOWLISTTWO(state, payload) {
		state.contrastList = payload;
	},
	//对比房源详情
	SHOWDEITALLIST(state, payload) {
		state.contrastDetailList = payload;
	},
	//删除对比清单的某一个
	DELETEONE(state, payload) {
		let index = state.contrastList.findIndex((item)=>{
			return payload.sdid == item.sdid;
		})
		state.contrastList.splice(index, 1);
	},
	//删除待看清单的某一个
	DELETETWO(state, payload) {
		let index = state.contrastList.findIndex((item)=>{
			return payload.sdid == item.sdid;
		})
		state.appinthouse.splice(index, 1);
	},	
	ADDTWO(state, payload){
		state.appinthouse = payload;
	},
	//初始化历史漫游消息
	HISTORY(state, payload) {
		console.log(payload);
		payload.forEach(item=>{
			item.msgs.forEach(item2=>{
				if(item2.content.msg_body.media_id){
					// 走极光接口返回图片地址
					// JIM.getResource({
					// 	'media_id': item2.content.msg_body.media_id,
					//   }).onSuccess(data=> {
					// 	item2.content.msg_body.media_id = data.url;
					//   }).onFail(data=> {});
					
    	            // 直接拼接图片地址 减少请求 
					item2.content.msg_body.media_id = 'http://dl.im.jiguang.cn/'+item2.content.msg_body.media_id;
				}
			})
			item.lastMsg = {text: ''};
		})
		state.history = [...state.history , ...payload];
	},
	//同步历史记录
	SYNCHISTORY(state, payload) {
		state.history = payload.data;
	},
	//会话列表(好友列表)
	FIREND(state, payload) {
		// 好友遍历
		payload.forEach(item => {
			let index = state.history.findIndex(element=>{
				return element.from_username == item.username;
			})
			if(index==-1){
				item.lastMsg = {text: ''};
			}else{
				let lastIndex = state.history[index].msgs.length-1;
				item.lastMsg = state.history[index].msgs[lastIndex].content.msg_body;
			}
		});
		// 好友列表
		state.conversations = payload;
	},
	//当前的经纪人
	CURRENTBROKER(state, payload) {
		state.currentLineBroker = payload;	
	},
	//会话列表(添加好友)
	ADDFIREND(state, payload) {
		//当前聊天的经纪人
		payload.lastMsg = {text: ''};
		state.currentLineBroker = payload;	
		state.chat = true;

		//找到会话列表中的当前用户
		let index = state.conversations.findIndex(item=>{
			return item.username == payload.username;
		})
		
		//当前经纪人不存在于会话列表中
		if(index==-1) {
			state.conversations.unshift(payload);
			state.history.unshift({
				from_username: payload.username,
				lastMsg: {text: ''},
				content: {
					msg_body: {text: ''},
					from_id: payload.id,
				},
				msgs: [],
        	    ctime_ms: payload.mtime
			});
		}
		//当前经纪人存在于会话列表中
		else{
			//进行顶置处理
			this.commit('FIRENDFIRST', payload);
		}
	},
	//会话列表(当前好友进行顶置)
	FIRENDFIRST(state, payload) {
		//找到会话列表中的当前用户
		let index = state.conversations.findIndex(item=>{
			return item.username == payload.username;
		})
		let index2 = state.history.findIndex(element=>{
			return element.username == payload.username;
		})
		//当前经纪人进行顶置
		state.conversations[0] = state.conversations.splice(index, 1, state.conversations[0])[0];
		//当前经纪人历史聊天顶置
		state.history[0] = state.history.splice(index2, 1, state.history[0])[0];
	},
	//开始聊天
	STARTCHAT(state, payload) {
		state.chat = payload;
	},
	//修改topbar样式
	WORDCOLOR(state, payload){
		state.wordcolor = payload;
	},
	//修改topbar样式
	// NUM(state, payload){
	// 	state.num = payload;
	// }
}