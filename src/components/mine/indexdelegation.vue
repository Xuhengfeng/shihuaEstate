<template>
<div>
    <div class="collectlist">
        <ul>
            <li v-for="(item,index) in sellRent" :class="num==index?'fontColor':''" @click="selectBtn(index)">{{item}}</li>
        </ul>
    </div>
    <div class="oTable">
      <el-table
        :data="tableData"
        @current-change="oneChage"
        style="width: 100%">
        <el-table-column
          prop="applicationTime"
          label="时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="linkman"
          label="名字"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式">
        </el-table-column>
        <el-table-column
          prop="address"
          label="委托房源">
        </el-table-column>
        <el-table-column
          prop="statusname"
          label="状态">
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="oPagination">
        <el-pagination 
            class="fr"
            @current-change="twoChange"
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
        tableData: [],
        selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    this.tableDataRequest(1);
  },
  watch: {
      num() {
        this.tableDataRequest(1);
      }
  },
  methods: {
    //表格
    oneChage(item) {
      this.$router.push({ path: `indexdelegationdetail/${item.id}`,query:{num: this.num}});
    },
    //分页器
    twoChange(val) {
      
    },
    selectBtn(index) {
      this.num = index;
    },
    tableDataRequest(page) {
        let params = {scity: this.selectCity}
        this.$http
            .get(this.IPS[this.num]+`?pageNo=${page}`)
            .then(response=>{
              response.data.data.forEach(item => {
                  switch(item.status){
                    case 'ZERO':item.statusname="申请中";break;
                    case 'ONE':item.statusname="核实中";break;
                    case 'TWO':item.statusname="已发布";break;
                    case 'CANCEL':item.statusname="已取消";break;
                  }
              });
              this.tableData = response.data.data;
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

.oTable{
  margin-top: 30px;
}

.fontColor{
    color: #ffffff!important;
    background: #ff4343;
}
.oPagination{
    padding-top: 20px;
}
</style>

