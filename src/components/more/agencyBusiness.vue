/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:09:22 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-27 17:03:46
 */
<template>
  <!-- 代办业务 -->
  <div class="sellRent">
		<div class="main">
			<div class="container">
				<div class="form-box" v-show="!brokerFlag">
					<!-- <div class="form-hd"></div> -->
					<div class="form-bd">
						<ul>
							<li>
								<div>姓名</div>
								<input type="username" placeholder="请输入你的姓名" v-model="username" @click="close()">
							</li>
							<li>
								<div>电话</div>
								<input type="telphone"  placeholder="请输入你的电话" minlength="11" maxlength="11" v-model="telphone" @click="close()">
							</li>
							<li class="city">
								<div>城市</div>
                <input type="text" placeholder="选择你的城市" readonly v-model="cityValue" @click="toggleCity()">
                <ul v-show="isSelectNum == 0">
                  <li v-for="item1 in cityList">
                      <ol v-for="item2 in item1.item">
                        <li @click="selectCity(item2)">{{item2.name}}</li>
                      </ol>
                  </li>
                </ul>
							</li>
							<li class="xiaoqu">
								<div>小区</div>
								<input type="text" placeholder="请输入房源小区名称" v-model="houseTyName" @input="changeInput()"  @click="toggleXiaoqu()">
                <ul v-show="isSelectNum == 1">
                  <li v-for="item in houseTyNameList" @click="selectXiaoqu(item)">
                    {{item.buildName}}
                  </li>
                </ul>
							</li>
							<li>
								<div>房屋编号</div>
								<div class="houseNum">
                  <div class="houseNum1">
									  <input type="text"  placeholder="栋座号" readonly v-model="houseOne" @click="toggleDong()">
                    <ul v-show="isSelectNum == 2">
                      <li v-for="item in houseOneList" @click="selectDong(item)">
                        {{item.name}}
                      </li>
                    </ul>
                  </div>
                  <div class="houseNum2">
									  <input type="text"  placeholder="单元号" readonly v-model="houseTwo" @click="toggleDanyuan()">
                    <ul v-show="isSelectNum == 3">
                      <li v-for="item in houseTwoList" @click="selectDanyuan(item)">
                        {{item}}
                      </li>
                    </ul>
                  </div>
                  <div class="houseNum3">
									  <input type="text"  placeholder="门牌号" readonly v-model="houseThree" @click="togglehouseNum()">
                    <ul v-show="isSelectNum == 4">
                      <li v-for="item in houseThreeList" @click="selecthouseNum(item)">
                        {{item}}
                      </li>
                    </ul>
                  </div>
								</div>
							</li>
							<li>
								<div>具体地址</div>
								<input type="text" placeholder="请输入房源具体地址" v-model="address">
							</li>
              <li class="agencyBusiness">
								<div>业务类型</div>
								<input type="text" placeholder="请输选择需要代办业务的类型" readonly v-model="businessName" @click="toggleBusiness()">
                <ul v-show="isSelectNum == 5">
                  <li v-for="item in bussinessList" @click="selectBusinessNum(item)">{{item.name}}</li>
                </ul>
							</li>
							<li>
								<div>经纪人</div>
								<input type="text" placeholder="选择你的经纪人" v-model="brokerValue" @click="toggleBroker()">
							</li>
              <li class="who">
								<div>我是</div>
								<input type="text" placeholder="选择卖方/买方/推荐人" readonly v-model="whoName" @click="toggleWho()">
                <ul v-show="isSelectNum == 6">
                  <li v-for="item in whoList" @click="selectWhoNum(item)">{{item.name}}</li>
                </ul>
							</li>
						</ul>
					</div>
					<div class="form-ft">
						<button @click="commitRequest()">提交</button>
						<p>我们将在最短时间内和您联系!</p>
					</div>
				</div>
				<div class="brokerList" v-show="brokerFlag">
					<h3>选择经纪人</h3>
					<ul>
						<li v-for="item in brokerLists" @click="selectBroker(item)">
							<div>
								<div class="image">
									<img :src="item.photo">
								</div>      
								<div class="content">
									<div class="one">
										<div class="name"><span>{{item.emplName}}</span>{{item.positionName}}</div>
										<div class="decription">
											<span>{{item.deptName}}</span>
											<span></span>
										</div>
										<div class="tag">
											<span>销售达人</span>
											<span>销售达人</span>
											<span>销售达人</span>
										</div>
									</div>
									<div class="two">
										<span>{{item.grade}}.0</span> 评分
									</div>
									<div class="three">
										<div>联系电话:</div>
										<div class="cellme">{{item.phone}}</div>
									</div>
								</div>
							</div>
						</li>
					</ul>

					<!-- 分页器 -->
          <div class="pageFooter">
              <el-pagination class="oPagination" 
                  style="text-align:center;margin-top:20px"
                  @current-change="handleCurrentChange"
                  background
                  layout="prev, pager, next"
                  prev-text="上一页"
                  next-text="下一页"
                  :total="querycount.count">
              </el-pagination>
          </div>

				</div>
			</div>
		</div>
  </div>
