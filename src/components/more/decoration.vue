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
            </ul>
        </div>
    </div>
</template>

<script>
export default {

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
</style>
