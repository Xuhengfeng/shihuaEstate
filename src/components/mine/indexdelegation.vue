<template>
<div>
    <div class="collectlist">
        <ul>
        <li>出售</li>
            <li>出租</li>
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
        <tr v-for="item in 5" @click="change(item)">
             <td>2013-14</td>
            <td >张三</td>
             <td >单价</td>
              <td>联系方式</td>
               <td >申请中</td>
              
        </tr>
    </table>
</div>
</template>

<script>
import { Steps } from "element-ui";
export default {
  data() {
    return {};
  },
  methods: {
    change(item) {
      console.log(item);
      this.$router.push({ path: `indexdelegationdetail/${item.id}` });
    },
    
  }
};
</script>

<style lang="less" scoped>
.collectlist {
  > ul {
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
  }
  > ul > li {
    color: white;
    float: left;
    height: 40px;
    width: 112px;
    font-size: 16px;
    text-align: center;
    line-height: 35px;
  }
}

.collectlistone {
  margin-top: 30px;
  > ul {
    height: 45px;
    background: #ffb2b2;
  }
  > ul > li {
    color: white;
    float: left;
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
      color: #9c9fa1;
      font-weight: 600;
      cursor: pointer;
    }
    &:hover {
      td {
        border-bottom: 1px solid red;
      }
    }
  }
}
</style>