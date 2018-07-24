
<template>
	<div>
		<!--内容部分-->
		<div class="content">
			<div class="container">
				<!--右侧部分-->
				<div class="sidebar fr">
					<div style="margin-top: 100px;"><span style="font-size: 16px;">购房指南</span><span class="fr" style="font-size: 12px;color: rgba(0,0,0,0.7);">更多</span></div>
					<ul>
						<li class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-039-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
						<li  class="zhinan">外地人可以在南宁买房吗？</li>
						<li class="zhinan_date">2018-03-02</li>
					</ul>
					<div class="adverTisementLine"></div>
					<div style="font-size: 16px;color: color: rgba(0,0,0,0.8);margin-top: 30px;">下载世华易居APP</div>
					<div style="margin-top: 30px;"><img src="../../imgs/buyhouse/erwm.png"/></div>
				</div>
				<!--左侧内容-->
				<div class="leftContent">
					
                    <div class="tiwen-box shadow" data-url="/wenda/tiwen/">
                    <p class="title">咨询内容<span class="has-zhuanjia">——{{this.ename}}</span></p>
                    <p class="title-small">标题</p>
                    <div class="ques-word">
                        <input type="text" id="question" maxlength="30" placeholder="" v-model="questword">
                        <span class="word-num">0/30</span>
                        </div>
                        <div class="m-sug" id="tpl-r-sug"></div>
                      <p class="title-small">咨询内容的详细描述</p>
                      <textarea class="ques-detail" placeholder="描述尽量详细，以便于顾问能够回答的更精准～"  v-model="questdetail"></textarea>
                      <p class="title-small">标签</p>
                      <ul id="lists" class="lists">
                          <li @click="clickrouter(item,$event,index)" v-for="(item,index) in questiontag" :class="index==num?'querybtn':''"><span class="list-eum">{{item.name}}</span></li>
                          </ul>
                          <!-- <p class="duanxin"><span id="right" class="right-btn"></span>当有新回复时，我们将会通过您绑定的手机号进行短信提醒</p> -->
                          <button @click="commitRequest()" style="display:block" class="commit-btn logged">提交</button>
                     </div>
                   
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import oHeader from "../../base/header/header";
import oFly from "../../base/fly/fly";
export default {
  data() {
    return {
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
      listdetail:"",
      questword:"",
      questdetail:"",
      questiontag:"",
      myproblem:"",
      num:null,
      employeeId:"",//经纪人id
      ename:"",
      nickname:JSON.parse(sessionStorage.userInfo).nickname
    };
  },
  created() {
    this.scity = this.selectCity.value;
    this.render();
  },
  computed: {
    logined() {
      return this.$store.state.logined;
    }
  },
  methods: {

     
    render() {
     this.employeeId =  this.$route.query.id
     this.ename =  this.$route.query.name
     console.log( this.ename )
      //获取标签
        this.$http
            .get(this.$url.URL.DICTIONARY_DICTYPE +'QUESTION_TAG')
            .then(response => {
            this.questiontag = response.data.data;
            });

      
    },
    clickrouter(item,e,index) {
      this.num = index;
      this.label = item.name;
    },
     //清空全部操作
    clearAllInput() {
      this.employeeId = null;
      this.label = null;
      this.questdetail = null;
      this.questword = null;
    },
     //提交
    commitRequest() {
        console.log(this.questword)
         console.log(this.questdetail)
          console.log( this.label )
      let params = {
            employeeId:this.employeeId,
            label : this.label,
            memberName :this.nickname,
            problemDescribe:this.questdetail,//内容
            problemTitle :this.questword,//标题
            scity:this.scity
      };
      switch(true){
        case !this.questword:return this.$alert('标题不能为空!');break;
        case !this.questdetail:return this.$alert('描述不能为空!');break;
         case !this.label:return this.$alert('标签不能为空!');break;
      }
      this.$http.post(this.$url.URL.CONSULTANT_SUB_PROBLEM, params).then(response => {
        this.clearAllInput();
        this.$alert('提交成功!')
      });
    }
  }
};
</script>

<style lang="less" scoped>

//高亮
.querybtn {
  color: #ef1f1f;
  font-weight: bold;

  
}


/*content部分css*/

.content {
  margin-top: 26px;
}
.leftContent {
  padding-bottom: 20px;
  overflow: hidden;
}

.listContentLine {
  border-bottom: 1px solid #f1f1f1;
}

.introduce span {
  font-size: 14px;
}

.introduce .word {
  line-height: 25px;
  vertical-align: top;
  color: rgba(0, 0, 0, 0.7);
}
.prices {
  font-family: tahoma;
  position: relative;
  top: 30px;
  right: 370px;
  font-size: 24px!important;
  color: rgba(239, 31, 31, 0.85);
  
}
.brokerccloect{
  height: 45px;
  width: 113px;
  border: 1px solid #cacaca;
  font-family: tahoma;
  position: relative;
  text-align: center;
  line-height: 45px;
  top: 30px;
  right: -65px;
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

.sidebar .advertisement {
  width: 180px;
  height: 180px;
  background: #ef1f1f;
}
.adverTisementLine {
  margin-top: 34px;
  height: 1px;
  background: #cccccc;
}
.zhinan {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.9);
}
.zhinan_date {
  margin-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}



.tiwen-box {
    width: 745px;
    margin-top: 105px;
    float: left;
}
.title {
    font-size: 18px;
    font-weight: bold;
}
.title-small {
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
}
.title-note {
    font-size: 16px;
    font-weight: normal;
    color: #555555;
}
.tiwen-box .ques-word {
    height: 35px;
    border: 1px solid #cecece;
    box-sizing: border-box;
    margin: 15px 0;
    padding-top: 2px;
}
.tiwen-box .ques-word input {
    height: 30px;
    width: 480px;
    padding-left: 10px;
    border: 0;
    color: #333;
    font-size: 12px;
}
.tiwen-box .ques-word .word-num {
    width: 40px;
    text-align: right;
    float: right;
    color: #999999;
    padding-top: 5px;
    padding-right: 10px;
    font-size: 12px;
}
.m-sug {
    position: relative;
}
.tiwen-box .ques-detail {
    margin-top: 15px;
    padding: 10px;
    margin-bottom: 30px;
    background-color: #fcfcfc;
    width: 100%;
    height: 150px;
    border: 1px solid #dedede;
    box-sizing: border-box;
    font-size: 12px;
    color: #8e8e8e;
    line-height: 1.8;
}
.tiwen-box ul.lists {
    display: block;
    padding-bottom: 75px;
}
.tiwen-box ul.lists .li-on {
    color: red;
    background: #ffcccc;
}
.tiwen-box ul.lists li {
    float: left;
    vertical-align: middle;
    line-height: 40px;
    display: inline-block;
    margin-top: 13px;
    font-size: 12px;
    background: #cccccc;
    width: 110px;
    height: 40px;
    text-align: center;
    margin-left: 20px;
}
// .tiwen-box .duanxin {
//     text-align: center;
//     margin: 0 auto;
//     color: #9f9f9f;
//     font-size: 12px;
// }
// .tiwen-box .duanxin #right {
//     display: inline-block;
//     width: 22px;
//     height: 18px;
//     position: relative;
//     top: 4px;
//     cursor: pointer;
// }
.tiwen-box ul.lists li span {
    display: inline-block;
  
}
.tiwen-box .commit-btn {
    height: 45px;
    width: 200px;
    background-color:red;
    margin: 0 auto;
    margin-top: 22px;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 25px;
    border: 0px;
}
input, textarea, button {
    resize: none;
    margin: 0px;
    padding: 0px;
    outline: none;
}
</style>





