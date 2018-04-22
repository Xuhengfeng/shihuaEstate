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
   	AREA_DISTRICTS:_host + '/area/areaDistricts/', 				//获取二手房搜索条件区域字段
	RENTHOUSE_QUERY:_host + '/rentHouse/query',                 //查询租房列表全部数据
	RENTHOUSE_QUERYCOUNT:_host + '/rentHouse/queryCount',       //获取租房总数量
   	MAPHOUSEALLTREE:_host+'/map-house/all-tree',					//地图找房
   	
      
};
export default {URL}