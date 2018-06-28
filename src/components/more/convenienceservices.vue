
<template>
  <!-- 便民服务  -->
	<div>
		<o-header :keyword="keyword"
              :isMapSearch="false"
              @query="query"></o-header>

		<!-- <div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl">
								<li :key="index" v-for="(item,index) in listone" :class="{querybtn:queryone==index}" @click="tag(index)">{{item}}</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
		</div> -->

    <div class="main">
      <div class="container">
        <ul>
          <li v-for="item in 5">
            <div class="img">
              <img src="">
            </div>
            <div class="r-content">
                <h3>标题</h3>
                <p>
                  内容
                </p>
                <div class="circle">
                  <div>
                    <p>1</p>
                    <p>小时</p>
                  </div>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

		<!-- 分页器 -->
		<div class="pageFooter">
			<el-pagination class="fr oPagination"
				@current-change="handleCurrentChange"
				background
				layout="prev, pager, next"
				prev-text="上一页"
				next-text="下一页"
				:current-page.sync="params.pageNo"
				:total="querycount.count">
			</el-pagination>
		</div>

	</div>
</template>

<script>
import oHeader from "../../base/header/header";
export default {
  data() {
    return {
      keyword: '',//搜索框关键词
      queryone: 0, 
      showBtn: false,
      showBtnone: false,
      querycount: {//检索总数量
        count: 0
      },
      inputresult: null,
      inputresulttwo: null,
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",
      params: {//请求参数体
        areaId: 1,
        districtId: 1,
        keyword: null,
        pageNo: 1,
        pageSize: null,
        positiId: 0,
        scity: null,
        sortMode: null
      },
      broker: [], //经纪人列表
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    this.guideDataRequest();
  },
  computed: {

  },
  watch: {

  },
  methods: {
    query() {

    },
    tag(index) {
      this.queryone = index;
    }

  },
  components: {
    oHeader
  }
};
</script>

<style lang="less" scoped>

//筛选条件
.filter {
  overflow: hidden;
  margin-top: 26px;
  background-color: #fbfbfb;
  box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.2);
  position: relative;
  border-bottom: 1px solid #cacaca;
  box-sizing: border-box;
  padding: 24px 0 0 35px;
  ul{
    >li{
      overflow: hidden;
      padding-bottom: 24px;
      ol{
        >li{
          cursor: pointer;
          float: left;
          text-align: left;
          width: 90px;
          white-space: nowrap;
          height: 25px;
          line-height: 25px;
        }
        .title{
          width: 110px;
          font-size: 12px;
          font-weight: 700;
        }
      }
    }
  } 
}

.main{
  ul{
    li{
      display: flex;
      flex-flow: row nowrap;
      padding: 32px 0 22px 0;
      border-bottom: 1px solid #ddd;
      .img{
        width: 170px;
        height: 110px;
        margin-right: 25px;
        background: #f5f5f5;
      }
      .r-content{
        flex: 1;
        position: relative;
        h3{
          margin-bottom: 20px;
          font-size: 22px;
        }
        p{
          font-size: 14px;
        }
        .circle{
          position: absolute;
          right: 20px;
          bottom: 10px;
          width: 78px;
          height: 78px;
          line-height: 10px;
          border-radius: 50%;
          background: #f5f5f5;
          text-align: center;
          div{
            p{
              line-height: 25px;
              font-size: 12px;
              &:first-child{
                margin-top: 20px;
                font-size: 30px;
              }
            }
          }
        }
      }
    }
  }
}
//高亮
.querybtn {
  color: #ff4343;
  font-weight: bold;
}
</style>





