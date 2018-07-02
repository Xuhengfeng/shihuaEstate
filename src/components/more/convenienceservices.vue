
<template>
  <!-- 便民服务  -->
	<div>
    <div class="header">
      <img src="../../imgs/more/bianming.png">
    </div>
    <div class="main">
        <div></div>
        <section><img src="../../imgs/more/bianming2.png"></section>
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
.main{
  overflow: hidden;
}
.main section{
  text-align: center;
}
</style>