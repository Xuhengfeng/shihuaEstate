<template>
    <div>
         <div class="header">
             <img src="../../imgs/more/public.png">
        </div>
        <div class="section ">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">世华最新公益</span>
				</div>
				<div class="goods-bd">
					<ul>
						<li>
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png">
							</div>
							<div class="description">
								<p>湛江主流媒体报道世华易居社区</p>
								<p>湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区</p>
							</div>
						</li>
                        	<li>
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png">
							</div>
							<div class="description">
								<p>湛江主流媒体报道世华易居社区</p>
								<p>湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区</p>
							</div>
						</li>
                        	<li>
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png">
							</div>
							<div class="description">
								<p>湛江主流媒体报道世华易居社区</p>
								<p>湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
         <div class="section ">
			<div class="container">
				<div class="goods-hd">
					<span class="twohandhouse">更多公益活动</span>
				</div>
				<div class="goods-bd">
					<ul>
						<li v-for="item in [1,1,1,1,1,1,1,1,1]">
							<div class="image">
								<img src="../../imgs/home/xiaoqu.png">
							</div>
							<div class="description">
								<p>湛江主流媒体报道世华易居社区</p>
								<p>湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区湛江主流媒体报道世华易居社区</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
		data() {
                return {
					scity: JSON.parse(localStorage.selectCity),//当前城市
                     infoquerychild:"" //资讯子栏目列表
                }
			},
			created(){
				 this.hotconsultant();
			},
			methods: {
				hotconsultant() {
					 //获取资讯子栏目列表
                        this.$http
                        .get(this.$url.URL.INFOQUERY +"15"+"?pageNo=1", {
                         scity: this.scity.value,
                        })
                        .then(response => {
                        this.infoquerychild = response.data.data;
                        console.log(this.infoquerychild)
                        });
				}
			}
}
</script>

<style lang="less" scoped>
 .section{
	padding: 70px 0;
 }

.section .goods-bd ul {
	margin-right: -30px;
}

.section .goods-bd li {
	cursor: pointer;
	width: 370px;
	height: 305px;
    margin-right: 27px;
	float: left;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	margin-bottom: 30px;
}

.section .goods-bd .image {
	width: 272px;
	height: 213px;
}
.section .description p:nth-child(1){
    font-size: 20px;
    color: #222222;
	line-height: 25px;
	text-align: center;
	padding-top: 10px;
}
.section .description p:nth-child(2){
    font-size: 16px;
    color: #666666;
	line-height: 25px;
	padding: 5px 10px;
}
.header {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
    img{
        width: 1920px;
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
    }
}
.twohandhouse{
    position: relative;
    left: 500px;
    display: block;
    padding: 0 0 76px 0;
    font-size: 36px;
    color: #222222;
}
</style>
