<template>
    <div>
        <div class="hot-box">
            <div class="hot-item">
             <div class="h-box ">
                <div class="fl">
                    <a href="" >1111</a>
                    <p>111111</p>
                    <span>11111111</span>
                </div>
                <div class="fr">
                    <a href="">
                        <i>1</i>
                        个回答
                    </a>
                </div>
                <div class="clear"></div>
             </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style   lang="less" scoped>
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
</style>
