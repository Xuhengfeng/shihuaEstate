<template>
    <div id="box">
        <div class="title">我的账户信息</div>
        <ul>
            <li :class="index==num?'bgColor':''" 
                :key="index"
                v-for="(item,index) in menu" 
                @click="change(index)">{{item}}</li>
        </ul>
        <div class="one" v-show="num == 0">
            <div class="bigimg">
                <!-- 承载预览图片 -->
                <img :src="dataUrl" v-if="isShowImgs">
                
                <!-- 浮层文本 -->
                <div>
                    <p>点击上传</p>
                    <p>只支持jpg、png格式<br>大小不能超过1M</p>
                </div>

                <!-- input的file点击上传 -->
                <label class="add-photo">
                    <input class="add-photo" 
                           type="file" 
                           accept="image/jpg,image/png,image/jpeg" 
                           v-show="false"
                           @change="getFile"/>
                </label>
            </div>
            <div class="size">
                <div class="size-title">预览</div>
                <div class="size-style" ref="size-style">
                    <div><img :src="dataUrl" v-if="isShowImgs"><span>120px*120px</span></div>
                    <div><img :src="dataUrl" v-if="isShowImgs"><span>80px*80px</span></div>
                    <div><img :src="dataUrl" v-if="isShowImgs"><span>34px*34px</span></div>
                </div>
            </div>
        </div>
        <div class="two oForm" v-show="num == 1">
            <el-form ref="form" label-width="80px">
                <el-form-item label="昵称">
                    <el-input v-model="username"></el-input>
                </el-form-item>
            </el-form>
            <div class="save" @click="saveUsername()">保存</div>
        </div>
        <div class="three oForm" v-show="num == 2">
            <el-form ref="form" label-width="80px">
                <el-form-item label="输入旧密码">
                    <el-input v-model="oldpsw"></el-input>
                </el-form-item>
                <el-form-item label="设置新密码">
                    <el-input v-model="newpsw1"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码">
                    <el-input v-model="newpsw2"></el-input>
                </el-form-item>
            </el-form>
            <div class="save" @click="savePassword()">保存</div>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
        return{
            menu: ['上传头像','修改昵称','修改密码'],
            num: 0,
            dataUrl: null, //图片
            isShowImgs: false,//不同格式的图片
            username: null,//用户昵称
            oldpsw: null,//旧密码
            newpsw1: null,//新密码1
            newpsw2: null,//新密码2
        }
    },
    methods: {
        // 切换菜单
        change(index) {
            this.num = index;
            //预览图清空
            this.dataUrl = null;
            this.isShowImgs = false;
        },
        // 修改用户名
        saveUsername() {
            this.$http
            .post(this.$url.URL.UPDATE_NICKNAME,{nickname: this.username})
            .then(res=>{
                if(res.data.status == 1) {
                    this.username = null;
                    this.$alert(res.data.msg);
                    //静默刷新用户头像
                    this.$store.dispatch('getUserInfo');
                }
            })
        },
        // 修改密码
        savePassword() {
            let params = {
                "confirmPassword": this.oldpsw,
                "newPassword": this.newpsw1,
                "password": this.newpsw2
                }
            this.$http
            .post(this.$url.URL.UPDATE_PASSWORD,params)
            .then(res=>{
                if(res.data.status == 1) {
                    this.$alert('修改密码成功!');
                }else{
                    this.$alert(res.data.msg);
                }
            })
        },
        // 上传头像
        getFile(e) {
            let files = e.target.files || e.dataTransfer.files
            this.createImg(files);
        },
        createImg(file) {           
            //判断是否支持
            if (!file || !window.FileReader) return;
            if (/^image/.test(file[0].type)) {
                // 创建一个reader
                var reader = new FileReader();
                // 将图片将转成 base64 格式
                reader.readAsDataURL(file[0]);

                // 读取成功后的回调
                reader.onload =  (e)=> {
                    this.dataUrl = e.target.result;
                    this.isShowImgs = true;
                    // 上传图片请求
                    this.imgUploadRequest(e.target.result);
                }
            }
        },
        imgUploadRequest(code) {
            let params = {base64Image:code};
            this.$http
            .post(this.$url.URL.UPDATE_HEADIMG,params)
            .then(res=>{
                //静默刷新用户头像
                this.$store.dispatch('getUserInfo');
            })
        },
    }
}
</script>

<style lang="less" scoped>
#box{
    margin: 5px;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    padding: 40px;
    .title{
        font-size: 30px;
        color: #000000;
        margin-bottom: 20px;
    }
    ul{
        background: #e5e5e5;
        height: 40px;
        line-height: 40px;
        li{
            float: left;
            text-align: center;
            width: 100px;
            cursor: pointer;
        }
    }
    .one{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      margin-top: 58px;
      margin-left: 14px;
      .bigimg{
        position: relative;
        width: 186px;
        height: 186px;
        margin-right: 110px;
        background:#e5e5e5 url("../../imgs/mine/yun.png") no-repeat center center;
        img{
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
        .add-photo{
            display: inline-block;
            width: 100%;
            height: 100%;
            outline: none;
            opacity: 0;
        }
        div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            p{
                white-space: nowrap;
                line-height: 1.5;
                &:nth-of-type(1){font-weight:bold;color: #ff4343}
                &:nth-of-type(2){color: #171b1f}
            }
        }
      }  
      .size{
          position: relative;
          background: #f3f3f3;          
          width: 390px;
          .size-title{
            position: absolute;
            top:-25px;
            left:0;
            font-size: 18px;
            color: #000000;
          }
          .size-style{
            overflow: hidden;
            padding: 23px 30px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: flex-end;
            div{
                position: relative;
                background: #dadadb;
                margin-right: 35px;
                img{width: 100%;height: 100%}
                &:nth-of-type(1){
                    width: 120px;
                    height: 120px;
                }
                &:nth-of-type(2){
                    width: 80px;
                    height: 80px;
                }
                &:nth-of-type(3){
                    width: 34px;
                    height: 34px;
                }
                span{
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                    font-size: 12px;
                }
            }
          }
      }
      
    }
    .two,.three{
        width: 380px;
        padding: 110px 0 110px 150px;
        overflow: hidden;
        .save{
            width: calc(100% - 120px);
            float: right;
            text-align: center;
            font-size: 15px;
            background: #ff4343;
            border-radius: 5px;
            height: 45px;
            line-height: 45px;
            color: #ffffff;
        }
    }
}

.bgColor{
	background: red!important;
	color: #ffffff;
}
</style>