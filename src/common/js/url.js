let localhostDev = true;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host= localhostDev ? 'http://112.74.181.229:7031/custAppApi' : 'http://custapi.shihua365.xin/custAppApi';

let URL = {
	// 首页
	DEFAULT_CITY: _host + "/dictionary/defaultCity",            //默认城市
	STATISTICS_HOUSEUSED: _host + '/statistics/houseUsed/',     //获取首页房价统计
    HOUSE_RECMDLIST: _host + '/house/recmdList/',               //获取首页二手为你精选列表GET 
    RENTHOUSE_RECMDLIST: _host + '/rentHouse/recmdList/',       //获取首页时尚租房
    HOTBUILDING: _host + '/build/hotBuilding/',                 //获取首页热门小区
   	DICTIONARY_CITYS:_host + '/dictionary/citys',	            //获取城市列表	
	DICTIONARY_DEFAULTCITY:_host + '/dictionary/defaultCity',   //获取默认城市	
	HOUSE_QUERYCOUNT:_host + '/house/queryCount ',              //获取搜索二手房总数量

	// 数据字典
   	DICTIONARY_DICTYPE:_host + '/dictionary/',  				//获取二手房搜索条件字段
	HOUSE_QUERY:_host + '/house/query',							//获取二手房列表全部数据
	HOUSE_GETDETAILINFO:_host + '/house/getDetailInFo/',		//获取二手房详情
	AREA_DISTRICTS:_host + '/area/areaDistricts/', 				//获取二手房搜索条件区域字段
	HOUSE_HOUSESEE:_host + '/house/houseSee/',		            //二手房带看记录
	HOUSE_CLLECFTIONLIST:_host +'/houseCollection/collectionList',//二手房收藏列表
	BULID_CLLECFTIONLIST:_host +'/buildCollection/collectionList',//小区房收藏列表
	RENT_CLLECFTIONLIST:_host +'/rentHCollection/collectionList',//租房收藏列表
	HOUSE_RENTHOUSESEE:_host + '/rentHouse/houseSee/',		    //租房带看记录
	NEWBUILDING_INDEX:_host + '/newbuilding/index',		        //首页新房
	NEWBUILDING_QUERY:_host + '/newbuilding/query/',		    //新房列表
	RENTHOUSE_QUERY:_host + '/rentHouse/query',                 //查询租房列表全部数据
	RENTHOUSE_QUERYCOUNT:_host + '/rentHouse/queryCount',       //获取租房总数量
	RENTHOUSE_GETDATAILINFO:_host + '/rentHouse/getDetailInFo/',//获取租房详情
	MAPHOUSEALL_TREE:_host+'/map-house/all-tree',				//地图找房
	BULIDINFO:_host+'/build/buildInfo/',                        //关联小区
	MAPHOUSEALL_USED_LIST:_host+'/build/same-used/',			//同小区二手房房源
	MAPHOURENT_USED_LIST:_host+'/build/same-rent/',			    //同小区租房房源
	HOUSE_RIMHOUSING:_host+'/house/rimHousing',                 //二手房周边房源
	RENTHOUSE_RIMHOUSING:_host+'/rentHouse/rimHousing',         //租房周边房源/
	BUILDLIST:_host+'/build/buildList/',                        //小区列表
	BUILDINGLISTDZ: _host + "/build/building/dz/",             //栋座号列表
	BUILDINGLISTDYFH: _host + "/build/building/dyfh",          //单元或房号列表
	BUILDLISTINFO:_host+'/build/buildInfo/',                    //小区详情POST{scity}/
	BUILDLIST_COUNT:_host+'/build/buildListCount',              //小区总数量
	BUILDCOLLECTION_ADD:_host+'/buildCollection/add/',          //小区收藏
	BUILDCOLLECTION_CANCEL:_host+'/buildCollection/cancel/',    //取消小区收藏
	BUILDSECOND_HOUSELIST:_host+'/build/secondHouseList/',       //小区二手房
	BUILDCOLLECTION_LIST:_host+'/buildCollection/collectionList',//小区收藏列表
	HOUSECOLLECTION_ADD:_host+'/houseCollection/add/',           //二手房收藏
	HOUSECOLLECTION_CANCEL:_host+'/houseCollection/cancel/',     //取消二手房收藏
	RENTHCOLLECTION_ADD:_host+'/rentHCollection/add/',           //租房收藏
	RENTHCOLLECTION_CANCEL:_host+'/rentHCollection/cancel/',     //取消租房收藏
	
	// 用户登录
	USER_LOGIN:_host+'/member/login',                            //用户登录
	USER_JIGUANGSIGN:_host+'/jiguang/signature',                 //用户极光IM鉴权
	USER_JIGUANGBIND:_host+'/jiguang/binding',                   //用户极光账号和登录账号绑定
	USER_JIGUANGREG:_host+'/jiguang/reguser',                    //用户极光注册
	USER_LOGOUT:_host+'/member/logout',                          //用户退出
	USER_REGISTER:_host+'/member/register',                     //用户注册
	FETCHSMSCODE:_host+'/member/fetchSmsCode',                  //验证码
	SMSCODE_LOGIN:_host+'/member/smsCodelogin',                 //用户手机 验证码登录
	SMSCODE_RESETLOGIN:_host+'/member/resetPassword',           //用户重置密码 验证码登录
	SHOPERS_LIST:_host +'/shop/shops',  					    //找门店

	// 经纪人
	BROKERS:_host +'/broker/',  		         			    //经纪人详情
	BROKERS_LIST:_host +'/broker/brokers',  					//经纪人
	BROKERS_ADD:_host +'/brokerCollection/add/',                //经纪人收藏
	BROKERS_CANCEL:_host +'/brokerCollection/cancel/',           //取消经纪人收藏
	BROKERS_collectionlist:_host +'/brokerCollection/collectionList', //经纪人收藏列表
	BROKERS_LISTCOUNT:_host +'/broker/brokerCount',  			//经纪人数量
	BROKERS_HOUSELIST:_host +'/broker/houseList/',  			//经纪人 -他的在售
	BROKERS_RENTHOUSELIST:_host +'/broker/rentHouseList/',  	//经纪人 -他的在售
	BROKERS_BROKEREVAL:_host +'/brokerEval/fillBrokerEvaluate', //经纪人评价
	


	HOUSE_ENTRUSTAPPLY_SELLHOUSE:_host + "/houseEntrustApply/sellHouse",//出售申请
	HOUSE_ENTRUSTAPPLY_RENTHOUSE:_host + "/houseEntrustApply/rentHouse",//出租申请
	HOUSE_COLLECTIONLIST:_host + "/buildCollection/collectionList",//小区收藏列表
	HOUSE_SECONDHOUSE:_host + "/map-house/coordinate/secondHouse", //坐标找房 二手房
	HOUSE_RENTHOUSE:_host + "/map-house/coordinate/rentHouse",     //坐标找房 租房
	USER_DETAILINFO:_host + "/member/getDetailInfo",               //获取用户详细信息
	TWOHOUSE_CONTRAST:_host + "/contrast/used-house",              //添加二手房对比
	TWOHOUSELIST_CONTRAST:_host + "/contrast/usedList",            //获取二手房对比列表
	JOIN_CONTRAST:_host + "/contrast/joid",                        //加入对比(二手房 新房)
	CANCEL_CONTRAST:_host + "/contrast/cancel",                    //取消对比(二手房 新房)
	APPOINT_READYLIST:_host + "/appoint/readyHouseList",            //待看日程列表
	APPOINT_DETAILLIST:_host + "/appoint/detailLsit",              //待看列表
	APPOINT_CANCEL:_host + "/appoint/cancel",                       //取消待看列表
	APPOINT_ADD:_host + "/appoint/add",                             //加入待看
	APPOINT_HOUSE:_host + "/appoint/house",                         //提交预约
	APPOINT_DELETE:_host + "/appoint/delete/",                     //删除待看列表
	APPOINT_COMPLETE:_host + "/appoint/complete",                  //已看记录列表
	APPOINT_READYHOUSELIST:_host + "/appoint/readyHouseList",      //待看房源列表
	REPORT_LIST:_host + "/report/list",                            //看房报告
	DICTIONARY_CURRENTDATETIME:_host + '/dictionary/currentDateTime',  	   //获取当前时间
	RENT_APPLYLIST:_host + '/houseEntrustApply/queryRentApplyList',  	   //我的出租申请列表
	SELL_APPLYLIST:_host + '/houseEntrustApply/querySellApplyList',  	   //我的卖房申请列表
	MY_SELL_APPLYLIST:_host + '/houseEntrustApply/sell/',					//出售详情
	MY_RENT_APPLYLIST:_host + '/houseEntrustApply/rent/',					//出租详情

	// 我的
	MY_COLLECTIONLIST:_host + "/my/collectionList",                  	//我的经纪人
	MY_COMMENT:_host + "/my/comment",                       			//我的评论
	UPDATE_HEADIMG:_host + "/member/updateHeadImage",                   //修改头像
	UPDATE_NICKNAME:_host + "/member/updateNickName",                   //修改昵称
	UPDATE_PASSWORD:_host + "/member/updatePassword",                   //修改密码
	CONSULTANT_HOT:_host + "/consultant/hot",                         //热门咨询列表
	CONSULTANT_INFO:_host + "/consultant/info",                         //顾问详情
	CONSULTANT_LIST:_host + "/consultant/list",                         //顾问列表
	CONSULTANT_MYCONCERN:_host + "/consultant/my_concern",                //我关注的问题 
	CONSULTANT_MYPROBLEM:_host + "/consultant/my_problem",                //我的提问
	CONSULTANT_PROBLEM_INFO:_host + "/consultant/problem_info",                //问题详情
	CONSULTANT_REMD:_host + "/consultant/remd",                //顾问推荐列表
	CONSULTANT_SUB_PROBLEM:_host + "/consultant/sub_problem",                //向他咨询/提问
	INFOQUERY_CHILD:_host + "/info/query/child",               //获取资讯子栏目列表
	MEMBER_MYINFO:_host + "/member/myinfo",                //获取会员用户信息
};
export default {URL}




