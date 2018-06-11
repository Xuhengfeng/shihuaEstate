<template>
    <div class="item">
        <div v-show="broker.length">
            <ul>
                <li v-for="item in broker">
                    <div class="image" @click="toSkip()">
                        <img :src="item.photo" />
                    </div>
                    <div class="direciton">
                        <div class="introduce" @click="toSkip()" >{{item.emplName}}  </div>
                            <div class="introduce">
                                <span class="word">{{item.deptName}}</span>
                                <span class="fr prices" v-if="item.status == 0">{{item.grade}}.0<span class="grade">评分</span></span>
                                <span class="fr prices" v-if="item.status == 1">离职</span>
                                <span class="fr call">联系电话：{{item.phone}}</span>
                            </div> 
                        <div class="introduce ">
                            <span class="intrspan one">销售达人</span>
                            <span class="intrspan two">销售达人</span>
                            <span class="intrspan three">销售达人</span>
                        </div>
                    </div> 
                </li>
            </ul>
            <!--分页器-->
            <div class="oPagination">
                <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="1000"
                    class="fr pagination">
                </el-pagination>
            </div>
        </div>
        <!-- 空页面 -->
        <o-empty :titles="'还没有添加经纪人'" 
                 :picnum="3"
                 :isShow="false"
                 :isEmpty="numbol"></o-empty>
                 
    </div>
</template>

<script>
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol: false,
            broker: [],   //经纪人
            num:1,
            selectCity: JSON.parse(localStorage.selectCity),//当前城市
        };
    },
    created(){
        this.render();	
    },
    methods:{
        handleCurrentChange(val) {
            this.render(null, val);		
        },
        render(num) {
            //请求经纪人的列表
            this.$http
                .get(this.$url.URL.MY_COLLECTIONLIST +'?pageNo='+this.num, {
                    scity:this.selectCity.value
                })
                .then(response => {
                this.broker = response.data.data;    
                this.broker.length==0? this.numbol=true : this.numbol=false;
             });
        }
    },
    components:{
      oEmpty
    }
   
}


</script>

<style lang="less" scoped>
//列表项 

.item ul li{
  overflow: hidden;
  display: flex;
  height: 120px;
  border-bottom: 1px solid #cacaca;
  margin-top: 30px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .image{
    flex: 90px 0 0;
    width: 90px;
    height: 90px;
    margin-right: 25px;
    background: #f5f5f5;
     border-radius: 50%;
    cursor: pointer;
    img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .direciton{
    flex: 1;
    display: flex;
    height: 90px;
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
}

introduce span {
  font-size: 14px;
}

.introduce .word {
  vertical-align: top;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  font-family: tahoma;
  position: relative;
  right: 370px;
  font-size: 24px!important;
  color: rgba(239, 31, 31, 0.85);
  
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
.wan {
  font-size: 14px;
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