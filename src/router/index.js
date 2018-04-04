import Vue from 'vue'
import Router from 'vue-router'


const home = resolve => require(['components/home/home'], resolve)// 首页
const login = resolve => require(['components/home/login'], resolve)//登录
const register = resolve => require(['components/home/register'], resolve)//注册
const forget = resolve => require(['components/home/forget'], resolve)//忘记
const maplookhouse = resolve => require(['components/home/maplookhouse'], resolve)//地图找房

const searchlist = resolve => require(['components/searchlist/searchlist'], resolve)//搜索
const buyhouse = resolve => require(['components/buyhouse/buyhouse'], resolve)//我要买房
const twohandhousedetail = resolve => require(['components/buyhouse/twohandhousedetail'], resolve)//我要买房详情
const renthouse = resolve => require(['components/renthouse/renthouse'], resolve)//我要租房
const renthousedetail = resolve => require(['components/renthouse/renthousedetail'], resolve)//我要租房详情
const sellrent = resolve => require(['components/sellrent/sellrent'], resolve)//我要售租
const houseestate = resolve => require(['components/houseestate/houseestate'], resolve)//小区
const estatedetail = resolve => require(['components/houseestate/estatedetail'], resolve)//小区详情
const broker = resolve => require(['components/broker/broker.vue'], resolve)//经纪人
const brokerdetail = resolve => require(['components/broker/brokerdetail'], resolve)//经纪人详情
const buyhouseguide = resolve => require(['components/buyhouseguide/buyhouseguide'], resolve)//购房指南
const guidedetail = resolve => require(['components/buyhouseguide/guidedetail'], resolve)//指南详情
const mine = resolve => require(['components/mine/mine'], resolve)//我的个人账户
const indexhome = resolve => require(['components/mine/indexhome'], resolve)//我的首页
const indexsee = resolve => require(['components/mine/indexsee'], resolve)//我的浏览
const indexcollection = resolve => require(['components/mine/indexcollection'], resolve)//我的收藏
const indexdelegation = resolve => require(['components/mine/indexdelegation'], resolve)//我的委托
const indexmessage = resolve => require(['components/mine/indexmessage'], resolve)//消息
const indexeditInfo = resolve => require(['components/mine/indexeditInfo'], resolve)//编辑资料



//const home = r => {require.ensure([], () => r(require('@/components/home/home')), 'home')}//主页
//const login = r => {require.ensure([], () => r(require('@/components/home/login')), 'home')}//登录
//const register = r => {require.ensure([], () => r(require('@/components/home/register')), 'home')}//注册
//const forget = r => {require.ensure([], () => r(require('@/components/home/forget')), 'home')}//忘记
//const searchlist = r => {require.ensure([], () => r(require('@/components/searchlist/searchlist')), 'searchlist')}//搜索
//const buyhouse = r => {require.ensure([], () => r(require('@/components/buyhouse/buyhouse')), 'buyhouse')}//我要买房
//const twohandhousedetail = r => {require.ensure([], () => r(require('@/components/buyhouse/twohandhousedetail')), 'buyhouse')}//我要买房详情
//const renthouse = r => {require.ensure([], () => r(require('@/components/renthouse/renthouse')), 'renthouse')}//我要租房
//const renthousedetail = r => {require.ensure([], () => r(require('@/components/renthouse/renthousedetail')), 'renthouse')}//我要租房详情
//const sellrent = r => {require.ensure([], () => r(require('@/components/sellrent/sellrent')), 'sellrent')}//我要售租
//const houseestate = r => {require.ensure([], () => r(require('@/components/houseestate/houseestate')), 'sellrent')}//小区
//const estatedetail = r => {require.ensure([], () => r(require('@/components/houseestate/estatedetail')), 'sellrent')}//小区详情
//const broker = r => {require.ensure([], () => r(require('@/components/broker/broker')), 'sellrent')}//经纪人
//const brokerdetail = r => {require.ensure([], () => r(require('@/components/broker/brokerdetail')), 'brokerdetail')}//经纪人详情
//const buyhouseguide = r => {require.ensure([], () => r(require('@/components/buyhouseguide/buyhouseguide')), 'buyhouseguide')}//购房指南
//const guidedetail = r => {require.ensure([], () => r(require('@/components/buyhouseguide/guidedetail')), 'buyhouseguide')}//指南详情
//const mine = r => {require.ensure([], () => r(require('@/components/mine/mine')), 'mine')}//我的个人账户
//const indexhome = r => {require.ensure([], () => r(require('@/components/mine/indexhome')), 'mine')}//我的首页
//const indexsee = r => {require.ensure([], () => r(require('@/components/mine/indexsee')), 'mine')}//指南详情
//const indexcollection = r => {require.ensure([], () => r(require('@/components/mine/indexcollection')), 'mine')}//我的收藏
//const indexdelegation = r => {require.ensure([], () => r(require('@/components/mine/indexdelegation')), 'mine')}//我的委托
//const indexmessage = r => {require.ensure([], () => r(require('@/components/mine/indexmessage')), 'mine')}//消息
//const indexeditInfo = r => {require.ensure([], () => r(require('@/components/mine/indexeditInfo')), 'mine')}//编辑资料11
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
		{path:"*",redirect:'/home',meta:{KeepAlive:false}},//重定向首页
		{path:"/home",component:home,meta:{KeepAlive:false}},//首页
		{path:"/login",component:login,meta:{KeepAlive:false}},//登录
		{path:"/home/maplookhouse",component:maplookhouse,meta:{KeepAlive:false}},//地图找房
		{path:"/register",component:register,meta:{KeepAlive:false}},//注册
		{path:"/forget",component:forget,meta:{KeepAlive:false}},//忘记
		{path:"/searchlist",component:searchlist,meta:{KeepAlive:false}},//搜索列表
		{path:"/buyhouse",component:buyhouse,meta:{KeepAlive:false}},//我要买房
		{path:"/buyhouse/twohandhousedetail/:id",component:twohandhousedetail,meta:{KeepAlive:false}},//二手房详情		
		{path:"/renthouse",component:renthouse,meta:{KeepAlive:false}},//我要租房
		{path:"/renthousedetail/:id",component:renthousedetail,meta:{KeepAlive:false}},//租房详情
		{path:"/sellrent",component:sellrent,meta:{KeepAlive:false}},//我要售租
		{path:"/houseestate",component:houseestate,meta:{KeepAlive:false}},//小区
		{path:"/estatedetail/:id",component:estatedetail,meta:{KeepAlive:false}},//小区详情
		{path:"/broker",component:broker,meta:{KeepAlive:false}},//经纪人
		{path:"/brokerdetail",component:brokerdetail,meta:{KeepAlive:false}},//经纪人详情
		{path:"/buyhouseguide",component:buyhouseguide,children:[{//购房指南
				path:"/guidedetail",component:guidedetail},//指南详情
			]},
		{path:"/mine",component:mine,children:[{//我的个人账户
				path:"/indexhome",component:indexhome,meta:{KeepAlive:false}},{//我的首页
				path:"/indexsee",component:indexsee,meta:{KeepAlive:false}},{//我的约看
				path:"/indexcollection",component:indexcollection,meta:{KeepAlive:false}},{//我的收藏
				path:"/indexdelegation",component:indexdelegation,meta:{KeepAlive:false}},{//我的委托
				path:"/indexmessage",component:indexmessage,meta:{KeepAlive:false}},{//消息
				path:"/indexeditInfo",component:indexeditInfo,meta:{KeepAlive:false}}//编辑资料
			]},
  	]
})
 