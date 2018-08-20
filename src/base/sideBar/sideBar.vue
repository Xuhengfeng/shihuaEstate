/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 14:34:13 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-08-20 23:28:39
 */
<template>
  <div class="sideBar">
      <ul>
          <li class="two" ref="one"><img src="../../imgs/home/list.png">
            <div class="screenOuter">
                <div class="content-hd title">
                        <span class="fl">待看清单</span>   
                        <span class="fl">最多可以选择4套房源待看</span>
                        <span class="fr" @click="clearDaikan()">清空</span>
                    </div>
                        <ul class="content-bd">
                        <li v-for="item in list1">
                            <div class="image">
                                <img :src="item.housePic"/>
                            </div>
                            <div class="r-content">
                                <div>{{item.houseTitle}}</div>
                                <div><span>{{item.houseType}}</span><span>{{item.builtArea}}平米</span></div>
                                <div><span>{{item.saleTotal}}</span>万</div>
                            </div>
                            <div class="delete" @click="deleteOneAppoint(item)">删除</div>
                        </li>
                    </ul>
                    <div class="content-ft">
                        <button v-if="btn1" @click="appoint()">立即预约</button>
                        <p v-else>暂时没有任何预约的房源信息!</p>
                    </div>
            </div>
          </li>
          <li class="two" ref="two"><img src="../../imgs/home/contranst.png">
              <div class="screenOuter">
                  <div class="content-hd title">
                        <span class="fl">对比清单</span>   
                        <span class="fl">最多可以选择4套房源对比</span>
                        <span class="fr" @click="clearAll()">清空</span>
                    </div>
                    <ul class="content-bd">
                        <li v-for="item in list2">
                            <div class="image">
                                <img :src="item.housePic"/>
                            </div>
                            <div class="r-content">
                                <div>{{item.houseTitle}}</div>
                                <div><span>{{item.houseType}}</span><span>{{item.builtArea}}平米</span></div>
                                <div><span>{{item.saleTotal}}</span>万</div>
                            </div>
                            <div class="delete" @click="deleteOneContrast(item)">删除</div>
                        </li>
                    </ul>
                    <div class="content-ft">
                        <button v-if="btn2" @click="compare()">立即对比</button>
                        <p v-else>暂时没有任何比较的房源信息!</p>
                    </div>
              </div>
          </li>
          <li class="three" @click="toCollect()"><img src="../../imgs/home/collection.png">
              <div class="screenOuter">
                  我收藏的房源
              </div>
          </li>
          <li class="four"><img src="../../imgs/home/calc.png">
              <!-- <div class="screenOuter">
                  计算器
              </div> -->
          </li>
          <li class="five"><img src="../../imgs/home/ideaTick.png">
              <!-- <div class="screenOuter">
                  反馈
              </div> -->
          </li>
          <li class="six"><img src="../../imgs/home/service.png">
              <!-- <div class="screenOuter">
                  客服
              </div> -->
          </li>
      </ul>
      <div class="up">
        <i class="iconfont xhf-icon-top"></i>
        TOP
      </div>
  </div>
