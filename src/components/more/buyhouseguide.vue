
<template>
  <!-- 购房指南 -->
	<div>
		<o-header :keyword="keyword"
              :isMapSearch="false"
              @query="query"></o-header>

		<div class="m-filter">
			<div class="container">
				<div class="filter">
					<ul>
						<li>
							<ol class="fl">
								<li :key="index" v-for="(item,index) in listone" :class="{querybtn:queryone==index}" @click="tag(index)">{{item.name}}</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
		</div>

    <div class="main">
      <div class="container">
        <ul>
          <li v-for="item in listone[num].infoContentList" @click="infoDetail(item)">
            <div class="img">
              <img :src="item.imageUrl">
            </div>
            <div class="r-content">
                <h3>{{item.title}}</h3>
                <div class="description">
                  {{item.summary}}
                </div>
                <div class="circle">
                  <div v-html="$options.filters.timefilter(item.publishDateTime)"></div>
                </div>
            </div>
          </li>
        </ul>
        <div class="noContent" v-show="!listone[num].infoContentList.length">暂无数据!</div>
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
      listone:[
        {infoContentList: []}
      ],
      keyword: '',//搜索框关键词
      queryone: 0, 
      showBtn: false,
      showBtnone: false,
      querycount: {//检索总数量
        count: 0
      },
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
      num: 0,
      selectCity: JSON.parse(localStorage.selectCity),//当前城市
    };
  },
  created() {
    this.guideDataRequest();
  },
  filters:{
    timefilter(val){
      let html;
      let diff = (new Date().getTime() - val)/1000;
      let h = diff/3600;//小时
      let hours = parseInt(h);
      let m = (h - hours)*60;//分钟
      let minute = parseInt(m);
      let s = (m - minute)*60;//秒
      let second = parseInt(s);
      let day = (h/24)>0? parseInt(h/24): 0;
      if(day==0){
        html = '<p class="hours">'+hours+'</p><p>小时前</p>';
      }else{
        html = '<p class="day">'+day+'</p><p>天</p>';
      }
      return html;
    }
  },
  methods: {
    handleCurrentChange() {

    },
    query() {

    },
    tag(index) {
      this.queryone = index;
      this.num = index;
    },
    guideDataRequest() {
      this.$http
          .get(this.$url.URL.PURCHASE_GUIDE)
          .then(res => {
              this.listone = res.data.data;
          })
    },
    // 查看详情
    infoDetail(item) {
      console.log(item)
      // 路由外页面
      this.$router.push({path:"/industryconsultationDetail", query: {contentUrl: item.phoneContentUrl}})
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
        img{width: 100%;height: 100%}
      }
      .r-content{
        flex: 1;
        position: relative;
        h3{
          margin-bottom: 20px;
          font-size: 22px;
          white-space:nowrap; 
          overflow:hidden; 
          text-overflow:ellipsis;
        }
        .description{
            font-size: 14px;
            padding-right: 120px;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-box-orient: vertical;
             -webkit-line-clamp: 3;
            overflow: hidden;
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
            }
            .hours,.day{
                height: 25px;
                line-height: 25px;
                margin-top: 20px;
                font-size: 30px;
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
<style>
.circle p{
  height: 25px;
  line-height: 25px;
}
.circle .hours,
.circle .day{
    margin-top: 20px;
    font-size: 30px;
}
</style>







