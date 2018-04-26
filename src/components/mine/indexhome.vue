/*
 * @Author: 徐横峰 
 * @Date: 2018-04-27 00:39:01 
 * @Last Modified by: 徐横峰
 * @Last Modified time: 2018-04-27 00:51:52
 */
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
export default {
    data() {
        return {
            datalist: []
        };
    },
    created() {
        this.collectionListRequest();
    },
    methods: {
        collectionListRequest() {
            let token = localStorage.token;
            let scity = localStorage.selectCity.value;
            console.log(scity)
            this.$http.get(this.$url.URL.HOUSE_COLLECTIONLIST, {
                headers: {
                    "Content-Type": "application/json",
                    "scity": scity,
                    "unique-code": token
                },
                params: {
                    pageNo: 1
                }
            })
            .then(response => {
                // //修正数据
                // response.data.data.forEach(item => {
                //     item.houseTag = item.houseTag.split(",");
                // });
                // this.datalist = response.data.data;
            });
        }
    }
};
</script>

<style lang="less" scoped>
h3 {
  height: 120px;
  line-height: 120px;
  font-size: 30px;
  color: #000000;
}
.main {
  padding: 20px;
  border: 1px solid #cacaca;
  > ul > li {
    display: flex;
    flex-flow: row nowrap;
    padding: 20px 0;
    border-bottom: 1px solid #cacaca;
    > div {
      flex: 1;
    }
    // 左边
    .image {
      flex: 232px 0 0;
      width: 232px;
      height: 175px;
      margin-right: 35px;
      background: red;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 中间
    .description {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      .title {
        font-size: 22px;
        color: #000000;
      }
      .info {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
      }
      .attention {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
      }
      .tag > span {
        padding: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
        &:nth-of-type(1) {
          background: #edf9ff;
          color: #00a8ff;
        }
        &:nth-of-type(2) {
          background: #fff2ed;
          color: #ff7f50;
        }
        &:nth-of-type(3) {
          background: #ebfff3;
          color: #00b969;
        }
      }
    }
    // 右边
    .r-content {
      text-align: right;
      .collection {
        font-size: 16px;
        margin-bottom: 30px;
        color: #000000;
      }
      .totalPrice {
        color: red;
        font-size: 14px;
        margin-bottom: 30px;
        span {
          font-size: 24px;
          margin-right: 10px;
        }
      }
      .sellPrice {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>