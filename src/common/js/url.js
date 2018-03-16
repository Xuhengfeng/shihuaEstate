let localhostDev = false;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host= localhostDev ? 'http://112.74.181.229:8001' : 'http://39.108.37.60:8008';
let URL = {
    TEXT: _host + '/aglobal_data',
    LODE:_host+'/fjaslfj',
    GAODE:"http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=39.934,116.329&output=json&pois=1&ak=78b5875728ae0f81f08379e3b8790f1e" //高德地图
    
};
export default {URL}