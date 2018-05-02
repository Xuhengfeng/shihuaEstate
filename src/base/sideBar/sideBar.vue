/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 14:34:13 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-05-01 14:03:13
 */
<template>
  <div class="sideBar">
      <ul>
          <li class="one"><img src="../../imgs/home/list.png">
            <div class="screenOuter">
               对比
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
          <li class="three"><img src="../../imgs/home/collection.png">
              <div class="screenOuter">
                  收藏
              </div>
          </li>
          <li class="four"><img src="../../imgs/home/calc.png">
              <div class="screenOuter">
                  计算器
              </div>
          </li>
          <li class="five"><img src="../../imgs/home/ideaTick.png">
              <div class="screenOuter">
                  反馈
              </div>
          </li>
          <li class="six"><img src="../../imgs/home/service.png">
              <div class="screenOuter">
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
            compareBtn: false
        }
    },
    computed: {
        //监控store中的contrastList
        contrastList() {
            let list = this.$store.state.contrastList;
            if(list.length>0){
                this.compareBtn = true;
            }else{
                this.compareBtn = false;
            }
            return list;
        }
    },
    methods: {
        //清空
        clearAll() {
            this.compareBtn = false;
            this.$store.dispatch('clearAll');
        },
        //删除
        deleteOne(item) {
            this.$store.dispatch('deleteOne', item);
        },
        //立即比较 
        compare() {
            this.$router.push({path:'/contrast'});
        }
    },
    mounted() {
        window.onresize = window.onload = ()=> {
            //对比清单img的位置
            let rect = this.$refs.two.getBoundingClientRect();
            localStorage.compareImg = JSON.stringify(rect);
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
                //添加border三角形
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
            }
            //屏幕外第二个内容布局
            &.two>.screenOuter{
                width: 352px;
                height: auto;
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
                            cursor: pointer;
                        }
                    }
                }   
                ul>li{
                    position: relative;
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
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .r-content{
                        flex: 1;
                        display: flex;
                        flex-flow: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        div{
                            color: #313131;
                            text-align: left;
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
                    .delete{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        padding: 5px;
                        border: 1px solid #ff0000;
                        border-radius: 5px;
                        font-size: 10px;
                        color: #ff0000;
                        letter-spacing: 2px;
                        cursor: pointer;
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
                    p{
                        padding: 10px;
                        color: #cacaca;
                    }
                }
            }
            //屏幕外第三个内容布局
            //屏幕外第四个内容布局
        }
    }
}
</style>
