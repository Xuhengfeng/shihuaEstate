
<template>
  <!-- 行业资讯详情 -->
	<div>
    <o-Iframe></o-Iframe>
	</div>
</template>

<script>
import oIframe from "../../base/iframe/iframe";
export default {
  data() {
    return {

    }
  },
  components: {
    oIframe
  },
  filters: {
    timefilter(val){
      let html;
      let diff = (new Date().getTime() - val)/1000;
      let h = diff/3600;//小时
      let hours = parseInt(h);
      let m = (h - hours)*60;//分钟
      let minute = parseInt(m);
      let s = (m - minute)*60;//秒
      let second = parseInt(s);
      let day = (h/24)>0? parseInt(h/24): 0;
      if(day==0){
        html = '<p class="hours">'+hours+'</p><p>天</p>';
      }else{
        html = '<p class="day">'+day+'</p><p>天</p>';
      }
      return html;
    }  
  }
};
</script>

<style lang="less" scoped>

</style>





