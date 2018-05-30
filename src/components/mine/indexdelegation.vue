<template>
<div>
    <div class="collectlist">
        <ul>
            <li v-for="(item,index) in sellRent" :class="num==index?'fontColor':''" @click="selectBtn(index)">{{item}}</li>
        </ul>
    </div>
       <div class=" collectlistone">
        <ul>
        <li>时间</li>
         <li>名字</li>
         <li >联系方式</li>
         <li >委托房源</li>
         <li>状态</li>
        </ul>
    </div>
    <table>
        <tr v-for="item in tableData" @click="change(item)">
            <td>2013-14</td>
            <td >张三</td>
            <td >单价</td>
            <td>联系方式</td>
            <td >申请中</td>
        </tr>
    </table>
    <div class="noContent" v-show="!tableData.length">没有数据!</div>
    
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
</template>

<script>
import { Steps } from "element-ui";
export default {
  data() {
    return {
        sellRent: ['出售','出租'],
        num: 0,
        IPS: [this.$url.URL.SELL_APPLYLIST,this.$url.URL.RENT_APPLYLIST],
        tableData: [1],
        selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    // this.tableDataRequest(1);
  },
  watch: {
      num() {
        this.tableDataRequest(1);
      }
  },
  methods: {
    change(item) {
      this.$router.push({ path: `indexdelegationdetail/${item.id}`});
    },
    selectBtn(index) {
        this.num = index;
    },
    tableDataRequest(page) {
        let params = {scity: this.selectCity}
        this.$http
            .get(this.IPS[this.num]+`?pageNo=${page}`)
            .then(data=>{
                console.log(data);
            })
    },
    
  }
};
</script>

<style lang="less" scoped>
.collectlist {
  > ul {overflow:hidden;background: #cccccc}
  > ul > li {
    float: left;
    height: 40px;
    line-height: 40px;
    width: 112px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }
}

.collectlistone {
  margin-top: 30px;
  > ul {
    height: 45px;
    background: #ffb2b2;
  }
  > ul > li {
    float: left;
    color: #000000;
    height: 45px;
    width: 190px;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
  }
}

// body 表格
table {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  th {
    padding: 50px 0 22px;
    text-align: left;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.3);
  }
  tr {
    td {
      overflow: hidden;
      width: 80px;
      height: 48px;
      line-height: 48px;
      max-width: 80px;
      max-height: 48px;
      border: 1px solid #eeeeee;
      box-sizing: border-box;
      text-align: center;
      color: #000000;
      font-weight: 600;
      cursor: pointer;
    }
    &:hover {
      td {
        border-bottom: 1px solid #ff4343;
      }
    }
  }
}
.fontColor{
    color: #ffffff!important;
    background: #ff4343;
}
.oPagination{
    padding-top: 20px;
    border-top: 1px solid #eeeeee;
}
//没有搜索到任何数据
.noContent{
  height: 280px;
  line-height: 280px;
  text-align: center;
  color: #333333;
  font-size: 20px;
}
</style>

