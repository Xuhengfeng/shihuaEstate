<template>
    <div>
        <div>待看列表</div>
        <o-house-list :list="list" :isShowNum="isShowNum"></o-house-list>
    </div>

</template>

<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
            list: [],//哪个接口数据
            isShowNum: 1,//考虑选择哪个模板渲染
        };
    },
    
    components: {
        oHouseList
    }
}
</script>

<style lang="less" scoped>

</style>