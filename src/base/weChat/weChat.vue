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
                <template v-for="item in 5">
                    <li class="chat-time">昨天 15:08</li>
                    <li class="chat-block chat-block-left">
                        <a href=""><img src="./imgs/avatar.png"></a>
                        <div class="chat-content">
                            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                        </div>
                    </li>
                </template>
                
                <template v-for="item in 5">
                    <li class="chat-time">昨天 15:08</li>
                    <li class="chat-block chat-block-right">
                        <a href=""><img src="./imgs/avatar.png"></a>
                        <div class="chat-content">
                            <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <div class="inputBox">
            <textarea cols="30" 
                    rows="10" 
                    style="resize: none"
                    placeholder="点击输入你要咨询的问题..."></textarea>
            <div>
                <a href="http://www.baidu.com">立即下载世华地产app,随时随地聊~</a>
                <div class="sendBtn">发送</div>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    data() {
        return {
            brokerTalks: [],//聊过的经纪人
            isShowBroker: false,
            isShowItContent: false,
            flag: false,//用来记住 聊天窗口是否被打开
        }
    },
    computed: {
        userAuthJiGuang() {
            return this.$store.state.userAuthJiGuang;
        }
    },
    watch: {
        userAuthJiGuang() {
            this.JiguangInit();
        }
    },
    methods: {
        //初始化极光IM
        JiguangInit() {
            console.log(this.userAuthJiGuang);
            
        },
        //更多
        upDown() {
            this.isShowBroker = !this.isShowBroker;
            //上一次聊天窗口
            if(this.isShowBroker){
                if(this.flag){
                    this.isShowItContent = true;
                }
            }else{
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
            
        },
        // 点击其中一项
        selectItem() {
            this.open();
        }
    },
    mounted() {
       
    }
}
</script>
<style lang="less">
.wechatBox{
    position: fixed;
    bottom: 0;
    right: 40px;
    background: #ffffff;
    box-shadow:  0 0 30px 0 rgba(0,0,0,0.45);
    .rt-list{
        float: right;
        width: 240px;
        .title{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ddd;
            .avatar{
                float: left; 
                width: 40px;
                height: 40px;
                background: url('./imgs/lianxi.png') no-repeat;
                background-position: 12px 12px;  
            }
            .upDown{
                float: right;
                width: 40px;
                height: 40px;
                background: url('./imgs/lianxi.png') no-repeat;
                background-position: 12px -108px;   
            }
            span{
                margin-right: 5px;
                vertical-align: middle;

            }
        }
        ul{
            height: 400px;
            max-height: 400px;
            overflow-y: auto;
            li{
                padding: 15px 0;
                margin: 0 10px;
                border-bottom: 1px solid #ddd;
                .time{
                    text-align: right;
                    color: #999;
                    font-size: 12px;
                }
                .broker{
                    display: flex;
                    flex-flow: row nowrap;
                    img{
                        flex: 40px 0 0;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 10px;
                        background: url("./imgs/avatar.png") no-repeat center center;
                    }
                    img+div{
                        flex: 1;
                        h4{
                            color: #333;
                            font-size: 14px;
                            font-weight: 700;
                            line-height: 20px;
                        }
                        p{
                            color: #666;
                            font-size: 12px;
                            line-height: 20px;                        
                        }
                    }
                }
            }
            .noBrokers{
                text-align: center;
                margin-top: 50px;
                padding-top: 160px;
                background: url('./imgs/broker.png') no-repeat center center;
                background-size: 40%;
                div{
                    padding-bottom: 10px;
                    color: #5a5a5a;
                    line-height: 16px;
                    font-size: 16px;
                    font-weight: 700;
                }
            }
        }
    }
    .lt-content{
        float: right;
        width: 380px;
        border-right: 1px solid #ddd;
        .title{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ddd;
            span{
                margin-left: 20px;
                &::before{
                    content: "";
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #4285f4;
                    margin-right: 10px;
                }
            }
            .close{
                float: right; 
                width: 40px;
                height: 20px;
                margin-top: 10px;
                background: url('./imgs/lianxi.png') no-repeat;
                background-position: 12px -87px; 
            }
        }
        .chatArea{
            height: 270px;
            border-bottom: 1px solid #ddd;
            background: #f3f3f3;
            ul{
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
                .chat-time{
                    padding: 0 10px;
                    color: #aaa;
                    font-size: 12px;
                    text-align: center; 
                }
                .chat-block {
                    margin: 16px 0;
                    overflow: hidden;
                    a{
                        width: 59px;
                        text-align: center;
                        display: inline-block;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            display: inline-block;
                            width: 34px;
                            height: 34px;
                            background: url('./imgs/avatar.png') no-repeat center center;
                            background-size: cover;
                        }
                    }
                    .chat-content{
                        position: relative;
                        max-width: 220px;
                        min-height: 20px;
                        padding: 10px;
                        border-radius: 5px;
                        word-break: break-all;
                        background: #ffffff;
                    }
                }
                .chat-block-left{
                    a{float: left}
                    .chat-content{
                        float: left;
                        &::before{
                            position: absolute;
                            left: -5px;
                            top: 0;
                            content: '';
                            display: block;
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 0 solid transparent;
                            border-top: 15px solid #ffffff;
                        }
                    }
                }
                .chat-block-right{
                    a{float: right}
                    .chat-content{
                        float: right;
                        &::before{
                            position: absolute;
                            right: -5px;
                            top: 0;
                            content: '';
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
        .inputBox{
            height: 123px;
            textarea{
                width: 339px;
                height: 28px;
                margin: 10px 9px 0 10px;
                padding: 10px 10px 23px 10px;
                border: 1px solid #d9d9d9;
                outline: none;
            }
            div{
                a{
                    float: left;
                    margin: 10px 0 0 10px;
                    line-height: 31px;
                    font-size: 12px;
                    color: #4285f4;
                    &:hover{
                        text-decoration: underline!important;
                    }
                }
                .sendBtn{
                    float: right;
                    margin: 10px 10px 0 0;
                    width: 80px;
                    text-align: center;
                    height: 31px;
                    line-height: 31px;
                    color: #fff;
                    background: #4285f4;
                }
            }
        }
    }
}
</style>
