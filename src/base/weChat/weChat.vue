<template>
<div class="wechatBox">
      <div class="rt-list" :class="isShowBroker?'slideUp':''">
            <div class="title" @click="upDown()"><div class="avatar"></div><span>在线咨询</span><div class="upDown" v-show="isShowBroker"></div></div>
            <ul>
                <li :key="index" v-for="(item,index) in brokerTalks" @click="selectItem(item,index)">
                    <div class="time">{{item.mtime|formatTime}}</div>
                    <div class="broker">
                        <div class="img" :class="item.unread_msg_count>0?'imgPoint':''"><img :src="item.avatar"></div>
                        <div>
                            <h4>{{item.nickName}}</h4>
                            <p>测试</p>
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
          <div class="title"><span>{{nowName}}</span><div class="close" @click="close()"></div></div>
              <div class="chatArea">
                  <ul>
                      <template v-for="item in contents">
                          <li class="chat-time">{{item.ctime_ms|formatTime}}</li>
                          <li class="chat-block" :class="item.content.from_id==ownId?'chat-block-right':'chat-block-left'">
                              <a href=""><img src="./imgs/avatar.png"></a>
                              <div class="chat-content">
                                  <!-- 内容 -->
                                  <div>{{item.content.msg_body.text?item.content.msg_body.text:''}}</div>
                                  
                                  <!-- 图片 -->
                                  <img class="chatPic"  :src="item.url?item.url:'http://dl.im.jiguang.cn/'+item.content.msg_body.media_id"  alt="图片" >
                                  {{'测试图片'+item.url}}
                                  <!-- v-if="item.content.msg_type=='image'" -->
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
  data() {
    return {
      brokerTalks: [],//取第一次用户登录进来时候的已存在的会话列表(极光帮我们做的缓存)  之后操作针对每次当前聊天所产生的会话列表 vuex缓存
      isShowBroker: false,
      isShowItContent: false,
      sendMsg: null, //发送消息
      contents: [],//聊天消息
      flag: false, //用来记住 聊天窗口是否被打开
      nowName: null,//当前聊天者
      ownId: null
    };
  },
  computed: {
    //极光IM
    AuthJiG() {
      return this.$store.state.AuthJiG;
    },
    //登录用户的信息
    userInfo() {
      return this.$store.state.LoginedUser;
    },
    //开始聊天
    chat() {
      return this.$store.state.chat;
    },
    //会话列表(好友列表)
    conversations() {
      return this.$store.state.conversations;
    },
    //历史漫游消息
    history() {
      return this.$store.state.history;
    }
  },
  watch: {
    userInfo() {
      this.ownId = this.userInfo.easemobUsername;
    },
    //会话列表
    conversations() {
      this.brokerTalks = this.conversations;
    },
    //开始聊天
    chat() {
      this.chat&&this.open();
    }
  },
  filters: {
    formatTime(val) {
      return (new Date(val)).$format("yyyy-MM-dd E hh:mm:ss");
    }
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
        this.$emit('afresh');
      }
    },
    // 发送消息
    Jiguang_sendMsg() {
        JIM.sendSingleMsg({
            //测试目标demo
            target_username:"15857009521",
            // target_username:"user01",
            appkey: this.AuthJiG.appkey,
            //目标经纪人
            // target_username:"13100000000",
            // appkey: this.userInfo.brokerAppKey,
            content: this.sendMsg,
            no_offline: false,
            no_notification: false,
            need_receipt: true
        })
        .onSuccess((data,msg) => {
            this.sendMsg = null;
            this.contents.push({
                content: {
                  msg_body: {text: msg.content.msg_body.text},
                  from_id: this.userInfo.easemobUsername
                },
                ctime_ms: data.ctime_ms,
                isPic: false
            });
            this.toBottom();
        })
        .onFail(data => {
          //经纪人未注册的情况下 帮经纪人进行注册
          if(data.code==880103){
            this.Jiguang_register();
          }
        });
    },
    Jiguang_register() {
      let params = {
        username: '1310000005',	
        password: '1310000005',
        nickname: 'test5'
      }
      this.$http.get(this.$url.URL.USER_JIGUANGREG+"?username="+params.username+"&password="+params.password+"&nickname="+params.nickname)
        .then(data=>{
          //主动回调一次发送消息
          this.Jiguang_sendMsg();
        })
    },
    //滚动底部
    toBottom() {
      setTimeout(()=>{
        let boxcontent = document.querySelector(".scroll");
            boxcontent.scrollIntoView(false);
      },500);
    },
    //用户实时聊天消息监听
    Jiguang_onMsg() {
      JIM.onMsgReceive(data => {
        console.log(data)
        this.contents.push({ 
            content: {
              msg_body: {text: data.messages[0].content.msg_body.text}
            },
            ctime_ms: data.messages[0].content.create_time,
        });
        this.toBottom();
      });
    },
    getFile(e) {
      //构造图片FormData
      let fd = new FormData();
      let files = e.target.files || e.dataTransfer.files
      if(!files[0]) throw new Error('获取文件失败');
      fd.append(files[0].name, files[0]);
      this.Jiguang_sendPic(fd);
    },
    //发送图片
    Jiguang_sendPic(fd) {
      JIM.sendSinglePic({
        target_username:"15857009521",
        appkey: this.AuthJiG.appkey,
        image: fd,
        nead_receipt: true
      })
      .onSuccess((data, msg)=> {
        this.Jiguang_getResource(msg);
      })
      .onFail(data=> {});
    },
    //获取资源(例如图片)
    Jiguang_getResource(msg) {
      JIM.getResource({
        'media_id': msg.content.msg_body.media_id,
      }).onSuccess(data=> {
          msg.url = data.url;
          msg.ctime_ms = msg.content.create_time;
          this.contents.push(msg);
          this.toBottom();
      }).onFail(data=> {});
    },
    //点击其中一个聊天者
    selectItem(item,index) {
      this.nowName = item.username;
      this.contents = this.history[index].msgs;
      this.toBottom();
      this.open();
    }
  }
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
          .img {
            position: relative;
            flex: 40px 0 0;
            width: 40px;
            height: 40px;
            margin-right: 10px;
            cursor: pointer;
            img{
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: url("./imgs/avatar.png") no-repeat center center;
              background-size: cover; 
            }
          }
          //point 红点
          .imgPoint::before{
            position: absolute;
            right: -2px;
            top: -2px;
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
          }
          .img + div {
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
              .chatPic{
                max-width: 120px;
                background: #f5f5f5;
              }
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
