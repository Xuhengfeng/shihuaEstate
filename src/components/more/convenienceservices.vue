
<template>
	<div>
		<o-header :houseTypeId="houseTypeId" 
              :keyword="keyword"
              @query="query"></o-header>
		
		<div class="container">
			<ul>
				<li v-for="item in 5">
					<div class="img">
						<img src="">
					</div>
					<div class="r-content">
						<h3>标题</h3>
						<div class="content">
							内容
						</div>
					</div>
				</li>
			</ul>
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
      showbox: null, //显示对应的dialog
      houseTypeId: 11,//二手房
      keyword: '',//搜索框关键词
      queryone: 0, //城区样式
      querytwo: 0, //片区样式
      citylist: null,//城区
      district: null,//片区
      num: 0,//城区id
      districtNum: 0,//片区id
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

  },
  computed: {

  },
  watch: {

  },
  methods: {
    query() {

	}
  },
  components: {
    oHeader
  }
};
</script>

<style lang="less" scoped>
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
			h3{
				margin-bottom: 20px;
			}
		}
	}
}
</style>





