<template>
    <div>
        <h3>待看列表</h3>
        <o-house-list :list="houseList" :isShowNum="isShowNum"></o-house-list>
    </div>

</template>

<script>
import oHouseList from "../../base/houseList/houseList";
export default {
    data() {
        return {
            houseList: [],//待看房源列表
            isShowNum: 1,
        };
    },
    created() {
        this.readyHouseListRequest();
    },
    methods:{
        //待看房源请求
        readyHouseListRequest() {
            let city = JSON.parse(localStorage.selectCity).value;
            this.$http
            .get(this.$url.URL.APPOINT_DETAILLIST+"?pageNo="+1+"&scity="+city)
            .then(response => {
                this.houseList = response.data.data;
            });
        }
    },
    components: {
        oHouseList
    }
}
</script>

<style lang="less" scoped>
h3 {
  height: 120px;
  line-height: 120px;
  font-size: 30px;
  color: #000000;
}
</style>