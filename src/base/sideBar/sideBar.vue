/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 14:34:13 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-07-30 10:42:49
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
                        <li v-for="item in appintList">
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
                        <button v-show="compareBtntwo" @click="compareone()">立即预约</button>
                        <p v-show="!compareBtntwo">暂时没有任何预约的房源信息!</p>
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
                        <li v-for="item in contrastList">
                            <div class="image">
                                <img :src="item.housePic"/>
                            </div>
                            <div class="r-content">
                                <div>{{item.houseTitle}}</div>
                                <div><span>{{item.houseType}}</span><span>{{item.builtArea}}平米</span></div>
                                <div><span>{{item.saleTotal}}</span>万</div>
                            </div>
                            <div class="delete" @click="deleteOne(item)">删除</div>
                        </li>
                    </ul>
                    <div class="content-ft">
                        <button v-show="compareBtn" @click="compare()">立即对比</button>
                        <p v-show="!compareBtn">暂时没有任何比较的房源信息!</p>
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
  data() {
    return {
      showbox: null, //显示对应的dialog
      compareBtn: false,//对比
      compareBtntwo: false,//待看
      scity: null,//用户选定城市
      id:"",            //待看id
      sdid: ""
    };
  },
  computed: {
    contrastList() {
      let list = this.$store.state.contrastList;
      if (list.length > 0) {
        this.compareBtn = true;
      } else {
        this.compareBtn = false;
      }
      return list;
    },
    appintList() {
     let list = this.$store.state.appintList;
     list.length
     ? this.compareBtntwo = true
     : this.compareBtntwo = false;
     return list;
    },
    //监控登录状态
    logined() {
      return this.$store.state.logined;
    },
  },
  methods: {
    //清空对比
    clearAll() {
      this.compareBtn = false;
      this.$store.dispatch("clearAll");
    },
    //清空待看
    clearDaikan() {
      this.compareBtntwo = false;
      this.$store.dispatch("clearDaikan");
    },
     //删除对比
    deleteOne(item) {
      this.$store.dispatch("deleteOne", item);
    },
    //删除待看列表
    deleteOneAppoint(item) {
      this.$store.dispatch("deleteOneAppoint", item);
    },
    //立即比较(对比)
    compare() {
      this.$router.push({path:"/contrast"});
    },
    //立即预约 (待看)
    compareone() {
      this.appintList.forEach(item => {
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
    },
    _querys() {
      this.$http
        .post(this.$url.URL.APPOINT_ADD, {
          scity: JSON.parse(localStorage.selectCity).value,
          sdid: this.sdid
        })
        .then(response => {});
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
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  z-index: 1002;
  > ul {
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    //选项
    > li {
      cursor: pointer;
      padding: 5px 0 3px;
      margin-bottom: 25px;
      text-align: center;
      position: relative;
      &:hover {
        background: #e6e6e6;
        .screenOuter {
          right: 40px;
          opacity: 1;
          visibility: visible;
        }
      }
      image {
        width: 25px;
        height: 25px;
        vertical-align: top;
      }
      .screenOuter {
        visibility: hidden;
        position: absolute;
        right: 60px;
        top: 0;
        width: 100px;
        height: 100px;
        opacity: 0;
        background: red;
        transition: all 0.3s ease;
        //添加border三角形
        &:after {
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
      }
      //屏幕外第二个内容布局(和第一个内容布局一样)
      &.two > .screenOuter {
        width: 352px;
        height: auto;
        background: #ffffff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        padding: 15px 0 22px;
        box-sizing: border-box;
        .title {
          height: 30px;
          margin: 0 25px;
          border-bottom: 1px solid #cacaca;
          span {
            color: #000000;
            margin-right: 15px;
            &:nth-of-type(1) {
              font-size: 18px;
            }
            &:nth-of-type(2) {
              font-size: 12px;
              color: #313131;
              opacity: 0.6;
              margin-top: 5px;
            }
            &:last-child {
              margin: 5px 0 0;
              font-size: 12px;
              color: #313131;
              opacity: 0.6;
              cursor: pointer;
            }
          }
        }
        ul > li {
          position: relative;
          display: flex;
          flex-flow: row nowrap;
          overflow: hidden;
          padding: 16px 25px;
          .image {
            flex: 80px 0 0;
            width: 80px;
            height: 60px;
            background: red;
            margin-right: 12px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .r-content {
            flex: 1;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-start;
            div {
              color: #313131;
              text-align: left;
              &:nth-of-type(1) {
                font-size: 14px;
              }
              &:nth-of-type(2) {
                span {
                  font-size: 12px;
                  margin-right: 10px;
                }
              }
              &:nth-of-type(3) {
                color: red;
                font-size: 12px;
                span {
                  font-size: 16px;
                  margin-right: 5px;
                }
              }
            }
          }
          .delete {
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
          &:hover {
            background: #eee;
            .delete {
              display: block;
            }
          }
        }
        .content-ft {
          button {
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
          p {
            padding: 10px;
            color: #cacaca;
          }
        }
      }
      &.three > .screenOuter {
        background: #ff4343;
        height: 38px;
        line-height: 38px;
        color: #ffffff;
        padding: 0 10px;
        &:after {
          border-color: transparent transparent transparent #ff4343;
        }
      }
      //屏幕外第三个内容布局
      //屏幕外第四个内容布局
    }
  }
  .up {
    position: absolute;
    bottom: 30px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    display: none;
  }
}
</style>
