<template>
    <div>
        <div v-show="collecttwohouse.length">
          <div class="collectlist">
              <ul>
                <li :class="index==num?'bgColor':''" 
                    :key="index" 
                    v-for="(item ,index) in tab"
                    @click="change(index)">{{item}}</li>
              </ul>
          </div>
          
          <div class="main">
              <ul>
                <o-HouseList :isShowNum="num" :list="collecttwohouse"></o-HouseList>
              </ul>
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
                 :isEmpty="numbol"></o-empty>
        
    </div>
</template>

<script>
import oHouseList from "../../base/houseList/houseList";
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol:false,
            collecttwohouse: [],//二手房收藏
            IPS:[this.$url.URL.HOUSE_CLLECFTIONLIST, this.$url.URL.RENT_CLLECFTIONLIST, this.$url.URL.BULID_CLLECFTIONLIST,this.$url.URL.BROKERS_collectionlist],
          	num: 0,           //切换 ip 模板 样式
            page: 1,
            tab:["二手房","租房","小区","经纪人"]
        };
    },
    created() {
        this.collectionListRequest(0);
    },
    methods: {
      collectionListRequest(num) {
        this.$http
          .get(this.IPS[num]+"?pageNo="+this.page)
          .then(response => {
            try{
              //修正数据
              response.data.data.forEach(item => {
                item.houseTag = item.houseTag.split(",");
              });
            }
            catch(err){
              console.log(err)
            }
            this.collecttwohouse = response.data.data;
            this.collecttwohouse.length==0? this.numbol=true : this.numbol=false;
          });
      },
      change(num) {
        this.num = num;
        this.collectionListRequest(num);
      },
    },
    components: {
      oHouseList,
      oEmpty
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
.collectlist{
  ul{
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
    li{
      color: white;
      float: left;
      height: 35px;
      width: 112px;
      font-size: 16px;
      text-align: center;
      line-height: 35px;
      cursor: pointer;
    }
  }
}  
.bgColor{
	background: red!important;
	color: #ffffff;
}
</style>