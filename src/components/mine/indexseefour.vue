<template>
    <div>
        <div v-show="reportList.length">
            <h3>看房报告</h3>
            <ul>
<<<<<<< HEAD
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
=======
                <li :key="index" v-for="(item,index) in reportList" @click="jump()">{{item.summary}}<span>2012.11.11 12:11</span></li>
>>>>>>> master
            </ul>
        </div>
        <!-- 空页面 -->
        <o-empty :titles="'还没有看房报告'" 
                 :btns="'去选房'"
                 :isEmpty="numbol"
                 @myEvent="myEvent"></o-empty>
    </div>
</template>

<script>
import oHouseList from "../../base/houseList/houseList";
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol:false,
            reportList:[],//看房列表
        };
    },
    created() {
        this.reportListRequest();
    },
    methods: {
        //自定义事件 去选房
        myEvent() {
            this.$router.push({path: '/buyHouse'})
        },
        jump(item) {
            let url = item.reportUrl;
            this.$route({path: url});
        },
        reportListRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.REPORT_LIST+"?pageNo="+1+"&scity="+city)
            .then(response => {
                let data = response.data.data;
                data.forEach(item => {
                    //修正时间格式形如2018.01.01
                    item.createDateTime1 = item.createDateTime.split(' ')[0].replace(/[^0-9]/ig, ".").slice(0,-1);
                    item.createDateTime2 = item.createDateTime.split(' ')[1];
                });
                this.reportList = response.data.data;
                this.reportList.length==0? this.numbol=true : this.numbol=false;
            });
        }
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
ul{
    background: #f7f7ff;
    padding: 10px;
    li{
        height: 85px;
        line-height: 85px;
        padding: 0 30px;
        border-bottom: 1px solid #cacaca; 
        span{float: right;}
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