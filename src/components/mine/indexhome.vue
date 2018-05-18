/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-19 00:52:29
 */
<template>
    <div>
        <h3>收藏小区动态</h3>
        <div class="main">
            <o-house-list :list="list" :isShowNum="isShowNum"></o-house-list>
        </div>
    </div>
</template>
<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
            list: [],//二手房数据
            isShowNum: 1,//模板1渲染
        };
    },
    created() {
        this.collectionListRequest();
    },
    methods: {
        collectionListRequest() {
          this.$http
          .post(this.$url.URL.HOUSE_QUERY, {
            scity: JSON.parse(localStorage.selectCity).value,
            pageNo: 1
          })
          .then(response => {
             this.list = response.data.data;
              // //修正数据
              // response.data.data.forEach(item => {
              //     item.houseTag = item.houseTag.split(",");
              // });
              // this.datalist = response.data.data;
          });
        }
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