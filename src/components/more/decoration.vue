<template>
    <div>
        <div class="header">
             <img src="../../imgs/more/zhuang.png">
        </div>
        <div class="container">
            <ul class="shu">
                <li class="shuli">
                    <ol>
                        <li class="fl"><img src="../../imgs/more/fengye.png"/>世华装修</li>
                        <li class="fl word">selection of material</li>
                    </ol>
                </li>
                <li class="shuli">
                    <ol>
                        <li>精选用料</li>
                        <li class="word">selection of material</li>
                    </ol>
                </li>
                <li class="shuli">
                    <ol>
                        <li>细致到角落</li>
                        <li class="word">selection of material</li>
                    </ol>
                </li>
                <li class="shuli">
                    <ol>
                        <li>品质为首</li>
                        <li class="word">selection of material</li>
                    </ol>
                </li>
                 <li class="shuli">
                    <ol>
                        <li class="curle">SH</li>
                    </ol>
                </li>
            </ul>
        </div>
        <div  class="container">
          <div class="Media">
               <p class="Media-body">
                <span class="one">装修就找世华装修</span><br>
               <span class="two">给您致简的享受</span><br>
             
                <span class="engish">Shihua decoration is mainly engaged in interior decoration design, 
                decoration material sales, etc., striving to create a comfortable living environment 
                with high standards, providing customers with one-stop service with high cost performance 
                and high quality. </span>
                </p>
            <img class="Media-figure" src="../../imgs/more/diliang.png" >
            </div>
        </div>
        <div class="container">
            <ul class="shutwo">
                <li v-for="item in imgUrl" >
                       <p class="lou">
                           <span class="wordlou">{{item.content}}</span><br>
                           <span class="office">{{item.txt}}</span>
                        </p>
                    <img :src="item.img"/> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 data() {
    return {
            imgUrl:[{img:require("../../imgs/more/xiezilou.png"),content:"写字楼",txt:"承接写字楼装修"},
            {img:require("../../imgs/more/office.png"),content:"办公室",txt:"承接办公室装修"},
             {img:require("../../imgs/more/hotel.png"),content:"酒店宾馆",txt:"承接酒店宾馆装修"},
              {img:require("../../imgs/more/dianmian.png"),content:"店面",txt:"承接店面装修"},
               {img:require("../../imgs/more/zhuangxiu.png"),content:"门店装修",txt:"承接门店装修"},
                {img:require("../../imgs/more/qita.png"),content:"其他",txt:"承接其他装修"}]
    }
  }
}
</script>

<style  lang="less" scoped>
.header {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    img{
        width: 1920px;
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
    }
}
.shu{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
}
.shutwo{
display: flex;
  flex-wrap: wrap;
  padding-top: 85px;
}
.shutwo>li{
    padding-right: 30px;
    padding-bottom: 45px;
}
.shu ol{
    position: relative;
    line-height: 22px;
}
.shu>li{
    flex: 24px 0 0;
    width: 24px;
}
.word{
    position: absolute;
    top: 80px;
    left: -96px;
    white-space: nowrap;
      height: 7px;
      line-height: 20px;
      transform: rotate(90deg);
      font-size: 18px;
      word-wrap: break-word;
      margin-right: 260px;
     color: #999999;
     margin-right: 0;
}
.shu{
    margin: 90px 0;
}
.curle{
    margin-left: -20px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #222222;
    border-radius: 50%;
}
.Media {
  display: flex;
  align-items: flex-start;
  height: 380px;
}

.Media-figure {
  margin-right: 1em;
}

.Media-body {
    padding-top: 40px;
  flex: 1;
}
.one{
    font-size:30px;
    color:#222222;
    font-weight:bold; 
    padding-left: 20px;
    line-height: 60px;
}
.two{
    font-size:26px;
    color:#666666;
    font-weight:bold;
     padding-left: 20px;
      line-height: 60px;
}
.engish{
    line-height: 30px;
    padding-left: 20px;
    width: 322px;
    height: 163px;
    display: block;
    color: #999999;
}
.lou{
    margin-left: 135px;
    position: absolute;
    margin-top: 60px;
}
.wordlou{
    display: block;
    font-size: 34px;
    color: #222222;
}
.office{
     font-size: 20px;
     color: #666666;
}
</style>
