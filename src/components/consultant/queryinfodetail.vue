<template>
    <div class="container">
        <p class="title">我是标题</p>
        <div class="text">
            {{info.summary}}
        </div>
        <div class="imgage">
            <img :src="info.imageUrl"/>
        </div>
    </div>
</template>

<script>
export default {
        data() {
            return{
                scity: JSON.parse(localStorage.selectCity),//当前城市
                info:""   ,//问题详情
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
                    .get(this.$url.URL.INFO +id, {
                        scity: this.scity.value,
                    })
                    .then(response => {
                    this.info = response.data.data;
                    console.log(this.info)
                    });
            }
        }
}
</script>

<style lang="less" scoped>
.container{
    .title{
        font-size: 24px;
        text-align: center;
        padding:70px 0 30px 0;
    }
    .text{
        font-size: 16px;
        padding-bottom: 20px;
    }
    .imgage{
        height: 584px;
        width: 100%;
        padding-bottom: 40px;
        >img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
