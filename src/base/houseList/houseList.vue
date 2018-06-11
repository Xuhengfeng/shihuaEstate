/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-06 15:17:44
 * @description: 列表项
 */
<template>
    <ul>
        <!-- 二手房模板 -->
        <li v-for="item in list" v-show="isShowNum == 0">
            <div class="image">
                <img :src="item.housePic"/>
            </div>
            <div class="description">
                <div class="title">{{item.houseTitle}}</div>
                <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTitle}}</div>
                <div class="tag">
                    <span v-for="item2 in item.houseTag">{{item2}}</span>
                </div>
            </div>
            <div class="r-content">
                <div class="collection">收藏</div>
                <div class="totalPrice"><span>{{item.saleTotal}}</span>万</div>
                <div class="sellPrice">单价<span>{{item.salePrice}}</span>元/平米</div>
            </div>
        </li>

        <!-- 租房模板 -->
         <li v-for="item in list" v-show="isShowNum == 1">
            <div class="image">
                <img :src="item.housePic">
            </div>
            <div class="description">
                <div class="title">{{item.houseTitle}}</div>
                <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTitle}}</div>
                <div class="tag">
                    <span v-for="item2 in item.houseTag">{{item2}}</span>
                </div>
            </div>
            <div class="r-content">
                <div class="collection">收藏</div>
                <div class="housetype"><span>{{item.houseType}}</span></div>
                <div class="sellPrice">单价<span>{{item.rentPrice }}</span>元/平米</div>
            </div>
        </li>

        <!-- 小区模板 -->
        <li v-for="item in list" v-show="isShowNum == 2">
           <div class="image" @click="toSkip(item)">
                <img :src="item.housePic"/>
            </div>
            <div class="direciton">
                <div class="introduce" @click="toSkip(item)" >{{item.buildName}}
                <span class="fr" @click.stop="collection(item,$event)">收藏</span>
            </div>
            <div class="introduce">
                <img src="../../imgs/buyhouse/house.png" />
                <span class="word">{{item.areaName}}{{item.districtName}}/在{{item.buildAge}}年建成</span>
                <span class="fr cout">{{item.saleCount}}<span class="wan">套</span></span>
                <span class="fr prices">{{item.avgSalePrice}}<span class="wan">元/平米</span></span>	
            </div>
                <div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" />
                    <span class="word">在售{{item.saleCount}}套/在租{{item.rentCount}}套</span><span class="fr word">在售小区</span>
                </div>
            </div> 
        </li>
        
        <!-- 经纪人模板 -->
        <li v-for="item in list" v-show="isShowNum == 3">
           <div class="image" @click="toSkip(item)">
                <img :src="item.photo"/>
            </div>
            <div class="direciton">
                <div class="introduce" @click="toSkip(item)"> {{item.emplName}}</div>
                <div class="introduce">
                <span class="word">{{item.deptName}}</span>
            <span class="fr pricestwo">{{item.grade+'.0'}}<span class="grade">评分</span></span>
            <span class="fr call">联系电话：1111111111{{item.phone}}</span>
            </div>
                <div class="introduce">
                <span class="intrspan one">销售达人</span>
                <span class="intrspan two">销售达人</span>
                <span class="intrspan three">销售达人</span>
            </div>
            </div> 
        </li>

        <!-- 新房模板 -->
        <li v-for="item in list" v-show="isShowNum == 4">
            <div class="image">
                <img :src="item.housePic"/>
            </div>
            <div class="description">
                <div class="title">{{item.houseTitle}}</div>
                <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTag}}</div>
                <div class="tag">
                    <span v-for="item2 in item.houseTag">{{item2}}</span>
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
        list: {//数据导入
          type: Array,
          value: []
        },
        isShowNum: {//切换模板
            type: Number,
            value: 0
        },
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
    overflow: hidden;
    img {width: 100%}
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
      margin-right: 10px;
      &:nth-of-type(1) {background: #edf9ff;color: #00a8ff}
      &:nth-of-type(2) {background: #fff2ed;color: #ff7f50}
      &:nth-of-type(3) {background: #ebfff3;color: #00b969}
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
    .totalPrice{
      color: red;
      font-size: 14px;
      margin-bottom: 30px;
      span {font-size: 24px;margin-right: 10px}
    }
    .housetype{
      font-size: 14px;
      margin-bottom: 30px;
    }
    .sellPrice {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}


// 小区列表项
.direciton{
    flex: 1;
    display: flex;
    height: 90px;
    margin-top: 40px;
    flex-flow: column nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      font-size: 22px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      cursor: pointer;
      span{
        color:rgba(0,0,0,0.5);
        margin-left: 10px;
        padding: 5px;
        font-size: 10px;
        border: 1px solid #cacaca;
        visibility: hidden;
        &:hover{
          color: #000000;
        }
      }
    }
  }
  &:hover .direciton>div:nth-of-type(1) span{
    visibility: visible;
  }
  .introduce .word {
   font-size: 14px;
  vertical-align: top;
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
     font-family: tahoma;
    position: relative;
    right:210px;
    font-size: 24px!important;
    color: rgba(239, 31, 31, 0.85);
    font-weight: bold;
}
.pricestwo{
     font-family: tahoma;
    position: relative;
    right: 290px;
    font-size: 24px!important;
    color: rgba(239, 31, 31, 0.85);
    font-weight: bold;
}
.cout{
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
}
.wan {
  font-size: 14px;
}
.call{
  position: relative;
  right: 0px;
}
.grade{
  margin-left: 4px;
  letter-spacing: 1px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6)
}
.intrspan {
  width: 70px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.one {
  background-color: #e5f2ff;
  color: rgba(0, 85, 164, 0.85);
}
.two {
  background-color: #fde8e8;
  color: rgba(239, 31, 31, 0.85);
}
.three {
  background: #e1f5ed;
  color: #33be85;
}
</style>