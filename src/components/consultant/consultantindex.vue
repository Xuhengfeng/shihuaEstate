<template>
    <div>
       <div class="titlep">热门咨询</div>

       <div class="hot-box">
            <div class="hot-item">
             <div class="h-box " style="border:0px;">
                <ul class="fl">
                    <li v-for="item in infoquerychild" @click="toSkipone(item)"><div class="curcle"></div><div class="bittel">{{item.title}}</div></li>
                </ul>
                <!-- <div class="clear"></div> -->
             </div>
            </div>
        </div>
        <div  class="advertisement">
            <img src="../../imgs/home/ader.png"/>
        </div>

        <div class="titlep fl">世华顾问</div> <div class="fr">查看更多</div>

        <div class="item">
            <ul>
                <li v-for="item in remdConsultant ">
                    <div class="image" @click="toSkiptwo(item)">
                        <img :src="item.photo"/>
                    </div>
                    <div class="direciton">
                        <div class="introduce" >{{item.name}} </div>
                        <div class="introduce">
                                <!-- <span class="word">1111111</span> -->
                                <div class="fr call">向他咨询</div>
                        </div> 
                        <div class="introduce ">
                            <span class="intrspan one">{{item.label}}</span>
                            <span class="intrspan two">销售达人</span>
                        </div>
                    </div> 
                </li>
            </ul>
        </div>

         <div class="titlep" style="margin-top:35px;">热门咨询</div>

       <div class="hot-box">
            <div class="hot-item">
             <div class="h-box " v-for="item in hotConsultant">
                <div class="fl"  @click="toSkip(item)">
                    <span >{{item.problemTitle}}</span>
                    <p>{{item.problemDescribe}}</p>
                    <span>{{item.pubTime}}</span>
                </div>
                <div class="fr">
                    <span>
                        <i>{{item.answerNum}}</i>
                        个回答
                    </span>
                </div>
                <div class="clear"></div>
             </div>
            </div>
        </div>
    </div>
 
</template>

<script>
        export default {
            data() {
                return {
                     scity: JSON.parse(localStorage.selectCity),//当前城市
                     hotConsultant:"" ,  //热门咨询 
                     remdConsultant:"" , //顾问推荐列表
                     infoquerychild:"" //资讯子栏目列表
                }
            },
            created(){
                    this.hotconsultant();
            },
            methods: {
                hotconsultant(){
                                
                    //热门咨询
                    this.$http
                        .get(this.$url.URL.CONSULTANT_HOT, {
                         scity: this.scity.value,
                        })
                        .then(response => {
                        this.hotConsultant = response.data.data;
                        
                        
                        });
                    //获取资讯子栏目列表
                        this.$http
                        .get(this.$url.URL.INFOQUERY +"13"+"?pageNo=1", {
                         scity: this.scity.value,
                        })
                        .then(response => {
                        this.infoquerychild = response.data.data;
                        console.log(this.infoquerychild )
                        });

                    //顾问推荐列表
                    this.$http
                        .get(this.$url.URL.CONSULTANT_REMD, {
                          scity: this.scity.value,
                        })
                        .then(response => {
                        this.remdConsultant = response.data.data;
                        });
                },
                toSkip(item) {
                    let path = "/consultantindexdetail/" + item.id;
                    this.$router.push({ path: path });
                },
                toSkipone(item){
                    let path = "/queryinfodetail/" + item.id;
                    this.$router.push({ path: path });
                },
                toSkiptwo(item) {
                     let path = "/listdetail/"+ item.employeeId;
                    this.$router.push({ path: path });
                }
            }
        }
</script>

<style  lang="less" scoped>
.titlep{
    font-size: 18px;
    color: #000000;
    width: 73px;
    height: 18px;
}
.hot-item:first-child {
    display: block;
}
 .h-box {
    padding: 20px 0;
    border-bottom: 1px dashed #e1e1e1;
}
.h-box .fl {
    width:680px;
    line-height: 25px;
}
.h-box>ul {
    width: 588px;
    line-height: 25px;
}
.h-box .fr {
    width: 75px;
    height: 60px;
    background-color: #f8f8f8;
    border-radius: 50%;
    color: #999;
    font-size: 12px;
    text-align: center;
    padding-top: 15px;
    line-height: 22px;
    margin-top: 7px;
}
 .h-box .fl a {
    font-size: 16px;
    color: #333;
    font-weight: 700;
}
 .h-box .fl p {
    color: #555;
    font-size: 12px;
}
.h-box>ul>li>{
    border-bottom: 1px dashed #e1e1e1;
    padding: 10px 0;
}
 .h-box>ul>li>.bittel {
    color: #555;
    font-size: 14px;
    display: inline-block;
    margin-left: 15px;
}
.h-box .fl span {
    display: inline-block;
    padding: 0 6px;
    height: 22px;
    background-color: #f1f1f1;
    margin-top: 10px;
    font-size: 12px;
    line-height: 22px;
    color: #9f9f9f;
}
.clear:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden; 
    font-size: 0; 
    line-height: 0;
}
.curcle{
    position: relative;
    top: 5px;
    height: 17px;
    width: 17px;
    border-radius: 100%;
    background:#f1f1f1;
    display:inline-block;
}
.advertisement {
    margin-top: 50px;
    padding-bottom:35px; 
}
.advertisement>img{
    width: 100%;
    height: 100%;
}

//列表项 
.item ul li{
  overflow: hidden;
  display: flex;
  height: 120px;
  border-bottom: 1px solid #cacaca;
  margin-top: 30px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .image{
    flex: 90px 0 0;
    width: 90px;
    height: 90px;
    margin-right: 25px;
    background: #f5f5f5;
     border-radius: 50%;
    cursor: pointer;
    img{
      border-radius: 50%;
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .direciton{
    flex: 1;
    display: flex;
    height: 90px;
    flex-flow: column nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      font-size: 22px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      cursor: pointer;
      span{
        color:rgba(0,0,0,0.5);
        margin-left: 10px;
        padding: 5px;
        font-size: 10px;
        border: 1px solid #cacaca;
        visibility: hidden;
        &:hover{
          color: #000000;
        }
      }
    }
  }
  &:hover .direciton>div:nth-of-type(1) span{
    visibility: visible;
  }
}
.call{
    display: inline-block;
    width: 116px;
    height: 46px;
    line-height: 46px;
    background: red;
    color: white;
    text-align: center;
    font-size: 16px;
}
</style>      