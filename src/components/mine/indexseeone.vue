<template>
    <div>
        <div style="display:none">
            <ul>
                <li v-for="item in houseList">
                    <input class="inpt" type="checkbox" v-model="item.checked" />
                    <div class="image">
                        <img :src="item.housePic"/>
                    </div>
                    <div class="description">
                        <div class="title">{{item.houseTitle}}</div>
                        <div class="info"><img src="../../imgs/buyhouse/house.png" />{{item.districtName}}|{{item.houseType}}|{{item.builtArea}}平|{{item.houseDirection }}</div>
                        <div class="attention"><img src="../../imgs/buyhouse/dingwei.png" />{{item.houseTag}}</div>
                        <div class="tag">
                            <span>{{item.houseFeature}}</span>
                            <span>{{item.areaName}}</span>
                            <span>随时看房</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="totalPrice"><span>{{item.saleTotal}}</span>万</div>
                        <div class="sellPrice">单价<span>{{item.salePrice}}</span>元/平米</div>
                    </div>
                </li>
             </ul>
           <div class="orderdiv">
             <input type="checkbox" v-model="allChecked"/>全选
              <span @click="del(houseList)">删除</span>
            <button class="btn">预约看房时间</button>
         </div> 
        </div>

        <div>
           
        <div class="book-time">
             <div class="desc">个人信息</div>
            <div class="mesg">
                <div>姓名<input placeholder="请输入你的姓名"></div>
                <div class="call">电话 12132131</div>
            </div>
            <div class="desc">看房时间</div>
            <div class="date-picker"> 
        <ul class="dates"> 
        <li class="date selected" v-for="item in [1,1,1,1,1]">
            <div class="week-day">周四</div>
            <div class="month-info">
            <div class="month-day">24</div>
            <div class="month">5月</div>
            </div>
        </li>
        </ul>
    </div>
    <div class="time-picker">
        <span class="no-r left-r selected" data-value="4">全天</span>
        <span class="no-r" data-value="1"> 上午</span><span class="no-r" data-value="2">下午</span>
        <span class="right-r" data-value="3"> 晚上</span>
    </div>
</div>
        </div>
        
        
    </div>

</template>

<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
            houseList: [{
                checked:true
            }],//待看房源列表
            id:""
        };
    },
    created() {
        this.readyHouseListRequest();
    },
     computed: {
            allChecked: {
                get: function(){
                    return this.checkedCount == this.houseList.length;
                },
                set: function(value){
                    this.houseList.forEach(function(item){
                        item.checked = value
                    })
                    return value;
                }
            },
            checkedCount: {
                get: function(){
                    var i = 0;
                    this.houseList.forEach(function(item){
                        if(item.checked == true) i++;
                    })
                    return i;
                }
            }
        },
    methods:{

        //删除待看房源
        del(houseList){
            console.log(houseList)
            for(var i = 0;i<houseList.length;i++){
                this.id = houseList[i].id
            }
             this.$http
            .delete(this.$url.URL.APPOINT_DELETE+  this.id)
            .then(response => {
            });
            localStorage.removeItem('daikan');//按key单个删除
             location.reload()
        },
        //待看房源请求
        readyHouseListRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.APPOINT_DETAILLIST+"?pageNo="+1)
            .then(response => {
                this.houseList = response.data.data;
            });
        }
    },
    components: {
        oHouseList
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

ul > li {
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
    background: #e6e6e6;
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
    .sellPrice {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
.inpt{
    margin: auto;
}
.orderdiv{
    height: 80px;
    padding: 40px;
}
.btn{
    border: 0;
    margin-left: 70px;
    border-radius: 5px;
    font-size: 16px;
    width: 150px;
    height: 40px;
    text-align: center;
    background: red;
    color: white;
}
dl, dt, dd, ul, ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
.book-time {
    border-top: 1px solid #f1f1f1;
    padding: 12px 35px;
}
.book-time .desc {
    font-size: 16px;
    line-height: 16px;
    margin: 20px 0;
}
.book-time .date-picker .dates .date {
    cursor: pointer;
    width: 94px;
    height: 100px;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
}
 .book-time .date-picker .dates .date {
    margin-left: 25px;
    cursor: pointer;
    width: 94px;
    height: 53px;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    display: inline-block;
    text-align: center;
}
.book-time .date-picker .dates .date.selected {
    border: 1px solid #00ae66;
}
 .book-time .time-picker {
    margin-left: 25px;
    margin-top: 30px;
}
.book-time .time-picker>span.selected {
    background: #00ae66;
    color: #fff;
    border-color: #00ae66;
}
.book-time .time-picker>span {
    width: 11%;
    border: 1px solid #dbdbdb;
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    line-height: 38px;
    padding: 0;
    color: #394043;
}
.book-time input {
    margin-left: 15px;
    line-height: 28px;
    height: 30px;
    font-size: 16px;
    padding: 0 15px;
    border: 1px solid #d9dcde;
    border-radius: 2px;
}
.call{
    margin-top: 20px;
}
.mesg{
    margin-left: 25px;
}
</style>