<template>
    <div class="ball-container">
        <transition tag="div" 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @after-enter="afterEnter">
            <!-- 移动的物体 -->
            <div class="ball" ref="ball" v-show="ballFlag" transition="drop">
                <div class="inner inner-hook"></div>
            </div>
        </transition>

    </div>
</template>
<script>
export default {
  data() {
    return {
      ballFlag: false,
      targetEl: null,
    }
  },
  methods: {
    drop (el) {
      this.targetEl = el;
      this.ballFlag = true;
    },
    beforeEnter(el) {
      console.dir(this.targetEl)
        if(this.ballFlag) {
          //终点位置
          let imgTwo = JSON.parse(localStorage.imgTwo);
          this.$refs.ball.style.right = 0;
          this.$refs.ball.style.top = imgTwo.top+'px';

          //起始位置
          let rect = this.targetEl.getBoundingClientRect(); 
          let x = -(window.innerWidth - rect.left-25);
          let y = -(imgTwo.top-rect.top);
          if(y<=0) {
            /* y 轴 贝塞尔曲线*/
            this.$refs.ball.style.transition="all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41)";
          }else{
            /* y 轴 贝塞尔曲线*/
            this.$refs.ball.style.transition="all 0.6s cubic-bezier(.39,1.59,.47,1.26)";
          }

          el.style.display = ''
          //外层y向动画
          el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
          el.style.transform = `translate3d(0, ${y}px, 0)`
          //内层x动画
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
          inner.style.transform = `translate3d(${x}px, 0, 0)`
        }
    },
    enter (el, done) {
        let rf = el.offsetHeight // 触发重绘html
        this.$nextTick(() => {
          //外层y向动画
          el.style.webkitTransform = 'translate3d(0, 0, 0)'
          el.style.transform = 'translate3d(0, 0, 0)'
          //内层x动画
          let inner = el.getElementsByClassName('inner-hook')[0] 
          inner.style.webkitTransform = 'translate3d(0, 0, 0)'
          inner.style.transform = 'translate3d(0, 0, 0)'
          el.addEventListener('transitionend', done) // Vue为了知道过渡的完成，必须设置相应的事件监听器。
        })
    },
    afterEnter (el) {
      this.ballFlag = false;
      el.style.display = 'none' // 隐藏小球
    }
  }
}

</script>
<style lang="less" scoped>
.ball-container {
  .ball{
    position:fixed;
    /*内从做横向运动*/
    .inner{
      width: 20px;
      background: url(../../imgs/home/contranst.png) no-repeat center center;
      background-size: cover;
      height: 20px;
      border-radius: 50%;
      transition: all .6s linear;
    }
  }
}
</style>
