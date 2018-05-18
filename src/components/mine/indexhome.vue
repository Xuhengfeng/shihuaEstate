/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-18 14:06:18
 */
<template>
    <div>
        <h3>收藏小区动态</h3>
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
h3 {
  height: 120px;
  line-height: 120px;
  font-size: 30px;
  color: #000000;
}
.main {
  padding: 20px;
  border: 1px solid #cacaca;
}
</style>