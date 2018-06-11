/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-07 17:27:12
 */
<template>
    <div>
<<<<<<< HEAD
        <h3>收藏小区动态</h3>
        <div class="main">
            <ul>
                <li v-for="item in indexhome">
                    <div class="image">
                       	<img :src="item.housePic"/>
                    </div>
                    <div class="description">
                        <div class="title">{{item.houseTitle}}</div>
                        <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                        <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTag}}</div>
                        <div class="tag">
                            <span>{{item.houseFeature}}</span>
                            <span>{{item.areaName}}</span>
                            <span>随时看房</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="totalPrice"><span>{{item.saleTotal}}</span>万</div>
                        <div class="sellPrice">单价<span>{{item.salePrice}}</span>元/平米</div>
                    </div>
                </li>
            </ul>
=======
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
>>>>>>> master
        </div>
        <!-- 空页面 -->
        <o-empty :titles="'还没有收藏的房源'" 
                 :isEmpty="numbol"
                 :isShow="false"></o-empty>

    </div>
</template>
<script>
import oHouseList from "../../base/houseList/houseList";
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
<<<<<<< HEAD
            indexhome: [],
=======
            list: [],//二手房数据
            numbol:false,
            selectCity:JSON.parse(localStorage.selectCity),//当前城市
>>>>>>> master
        };
    },
    created() {
        this.collectionListRequest();
    },
    methods: {
<<<<<<< HEAD
        collectionListRequest() {
          // this.$http
          //   .post(this.$url.URL.HOUSE_QUERY, {
          //       headers: {
          //           // "Content-Type": "application/json",
          //           "scity": JSON.parse(localStorage.selectCity).value,
          //           // "unique-code": sessionStorage.token
          //       },
          //       params: {
          //           pageNo: 1
          //       }
          //   })
              this.$http
            .post(this.$url.URL.HOUSE_QUERY, {
              scity: JSON.parse(localStorage.selectCity).value,
              pageNo: 1
            })
          
            .then(response => {
              
                this.indexhome = response.data.data;
                  console.log( this.indexhome )
                // //修正数据
                // response.data.data.forEach(item => {
                //     item.houseTag = item.houseTag.split(",");
                // });
                // this.datalist = response.data.data;
            });
        }
=======
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
              this.list.length==0? this.numbol=true : this.numbol=false;
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
>>>>>>> master
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