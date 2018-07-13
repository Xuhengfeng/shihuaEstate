<template>
    <div>
        <div class="header">
            <img src="../../imgs/home/touzi.jpg">
        </div>
        <div class="morrcity">
            <div class="container">
                <ul class="city">
                <li>北海</li>
                <li>威海</li>
                <li>大理</li>
                <li>湛江</li>
                <li>桂林</li>
                <li>海口</li>
                <li>琼海</li>
                <li>南宁</li>
                <li>阳江</li>
                <li>惠州</li>
                <li>河源</li>
                <li>清远</li>
                <li>贵阳</li>
                <li>柳州</li>
                <li>衡阳</li>
                <li>岳阳</li>
                <li>防港城</li>
                <li>汕头</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 500px;
    position: relative;
    img{
        width: 1920px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
}
.morrcity{
    height: 480px;
    background: #f9f9f9;
}
.city>li{
    text-align: center;
    line-height: 67px;
    width: 125PX;
    height: 67px;
    float: left;
    margin-right: 65px;
    margin-top: 50px;
    background:white;
    color: #000000;
}
</style>
