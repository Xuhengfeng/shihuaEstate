<template>
    <div class="item">
        <div v-show="comment.length">
            <ul>
                <li v-for="item in comment">
                    <div class="image" >
                        <img :src="headImage" />
                    </div>
                    <div class="direciton">
                        <div class="introduce"  >{{nickname}}  <span class="commentime">{{item.commentTime}}</span> </div>
                            <div class="text">
                                    {{item.content}}
                            </div>
                        <div class="introduce ">
                            <span class="intrspan one">服务态度</span>
                            <span class="intrspan two">专业知识</span>
                        </div>
                    </div> 
                    <div class="nametag">
                        <div class="imggetwo fl">
                            <img :src="item.brokerPhoto" /> 
                        </div>
                        <span>{{item.emplName}}</span>
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
        <o-empty :titles="'还没有评论信息'" 
                 :isShow="false"
                 :picnum="1"
                 :isEmpty="numbol"></o-empty>
    </div>
</template>

<script>
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol: false,
            comment:"",   //评论
            num:1,
            selectCity: JSON.parse(localStorage.selectCity),//当前城市
            nickname: JSON.parse(sessionStorage.userInfo).nickname,
            headImage: JSON.parse(sessionStorage.userInfo).headImage
        };
    },
    created(){
        this.render();	
    },
    methods:{
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.render(null, val);		
        },
        render(num) {
            //请求评论的列表
            this.$http
                .get(this.$url.URL.MY_COMMENT +'?pageNo='+this.num, {
                    scity:this.selectCity.value,
                })
                .then(response => {
                this.comment = response.data.data;    
                this.comment.length==0?this.numbol=true:this.numbol=false;
             });
        }
    },
    components: {
      oEmpty
    }
}


</script>

<style lang="less" scoped>
//列表项 

.item ul li{
  overflow: hidden;
  display: flex;
  height: 230px;
  border-bottom: 1px solid #cacaca;
  margin-top: 30px;
  flex-flow: row wrap;
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
        margin-left: 10px;
        padding: 5px;
        float: right;
      }
    }
  }
}
.nametag{
    flex: 909px 0 0;
    width: 909px;
    height: 67px;
    background: #e5e5e5;
    >.imggetwo{
        margin-top: 10px;
       flex: 50px 0 0;
        width: 50px;
        height: 50px;
        margin-right: 25px;
        border-radius: 50%;
        cursor: pointer; 
    }img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

}
.introduce {
    width: 750px;
}

.text {
    width: 800px;
    font-size: 14px;
    word-break:break-all; 
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
.commentime{
    font-size: 16px;
    color: #000000;
}
</style>