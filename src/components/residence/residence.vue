<template>
    <div>
        <div class="header">
            <img src="../../imgs/home/touzi.jpg">
        </div>
        <div class="morrcity">
            <div class="container">
                <ul class="city">
                <li v-for="(item,index) in eightycity" @click="citypicture(item,index)">{{item.city}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                eightycity:[
                    {city:"北海"},{city:"威海"},{city:"大理"},{city:"湛江"},
                    {city:"桂林"},{city:"海口"},{city:"琼海"},{city:"南宁"},
                    {city:"阳江"},{city:"惠州"},{city:"河源"},{city:"清远"},
                    {city:"贵阳"},{city:"柳州"},{city:"衡阳"},{city:"岳阳"},
                    {city:"防港城"},{city:"汕头"}
                    ]
            }
        },
         methods:{
             citypicture(item,index){
                  this.$router.push({ path: "/city/"+index});
             }
         }


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
