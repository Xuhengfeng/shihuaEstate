/*
 * @Author: 徐横峰 
 * @Date: 2018-04-26 16:05:45 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-29 11:51:43
 */
import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => require(['components/home/home'], resolve)// 首页

const mapSearch = resolve => require(['components/mapSearch/mapSearch'], resolve)//地图找房(百度地图)
const searchlist = resolve => require(['components/searchlist/searchlist'], resolve)//搜索
const contrast = resolve => require(['components/buyHouse/contrast'], resolve)//房源对比

const buyHouse = resolve => require(['components/buyHouse/buyHouse'], resolve)//二手房
const twoHandHouseDetail = resolve => require(['components/buyHouse/twoHandHouseDetail'], resolve)//二手房详情
const newHouse = resolve => require(['components/newHouse/newHouse'], resolve)//新房
const newHouseDetail = resolve => require(['components/newHouse/newHouseDetail'], resolve)//新房详情
const rentHouse = resolve => require(['components/rentHouse/rentHouse'], resolve)//租房
const rentHouseDetail = resolve => require(['components/rentHouse/rentHouseDetail'], resolve)//租房详情


const houseestate = resolve => require(['components/houseestate/houseestate'], resolve)//小区
const forginwork = resolve => require(['components/forginwork/forginwork'], resolve)//海外置业
const residence = resolve => require(['components/residence/residence'], resolve)//旅居投资
const housetuoguan = resolve => require(['components/more/housetuoguan'], resolve)//房屋托管
const convenienceservices = resolve => require(['components/more/convenienceservices'], resolve)//便民服务
const decoration = resolve => require(['components/more/decoration'], resolve)//装修
const publicgood = resolve => require(['components/more/publicgood'], resolve)//世华公益
const industryconsultation = resolve => require(['components/more/industryconsultation'], resolve)//世华公益
const agencyBusiness = resolve => require(['components/more/agencyBusiness'], resolve)//世华公益




const estatedetail = resolve => require(['components/houseestate/estatedetail'], resolve)//小区详情
const entrustmentrent = resolve => require(['components/entrustment/entrustmentrent'], resolve)//业主委托我要出售 出租 
const broker = resolve => require(['components/broker/broker.vue'], resolve)//找经纪人
const brokerdetail = resolve => require(['components/broker/brokerdetail'], resolve)//找经纪人详情
const shoper = resolve => require(['components/shoper/shoper.vue'], resolve)//找门店
const shoperdetail = resolve => require(['components/shoper/shoperdetail'], resolve)//找门店详情
const buyhouseguide = resolve => require(['components/more/buyhouseguide'], resolve)//购房指南
const guidedetail = resolve => require(['components/more/guidedetail'], resolve)//指南详情
const industryconsultationDetail = resolve => require(['components/more/industryconsultationDetail'], resolve)//行业资讯详情

const mine = resolve => require(['components/mine/mine'], resolve)//我的个人账户
const indexhome = resolve => require(['components/mine/indexhome'], resolve)//账户首页
const indexseeone = resolve => require(['components/mine/indexseeone'], resolve)//待看列表
const indexseetwo = resolve => require(['components/mine/indexseetwo'], resolve)//待看日程
const indexseethree = resolve => require(['components/mine/indexseethree'], resolve)//已看记录
const indexseefour = resolve => require(['components/mine/indexseefour'], resolve)//看房报告
const indexcollection = resolve => require(['components/mine/indexcollection'], resolve)//我的收藏
const indexdelegation = resolve => require(['components/mine/indexdelegation'], resolve)//我的委托
const indexdelegationdetail = resolve => require(['components/mine/indexdelegationdetail'], resolve)//我的委托详情
const indexbroker = resolve => require(['components/mine/indexbroker'], resolve)//我的经纪人
const comment = resolve => require(['components/mine/comment'], resolve)//我的评论

const consultant = resolve => require(['components/consultant/consultant'], resolve)//咨询
const consultantindex = resolve => require(['components/consultant/consultantindex'], resolve)//咨询首页
const consultantindexdetail = resolve => require(['components/consultant/consultantindexdetail'], resolve)//咨询详情
const queryinfodetail = resolve => require(['components/consultant/queryinfodetail'], resolve)//咨询详情
const listdetail = resolve => require(['components/consultant/listdetail'], resolve)//咨询首页
const indexconsult = resolve => require(['components/mine/indexconsult'], resolve)//我的咨询
const myproblem = resolve => require(['components/consultant/myproblem'], resolve)//我要咨询
const consultantbuyhouse = resolve => require(['components/consultant/consultantbuyhouse'], resolve)//买房咨询

const indexmessage = resolve => require(['components/mine/indexmessage'], resolve)//消息
const indexeditInfo = resolve => require(['components/mine/indexeditInfo'], resolve)//
const aboutgroup = resolve => require(['components/group/aboutgroup'], resolve)//关于我们
const groupintourde = resolve => require(['components/group/groupintourde'], resolve)//集团简介
const groupculture = resolve => require(['components/group/groupculture'], resolve)//集团文化
const group = resolve => require(['components/group/group'], resolve)//集团



