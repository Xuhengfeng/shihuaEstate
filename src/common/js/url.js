let localhostDev = false;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host= localhostDev ? '' : 'http://192.168.16.173:7031/custAppApi';
let URL = {
    MAPHOUSEALL: _host + '/map-house/all',//地图找房获取区域级别房源
};
export default {URL}