</template>
<script>
import {debounce} from "../../common/js/util"
export default {
  data() {
    return {
      username: "", //用户名
      telphone: "", //手机号
      isSelectNum: null, //展开项
      querycount: {//检索总数量
        count: 0
      },
      cityCode: "", //城市编码
      cityList: [], //城市列表
      currentCity: JSON.parse(localStorage.selectCity).value, //首页默认点击的城市
      cityValue: "", //选择城市

      brokerId: "", //经纪人id
      brokerFlag: false, //经纪人
      brokerLists: [], //经纪人列表
      brokerValue: "", //经纪人

      houseTyName: "", //小区名称
      houseTyId: "", //小区id
      houseTyNameList: [], //小区列表

      houseOne: "", //栋座号
      houseOneId: "",//栋座号id
      houseOneList: [], //栋座号列表

      houseTwo: "", //单元号
      houseTwoList: [], //单元号列表
      

      houseThree: "", //门牌号
      houseThreeList: [], //门牌号列表
      
      bussinessList: null,//业务类型列表
      businessName: null,//业务类型
      businessValue: null,//业务类型

      whoList: [//我是类型列表
        {name:'卖方',value:'SELLER'},
        {name:'买方',value:'PURCHASER'},
        {name:'推荐人',value:'RECMD_MAN'}
      ],
      whoName: null,//我的类型
      whoValue: null,//我的类型

      address: "", //地址
      page: 1,
    };
  },
  created() {
    // 城市列表
    this.cityListRequest();
    // 经纪人列表
    this.brokerListRequest();
    // 经纪人列表总数量
    this.countRequest();
    // 小区列表
    this.xiaoquListRequest();
    // 业务类型
    this.businessRequest();
  },
  watch: {
    cityCode() {
      this.clearAboutCity();
      this.brokerListRequest();
      this.xiaoquListRequest();
    }
  },
  methods: {
    //我是
    toggleWho() {
      this.isSelectNum = 6;
    },
    selectWhoNum(item) {
      this.isSelectNum = null;
      this.whoName = item.name;
      this.whoValue = item.value;
    },

    //业务类型
    toggleBusiness() {
      this.isSelectNum = 5;
    },
    selectBusinessNum(item) {
      this.isSelectNum = null;
      this.businessName = item.name;
      this.businessValue = item.value;
    },
    

    close() {
      this.isSelectNum = null;
    },
    //清空全部操作
    clearAllInput() {
      this.username = null;
      this.telphone = null;
      this.cityValue = null;
      this.brokerLists = null;
      this.houseTyName = null;
      this.houseTyNameList = null;
      this.houseOne = null;
      this.houseOneList = null;
      this.houseTwo = null;
      this.houseTwoList = null;
      this.houseThree = null;
      this.houseThreeList = null;
      this.address = null;
      this.brokerValue = null;
      this.bussinessName = null;
      this.whoName = null;
    },
    //清空关于城市的
    clearAboutCity() {
      this.brokerLists = null;
      this.houseTyName = null;
      this.houseTyNameList = null;
      this.houseOne = null;
      this.houseOneList = null;
      this.houseTwo = null;
      this.houseTwoList = null;
      this.houseThree = null;
      this.houseThreeList = null;
      this.address = null;
      this.brokerValue = null;
    },
    //分页器
    handleCurrentChange(val) {
      this.brokerListRequest(val);
    },
    //卖房 租房
    changeItem(num) {
      this.checked = num;
      this.IPSnum = num;
    },
    //城市
    toggleCity() {
      this.isSelectNum = 0;
      this.brokerFlag = false;
    },
    selectCity(item) {
      this.isSelectNum = null;
      this.cityCode = item.value; //拼音
      this.cityValue = item.name; //中文
    },
    //经纪人
    toggleBroker() {
      this.isSelectNum = null;
      this.brokerFlag = true;
    },
    selectBroker(item) {
      this.brokerFlag = false;
      this.brokerValue = item.emplName;
      this.brokerId = item.id;
    },

    //小区
    toggleXiaoqu() {
      this.isSelectNum = 1;
    },
    selectXiaoqu(item) {
      this.isSelectNum = null;
      this.houseTyName = item.buildName;
      this.houseTyId = item.id;
      //清空操作
      this.houseOne = null;
      this.houseOneList = null;
      this.houseTwo = null;
      this.houseTwoList = null;
      this.houseThree = null;
      this.houseThreeList = null;
      this.address = null;
      this.dongzuoListRequest(item.id);
    },
    //小区
    changeInput() {
      debounce(this.xiaoquListRequest(this.houseTyName), null, 1000);
    },
    //栋座号
    toggleDong() {
      this.houseTyId 
      ? (this.isSelectNum = 2) 
      : this.$alert("请先选取小区");
    },
    selectDong(item) {
      this.isSelectNum = null;
      this.houseOne = item.name;
      this.houseOneId = item.id;
      //清空操作
      this.houseTwo = null;
      this.houseTwoList = null;
      this.houseThree = null;
      this.houseThreeList = null;
      this.address = null;
      this.danyuanListRequest(item.id);
    },
    //单元号
    toggleDanyuan() {
       this.houseTyId 
       ? (this.isSelectNum = 3) 
       : this.$alert("请先选取小区");
    },
    selectDanyuan(item) {
      this.isSelectNum = null;
      this.houseTwo = item;
      this.danyuanListRequest(this.houseOneId, item);
    },
    //门牌号
    togglehouseNum() {
      this.houseTyId 
      ? (this.isSelectNum = 4) 
      : this.$alert("请先选取小区");
    },
    selecthouseNum(item) {
      this.isSelectNum = null;
      this.houseThree = item;
      //最后生具体地址
      this.address = this.cityValue + this.houseTyName + this.houseOne + this.houseTwo + this.houseThree ;
    },
    //请求城市列表
    cityListRequest() {
      let map = { hot: { title: "热门", item: [] } };
      this.$http
          .get(this.$url.URL.DICTIONARY_CITYS)
          .then(res => {
                res.data.data.forEach((obj, index) => {
                  //城市数据 重新map排列
                  const type = obj.value.slice(0, 1).toUpperCase();
                  if (!map[type]) {
                    map[type] = { title: type, item: [] };
                  }
                  map[type].item.push({
                    name: obj.name,
                    key: obj.value.slice(0, 1).toUpperCase(),
                    value: obj.value
                  });
                  let ret = [];
                  for (let key in map) {
                    let val = map[key];
                    if (val.title.match(/[a-zA-Z]/)) ret.push(val);
                  }
                  ret.sort((a, b) => {
                    return a.title.charCodeAt() - b.title.charCodeAt();
                  });
                  this.cityList = ret;
                });
              });
    },
    //请求经纪人
    brokerListRequest(val) {
      let scity = this.cityCode ? this.cityCode : this.currentCity;
      this.$http
        .post(this.$url.URL.BROKERS_LIST, { scity: scity, pageNo: val})
        .then(res => {
          this.brokerLists = res.data.data;
        });
    },
    //请求小区
    xiaoquListRequest(keyword) {
      let num = 1;
      let scity = this.cityCode ? this.cityCode : this.currentCity;
      const currentCity = localStorage.selectCity;//缓存当前城市
      let midobj = {value: scity};
      localStorage.selectCity = JSON.stringify(midobj);//替换缓存的当前城市  从而修改请求头里面的scity;

      this.$http
          .post(this.$url.URL.BUILDLIST, {scity: scity,pageNo: num,keyword: keyword})
          .then(res => {
              this.houseTyNameList = res.data.data;
              localStorage.selectCity = currentCity;
              this.$nextTick(() => {
                  //滚动加载
                  let el = document.querySelector(".xiaoqu ul");
                  el.onscroll = () => {
                    let scrollTop = el.scrollTop; //页面上卷的高度
                    let wholeHeight = el.scrollHeight; //页面底部到顶部的距离
                    let divHeight = el.clientHeight; //页面可视区域的高度
                    if(scrollTop + divHeight+ 10 >= wholeHeight) {
                      let page = num++;
                      localStorage.selectCity = JSON.stringify(midobj);
                      this.xiaoquListRequest2(scity, keyword, page, currentCity);
                    }
                  };
              });
          });
 
    },
    xiaoquListRequest2(scity, keyword, page,currentCity) {
      this.$http
          .post(this.$url.URL.BUILDLIST, {scity: scity,pageNo: page,keyword: keyword})
          .then(res => {
            localStorage.selectCity = currentCity;
            this.houseTyNameList = this.houseTyNameList.concat(res.data.data);
          });
    },
    //滚动加载
    scrollEvent(node, fn) {
      let el = document.querySelector(node);
      el.onscroll = () => {
        let scrollTop = el.scrollTop; //页面上卷的高度
        let wholeHeight = el.scrollHeight; //页面底部到顶部的距离
        let divHeight = el.clientHeight; //页面可视区域的高度
        (scrollTop + divHeight >= wholeHeight)&&fn();
      };
    },
    //请求栋座号
    dongzuoListRequest(id, keyword) {
      let num = 1;
      let scity = this.cityCode;
      this.$http
        .get(this.$url.URL.BUILDINGLISTDZ + id + "?pageNo=1&pageSize=10")
        .then(res => {
          this.houseOneList =  res.data.data;
        });
    },
    //请求单元号或者门牌号
    danyuanListRequest(id, item) {
      let num = 1;
      let scity = this.cityCode;
      this.$http
        .post(this.$url.URL.BUILDINGLISTDYFH, {
          scity: scity,
          pageNo: num,
          buildId: this.houseTyId,
          dyname: item,
          dzId : id,
        })
        .then(res => {
          item
          ? (this.houseThreeList = res.data.data)
          : (this.houseTwoList = res.data.data)
        });
    },
    // 请求业务类型
    businessRequest() {
      this.$http
          .get(this.$url.URL.DICTIONARY_DICTYPE+'AGENT_BIZ_TYPE')
          .then(res=>{
            this.bussinessList = res.data.data;
          })
    },
    //提交
    commitRequest() {
      let params = {
        cityCode: this.cityCode, //城市编码
        brokerId: this.brokerId, //经纪人id
        linkman: this.username, //姓名
        phone: this.telphone, //联系电话
        buildingName: this.houseTyName, //小区名字
        buildNum: this.houseOne, //栋号
        unitNum: this.houseTwo, //单元号
        roomNum: this.houseThree, //房号
        address: this.address, //详细地址
        loanAgencyType: this.businessValue,//业务类型
        applicantType: this.whoValue//我是
        
      };
      switch(true){
        case !this.username:return this.$alert('姓名不能为空!');break;
        case !this.telphone:return this.$alert('手机号码不能为空!');break;
        case !/^1[34578]\d{9}$/.test(this.telphone):return this.$alert('手机号码格式不对!');break;
        case !this.cityCode:return this.$alert('城市不能为空!');break;
        case !this.brokerId:return this.$alert('小区不能为空!');break;
        case !this.businessValue:return this.$alert('请选择业务类型');break;
        case !this.whoValue:return this.$alert('请选择我的属性');break;
        case !this.houseTyName,!this.houseOne,!this.houseThree: return this.$alert('信息填写不全!');break;
      }
      this.$http.post(this.$url.URL.HOUSE_AGENCYAPPLY_HOUSE, params).then(res => {
        this.clearAllInput();
        this.$alert('提交成功!')
      });
    },
    //请求经纪人数量
    countRequest() {
      let params = {
        scity: this.selectCity.value,
        pageSize: 10,
        pageNo: 1
      }
      this.$http.post(this.$url.URL.BROKERS_LISTCOUNT, params).then(response => {
        this.querycount = response.data.data;
      });
    },
  }
};
</script>
<style lang="less" scoped>
.main {
  height: 850px;
  background: #f5f5f5 url(../../imgs/home/sousditu.png) no-repeat center center;
  background-position: center center;
  background-size: auto 850px;
  box-sizing: border-box;
  position: relative;
  .form-box {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 614px;
    padding: 50px 0;
    height: 595px;
    transform: translateX(-50%);
    background: #ffffff;
  }
}
.city,
.xiaoqu,
.agencyBusiness,
.who,
.houseNum1,
.houseNum2,
.houseNum3 {
  position: relative;
  input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
    font-size: 14px;
    color: #000000;
    border: 1px solid #cacaca;
    box-sizing: border-box;
  }
  ul {
    position: absolute;
    top: 40px;
    right: 0;
    width: 294px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #cacaca;
    border-top: 0;
    box-sizing: border-box;
    text-indent: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 1000;
    li {
      cursor: pointer;
      ol {
        width: 100%;
        li {
          // border-bottom: 1px solid #cacaca;
          &:hover{background: #f5f5f5}
        }
      }
    }
  }
}