Vue.use(Router)
const router = new Router({
	// mode: 'history', //历史模式, 取消地址栏"#"
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0}//页面切换滚动顶部
	},
  	routes: [
		{path:"*",redirect:'/',meta:{KeepAlive:false}},//重定向首页
		{path:"/",component:home,meta:{KeepAlive:false}},//首页
		{path:"/mapSearch",component:mapSearch,meta:{KeepAlive:false}},//地图找房
		{path:"/searchlist",component:searchlist,meta:{KeepAlive:false}},//搜索列表
		{path:"/contrast",component:contrast,meta:{KeepAlive:false}},//房源对比

		// 二手房
		{path:"/buyHouse",component:buyHouse,meta:{KeepAlive:true}},//我要买房
		{path:"/buyHouse/twoHandHouseDetail/:id",component:twoHandHouseDetail,meta:{KeepAlive:false}},//二手房详情	
	
		// 新房
		{path:"/newHouse",component:newHouse,meta:{KeepAlive:true}},//新房
		{path:"/newHouseDetail/:id",component:newHouseDetail,meta:{KeepAlive:false}},//新房详情

		// 租房
		{path:"/rentHouse",component:rentHouse,meta:{KeepAlive:true}},//租房
		{path:"/rentHouseDetail/:id",component:rentHouseDetail,meta:{KeepAlive:false}},//租房详情

		//小区
		{path:"/houseestate",component:houseestate,meta:{KeepAlive:false}},//小区
		{path:"/estatedetail/:id",component:estatedetail,meta:{KeepAlive:false}},//小区详情

		// 海外置业
		{path:"/forginwork",component:forginwork,meta:{KeepAlive:true}},// 海外置业

		// 旅居投资
		{path:"/residence",component:residence,meta:{KeepAlive:true}},// 旅居投资

		//房屋托管
		{path:"/housetuoguan",component:housetuoguan,meta:{KeepAlive:false}},//房屋托管
		

		//便民服务
		{path:"/convenienceservices",component:convenienceservices,meta:{KeepAlive:false}},//便民服务

		//装修
		{path:"/decoration",component:decoration,meta:{KeepAlive:false}},//装修

		//世华公益
		{path:"/publicgood",component:publicgood,meta:{KeepAlive:false}},//世华公益

		//行业咨询
		{path:"/industryconsultation",component:industryconsultation,meta:{KeepAlive:false}},//行业咨询

		//代办业务
		{path:"/agencyBusiness",component:agencyBusiness,meta:{KeepAlive:false}},//代办业务

		{path:"/consultant",redirect:'/consultant/consultantindex',component:consultant,children:[//咨询
			{path:"consultantindex",component:consultantindex,meta:{KeepAlive:false}},//咨询首页
			{path:"/consultantindexdetail/:id",component:consultantindexdetail,meta:{KeepAlive:false}},//咨询详情
			{path:"consultantbuyhouse",component:consultantbuyhouse,meta:{KeepAlive:false}},//买房咨询
		]},


		{path:"/group",redirect:'/group/groupintourde',component:group,children:[//关于集团
			{path:"groupintourde",component:groupintourde,meta:{KeepAlive:false}},//集团简介
			{path:"groupculture",component:groupculture,meta:{KeepAlive:false}},//集团文化
			{path:"aboutgroup",component:aboutgroup,meta:{KeepAlive:false}},//关于我们
		]},
		
		{path:"/listdetail/:id",component:listdetail,meta:{KeepAlive:false}},//顾问详情
		{path:"/queryinfodetail/:id",component:queryinfodetail,meta:{KeepAlive:false}},//资讯详情
		{path:"/myproblem/",component:myproblem,meta:{KeepAlive:false}},//我要咨询
		{path:"/entrustmentrent/:id",component:entrustmentrent,meta:{KeepAlive:false}},//业主委托我要出售 出租
		{path:"/broker",component:broker,meta:{KeepAlive:false}},//找经纪人
		{path:"/brokerdetail/:id",component:brokerdetail,meta:{KeepAlive:false}},//找经纪人详情
		{path:"/shoper",component:shoper,meta:{KeepAlive:false}},//找门店
		{path:"/shoperdetail",component:shoperdetail,meta:{KeepAlive:false}},//找门店详情
		{path:"/buyhouseguide",component:buyhouseguide,children:[{//购房指南
				path:"guidedetail",component:guidedetail},//指南详情
			]},
		{path:"/industryconsultationDetail",component:industryconsultationDetail},//行业资讯详情
		
		{path:"/mine",redirect:'/mine/indexhome',component:mine,children:[{//我的个人账户
				path:"indexhome",component:indexhome,meta:{KeepAlive:false}},{//账户首页
				path:"indexseeone",component:indexseeone,meta:{KeepAlive:false}},{//待看列表
				path:"indexseetwo",component:indexseetwo,meta:{KeepAlive:false}},{//待看日程
				path:"indexseethree",component:indexseethree,meta:{KeepAlive:false}},{//已看记录
				path:"indexseefour",component:indexseefour,meta:{KeepAlive:false}},{//看房报告
				path:"indexcollection",component:indexcollection,meta:{KeepAlive:false}},{//我的收藏
				path:"indexdelegation",component:indexdelegation,meta:{KeepAlive:false}},{//我的委托
				path:"indexbroker",component:indexbroker,meta:{KeepAlive:false}},{//我的经纪人
				path:"indexconsult",component:indexconsult,meta:{KeepAlive:false}},{//我的咨询
				path:"indexmessage",component:indexmessage,meta:{KeepAlive:false}},{//消息
				path:"indexeditInfo",component:indexeditInfo,meta:{KeepAlive:false}},{//编辑资料
				path:"indexdelegationdetail/:id",component:indexdelegationdetail,meta:{KeepAlive:false}},{//我的委托详情
				path:"comment",component:comment,meta:{KeepAlive:false}} //我的评论
			]},
  	]
})

export default router;