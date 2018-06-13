<template>
    <div>
        <div class="hot-box">
            <div class="hot-item">
             <div class="h-box ">
                <div class="fl">
                    <span>{{consulttantdtail.problemTitle}}</span>
                    <p>{{consulttantdtail.problemDescribe}}</p>
                   <span>{{consulttantdtail.memberName}}</span>  <span>{{consulttantdtail.pubTime}}</span>
                </div>
             </div>
            </div>
        </div>

        <div class="hot-box">
            <div class="hot-item">
             <div class="h-box" v-for="item in [1,1]">
                <div class="fl"  @click="toSkip()">
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
            return{
                scity: JSON.parse(localStorage.selectCity),//当前城市
                consulttantdtail:""   //问题详情

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
 .h-box {
    padding: 20px 0;
    border-bottom: 1px dashed #e1e1e1;
}
.h-box .fl {
    width:680px;
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
.hot-item:first-child {
    display: block;
}
 .h-box .fl p {
    color: #555;
    font-size: 12px;
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
</style>
