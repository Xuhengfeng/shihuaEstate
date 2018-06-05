<template>
    <div id="box">
        <div class="title">我的账户信息</div>
        <ul>
            <li v-for="item in menu">{{item}}</li>
        </ul>
        <div class="main">
            <div class="bigimg"></div>
            <div class="size">
                <div class="size-title">预览</div>
                <div class="size-style">
                    <div><span>120px*120px</span></div>
                    <div><span>80px*80px</span></div>
                    <div><span>34px*34px</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
        return{
            menu: ['上传头像','修改昵称','修改密码']
        }
    },
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
        }
    }
    .main{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      margin-top: 58px;
      margin-left: 14px;
      .bigimg{
        width: 186px;
        height: 186px;
        background: #e5e5e5;
        margin-right: 110px;
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
}
</style>