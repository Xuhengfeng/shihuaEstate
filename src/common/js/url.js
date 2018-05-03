let localhostDev = false;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host= localhostDev ? 'http://192.168.16.173:7031/custAppApi' : 'http://112.74.181.229:7031/custAppApi';

let URL = {
	STATISTICS_HOUSEUSED: _host + '/statistics/houseUsed/',     //获取首页房价统计
    HOUSE_RECMDLIST: _host + '/house/recmdList/',               //获取首页二手为你精选列表GET 
    RENTHOUSE_RECMDLIST: _host + '/rentHouse/recmdList/',       //获取首页时尚租房
    HOTBUILDING: _host + '/build/hotBuilding/',                 //获取首页热门小区
   	DICTIONARY_CITYS:_host + '/dictionary/citys',	            //获取城市列表	
	DICTIONARY_DEFAULTCITY:_host + '/dictionary/defaultCity',   //获取默认城市	
	HOUSE_QUERYCOUNT:_host + '/house/queryCount ',              //获取搜索二手房总数量
   	DICTIONARY_DICTYPE:_host + '/dictionary/',  				//获取二手房搜索条件字段
	HOUSE_QUERY:_host + '/house/query',							//获取二手房列表全部数据
	HOUSE_GETDETAILINFO:_host + '/house/getDetailInFo/',		//获取二手房详情
	AREA_DISTRICTS:_host + '/area/areaDistricts/', 				//获取二手房搜索条件区域字段
	HOUSE_HOUSESEE:_host + '/house/houseSee/',		            //二手房带看记录
	HOUSE_RENTHOUSESEE:_host + '/rentHouse/houseSee/',		    //租房带看记录
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
	BUILDLISTINFO:_host+'/build/buildInfo/',                    //小区详情
	BUILDLIST_COUNT:_host+'/build/buildListCount',              //小区总数量
	USER_LOGIN:_host+'/member/login',                           //用户登录
	USER_REGISTER:_host+'/member/register',                     //用户注册
	FETCHSMSCODE:_host+'/member/fetchSmsCode',                  //验证码
	SMSCODE_LOGIN:_host+'/member/smsCodelogin',                 //用户手机 验证码登录
	SMSCODE_RESETLOGIN:_host+'/member/resetPassword',           //用户重置密码 验证码登录
	BROKERS_LIST:_host + '/broker/brokers',  					//经纪人
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
	
    
	
};
export default {URL}