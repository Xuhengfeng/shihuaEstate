<template>
<div class="wechatBox">
    <div class="rt-list">
        <div class="title" @click="upDown()"><div class="avatar"></div><span>在线咨询</span><div class="upDown" v-show="isShowBroker"></div></div>
        <ul v-show="isShowBroker">
            <li v-for="item in 1" @click="selectItem()">
                <div class="time">2018-12-02</div>
                <div class="broker">
                    <img src="./imgs/avatar.png">
                    <div>
                        <h4>徐横峰</h4>
                        <p>你好。。。</p>
                    </div>   
                </div>
            </li>
        </ul>
    </div>
    <div class="lt-content" v-show="isShowItContent">
        <div class="title"><span>徐横峰</span><div class="close" @click="close()"></div></div>
        <div class="chatArea">

        </div>
        <div class="inputBox">

        </div>
    </div>
</div>    
</template>
<script>
export default {
    data() {
        return {
            isShowBroker: false,
            isShowItContent: false,
            flag: false,//用来记住 聊天窗口是否被打开
        }
    },
    methods: {
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
        // 点击其中一项
        selectItem() {
            this.open();
        }
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
        }
        .inputBox{
            height: 123px;
        }
    }
}
</style>
