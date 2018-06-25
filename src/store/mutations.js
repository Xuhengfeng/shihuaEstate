/*
 * @Author: 徐横峰 
 * @Date: 2018-04-28 00:21:21 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-25 16:18:33
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
		console.log(router)
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
	//历史漫游消息
	HISTORY(state, payload) {
		payload.forEach(item=>{
			item.msgs.forEach(item2=>{
				JIM.getResource({
					'media_id': item2.content.msg_body.media_id,
				  }).onSuccess(data=> {
					item2.content.msg_body.media_id = data.url;
				  }).onFail(data=> {});
			})
			payload.lastMsg = {text: ''};
		})
		state.history = [...state.history , ...payload];
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
				item.lastMsg = state.history[index].msgs.pop().content.msg_body;
			}
		});
		state.conversations = payload;
	},
	//当前的经纪人
	CURRENTBROKER(state, payload) {
		payload.lastMsg = {text: ''};
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
				lastMsg: {text: ''}
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
	}
}