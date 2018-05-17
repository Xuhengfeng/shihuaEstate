<template>
    <div>
        <div class="collectlist">
            <ul>
              <li@click="change(0)">二手房</li>
                <li @click="change(1)">租房</li>
                  <li @click="change(2)">小区</li>
                   <li @click="change(3)">经纪人</li>
             </ul>
          </div>
        <div class="main">
            <ul>
                <li v-for="item in collecttwohouse " v-if="num==0">
                    <div class="image">
                        <img :src="item.housePic">
                    </div>
                    <div class="description">
                        <div class="title">{{item.houseTitle}}</div>
                        <div class="info">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                        <div class="attention">{{item.houseTag}}</div>
                        <div class="tag">
                            <span>{{item.houseFeature}}</span>
                            <span>{{item.areaName}}</span>
                            <span>随时看房</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="totalPrice"><span>{{item.saleTotal}}</span>万</div>
                        <div class="sellPrice">单价<span>{{item.salePrice }}</span>元/平米</div>
                    </div>
                </li>
                 <li v-for="item in collecttwohouse "  v-if="num==1">
                    <div class="image">
                        <img :src="item.housePic">
                    </div>
                    <div class="description" v-if="num==1">
                        <div class="title">{{item.houseTitle}}</div>
                        <div class="info">{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                        <div class="attention">{{item.houseTag}}</div>
                        <div class="tag">
                            <span>{{item.houseFeature}}</span>
                            <span>{{item.areaName}}</span>
                             <span>随时看房</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="housetype"><span>{{item.houseType}}</span></div>
                        <div class="sellPrice">单价<span>{{item.rentPrice }}</span>元/平米</div>
                    </div>
                </li>
                  <li v-for="item in collecttwohouse "  v-if="num==2">
								<div class="image" @click="toSkip(item)">
									<img :src="item.housePic"/>
								</div>
								<div class="direciton">
									<div class="introduce" @click="toSkip(item)" >{{item.buildName}}
									<span class="fr" @click.stop="collection(item,$event)">收藏</span>
              		 </div>
									<div class="introduce"><img src="../../imgs/buyhouse/house.png" />
                    				<span class="word">{{item.areaName}}{{item.districtName}}/在{{item.buildAge}}年建成</span>
                             <span class="fr cout">{{item.saleCount}}<span class="wan">套</span></span>
									<span class="fr prices">{{item.avgSalePrice}}<span class="wan">元/平米</span></span>	
                 </div>
									<div class="introduce"><img src="../../imgs/buyhouse/dingwei.png" />
                  					 <span class="word">在售{{item.saleCount}}套/在租{{item.rentCount}}套</span><span class="fr word">在售小区</span>
                 				 </div>
								</div> 
							</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collecttwohouse: [],//二手房收藏
          	num: 0,           //切换ip
            IPS:[this.$url.URL.HOUSE_CLLECFTIONLIST, this.$url.URL.RENT_CLLECFTIONLIST, this.$url.URL.BULID_CLLECFTIONLIST],
        };
    },
    created() {
        this.collectionListRequest(0);
    },
    methods: {
        collectionListRequest(num) {
          this.num = num;
          this.$http
            .get(this.IPS[num] , {
                headers: {
                    "Content-Type": "application/json",
                    // "scity": JSON.parse(localStorage.selectCity).value,
                    "unique-code": sessionStorage.token
                },
                params: {
                    pageNo: 1
                }
            })
            .then(response => {
                this.collecttwohouse = response.data.data;
                
                // //修正数据
                // response.data.data.forEach(item => {
                //     item.houseTag = item.houseTag.split(",");
                // });
                // this.datalist = response.data.data;
            });
        },
        change(num) {
					//同小区二手房房源
					this.collectionListRequest(num);
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
  padding: 35px;
  border: 1px solid #cacaca;
  > ul > li {
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
      .housetype {
        margin-bottom: 30px;
        margin-top: 50px;
        span {
          font-size: 12px;
        }
      }
      .sellPrice {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}

.collectlist{
  >ul{
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
  }
  >ul>li{
    color: white;
    float: left;
    height: 35px;
    width: 112px;
    font-size: 16px;
    text-align: center;
    line-height: 35px;
  }
}


//列表项 

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
  margin-right: 230px;
  font-size: 24px;
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
</style>