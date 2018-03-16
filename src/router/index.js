import Vue from 'vue'
import Router from 'vue-router'

const home = r => {require.ensure([], () => r(require('@/components/home/home')), 'home')}//主页
const login = r => {require.ensure([], () => r(require('@/components/home/login')), 'home')}//登录
const register = r => {require.ensure([], () => r(require('@/components/home/register')), 'home')}//注册
const forget = r => {require.ensure([], () => r(require('@/components/home/forget')), 'home')}//忘记
const searchlist = r => {require.ensure([], () => r(require('@/components/searchlist/searchlist')), 'searchlist')}//搜索
const buyhouse = r => {require.ensure([], () => r(require('@/components/buyhouse/buyhouse')), 'buyhouse')}//我要买房
const twohandhousedetail = r => {require.ensure([], () => r(require('@/components/buyhouse/twohandhousedetail')), 'buyhouse')}//我要买房详情
const renthouse = r => {require.ensure([], () => r(require('@/components/renthouse/renthouse')), 'renthouse')}//我要租房
const renthousedetail = r => {require.ensure([], () => r(require('@/components/renthouse/renthousedetail')), 'renthouse')}//我要租房详情
const sellrent = r => {require.ensure([], () => r(require('@/components/sellrent/sellrent')), 'sellrent')}//我要售租
const houseestate = r => {require.ensure([], () => r(require('@/components/houseestate/houseestate')), 'sellrent')}//小区
const estatedetail = r => {require.ensure([], () => r(require('@/components/houseestate/estatedetail')), 'sellrent')}//小区详情
const broker = r => {require.ensure([], () => r(require('@/components/broker/broker')), 'sellrent')}//经纪人
const brokerdetail = r => {require.ensure([], () => r(require('@/components/broker/brokerdetail')), 'brokerdetail')}//经纪人详情
const buyhouseguide = r => {require.ensure([], () => r(require('@/components/buyhouseguide/buyhouseguide')), 'buyhouseguide')}//购房指南
const guidedetail = r => {require.ensure([], () => r(require('@/components/buyhouseguide/guidedetail')), 'buyhouseguide')}//指南详情
const mine = r => {require.ensure([], () => r(require('@/components/mine/mine')), 'mine')}//我的个人账户
const indexhome = r => {require.ensure([], () => r(require('@/components/mine/indexhome')), 'mine')}//我的首页
const indexsee = r => {require.ensure([], () => r(require('@/components/mine/indexsee')), 'mine')}//指南详情
const indexcollection = r => {require.ensure([], () => r(require('@/components/mine/indexcollection')), 'mine')}//我的收藏
const indexdelegation = r => {require.ensure([], () => r(require('@/components/mine/indexdelegation')), 'mine')}//我的委托
const indexmessage = r => {require.ensure([], () => r(require('@/components/mine/indexmessage')), 'mine')}//消息
const indexeditInfo = r => {require.ensure([], () => r(require('@/components/mine/indexeditInfo')), 'mine')}//编辑资料

//import home from "@/components/home/home"//主页
//import login from "@/components/home/login"//登录
//import register from "@/components/home/register"//注册
//import forget from "@/components/home/forget"//忘记
//import searchlist from "@/components/searchlist/searchlist"//搜索
//import buyhouse from "@/components/buyhouse/buyhouse"//我要买房
//import twohandhousedetail from "@/components/buyhouse/twohandhousedetail"//我要买房详情
//import renthouse from "@/components/renthouse/renthouse"//我要租房
//import renthousedetail from "@/components/renthouse/renthousedetail"//我要租房详情
//import sellrent from "@/components/sellrent/sellrent"//我要售租
//import houseestate from "@/components/houseestate/houseestate"//小区
//import estatedetail from "@/components/houseestate/estatedetail"//小区详情
//import broker from "@/components/broker/broker"//经纪人
//import brokerdetail from "@/components/broker/brokerdetail"//经纪人详情
//import buyhouseguide from "@/components/buyhouseguide/buyhouseguide"//购房指南
//import guidedetail from "@/components/buyhouseguide/guidedetail"//指南详情
//import mine from "@/components/mine/mine"//我的个人账户
//import indexhome from "@/components/mine/indexhome"//我的首页
//import indexsee from "@/components/mine/indexsee"//我的约看
//import indexcollection from "@/components/mine/indexcollection"//我的收藏
//import indexdelegation from "@/components/mine/indexdelegation"//我的委托
//import indexmessage from "@/components/mine/indexmessage"//消息
//import indexeditInfo from "@/components/mine/indexeditInfo"//编辑资料


Vue.use(Router)

export default new Router({
	mode: 'history', //历史模式, 取消地址栏"#"
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0}//页面切换滚动顶部
	},
  	routes: [
		{path:"/",redirect: '/home'},//重定向首页
		{path:"/home",component:home},//首页
		{path:"/login",component:login},//登录
		{path:"/register",component:register},//注册
		{path:"/forget",component:register},//忘记
		{path:"/searchlist",component:searchlist},//搜索列表
		{path:"/buyhouse",component:buyhouse,children:[{//我要买房
				path:"/twohandhousedetail/:id",component:twohandhousedetail},//二手房详情		
			]},
		{path:"/renthouse",component:renthouse,children:[{//我要租房
				path:"/renthousedetail/:id",component:renthousedetail}//租房详情
			]},
		{path:"/sellrent",component:sellrent},//我要售租
		{path:"/houseestate",component:houseestate,children:[{//小区
				path:"/estatedetail/:id",component:estatedetail}//小区详情
			]},
		{path:"/broker",component:broker,children:[{//经纪人
				path:"/brokerdetail",component:brokerdetail},//经纪人详情
			]},
		{path:"/buyhouseguide",component:buyhouseguide,children:[{//购房指南
				path:"/guidedetail",component:guidedetail},//指南详情
			]},
		{path:"/mine",component:mine,children:[{//我的个人账户
				path:"/indexhome",component:indexhome},{//我的首页
				path:"/indexsee",component:indexsee},{//我的约看
				path:"/indexcollection",component:indexcollection},{//我的收藏
				path:"/indexdelegation",component:indexdelegation},{//我的委托
				path:"/indexmessage",component:indexmessage},{//消息
				path:"/indexeditInfo",component:indexeditInfo}//编辑资料
			]},
  	]
})
 