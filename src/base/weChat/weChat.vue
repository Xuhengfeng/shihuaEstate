<template>
<div class="wechatBox">
    <div class="rt-list">
        <div class="title" @click="upDown()"><div class="avatar"></div><span>在线咨询</span><div class="upDown" v-show="isShowBroker"></div></div>
        <ul v-show="isShowBroker">
            <li v-for="item in brokerTalks" @click="selectItem()">
                <div class="time">2018-12-02</div>
                <div class="broker">
                    <img src="./imgs/avatar.png">
                    <div>
                        <h4>徐横峰</h4>
                        <p>你好。。。</p>
                    </div>   
                </div>
            </li>
            <div class="noBrokers" v-if="!brokerTalks.length">
                <div>没有聊过的经纪人</div>
            </div>
        </ul>
    </div>
    <div class="lt-content" v-show="isShowItContent">
        <div class="title"><span>徐横峰</span><div class="close" @click="close()"></div></div>
        <div class="chatArea">
            <ul>
                <template v-for="item in contents">
                    <li class="chat-time">{{item.ctime_ms|formatTime}}</li>
                    <li class="chat-block" :class="item.val==1?'chat-block-left':'chat-block-right'">
                        <a href=""><img src="./imgs/avatar.png"></a>
                        <div class="chat-content">
                            <div>{{item.content}}</div>
                        </div>
                    </li>
                </template>
                <!-- 滚动到底部 -->
                <p class="scroll"></p>
            </ul>
        </div>
        <div class="inputBox">
            <textarea cols="30" 
                    rows="10" 
                    style="resize: none"
                    v-model="sendMsg"
                    placeholder="点击输入你要咨询的问题..."
                    @keyup.enter="sendBtn()"></textarea>
            <div>
                <a href="http://www.baidu.com">立即下载世华地产app,随时随地聊~</a>
                <div class="sendBtn" @click="sendBtn()">发送</div>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
  data() {
    return {
      brokerTalks: [1], //聊过的经纪人
      isShowBroker: false,
      isShowItContent: false,
      sendMsg: null, //发送消息
      contents: [
        //聊天消息
        { content: "fasdf asdf asdf", ctime_ms: null, val: 1 },
        { content: "fasdf asdf asdf", ctime_ms: null, val: 2 }
      ],
      flag: false //用来记住 聊天窗口是否被打开
    };
  },
  computed: {
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
    //用户登录
    isLogin() {
      return this.$store.state.logined;
    },
    //极光IM
    AuthJiG() {
        return this.$store.state.AuthJiG;
    }
  },
  watch: {
    isLogin() {
        //用户登录时初始化极光IM
        this.isLogin&&this.JiguangInit();
    }
  },
  filters: {
    formatTime(val) {
        return (new Date(val)).$format("yyyy-MM-dd E hh:mm:ss");
        // let date = new Date(val);
        // let Y = date.getFullYear() + '-';
        // let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        // let D = date.getDate() + ' ';
        // let h = date.getHours() + ':';
        // let m = date.getMinutes() + ':';
        // let s = date.getSeconds();
        // return Y+M+D+h+m+s;
        // if(hour < 6){console.log("凌晨好！")} 
        // else if (hour < 9){console.log("早上好！")} 
        // else if (hour < 12){console.log("上午好！")} 
        // else if (hour < 14){console.log("中午好！")} 
        // else if (hour < 17){console.log("下午好！")} 
        // else if (hour < 19){console.log("傍晚好！")} 
        // else if (hour < 22){console.log("晚上好！")} 
        // console.log((new Date()).$format(val))
    }
  },
  created() {
     //极光IM 实例化
    window.JIM = new JMessage({ debug: true });
    //用户刷新时初始化极光IM
    let isLogin = this.$store.state.logined;
    isLogin&&this.JiguangInit();
  },
  methods: {
    //初始化极光IM
    JiguangInit() {
      let that = this;
        JIM.init({
            appkey: this.AuthJiG.appkey,
            random_str: this.AuthJiG.random_str,
            signature: this.AuthJiG.signature,
            timestamp: this.AuthJiG.timestamp
        })
        .onSuccess(data => {
            that.JiguangLogin();//极光登录
        })
        .onFail(error => {});
    },
    //极光登录
    JiguangLogin() {
        JIM.login({
            username: this.userInfo.easemobUsername,
            password: this.userInfo.easemobPassword
        })
        .onSuccess(data => {
            this.JiguangUserInfo();//用户信息
            this.JiguangConversation();//对话列表
            this.JiguangOnMsg();//监听消息
        })
        .onFail(data => {});
    },
    //用户获取极光IM信息
    JiguangUserInfo() {
      JIM.getUserInfo({
        username: this.userInfo.easemobUsername,
        appkey: this.AuthJiG.appkey
      }).onSuccess(data => {
        console.log("获取用户Im信息成功：" + JSON.stringify(data));
      });
    },
    //用户获取极光IM会话列表
    JiguangConversation() {
      JIM.getConversation()
        .onSuccess(data => {
          console.log("会话列表成功:" + JSON.stringify(data));
        })
        .onFail(data => {
          console.log("会话列表失败:" + JSON.stringify(data));
        });
    },
    //更多
    upDown() {
      this.isShowBroker = !this.isShowBroker;
      //上一次聊天窗口
      if (this.isShowBroker) {
        if (this.flag) {
          this.isShowItContent = true;
        }
      } else {
        this.isShowItContent = false;
      }
    },
    // 打开聊天
    open() {
      this.isShowItContent = true;
      this.flag = true;
    },
    // 关闭聊天
    close() {
      this.isShowItContent = false;
      this.flag = false;
    },
    //发送
    sendBtn() {
      this.JiguangsendMsg();
    },
    // 发送消息
    JiguangsendMsg() {
        JIM.sendSingleMsg({
            target_username:"13100000000",
            appkey: this.AuthJiG.appkey,
            content: this.sendMsg,
            no_offline: false,
            no_notification: false,
            need_receipt: true
        })
        .onSuccess((data,msg) => {
            this.sendMsg = null;
            this.appendContent(data,msg,2);
        })
        .onFail(data => {});
    },
    //用户实时聊天监听
    JiguangOnMsg() {
      JIM.onMsgReceive(data => {
           this.appendContent(data,msg,1);
      });
    },
    //添加聊天内容
    appendContent(data,msg,num) {
        this.contents.push({
            content: msg.content.msg_body.text,
            ctime_ms: data.ctime_ms,
            val: num
        });
        setTimeout(()=>{
            let boxcontent = document.querySelector(".scroll");
                boxcontent.scrollIntoView(false);
        },100)
    },
    // 点击其中一项
    selectItem() {
      this.open();
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.wechatBox {
  position: fixed;
  bottom: 0;
  right: 40px;
  background: #ffffff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.45);
  .rt-list {
    float: right;
    width: 240px;
    .title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      .avatar {
        float: left;
        width: 40px;
        height: 40px;
        background: url("./imgs/lianxi.png") no-repeat;
        background-position: 12px 12px;
      }
      .upDown {
        float: right;
        width: 40px;
        height: 40px;
        background: url("./imgs/lianxi.png") no-repeat;
        background-position: 12px -108px;
      }
      span {
        margin-right: 5px;
        vertical-align: middle;
      }
    }
    ul {
      height: 400px;
      max-height: 400px;
      overflow-y: auto;
      li {
        padding: 15px 0;
        margin: 0 10px;
        border-bottom: 1px solid #ddd;
        .time {
          text-align: right;
          color: #999;
          font-size: 12px;
        }
        .broker {
          display: flex;
          flex-flow: row nowrap;
          img {
            flex: 40px 0 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            background: url("./imgs/avatar.png") no-repeat center center;
          }
          img + div {
            flex: 1;
            h4 {
              color: #333;
              font-size: 14px;
              font-weight: 700;
              line-height: 20px;
            }
            p {
              color: #666;
              font-size: 12px;
              line-height: 20px;
            }
          }
        }
      }
      .noBrokers {
        text-align: center;
        margin-top: 50px;
        padding-top: 160px;
        background: url("./imgs/broker.png") no-repeat center center;
        background-size: 40%;
        div {
          padding-bottom: 10px;
          color: #5a5a5a;
          line-height: 16px;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
  .lt-content {
    float: right;
    width: 380px;
    border-right: 1px solid #ddd;
    .title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
      span {
        margin-left: 20px;
        &::before {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #4285f4;
          margin-right: 10px;
        }
      }
      .close {
        float: right;
        width: 40px;
        height: 20px;
        margin-top: 10px;
        background: url("./imgs/lianxi.png") no-repeat;
        background-position: 12px -87px;
      }
    }
    .chatArea {
      height: 270px;
      border-bottom: 1px solid #ddd;
      background: #f3f3f3;
      ul {
        height: 270px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          background: #f3f3f3;
        }
        &::-webkit-scrollbar-thumb:vertical {
          height: 5px;
          background-color: rgba(125, 125, 125, 0.7);
          -webkit-border-radius: 6px;
        }
        .chat-time {
          padding: 0 10px;
          color: #aaa;
          font-size: 12px;
          text-align: center;
        }
        .chat-block {
          margin: 16px 0;
          overflow: hidden;
          a {
            width: 59px;
            text-align: center;
            display: inline-block;
            border-radius: 50%;
            overflow: hidden;
            img {
              display: inline-block;
              width: 34px;
              height: 34px;
              background: url("./imgs/avatar.png") no-repeat center center;
              background-size: cover;
            }
          }
          .chat-content {
            position: relative;
            max-width: 220px;
            min-height: 20px;
            padding: 10px;
            border-radius: 5px;
            word-break: break-all;
            background: #ffffff;
          }
        }
        .chat-block-left {
          a {
            float: left;
          }
          .chat-content {
            float: left;
            &::before {
              position: absolute;
              left: -5px;
              top: 0;
              content: "";
              display: block;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 0 solid transparent;
              border-top: 15px solid #ffffff;
            }
          }
        }
        .chat-block-right {
          a {
            float: right;
          }
          .chat-content {
            float: right;
            &::before {
              position: absolute;
              right: -5px;
              top: 0;
              content: "";
              display: block;
              width: 0;
              height: 0;
              border-left: 0 solid transparent;
              border-right: 10px solid transparent;
              border-top: 15px solid #ffffff;
            }
          }
        }
      }
    }
    .inputBox {
      height: 123px;
      textarea {
        width: 339px;
        height: 28px;
        margin: 10px 9px 0 10px;
        padding: 10px 10px 23px 10px;
        border: 1px solid #d9d9d9;
        outline: none;
      }
      div {
        a {
          float: left;
          margin: 10px 0 0 10px;
          line-height: 31px;
          font-size: 12px;
          color: #4285f4;
          &:hover {
            text-decoration: underline !important;
          }
        }
        .sendBtn {
          float: right;
          margin: 10px 10px 0 0;
          width: 80px;
          text-align: center;
          height: 31px;
          line-height: 31px;
          color: #fff;
          background: #4285f4;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
