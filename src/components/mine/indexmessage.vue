<template>
    <div class="wd-list">
        <div v-show="consult.length">
            <ul>
                <li>	
                    <div class="leftlist fl">
                        <p class="question">
                            <a href="">
                                现在购买二手房最应该注意什么？
                            </a>
                        </p>
                        
                            <p class="answer">
                                <a href="">描述：希望从专业的角度给一些实际的指导</a>
                            </p>
                        
                        <div>
                            <span>提问时间：2018-03-30</span>
                        </div>
                    </div>
                    <div class="rightlist fr">
                        <div class="roundright">
                            <div style="padding:12px;">
                                <p class="striking">4</p>
                                <p class="text">个回答</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!--分页器-->
            <div class="oPagination">
                <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="1000"
                    class="fr pagination">
                </el-pagination>
            </div>
        </div>
        <!-- 空页面 -->
        <o-empty :titles="'还没有消息'" 
                 :isShow="false"
                 :picnum="5"
                 :isEmpty="numbol"></o-empty>
    </div>
</template>

<script>
import oEmpty from "../../base/empty/empty";
export default {
    data() {
        return {
            numbol: false,
            consult: [],   //咨询列表
            num:1,
            selectCity: JSON.parse(localStorage.selectCity),//当前城市
        };
    },
    created(){
        this.render();	
    },
     computed: {
     wordColor() {
            return this.$store.state.wordcolor;
     }
  },
    methods:{
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.render(null, val);		
        },
        render(num) {
            this.$http
                .get(this.$url.URL.MY_COMMENT +'?pageNo='+this.num, {
                    scity:this.selectCity.value,
                })
                .then(response => {
                this.consult = response.data.data;    
                this.consult.length==0? this.numbol=true : this.numbol=false;
             });
        }
    },
    components: {
      oEmpty
    }
}
</script>

<style  lang="less" scoped>
.wd-list ul {
    margin-top: 70px;
}
.wd-list ul li {
    height: 80px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding-top: 0;
    border-bottom: 1px dashed #e4e4e4;
    position: relative;
}
.wd-list ul li .leftlist {
    width: 500px;
}
 .wd-list ul li .leftlist .question {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
 .wd-list ul li a {
    color: #555;
}
.wd-list ul li .leftlist .answer {
    line-height: 25px;
    font-size: 12px;
    color: #555;
}
 .wd-list ul li .leftlist .answer a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
 .wd-list ul li .leftlist span {
    margin-right: 25px;
    font-size: 12px;
    color: #8b8b8b;
}
.wd-list ul li .leftlist {
    width: 500px;
}
.wd-list ul li .rightlist {
    height: 100%;
}
.wd-list ul li .rightlist .roundright {
    height: 76px;
    width: 76px;
    border-radius: 38px;
    background-color: #f8f8f8;
}
.wd-list ul li .rightlist .roundright .striking {
    color: #555555;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
}
.wd-list ul li .rightlist .roundright .text {
    color: #999999;
    font-size: 12px;
    text-align: center;
    position: relative;
    top: 8px;
}
.list {
    margin-top: 20px;
    overflow: hidden;
    position: relative;
}
</style>