<template>
<div class="wechatBox">
 
      <div class="rt-list" :class="isShowBroker?'slideUp':''">
            <div class="title" @click="upDown()"><div class="avatar"></div><span>在线咨询</span><div class="upDown" v-show="isShowBroker"></div></div>
            <ul>
                <li :key="item" v-for="item in brokerTalks" @click="selectItem()">
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
      <!-- 动画层 -->
      <div class="lt-content" :class="isShowBroker?'slideUp':''" >
        <!-- 显隐层 -->
        <div class="box" v-show="isShowItContent">
          <div class="title"><span>徐横峰</span><div class="close" @click="close()"></div></div>
              <div class="chatArea">
                  <ul>
                      <template v-for="item in contents">
                          <li class="chat-time">{{item.ctime_ms|formatTime}}</li>
                          <li class="chat-block" :class="item.content.val==1?'chat-block-left':'chat-block-right'">
                              <a href=""><img src="./imgs/avatar.png"></a>
                              <div class="chat-content">
                                <!-- {{item.content.msg_body.text}} -->
                                  <div>{{item.content.msg_body.text}}</div>
                              </div>
                          </li>
                      </template>
                      <div class="chat-tophint" v-show="!contents.length">聊天的时候，经纪人无法知道您的手机号！</div>
                      <!-- 滚动到底部 -->
                      <p class="scroll"></p>
                  </ul>
              </div>
              <div class="inputBox">
                  <div class="textBox">
                    <textarea cols="30" 
                            rows="10" 
                            style="resize: none"
                            v-model="sendMsg"
                            placeholder="点击输入你要咨询的问题..."
                            @keyup.enter="sendBtn()">
                    </textarea>
                    <a class="im-input-pic" title="插入图片"><input type="file" @change="getFile"/></a>
                    <div></div>
                  </div>
                  <div>
                      <a href="http://www.baidu.com">立即下载世华地产app,随时随地聊~</a>
                      <div class="sendBtn" @click="sendBtn()">发送</div>
                  </div>
              </div>
            </div>
      </div>

</div>    
</template>
<script>
export default {
  props: {
    history: {//历史漫游消息
      type: Array,
      default: []
    }
  },
  data() {
    return {
      brokerTalks: [1], //聊过的经纪人
      isShowBroker: false,
      isShowItContent: false,
      sendMsg: null, //发送消息
      contents: [],//聊天消息
      flag: false, //用来记住 聊天窗口是否被打开
    };
  },
  computed: {
    //极光IM
    AuthJiG() {
      return this.$store.state.AuthJiG;
    },
    //开始聊
    chat() {
      return this.$store.state.chat;
    }
  },
  watch: {
    chat() {
      this.chat&&this.open();
    }
  },
  filters: {
    formatTime(val) {
      return (new Date(val)).$format("yyyy-MM-dd E hh:mm:ss");
    }
  },
  created() {
    //历史漫游信息
    this.contents = this.history;
  },
  methods: {
    //更多
    upDown() {
      //经纪人列表
      this.isShowBroker = !this.isShowBroker;
      //上一次聊天窗口
      if (this.isShowBroker) {
        if (this.flag) this.isShowItContent = true;
      } else {
        this.isShowItContent = false;
      }
      this.$store.commit('STARTCHAT', false);
    },
    // 打开聊天
    open() {
      this.isShowItContent = true;
      this.isShowBroker = true;
      this.flag = true;
    },
    // 关闭聊天
    close() {
      this.isShowItContent = false;
      this.flag = false;
      this.$store.commit('STARTCHAT', false);
    },
    //发送
    sendBtn() {
      if(JIM.isLogin()){
        this.Jiguang_sendMsg();
      }else{
        console.log('未登录');
        this.$emit('afresh');
      }
    },
    // 发送消息
    Jiguang_sendMsg() {
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
            this.contents.push({
                content: {
                  msg_body: {text: msg.content.msg_body.text}
                },
                ctime_ms: data.ctime_ms,
                val: 2
            });
            setTimeout(()=>{
              //滚动底部
              let boxcontent = document.querySelector(".scroll");
                  boxcontent.scrollIntoView(false);
            },100);

        })
        .onFail(data => {});
    },
    //用户实时聊天监听
    Jiguang_onMsg() {
      JIM.onMsgReceive(data => {

        this.contents.push({ 
            content: {
              msg_body: {text: data.messages[0].content.msg_body.text}
            },
            ctime_ms: data.messages[0].content.create_time,
            val: 1
        });
        setTimeout(()=>{
          //滚动底部
          let boxcontent = document.querySelector(".scroll");
              boxcontent.scrollIntoView(false);
        },100);

      });
    },
    getFile(e) {
      //构造图片FormData
      let fd = new FormData();
      let files = e.target.files || e.dataTransfer.files
      if(!files[0]){
        throw new Error('获取文件失败');
      }
      fd.append(files[0].name, files[0]);
      //发送图片
      this.Jiguang_sendPic(fd);
    },
    //发送图片
    Jiguang_sendPic(fd) {
      console.log(12121)
      JIM.sendSinglePic({
        target_username:"13100000000",
        appkey: this.AuthJiG.appkey,
        image: fd 
      })
      .onSuccess(data=> {
        console.log(data);
      })
      .onFail(data=> {
        console.log('error:' + JSON.stringify(data))
      });
    },
    //获取资源(例如图片)
    Jiguang_getResource() {
      JIM.getResource({
        'media_id' : '<media_id >',
      }).onSuccess(data=> {
          //data.code 返回码
          //data.message 描述
          //data.url 资源临时访问路径
      }).onFail(data=> {
          //data.code 返回码
          //data.message 描述
      });
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
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.45);
   .rt-list {
    float: right;
    width: 240px;
    margin-bottom: -400px;
    background: #ffffff;
    transition: all 0.3s ease;
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
        cursor: pointer;
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
            cursor: pointer;
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
    overflow: hidden;
    float: right;
    margin-bottom: -400px; 
    transition: all 0.3s ease;
    .box{   
      width: 380px;
      border-right: 1px solid #ddd;
      background: #ffffff;   
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
          cursor: pointer;
        }
      }
      .chatArea {
        height: 270px;
        border-bottom: 1px solid #ddd;
        background: #f3f3f3;
        box-sizing: border-box;
        overflow: hidden;
        .chat-tophint{
          height: 12px;
          color: #aaa;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
        }
        ul {
          padding-top: 20px;
          box-sizing: border-box;
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
            border-radius: 6px;
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
              cursor: pointer;
              img {
                display: inline-block;
                width: 34px;
                height: 34px;
                background: url("./imgs/avatar.png") no-repeat center center;
                background-size: cover;
                cursor: pointer;
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
        height: 120px;
        background: #ffffff;
        .textBox{
          position: relative;
          padding: 10px 10px 23px 10px;
          height: 28px;
          width: 339px;
          border: 1px solid #d9d9d9;
          margin: 10px 9px 0 10px;
          textarea {
            height: 28px;
            width: 339px;
            outline: none;
            overflow-y: hidden;
            border: none;
            padding: 0;
            &::selection {
              background: #33be85; 
              color:#ffffff;
            }
          }
          .im-input-pic{
            position: absolute;
            right: 9px;
            bottom: 10px;
            display: block;
            width: 14px;
            height: 14px;
            text-indent: 999em;
            background: red url('./imgs/lianxi.png') no-repeat 0 -72px;
            cursor: pointer;
            input{
              float: left;
              opacity: 0;
              width: 24px;
            }
          }
        }
        div {
          overflow: hidden;
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
}
.slideUp{
  margin-bottom: 0!important;
}
</style>
