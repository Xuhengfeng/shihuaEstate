<template>
    <div>
        <h3>收藏小区动态</h3>
        <div class="main">
            <ul>
                <li v-for="item in [1,1,1,1]">
                    <div class="image">
                        <img src="" alt="">
                    </div>
                    <div class="description">
                        <div class="title">1</div>
                        <div class="info">2</div>
                        <div class="attention">3</div>
                        <div class="tag">
                            <span>111</span>
                            <span>111</span>
                            <span>111</span>
                            <span>111</span>
                        </div>
                    </div>
                    <div class="r-content">
                        <div class="collection">收藏</div>
                        <div class="totalPrice"><span>200</span>万</div>
                        <div class="sellPrice">单价<span>12000</span>元/平米</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
h3{
    height: 120px;
    line-height: 120px;
    font-size: 30px;
    color: #000000;
}
.main{
    padding: 20px;
    border: 1px solid #cacaca;
    >ul>li{
        display: flex;
        flex-flow: row nowrap;
        padding: 20px 0;
        border-bottom: 1px solid #cacaca;
        >div{
            flex: 1;
        }
    }
}

// 左边
li .image{
    flex: 232px 0 0;
    width: 232px;
    height: 175px;
    margin-right: 35px;
    background: red;
    img{
        width: 100%;
        height: 100%;
    }
}
// 中间
li .description{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;   
    align-items: flex-start;   
    .tag{
        span{
            padding:5px;
            font-size: 10px;
        }
    }
}

// 右边
li .r-content{
    text-align: right;
    .collection{
        font-size: 16px;
        color: #000000;
    }
    .totalPrice{
        color: red;
        font-size: 14px;
        span{
            font-size: 24px;
            margin-right: 10px;
        }
    }
}

</style>