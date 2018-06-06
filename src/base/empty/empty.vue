/*
 * @Author: 徐横峰 
 * @Date: 2018-06-06 10:56:46 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-06-06 13:34:52
 */
<template>
    <!-- 所有的空页面 -->
    <div class="empty">
        <div class="one">
            <div class="image"><img :src="picpath"/></div>
            <div class="title">{{titles}}</div>
        </div>
        <div class="two" v-show="isShow">
            <div class="content">{{contents}}</div>
            <div class="btn" @click="clickme()">{{btns}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        picnum: {//控制pic
            type: Number,
            default: 4
        },
        titles: {//控制title
            type: String,
            default: 'test1'
        },
        contents: {//控制content
            type: String,
            default: '有想要约看的房源?直接在房源页面点击"预约看房"即可将房源加入待看清单,然后在这里安排你的看房行程。',
        },
        btns: {//控制btn的内容
            type: String,
            default: 'test3'
        },
        isShow: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            picpath: null,//图片路径
        }
    },
    created() {
        let num = this.picnum;
        switch(num){
            case  1: this.picpath = require('./imgs/comment.png');break;//评论 
            case  2: this.picpath = require('./imgs/consult.png');break;//咨询
            case  3: this.picpath = require('./imgs/person.png');break;//人物
            case  4: this.picpath = require('./imgs/problem.png');break;//问题
            case  4: this.picpath = require('./imgs/wechat.png');break;//微信
        }
    },
    methods: {
        clickme() {
            let num = this.picnum;//区分不同对象的点击
            this.$emit('myEvent', num)
        }
    }
}
</script>

<style lang="less" scoped>
.empty{
    width: 350px;
    margin: 0 auto;
    .one{
        text-align: center;
        overflow: hidden;
        margin-bottom: 22px;
        .image{
            width: 143px;
            height: 164px;
            margin: 100px auto 30px;
            img{width:100%;height:100%}
        }
        .title{
            font-size: 24px;
            color: rgba(49,49,49,0.8);
        }
    }
    .two{
        .content{
            line-height: 1.5;
            margin-bottom: 40px;
            text-align: justify;
        }
        .btn{
            background: #ff4343;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #ffffff;
            border-radius: 5px;
            cursor: pointer;
        }
    }
}
</style>
