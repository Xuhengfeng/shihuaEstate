<template>
    <div>
       <div class="hot-box" v-for="item in buyhconsult">
            <div class="hot-item">
             <div class="h-box ">
                <div class="fl"  @click="toSkipone(item)">
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
                       buyhconsult:"" ,//买房咨询
                }
            },
            created(){
                    this.buyHconsult();
            },
            methods: {
                buyHconsult(){
                                
                    //热门咨询
                    this.$http
                        .get(this.$url.URL.CONSULTANT_HOT, {
                         scity: this.scity.value,
                        })
                        .then(response => {
                        this.buyhconsult = response.data.data;
                        
                        
                        });
                },
                toSkipone(item){
                    let path = "/queryinfodetail/" + item.id;
                    this.$router.push({ path: path });
                },
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
    padding: 0 0 20px 0;
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
 .h-box .fl a {
    font-size: 16px;
    color: #333;
    font-weight: 700;
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
.clear:after {
    content: '.';
    clear: both;
    display: block;
    height: 0;
    visibility: hidden; 
    font-size: 0; 
    line-height: 0;
}
</style>
