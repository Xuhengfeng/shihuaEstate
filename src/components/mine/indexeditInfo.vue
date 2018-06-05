<template>
    <div>
        <header>
            <div class="title">我的账户信息</div>
            <ul> 
                <li v-for="item in tabs">{{item}}</li>
            </ul>
        </header>
        <section>
            
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: ['上传头像','修改昵称','修改密码'],
            }
        },

    }
</script>

<style lang="less" scoped>
header{
    .title{
        height: 120px;
        line-height: 120px;
        font-size: 30px;
        color: #000000;
    }
    ul{
        background: #e5e5e5;
        height: 40px;
        line-height: 40px;
        li{
            float: left;
            color:#000000;
        }
    }
}
// 高亮
.bgcolor{
    background: #d0d0d1;
}
</style>