<template>
      <div>
         

       <div class="hot-box">
            <div class="hot-item">
             <div class="h-box ">
                <div class="fl"  @click="toSkip(item)">
                    <div class="titlep" >{{consulttantdtail.problemTitle}}</div>
                    <p >{{consulttantdtail.problemTitle}}</p>
                  <span >{{userInfo.nickname}}</span>
                  <span>{{consulttantdtail.pubTime}}</span>
                </div>
                <div class="clear"></div>
             </div>
            </div>
        </div>
        <div class="item">
            <ul>
                <li>
                    <div class="image" >
                        <img :src="headImage" />
                    </div>
                    <div class="direciton">
                        <div class="introduce"  >111  <span class="commentime">111</span> </div>
                            <div class="text">
                                   ssssssssssssss
                            </div>
                    </div> 
                </li>
                
            </ul>
        </div>
        </div>
</template>

<script>
export default {
        data() {
            return{
                scity: JSON.parse(localStorage.selectCity),//当前城市
                consulttantdtail:""   ,//问题详情
                userInfo:JSON.parse(sessionStorage.userInfo),
            }
        },
        created() {
                this.render()
        },
        methods:{
            render() {
                let id = this.$route.params.id;
                
                console.log( id )
                //热门咨询
                this.$http
                    .get(this.$url.URL.CONSULTANT_PROBLEM_INFO +"?contProblemId="+id, {
                        scity: this.scity.value,
                    })
                    .then(response => {
                    this.consulttantdtail = response.data.data;
                    console.log(this.consulttantdtail)
                    });
            }
        }
}
</script>

<style   lang="less" scoped>
.titlep{
    font-size: 18px;
    color: #000000;
    height: 18px;
}
.hot-item:first-child {
    display: block;
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


.item ul li{
  overflow: hidden;
  display: flex;
  height: 230px;
  border-bottom: 1px solid #cacaca;
  margin-top: 30px;
  flex-flow: row wrap;
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
    height: 60px;
    flex-flow: column nowrap;
    justify-content: space-between;
    >div:nth-of-type(1){
      font-size: 22px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      cursor: pointer;
      span{
        margin-left: 10px;
        padding: 5px;
        float: right;
      }
    }
  }
}
.introduce {
    width: 750px;
}

.text {
    width: 800px;
    font-size: 14px;
    word-break:break-all; 
}

</style>
