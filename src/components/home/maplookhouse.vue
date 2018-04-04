<template>
    <!-- 地图找房 -->
    <div class="maplookhouse">
        <div class="header">
            <div class="header-hd">
                <div class="logo fl">
                    <img src="../../imgs/home/logo1.png"/>
                </div>
                <div class="fr">
                    <div>
                        <div class="iconfont icon-yonghu" v-if="rightnow">
                            <span class="login" @click="loginResize()">登录</span>|
                            <span class="logout" @click="rightResize()">立即注册</span>
                        </div>
                        <div class="iconfont icon-yonghu" v-else><span class="login">徐横峰</span>|<span class="logout">退出</span></div>
                    </div>
                </div>
                <div class="menu fr">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>    
            <div class="header-bd">
                
            </div>
        </div> 
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        created() {
            this.houseAll()//区域级别房源
        },
        methods: {
            //区域级别房源
            houseAll() {
                this.$http.post(this.$url.URL.MAPHOUSEALL, {
                    scity: 'beihai'
                })
                .then((res)=> {
                    console.log(res)
                })
                .catch((error)=> {
                    console.log(error)
                })
            }
        },
        mounted() {
            console.log(this.$url.URL)
            //创建和初始化地图函数：
        function initMap() {
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMapOverlay();//向地图添加覆盖物
        }
        
        function createMap() {

            map = new BMap.Map("map",{
                minZoom: 13,
                maxZoom: 18
            });
            map.centerAndZoom(new BMap.Point(109.228518, 21.496304), 13);
 
            function myFun(result) {
                console.log(result)
                var cityName = result.name;
                map.setCenter("cityName");
                //alert("当前定位城市:" + cityName);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
        }
        
        function setMapEvent() {
            map.enableScrollWheelZoom();
            map.enableKeyboard();
            map.enableDragging();
            map.enableDoubleClickZoom()
        }
        function addClickHandler(target,poi, window) {
 
            //pop弹窗标题  
            var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
            //pop弹窗信息  
            var html = [];
            html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
            html.push('<tr>');
            html.push('<td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">建设内容:</td>');
             
            html.push('<tr>');
            html.push('<td style="text-align:left;">' + poi.content + ' </td>');
            html.push('</tr>');
            html.push('</tbody></table>');
            var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });
 
            target.addEventListener("click", function () {
                target.openInfoWindow(infoWindow);
            });
 
              
            map.addEventListener("zoomend", function () {
                var DiTu = this.getZoom();
                var allOverlay = map.getOverlays();
                if (DiTu >= 13)
                {
                    for (var i = 0; i < allOverlay.length - 1 ; i++) {
                        if (allOverlay[i].toString() == "[object Marker]")
                        {
                             
                        }
 
                    }
                }
                else
                {
 
                }
 
                //map.removeEventListener("zoomend", showInfo);
            });
        }
         
 
        function addMapOverlay() {
            var markers = [
                {MingCheng: "1(前期项目)",  content: "<p style='text-align:right;'>1</p>", title: "<a href='/Admin/Project/pro_qqdetails.aspx?ID=581&PageUrl=/Admin/Project/map.aspx'>1</a>(前期项目)", imageOffset: { width: -23, height: -21 }, position: { lat: 37.983687, lng: 114.639084 } },{MingCheng: "19(前期项目)",  content: "<p style='text-align:right;'>9</p>", title: "<a href='/Admin/Project/pro_qqdetails.aspx?ID=582&PageUrl=/Admin/Project/map.aspx'>19</a>(前期项目)", imageOffset: { width: -23, height: -21 }, position: { lat: 37.975951, lng: 114.603152 } }
            ];
            for (var index = 0; index < markers.length; index++) {
                var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
                var marker = new BMap.Marker(point, {
                    icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {
                        imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
                    })
                });
                var label = new BMap.Label(markers[index].title, { offset: new BMap.Size(25, 5) });
                var opts = {
                    width: 200,
                    title: markers[index].title,
                    enableMessage: false
                };
                var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
                marker.setLabel(label);
                marker.setTitle(markers[index].MingCheng);
 
                addClickHandler(marker,markers[index], infoWindow);
                map.addOverlay(marker);
            };
        }
        //向地图添加控件
        function addMapControl() {
 
            //添加城市查询 start
            var size = new BMap.Size(10, 20);
            map.addControl(new BMap.CityListControl({
                anchor: BMAP_ANCHOR_TOP_LEFT,
                offset: size,
            }));
            //添加城市查询 end
 
            //比例尺 start
            var scaleControl = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
            scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
            map.addControl(scaleControl);
            //比例尺 end
 
            //比例尺控件 start
            //var navControl = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
            //map.addControl(navControl);
            //比例尺控件 end
 
            //小地图 start
            var overviewControl = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: true });
            map.addControl(overviewControl);
            //小地图 end
        }
        var map;
        initMap();
        }  
    }
</script>

<style scoped="scoped">
.maplookhouse{
    width: 100%;
    height: 100%;
}
#map{
    width: 100%;
    height: 100%;
}
.header .header-hd{
    overflow: hidden;
}
.header .logo{
    height: 60px;
    line-height: 90px;
    background: red;
}
.header .logo img{
    zoom: 0.9
}
.header .menu li{
    float: left;
    height: 60px;
    line-height: 60px;
}
</style>