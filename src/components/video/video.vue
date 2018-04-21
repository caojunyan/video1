<template>
  <div class="home">
    <scroll class="scroll">
      <div>
        <!--轮播-->
        <div class="swiper-wrapper">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="./banner2.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="./01.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="./02.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--介绍-->
        <div class="introduction">
          <router-link :to="{path:'/'}">
            <div class="item">
              <div class="info">
                <h3>公司简介</h3>
                <span>点击了解</span>
              </div>
              <div class="pic">
                <img src="./intro1.png" alt="">
              </div>
            </div>
          </router-link>
          <router-link :to="{path:'/'}">
            <div class="item">
              <div class="info">
                <h3>团队介绍</h3>
                <span>点击了解</span>
              </div>
              <div class="pic">
                <img src="./intro2.png" alt="">
              </div>
            </div>
          </router-link>
          <router-link :to="{path:'/'}">
            <div class="item">
              <div class="info">
                <h3>课程安排</h3>
                <span>点击了解</span>
              </div>
              <div class="pic">
                <img src="./intro3.png" alt="">
              </div>
            </div>
          </router-link>
          <router-link :to="{path:'/'}">
            <div class="item">
              <div class="info">
                <h3>了解我们</h3>
                <span>点击了解</span>
              </div>
              <div class="pic">
                <img src="./intro4.png" alt="">
              </div>
            </div>
          </router-link>
        </div>
        <!--热门视频-->
        <div class="video">
          <div class="title">
            <span></span>
            <b>热门视频</b>
          </div>
          <div class="content">
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
            <router-link :to="{path:'/detail'}">
              <div class="item">
                <img src="./banner2.png" alt="">
                <div class="detail">
                <span class="start">
                  <img src="./start.png" alt="">
                </span>
                  <span class="liuyan">
                  <img src="./liuyan.png" alt="">
                  <span>1704</span>
                </span>
                  <span class="time">1:36:00</span>
                </div>
                <div class="info">
                  <h6>业绩爆破</h6>
                  <p>解开千万秘密，业绩业绩爆破的业绩爆破的业绩爆破的业绩爆破的爆破的</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>

  import Scroll from '../scroll/scroll'
  export default {
    data () {
      return {
      }
    },

    components: {
      Scroll,
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../common/stylus/variable.styl"
.home
  position: fixed
  width: 100%
  top: 40px
  bottom: 0
  height: 100%
  .scroll
    height: 100%
    .swiper-wrapper
      width 100%
      height 190px
      img
        width 100%
        height 190px
    .introduction
      width 100%
      margin-top 5px
      display flex
      justify-content space-around
      flex-wrap wrap
      min-height  178px
      a
        width 48%
        height 72px
        display inline-block
        margin-top 5px
        text-decoration none
        color $color-theme
        .item
          width 100%
          height 72px
          display flex
          .info
            width 40%
            height 100%
            background #fff
            text-align: center
            h3
              font-size .8rem
              color $color-theme
              margin-top 10px
            span
              font-size .6rem
              color $color-theme
              display inline-block
              border 1px solid #F8B551
              border-radius 10px
              padding 2px 4px
              margin-top 8px
          .pic
            width 60%
            img
              width 100%
              height 72px
    .video
      width 100%
      min-height 172px
      padding-bottom 90px
      .title
        height 40px
        width 100%
        line-height 40px
        padding-left 5px
        span
          width 5px
          height 5px
          display inline-block
          border-radius 50%
          background $color-theme
          vertical-align middle
        b
          font-weight normal
          font-size .8rem

      .content
        width 100%
        min-height 100px
        display flex
        flex-wrap wrap
        justify-content space-around
        a
          width 48%
          height 154px
          display inline-block
          margin-top 5px
          text-decoration none
          color $color-theme
          .item
            width 100%
            height 154px
            position relative
            img
              width 100%
              height 100px
            .detail
              width 100%
              height 20px
              line-height 20px
              position absolute
              bottom 54px
              left 0
              z-index 100
              vertical-align middle
              .start
                padding-left 10px
                img
                  width .7rem
                  height .6rem
              .liuyan
                padding-left 10px
                img
                  width .7rem
                  height .6rem
                span
                  color #fff
                  font-size .5rem
                  position relative
                  top -2px
              .time
                float right
                font-size .5rem
                color #fff
            .info
              h6
                font-size .8rem
                color #000
                line-height 25px
                width 100%
                overflow hidden
                text-overflow ellipsis
                height 20px
                white-space: nowrap
              p
                font-size .8rem
                color $color-text
                line-height 25px
                width 100%
                overflow hidden
                text-overflow ellipsis
                height 20px
                white-space: nowrap



</style>
