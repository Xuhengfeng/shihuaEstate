/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-18 14:03:41
 * @description: 房源列表项
 */
<template>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            indexhome: [],
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
              this.indexhome = response.data.data;
              // //修正数据
              // response.data.data.forEach(item => {
              //     item.houseTag = item.houseTag.split(",");
              // });
              // this.datalist = response.data.data;
          });
        }
    }
};
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
}
ul > li {
  display: flex;
  flex-flow: row nowrap;
  padding: 20px 0;
  border-bottom: 1px solid #cacaca;
  // 左边
  .image {
    flex: 232px 0 0;
    width: 232px;
    height: 175px;
    margin-right: 35px;
    background: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 中间
  .description {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      font-size: 22px;
      color: #000000;
    }
    .info {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    .attention {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    .tag > span {
      padding: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      &:nth-of-type(1) {
        background: #edf9ff;
        color: #00a8ff;
      }
      &:nth-of-type(2) {
        background: #fff2ed;
        color: #ff7f50;
      }
      &:nth-of-type(3) {
        background: #ebfff3;
        color: #00b969;
      }
    }
  }
  // 右边
  .r-content {
    flex: 150px 0 0;
    width: 150px;
    text-align: right;
    .collection {
      font-size: 16px;
      margin-bottom: 30px;
      color: #000000;
    }
    .totalPrice {
      color: red;
      font-size: 14px;
      margin-bottom: 30px;
      span {
        font-size: 24px;
        margin-right: 10px;
      }
    }
    .sellPrice {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>