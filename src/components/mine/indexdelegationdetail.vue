<template>
<div>
    <div class="collectlist">
        <ul>
        <li>委托详情</li>
        </ul>
    </div>
    <div class="step">
      <el-steps :space="200" :active="active" finish-status="success">
        <el-step title="申请中"></el-step>
        <el-step title="核实中"></el-step>
        <el-step title="已发布"></el-step>
        <el-button class="btn" @click="next">委托</el-button>
      </el-steps>
    </div>
    
    
</div>
</template>

<script>
 export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style lang="less" scoped>

.collectlist{
  >ul{
    height: 35px;
    background: rgba(0, 0, 0, 0.3);
  }
  >ul>li{
    color: white;
    float: left;
    height: 40px;
    width: 112px;
    font-size: 16px;
    text-align: center;
    line-height: 35px;
  }
}

.step{
  margin-top: 30px;
  
}
.btn{
    margin-top: 12px;
    width: 110px; 
    border-radius:10px; 
    height:40px;
  }



</style>