.xiaoqu,
.agencyBusiness,
.who,
.houseNum1,
.houseNum2,
.houseNum3{
  ul>li{
    &:hover{background: #f5f5f5}
  }
}

.houseNum1,
.houseNum2,
.houseNum3 {
  ul {
    width: 90px !important;
  }
}

/* form 头部 */
.form-hd {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 105px;
  line-height: 105px;
  font-size: 20px;
  > div {
    flex: 1;
    &:nth-of-type(1) input,
    &:nth-of-type(2) input {
      cursor: pointer;
    }
    &:nth-of-type(1) > div {
      float: right;
      margin-right: 22px;
      cursor: pointer;
    }
    &:nth-of-type(2) > div {
      float: left;
      margin-left: 22px;
      cursor: pointer;
    }
  }
}

/* form 身体 */
.form-bd {
  margin: 0 114px 0 74px;
  > ul {
    > li {
      height: 40px;
      line-height: 40px;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 18px;
      > div:nth-of-type(1) {
        margin-right: 22px;
        text-align: right;
        width: 110px;
        font-size: 20px;
        color: #000000;
      }
      > input {
        flex: 1;
        text-indent: 10px;
        font-size: 14px;
        color: #000000;
        border: 1px solid #cacaca;
        box-sizing: border-box;
      }
    }
  }
}

.houseNum {
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  input {
    height: 40px;
    width: 90px;
    line-height: 40px;
    text-indent: 10px;
    font-size: 14px;
    color: #000000;
    border: 1px solid #cacaca;
    box-sizing: border-box;
  }
}

input::-webkit-input-placeholder {
  color: #cacaca;
  font-size: 14px;
}
/* form 脚步 */
.form-ft {
  position: absolute;
  right: 128px;
  bottom: 50px;
  button {
    display: block;
    width: 280px;
    height: 40px;
    line-height: 40px;
    background: red;
    border: 0;
    margin: 0 auto;
    font-size: 18px;
    color: #ffffff;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #272c30;
    opacity: 0.6;
    margin-top: 17px;
  }
}

/* 经纪人 */
.broker {
  flex: 1;
  position: relative;
  input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
    font-size: 14px;
    color: #000000;
    border: 1px solid #cacaca;
    box-sizing: border-box;
  }
}
.brokerList {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 614px;
  height: 642px;
  transform: translateX(-50%);
  background: #efefef;
  h3 {
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #ffffff;
    background: red;
  }
  ul {
    max-height: 530px;
    overflow: auto;
    > li {
      overflow: hidden;
      cursor: pointer;
      height: 124px;
      position: relative;
      > div {
        margin: 0 10px;
        height: 124px;
        padding: 28px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #cacaca;
        .image {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          left: 20px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          overflow: hidden;
          margin-left: 120px;
          display: flex;
          flex-flow: row nowrap;
          > div {
            flex: 1;
          }
          .one {
            .name {
              font-size: 16px;
              margin-bottom: 10px;
              span {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.8);
                margin-right: 10px;
              }
            }
            .decription {
              margin: 0 15px 10px 0;
              span {
                font-size: 14px;
              }
            }
            .tag {
              display: flex;
              flex-flow: row nowrap;
              white-space: nowrap;
              span {
                font-size: 12px;
                margin-right: 10px;
                padding: 5px;
                &:nth-of-type(1) {background: #edf9ff;color: #00a8ff}
                &:nth-of-type(2) {background: #fff2ed;color: #ff7f50}
                &:nth-of-type(3) {background: #ebfff3;color: #00b969}
              }
            }
          }
          .two {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.6);
            span {
              font-size: 24px;
              color: #ff0000;
            }
          }
          .three {
            div {
              font-size: 16px;
              &:nth-of-type(1) {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
      &:hover {
        background: #ffffff;
      }
    }
  }
}

.pagination {
  width: 360px;
  margin-top: 20px;
  margin-left: 15%;
}
</style>


