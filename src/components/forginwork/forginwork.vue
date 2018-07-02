<template>
    <div class="home">
        <div class="header">
            <img src="../../imgs/home/zhuone.png">
        </div>
        <div class="message">
            <ul>
                <li><img src="../../imgs/home/qidai.png"/></li>
                <li>商务合作<span style="margin-left:10px;">欢迎咨询</span></li>
                <li>电话：0771-5652566</li>
                <li>http://www.shihua365.cn</li>
                <li>南宁市青秀区懂葛路118号青秀万达写字楼西二栋47层</li>
            </ul>
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
.message{
    text-align: center;
    
}
.message>ul{
    padding: 96px 0 106px 0;
}
.message>ul>li:nth-child(2){
    padding:60px 0 50px 0;
    color: #9d6224;
    font-size: 36px;
}
.message>ul>li:nth-child(3){
    padding:0 0 20px 0;
    color: #9d6224;
    font-size: 18px;
}
.message>ul>li:nth-child(4){
    padding:0 0 20px 0;
    color: #9d6224;
    font-size: 18px;
}
.message>ul>li:nth-child(5){
    padding:0 0 20px 0;
    color: #9d6224;
    font-size: 18px;
}
</style>
