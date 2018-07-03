
<template>
  <!-- 便民服务  -->
	<div>
    <div class="header">
      <img src="../../imgs/more/bianming.png">
    </div>
    <div class="main">
        <section>
          <div class="title">
            <div class="fl line"></div>
            <h4>便民类目</h4>
            <div class="fr line"></div>
          </div>
          <div class="bgserver"><img src="../../imgs/more/bianming2.png"></div>
        </section>

        <section>
          <div class="title">
            <div class="fl line"></div>
            <h4>便民宗旨</h4>
            <div class="fr line"></div>
          </div>
          <div class="view container">
            <img src="../../imgs/more/bianming3.png">
            <div class="colorBox">
              <p>凡是有世华易居门店的地方，您只需推门即可免费获得以下帮助：
                便民饮水服务、应急卫生间、应急雨具、应急充电、复印、上网、市话等……</p>
              <p>世华易居能为您提供的服务当然不只这些，每一位有困难的人，只要进入世华易居门店求助，均可获得世华人无偿的爱心服务，世华人将尽自己最大努力为您提供帮助。</p>
              <p>世华易居的门店建设理念是，每一个世华易居门店，都是一个爱心小站，是一个正能量传播源头！世华易居希望用自己的真诚为身边的人带来方便，不再为意外的小事烦恼，并为此坚持不懈地努力！</p>     
            </div>
          </div>
        </section>
    </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  }
};
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 660px;
    position: relative;
    img{
        width: 1920px;
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
    }
}
.main{
  overflow: hidden;
}
.main .title{
  width: 750px;
  margin: 94px auto 112px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  flex-flow:  row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  color: #222222;
}
.main section:nth-of-type(1){
  overflow: hidden;
  background: #ffffff;
  height: 695px;
}
.main section:nth-of-type(2){
  overflow: hidden;
  background: #f5f5f5;
  height: 870px;
}
.main .title h4::after,
.main .title h4::before{
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background: red;
  transform: rotate(-45deg);
  margin: 8px 10px;
}
.main .title .line{
  height: 1px;
  width: 206px;
  background: #dddddd;
}
.main .bgserver{
  text-align: center;
}
.view{
  position: relative;
}
.colorBox{
  position: absolute;
  right: 0;
  top: 40px;
  background: #a6865f;
  width: 667px;
  height: 493px;
  box-sizing: border-box;
  padding: 20px;
}
.colorBox p{
  line-height: 1.5;
  text-indent: 20px;
  text-align: justify;
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>