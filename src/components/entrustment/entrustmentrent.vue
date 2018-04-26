/*
 * @Author: 徐横峰 
 * @Date: 2018-04-25 11:09:22 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-26 14:48:45
 */
<template>
  <div class="sellRent">
		<div class="main">
			<div class="container">
				<div class="form-box" v-show="!brokerFlag">
					<div class="form-hd">
						<div v-for="(item,index) in items">
							<div @click="changeItem(index)">{{item}} <input type="radio" :checked="checked==index?true:false"></div>
						</div>
					</div>
					<div class="form-bd">
						<ul>
							<li>
								<div>姓名</div>
								<input type="username" placeholder="请输入你的姓名" v-model="username">
							</li>
							<li>
								<div>电话</div>
								<input type="telphone"  placeholder="请输入你的电话" v-model="telphone">
							</li>
							<li>
								<div>城市</div>
								<div class="city">
									<input placeholder="选择你的城市" readonly v-model="cityValue" @click="toggleCity()">
									<ul v-if="cityFlag">
										<li v-for="item1 in cityList">
											<ol v-for="item2 in item1.item">
												<li @click="selectCity(item2)">{{item2.name}}</li>
											</ol>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div>小区</div>
								<input type="text"  placeholder="请输入房源小区名称" v-model="houseTyName">
							</li>
							<li>
								<div>房屋编号</div>
								<div class="houseNum">
									<input type="text"  placeholder="栋座号" v-model="houseOne">
									<input type="text"  placeholder="单元号" v-model="houseTwo">
									<input type="text"  placeholder="门牌号" v-model="houseThree">
								</div>
							</li>
							<li>
								<div>具体地址</div>
								<input type="text" placeholder="请输入房源具体地址" v-model="address">
							</li>
							<li>
								<div>经纪人</div>
								<div class="broker">
									<input type="text" placeholder="选择你的经纪人" readonly v-model="brokerValue" @click="toggleBroker()">
								</div>
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
										<div class="cellme">{{item.emplAccNo}}</div>
									</div>
								</div>
							</div>
						</li>
					</ul>

					<!--分页器-->
					<el-pagination class="pagination"
      					@current-change="handleCurrentChange"
						background
						layout="prev,pager, next"
						prev-text="上一页"
						next-text="下一页"
						:total="1000">
					</el-pagination>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "", //用户名
      telphone: "", //手机号
      cityValue: "", //选择城市
      brokerValue: "", //经纪人
      brokerId: "", //经纪人id
      cityFlag: false, //城市
      brokerFlag: false, //经纪人
      cityList: [], //城市列表
      brokerLists: [], //经纪人列表
      houseTyName: "", //小区名称
      houseOne: "", //栋座号
      houseTwo: "", //单元号
      houseThree: "", //门牌号
      address: "", //地址
      items: ["我要出售", "我要出租"],
      options: [{ name: 1, id: 1 }],
      //出售 出租
      IPS: [
        this.$url.URL.HOUSE_ENTRUSTAPPLY_SELLHOUSE,
        this.$url.URL.HOUSE_ENTRUSTAPPLY_RENTHOUSE
      ],
      checked: 0,
      IPSnum: 0,
      cityCode: "", //城市编码
	  currentCity: JSON.parse(localStorage.selectCity),
	  pageSize: 0
    };
  },
  created() {
    this.cityListRequest();
    this.brokerListRequest(1);
  },
  methods: {
	handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
    	this.brokerListRequest(val);		
	},
    changeItem(num) {
      this.checked = num;
      this.IPSnum = num;
    },
    toggleCity() {
      this.cityFlag = !this.cityFlag;
      this.brokerFlag = false;
    },
    toggleBroker() {
      this.cityFlag = false;
      this.brokerFlag = !this.brokerFlag;
    },
    cityListRequest() {
      //城市
      //请求城市列表
      let map = {
        hot: { title: "热门", item: [] }
      };
      this.$http.get(this.$url.URL.DICTIONARY_CITYS).then(response => {
        response.data.data.forEach((obj, index) => {
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
          console.log(ret);
        });
      });
    },
    brokerListRequest(num) {
      let scity = this.cityCode ? this.cityCode : this.currentCity.value;
      //经纪人
      this.$http
        .post(this.$url.URL.BROKERS_LIST, {
          scity: scity,
          pageNo: num
        })
        .then(response => {
          console.log(response.data.data);
          this.brokerLists = response.data.data;
        });
    },
    selectCity(item) {
      this.cityFlag = false;
      this.cityCode = item.value; //拼音
      this.cityValue = item.name; //中文
    },
    selectBroker(item) {
      this.brokerFlag = false;
      this.brokerValue = item.emplName;
      this.brokerId = item.id;
    },
    commitRequest() {
      let scity = this.cityCode ? this.cityCode : this.currentCity.value;
      let params = {
        cityCode: scity, //城市编码
        brokerId: this.brokerId, //经纪人id
        linkman: this.username, //姓名
        phone: this.telphone, //联系电话
        buildingName: this.houseTyName, //小区名字
        buildNum: this.houseOne, //栋号
        unitNum: this.houseTwo, //单元号
        roomNum: this.houseThree, //房号
        address: this.address //详细地址
      };
      if (
        scity == "" ||
        this.brokerId == "" ||
        this.username == "" ||
        this.telphone == "" ||
        this.houseTyName == "" ||
        this.houseOne == "" ||
        this.houseThree == ""
      ) {
        this.$alert("信息不能为空!");
      } else {
        this.$http.post(this.IPS[this.IPSnum], params).then(response => {
          console.log(response.data.data);
        });
      }
    }
  }
};
</script>
<style scoped>
.main {
  height: 797px;
  background: #f5f5f5 url(../../imgs/home/sousditu.png) no-repeat center center;
  background-position: center center;
  background-size: auto 797px;
  box-sizing: border-box;
  position: relative;
}
.form-box {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 614px;
  height: 642px;
  transform: translateX(-50%);
  background: #ffffff;
}
.city {
  flex: 1;
  position: relative;
}
.city > input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #cacaca;
  box-sizing: border-box;
}
.city > ul {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 200px;
  background: #ffffff;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  text-indent: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1000;
}
.city ol li {
  border-bottom: 1px solid #cacaca;
}
.city ol li:hover {
  background: red;
}
/* form 头部 */
.form-hd {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 105px;
  line-height: 105px;
  font-size: 20px;
}
.form-hd > div {
  flex: 1;
}
.form-hd > div:nth-of-type(1) input,
.form-hd > div:nth-of-type(2) input {
  cursor: pointer;
}
.form-hd > div:nth-of-type(1) > div {
  float: right;
  margin-right: 22px;
  cursor: pointer;
}
.form-hd > div:nth-of-type(2) > div {
  float: left;
  margin-left: 22px;
  cursor: pointer;
}