</template>
<script>
export default {
  props:['appointList', 'contrastList'],
  data() {
    return {
      btn1: false,    //待看
      btn2: false,    //对比
      list1: this.appointList,  //待看列表
      list2: this.contrastList, //对比列表
      scity: null,    //用户选定城市
      id:"",          //待看id
      sdid: "",

    };
  },
  watch: {
    list1() {
      this.list1.length
      ?(this.btn1 = true)
      :(this.btn1 = false);
    },
    list2() {
      this.list2.length
      ?(this.btn2 = true)
      :(this.btn2 = false);
    }
  },
  computed: {
    //监控登录状态
    logined() {
      return this.$store.state.logined;
    },
  },
  methods: {
    //清空待看
    clearDaikan() {
      this.btn2 = false;
      this.$emit('clearDaikan');
    },
    //清空对比
    clearAll() {
      this.btn1 = false;
      this.$emit('clearAll');
    },
    //删除待看中一个
    deleteOneAppoint(item) {
      let index = this.list1.findIndex(val=>{
        return val == item;
      })
      this.list1.slice(index, 1);
      this.$emit('deleteOneAppoint', item);
    },
    //删除对比中一个
    deleteOneContrast(item) {
      let index = this.list2.findIndex(val=>{
        return val == item;
      })
      this.list2.slice(index, 1);
      this.$emit('deleteOneContrast', item);
    },
    //立即对比
    compare() {
      this.$router.push({path:"/contrast"});
    },
    //立即预约
    appoint() {
      this.appointList.forEach(item => {
        this.id = item.id
      });
      this.$router.push({ path: "/mine/indexseeone"});
    },
    //跳转我的收藏
    toCollect() {
      //未登录用户提示弹窗登录
      if(!this.logined) return this.$store.commit('OPENLOGINDIALOG', 1);
      this.$router.push({ path: "/mine/indexcollection"});
    },
    //计算元素位置
    calcElt() {
      let rectOne = this.$refs.one.getBoundingClientRect();
      let rectTwo = this.$refs.two.getBoundingClientRect();
      //对比清单img的位置
      localStorage.imgOne = JSON.stringify(rectOne);
      //待看清单img的位置
      localStorage.imgTwo = JSON.stringify(rectTwo);
    }
  },
  mounted() {
    this.calcElt();
    window.onresize = this.calcElt();
    $(()=>{
      // 监听窗体滚动高度
      $(window).scroll(()=>{
        let oTop = $(window).scrollTop()+$(window).height();
        let oHeight = $(document).height();
        if(oTop>oHeight-1000){
          $('.up').fadeIn();
        }else{
          $('.up').fadeOut();
        }
      })
      // 回到顶部
      $('.up').click(()=>{
        $('html,body').animate({scrollTop: 0},'slow');
      })

    })
  }
};
</script>
<style lang="less" scoped>
.sideBar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  z-index: 1002;
}
.sideBar > ul {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
}
.sideBar > ul > li {
  cursor: pointer;
  padding: 5px 0 3px;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
}
.sideBar > ul > li:hover {
  background: #e6e6e6;
}
.sideBar > ul > li:hover .screenOuter {
  right: 40px;
  opacity: 1;
  visibility: visible;
}
.sideBar > ul > li image {
  width: 25px;
  height: 25px;
  vertical-align: top;
}
.sideBar > ul > li .screenOuter {
  visibility: hidden;
  position: absolute;
  right: 60px;
  top: 0;
  width: 100px;
  height: 100px;
  opacity: 0;
  background: red;
  transition: all 0.3s ease;
}
.sideBar > ul > li .screenOuter:after {
  position: absolute;
  right: -15px;
  top: 10px;
  content: "";
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #ffffff;
}
.sideBar > ul > li.two > .screenOuter {
  width: 352px;
  height: auto;
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 15px 0 22px;
  box-sizing: border-box;
}
.sideBar > ul > li.two > .screenOuter .title {
  height: 30px;
  margin: 0 25px;
  border-bottom: 1px solid #cacaca;
}
.sideBar > ul > li.two > .screenOuter .title span {
  color: #000000;
  margin-right: 15px;
}
.sideBar > ul > li.two > .screenOuter .title span:nth-of-type(1) {
  font-size: 18px;
}
.sideBar > ul > li.two > .screenOuter .title span:nth-of-type(2) {
  font-size: 12px;
  color: #313131;
  opacity: 0.6;
  margin-top: 5px;
}
.sideBar > ul > li.two > .screenOuter .title span:last-child {
  margin: 5px 0 0;
  font-size: 12px;
  color: #313131;
  opacity: 0.6;
  cursor: pointer;
}
.sideBar > ul > li.two > .screenOuter ul > li {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  padding: 16px 25px;
}
.sideBar > ul > li.two > .screenOuter ul > li .image {
  flex: 80px 0 0;
  width: 80px;
  height: 60px;
  background: red;
  margin-right: 12px;
}
.sideBar > ul > li.two > .screenOuter ul > li .image img {
  width: 100%;
  height: 100%;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content div {
  color: #313131;
  text-align: left;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content div:nth-of-type(1) {
  font-size: 14px;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content div:nth-of-type(2) span {
  font-size: 12px;
  margin-right: 10px;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content div:nth-of-type(3) {
  color: red;
  font-size: 12px;
}
.sideBar > ul > li.two > .screenOuter ul > li .r-content div:nth-of-type(3) span {
  font-size: 16px;
  margin-right: 5px;
}
.sideBar > ul > li.two > .screenOuter ul > li .delete {
  position: absolute;
  bottom: 20px;
  right: 25px;
  padding: 5px;
  border: 1px solid #ff0000;
  border-radius: 5px;
  font-size: 10px;
  color: #ff0000;
  letter-spacing: 2px;
  cursor: pointer;
  display: none;
}
.sideBar > ul > li.two > .screenOuter ul > li:hover {
  background: #eee;
}
.sideBar > ul > li.two > .screenOuter ul > li:hover .delete {
  display: block;
}
.sideBar > ul > li.two > .screenOuter .content-ft button {
  margin: 30px auto 0;
  width: 290px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  outline: none;
  background: red;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
}
.sideBar > ul > li.two > .screenOuter .content-ft p {
  padding: 10px;
  color: #cacaca;
}
.sideBar > ul > li.three > .screenOuter {
  background: #ff4343;
  height: 38px;
  line-height: 38px;
  color: #ffffff;
  padding: 0 10px;
}
.sideBar > ul > li.three > .screenOuter:after {
  border-color: transparent transparent transparent #ff4343;
}
.sideBar .up {
  position: absolute;
  bottom: 30px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  display: none;
}

</style>
