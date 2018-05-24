/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-05-19 15:13:14
 * @description: 列表项
 */
<template>
    <ul>
        <!-- 二手房模板 -->
        <li v-for="item in list" v-show="isShowNum == 1" style=" margin-left: 10px;">
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

        <!-- 租房模板 -->
         <li v-for="item in list" v-show="isShowNum == 2">
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

        <!-- 新房模板 -->
         <li v-for="item in list" v-show="isShowNum == 3">
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
        
        <!-- 小区模板 -->
        <li v-for="item in list" v-show="isShowNum == 4">
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

        <!-- 经纪人模板 -->
        <li v-for="item in list" v-show="isShowNum == 5">
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
</template>

<script>
export default {
    props: {
      list: {type: Array,value: []},//数据导入
      isShowNum: {type: Number,value: 1},//切换模板
    },
    data() {
        return {
          
        }
    },
    methods: {
      
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
.main {padding: 20px}
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
    background: #e6e6e6;
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