<template>
<div>
    <div class="collectlist">
        <ul>
        <li>委托详情</li>
        </ul>
    </div>
    <div class="step">
      <el-steps :space="200" :active="active" finish-status="success" v-if="isCancel">
        <el-step title="申请中"></el-step>
        <el-step title="核实中"></el-step>
        <el-step title="已发布"></el-step>
        <el-button class="btn" @click="cancel()">取消委托</el-button>
      </el-steps>
      <div class="cancelConfirm" v-if="!isCancel">委托已取消</div>
    </div>
    <div class="main">
       <div class="one">
          <h3>温馨小区房源委托申请</h3>
          <ul>
            <li>姓名: {{houseDetail.linkman}}</li>
            <li>城市: {{houseDetail.cityCode}}</li>
            <li>电话: {{houseDetail.phone}}</li>
            <li>具体地址: {{houseDetail.address}}</li>
          </ul>
       </div>
       <!-- 申请中 核实中-->
       <div class="two" v-show="active==0||active==1">
         <h3>跟进人</h3>
         <div class="description">
           <div class="image"><img :src="houseDetail.broker.phone"></div>
           <ul>
              <li class="name"><span>{{houseDetail.broker.emplName}}</span>{{houseDetail.broker.positionName}}</li>
              <li class="province"><span>{{houseDetail.broker.deptName}}</span></li>
              <li class="tags"><span v-for="dataDetail in 3">{{dataDetail}}</span></li>
           </ul>
           <div class="telphone">
             联系电话:<br>
             {{houseDetail.broker.phone.slice(0,3)}} 
             {{houseDetail.broker.phone.slice(3,8)}} 
             {{houseDetail.broker.phone.slice(8,11)}} 
           </div>
         </div>
       </div>
       <!-- 已发布 -->
       <div class="three" v-show="active==2">
          <h3>委托房源</h3>
          <div>
            <div class="image">
                <img :src="dataDetail.housePic"/>
            </div>
            <div class="description">
                <div class="title">{{dataDetail.houseTitle}}</div>
                <div class="info"><img src="../../imgs/buyhouse/house.png" />{{dataDetail.districtName}}|{{dataDetail.houseType}}|{{dataDetail.builtArea}}平|{{dataDetail.houseDirection }}</div>
                <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{dataDetail.houseTag}}</div>
                <div class="tag">
                    <span>{{dataDetail.houseFeature}}</span>
                    <span>{{dataDetail.areaName}}</span>
                    <span>随时看房</span>
                </div>
            </div>
            <div class="r-content">
                <div class="collection">收藏</div>
                <div class="totalPrice"><span>{{dataDetail.saleTotal}}</span>万</div>
                <div class="sellPrice">单价<span>{{dataDetail.salePrice}}</span>元/平米</div>
            </div>
          </div>
       </div>
    </div>
    
    <!-- 房源动态 -->
    <div class="four" v-show="active==2">
      <h3>房源动态</h3>
      <div>
        <div>
            <div>近7日带看(次)</div>
            <div>26</div>
        </div>
        <div>
            <div>近30日带看(次)</div>
            <div>26</div>
        </div>
        <div>
            <div>收藏房源</div>
            <div>26</div>
        </div>
      </div>
    </div>
    
    <!-- 带看记录 -->
    <div class="five" v-show="active==2">
        <h4>带看记录</h4>
        <ul>
          <li><div>看房日期</div><div>带看人</div><div>联系经纪人</div></li>
          <li v-for="item in 3"><div>2018.05.15</div><div>张三</div><div><img src="../../imgs/home/phone.png"></div></li>
        </ul>
        <div class="btn">
          <div class="prev"><</div>
          <div class="next">></div>
        </div>
    </div>
</div>
</template>

<script>
 export default {
    data() {
      return {
        dataDetail: {
          housePic: null,
          houseTitle: null,
          districtName: null,
          houseType: null,
          builtArea: null,
          houseDirection: null,
          houseFeature: null,
          areaName: null,
          saleTotal: null,
          salePrice: null
        },
        active: 0,
        houseDetail: null,
        isCancel: true,//是否取消预约
        IPS:[this.$url.URL.MY_SELL_APPLYLIST, this.$url.URL.MY_RENT_APPLYLIST],//出售 出租
        IPS2:[this.$url.URL.MY_SELL_CANCEL, this.$url.URL.MY_RENT_CANCEL],//取消出售 取消出租
        num: 0,//0出售 1出租
        id: null,
      };
    },
    created() {
      this.id = parseInt(this.$route.params.id);
      this.num = this.$route.query.num;
      this.houseDetailRequest(this.id);
    },
    methods: {
      //状态检测
      statusParse(status) {
        switch(status){
          case 'ZERO':this.active=0;break;//申请中
          case 'ONE':this.active=1;break;//核实中
          case 'TWO':this.active=2;break;//已发布
          case 'CANCEL':this.active=3;break;//取消
        }
      },
      houseDetailRequest(id) {
        this.$http
            .get(this.IPS[this.num]+`${id}`)
            .then(res=>{
              this.statusParse(res.data.data.status)
              this.houseDetail = res.data.data;
            })
      },
      //取消委托
      cancel() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.cancelRequest(value)
        });
      },
      cancelRequest(value) {
        let params = {
          cancelCause: value,
            id: this.id
        }
        this.$http
            .put(this.IPS2[this.num],params)
            .then(res=>{
              this.isCancel = false;
              this.$message({type: 'success',message: '取消委托成功!'});
            })
      }
    }
  }
