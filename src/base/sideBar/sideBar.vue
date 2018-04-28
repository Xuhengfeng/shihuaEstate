/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 14:34:13 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-04-28 17:14:20
 */
<template>
  <div class="sideBar">
      <ul>
          <li @click="test($event)"><img src="../../imgs/home/list.png">
              <div class="screenOuter one">
                    <div class="content-hd title">
                        <span class="fl">对比清单</span>   
                        <span class="fl">最多可以选择4套房源对比</span>
                        <span class="fr">清空</span>
                    </div>
                    <ul class="content-bd">
                        <li v-for="item in [1,2,2,2]">
                            <div class="image">
                                <img src="" alt="">
                            </div>
                            <div class="r-content">
                                <div>深圳南山</div>
                                <div><span>1室1厅</span><span>100平米</span></div>
                                <div><span>222</span>万</div>
                            </div>
                        </li>
                    </ul>
                    <div class="content-ft">
                        <button @click="contranst()">立即对比</button>
                    </div>
              </div>
          </li>
          <li><img src="../../imgs/home/companyInfo.png">
              <div class="screenOuter two">
                  企业信息对比
              </div>
          </li>
          <li><img src="../../imgs/home/collection.png">
              <div class="screenOuter three">
                  收藏
              </div>
          </li>
          <li><img src="../../imgs/home/calc.png">
              <div class="screenOuter four">
                  计算器
              </div>
          </li>
          <li><img src="../../imgs/home/ideaTick.png">
              <div class="screenOuter five">
                  反馈
              </div>
          </li>
          <li><img src="../../imgs/home/service.png">
              <div class="screenOuter six">
                  客服
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        test(e) {
            console.log(e);
        },
        contranst() {
           this.$router.push({path:'/contrast'})
        }
    }
}
</script>
<style lang="less" scoped>
.sideBar{
    position:fixed;
    right:0;
    top:0;
    bottom:0;
    width: 40px;
    background: #ffffff;
    box-shadow: 0 0 2px rgba(0,0,0,.3);
    z-index: 1000;
    >ul{
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        //选项
        >li{
            padding: 5px 0 3px;
            margin-bottom: 25px;
            text-align: center;
            position: relative;
            &:hover{
                background: #e6e6e6; 
                .screenOuter{
                    right: 40px;
                    opacity: 1;
                    visibility: visible;
                }
            }
            image{
                width: 25px;
                height: 25px;
                vertical-align: top;
            }
            .screenOuter{
                visibility: hidden;
                position: absolute;
                right: 60px;
                top:0;
                width: 100px;
                height: 100px;
                opacity: 0;
                background: red;
                transition: all .3s ease;
                //border 三角形
                &:after{
                    position: absolute;
                    right: -15px;
                    top: 10%;
                    content: '';
                    width: 0;
                    height: 0;
                    border-width: 8px;
                    border-style: solid;
                    border-color:transparent transparent transparent #ffffff;
                }
                //屏幕外第一内容
                &.one{
                    width: 352px;
                    height: 450px;
                    background: #ffffff;
                    box-shadow: 0 0 2px rgba(0,0,0,.3);
                    padding: 15px 25px 22px;
                    box-sizing:border-box;
                    &:after{
                        top: 10px;
                    }
                    .title{
                        height: 30px;
                        border-bottom: 1px solid #cacaca;
                        span{
                            color: #000000;
                            margin-right: 15px;
                            &:nth-of-type(1){
                                font-size: 18px;
                            }
                            &:nth-of-type(2){
                                font-size: 12px;
                                color: #313131;
                                opacity: .6;
                                margin-top: 5px;
                            }
                            &:last-child{
                                margin: 5px 0 0;
                                font-size: 12px;
                                color: #313131;
                                opacity: .6;
                            }
                        }
                    }   
                    ul>li{
                        display: flex;
                        flex-flow: row nowrap;
                        overflow: hidden;
                        margin-top: 16px;
                        .image{
                            flex: 80px 0 0;
                            width: 80px;
                            height: 60px;
                            background: red;
                            margin-right: 12px;
                        }
                        .r-content{
                            flex: 1;
                            display: flex;
                            flex-flow: column;
                            justify-content: space-between;
                            align-items: flex-start;
                            div{
                                color: #313131;
                                &:nth-of-type(1){
                                    font-size: 14px;
                                }
                                &:nth-of-type(2){
                                    span{
                                        font-size: 12px;
                                        margin-right: 10px;
                                    }
                                }
                                &:nth-of-type(3){
                                    color: red;
                                    font-size: 12px;
                                    span{
                                        font-size: 16px;
                                        margin-right: 5px;
                                    }
                                }
                            }
                        }
                    }
                    .content-ft{
                        button{
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
                    }
                }
                //屏幕外第二个内容
            }
            
        }
    }
}
</style>
