/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-06 15:30:12
 */
<template>
    <div>
        <div v-show="list.length">
            <h3>收藏小区动态</h3>
            <div class="main">
                <o-house-list :list="list" :isShowNum="0"></o-house-list>
            </div>
            <!-- 分页器 -->
            <div class="oPagination">
                <el-pagination 
                    class="fr"
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
        <!-- 空页面 -->
        <o-empty :titles="'还没有收藏的房源'" 
                 :isShow="false"
                 v-show="!list.length"></o-empty>

    </div>
</template>
<script>
import oHouseList from "../../base/houseList/houseList";
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            list: [],//二手房数据
            selectCity:JSON.parse(localStorage.selectCity),//当前城市
        };
    },
    created() {
        this.collectionListRequest();
    },
    methods: {
        collectionListRequest(num) {
          this.$http
          .post(this.$url.URL.HOUSE_QUERY, {
            scity: JSON.parse(localStorage.selectCity).value,
            pageNo: num
          })
          .then(response => {
              //修正数据
              response.data.data.forEach(item => {
                  item.houseTag = item.houseTag.split(",");
              });
              this.list = response.data.data;
          });
        },
        handleCurrentChange(val) {
           console.log(`当前页: ${val}`);
        this.collectionListRequest( val);		
        },
    },
    components: {
        oHouseList,
        oEmpty
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
.oPagination{
    padding-top: 20px;
    border-top: 1px solid #eeeeee;
}
</style>