</script>

<style lang="less" scoped>

.collectlist{
  >ul{
    height: 35px;
    background: #e5e5e5;
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
  margin: 30px 0;
}
.btn{
    margin-top: 12px;
    width: 110px; 
    border-radius:10px; 
    height:40px;
}
// 申请中
.main{
  padding: 30px 15px 0;
  border: 1px solid #000000;
  //单独样式
  .one{
      >ul{
        display: flex;
        flex-flow: row wrap;
        padding-left: 66px;
        align-items: space-between;
        >li{
          flex: 50% 0 0;
          margin-bottom: 30px;
        }
      }
  }
  .two{
    .description{
      display: flex;
      flex-flow: row nowrap;
      padding-left: 60px;
      .image{
        display: inline-block;
        flex: 90px 0 0;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 20px;
        background: #e6e6e6 url(../../imgs/home/avatar.png) no-repeat center center;
        background-size: 90%;
        img {width: 100%;height: 100%}
      }
      ul{flex: 350px 0 0;width: 350px;
        .name{
          span{font-size: 24px;color: #000000;margin-right: 10px}
          margin-bottom: 10px;
        }
        .province{
          span{color: #000000}
          margin-bottom: 10px;
        }
        .tags>span {
          padding: 5px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.8);
          margin-right: 10px;
          &:nth-of-type(1) {background: #edf9ff;color: #00a8ff}
          &:nth-of-type(2) {background: #fff2ed;color: #ff7f50}
          &:nth-of-type(3) { background: #ebfff3;color: #00b969}
        }
      }
      .telphone{
        margin-top: 30px;
        font-size: 16px;
        color: #000000;
        line-height: 1.5;
      }
    }
  }
  .three{
    >div{
      display: flex;
      flex-flow: row nowrap;
      // 左边
      .image {
        flex: 232px 0 0;
        width: 232px;
        height: 175px;
        margin-right: 35px;
        background: #e6e6e6;
        img {width: 100%;height: 100%}
      }
      // 中间
      .description {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        .title {font-size: 22px;color: #000000}
        .info {font-size: 14px;color: rgba(0, 0, 0, 0.8)}
        .attention {font-size: 14px;color: rgba(0, 0, 0, 0.8)}
        .tags>span {
          padding: 5px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.8);
          margin-right: 10px;
          &:nth-of-type(1) {background: #edf9ff;color: #00a8ff}
          &:nth-of-type(2) {background: #fff2ed;color: #ff7f50}
          &:nth-of-type(3) { background: #ebfff3;color: #00b969}
        }
      }
      // 右边
      .r-content {
        flex: 150px 0 0;
        width: 150px;
        text-align: right;
        .collection {font-size: 16px;margin-bottom: 30px;color: #000000}
        .totalPrice {
          color: red;
          font-size: 14px;
          margin-bottom: 30px;
          span {font-size: 24px;margin-right: 10px}
        }
        .sellPrice {font-size: 12px;color: rgba(0, 0, 0, 0.3)}
      }
    }
  }
  // 公共样式
  >div:not(:first-child){
    padding: 30px 0;
    border-top: 1px solid #000000;
  }  
  h3{
    font-size: 22px;
    color: #000000;
    margin-bottom: 30px;
  }
}

.four{
  padding: 30px 15px;
  h3{
    font-size: 22px;
    color: #000000;
    margin-bottom: 30px;
  }
  >div{
    display: flex;
    flex-flow: row nowrap;
    padding-left: 60px;
    >div{
      flex: 1;
      >div:first-child{
        margin-bottom: 18px;
      }
    }
  }
}

.five{
  background: #e7e8e8;
  padding: 20px;
  h4{font-size: 18px;color: #000000}
  ul{
    li{
      display: flex;
      flex-flow:  row nowrap;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #7f8183;
      div{flex: 1}
      div:nth-of-type(3) img{
        margin: 5px 0 0 30px;
      }
    }
  }
  .btn{
    width: 112px;
    height: 29px;
    margin: 30px auto 0;
    .prev,.next{
      width: 29px;
      height: 29px;
      line-height: 29px;
      background: #000000;
      color: #ffffff;
      text-align: center;
    }
    .prev{float: left}
    .next{float: right}
  }

}
.cancelConfirm{
  line-height: 57px;
  height: 57px;
  font-size: 25px;
  text-align: center;
}




</style>