/* form 身体 */
.form-bd {
  margin: 0 114px 0 74px;
}
.form-bd > ul > li {
  height: 40px;
  line-height: 40px;
}
.form-bd > ul > li {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 18px;
}
.form-bd > ul > li > div:nth-of-type(1) {
  margin-right: 22px;
  text-align: right;
  width: 110px;
  font-size: 20px;
  color: #000000;
}
.form-bd > ul > li > input {
  flex: 1;
  text-indent: 10px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #cacaca;
  box-sizing: border-box;
}
.houseNum {
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.houseNum input {
  height: 40px;
  width: 90px;
  line-height: 40px;
  text-indent: 10px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #cacaca;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  color: #cacaca;
  font-size: 14px;
}
/* form 脚步 */
.form-ft button {
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
.form-ft p {
  text-align: center;
  font-size: 14px;
  color: #272c30;
  opacity: 0.6;
  margin-top: 17px;
}

/* 经纪人 */
.broker {
  flex: 1;
  position: relative;
}
.broker input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #cacaca;
  box-sizing: border-box;
}
.brokerList {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 614px;
  height: 642px;
  transform: translateX(-50%);
  background: #efefef;
}
.brokerList h3 {
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: #ffffff;
  background: red;
}
.brokerList .image {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 20px;
  left: 20px;
  overflow: hidden;
}
.brokerList .image img {
  width: 100%;
  height: 100%;
}
.brokerList .content {
  overflow: hidden;
  margin-left: 120px;
  display: flex;
  flex-flow: row nowrap;
}
.brokerList .content > div {
  flex: 1;
}
.brokerList ul {
  max-height: 530px;
  overflow: auto;
}
.brokerList ul li {
  overflow: hidden;
  cursor: pointer;
  height: 124px;
  position: relative;
}
.brokerList ul li:hover {
  background: #ffffff;
}
.brokerList ul li > div {
  margin: 0 10px;
  height: 124px;
  padding: 28px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #cacaca;
}
.one .name {
  font-size: 16px;
  margin-bottom: 10px;
}
.one .name span {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 10px;
}
.one .decription {
  margin: 0 15px 10px 0;
}
.one .decription span {
  font-size: 14px;
}
.one .tag {
  display: flex;
  flex-flow: row nowrap;
  white-space: nowrap;
}
.one .tag span {
  font-size: 12px;
  margin-right: 10px;
  padding: 5px;
}
.one .tag span:nth-of-type(1) {
  background: #edf9ff;
  color: #00a8ff;
}
.one .tag span:nth-of-type(2) {
  background: #fff2ed;
  color: #ff7f50;
}
.one .tag span:nth-of-type(3) {
  background: #ebfff3;
  color: #00b969;
}
.two {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
.two span {
  font-size: 24px;
  color: #ff0000;
}
.three div {
  font-size: 16px;
}
.three div:nth-of-type(1) {
  margin-bottom: 10px;
}
.pagination{
	width: 360px;
	margin-top: 20px;
	margin-left: 15%;
}
</style>


