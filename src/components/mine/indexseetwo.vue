<template>
    <div>
        <div class="header">
            <div class="description">
                <div>
                    <span class="time">2018.11.02</span> 
                    <span class="day">全天</span>
                    <div class="status">
                        <span>确认中</span>
                        <span>预约成功</span>
                        <span>已取消</span>
                    </div>
                </div>
                <div>约看2套房</div>
                <div>取消预约</div>
            </div>
            <div class="broker">
                <img src="../../imgs/home/avatar.png">
                <div>
                    <p><span>张三</span>高级经纪人</p>
                    <p>123 1234 1234</p>
                </div>
            </div>
        </div>
        <o-house-list></o-house-list>
    </div>
</template>

<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
        
        };
    },
    components: {
        oHouseList
    }
}
</script>

<style lang="less" scoped>
.header{
    overflow: hidden;
    padding-top: 60px;
    border-bottom: 1px solid #cacaca;
    .description{
        .time{float:left;margin: 5px 15px 0;font-size: 18px;color: #000000}
        .day{float:left;margin: 5px 25px 0}
        .status{
            float: left;
            span{float:left;display: inline-block;padding: 5px 10px;background: #e5e5e5;border-radius: 10px;}
        }
    }
}
</style>