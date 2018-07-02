<template>
    <div>
        <div class="header">
            <img src="../../imgs/home/touzi.jpg">
        </div>
        <div class="morrcity">
            <div class="container">
                <ul class="city">
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
                <li>北海</li>
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
