<template>
    <div class="home">
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
              <h3>公司简介</h3>
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
              <h3>公司简介</h3>
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
              <h3>公司简介</h3>
              <span>点击了解</span>
            </div>
            <div class="pic">
              <img src="./intro4.png" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/variable.styl"
.home
  width 100%
  overflow hidden
  height 100%
  background #F8F8F8
  .swiper-wrapper
    width 100%
    height 250px
    img
      width 100%
      height 250px
  .introduction
    width 100%
    margin-top 5px
    display flex
    justify-content space-around
    flex-wrap wrap
    min-height 100px
    a
      width 48%
      height 100px
      display inline-block
      margin-top 5px
      text-decoration none
      color $color-theme
      .item
        width 100%
        height 100px
        display flex
        .info
          width 40%
          height 100%
          background #fff
          text-align: center
          padding-top 20px
          h3
            font-size .8rem
            color $color-theme
          span
            font-size .6rem
            color $color-theme
            display inline-block
            border 1px solid #F8B551
            border-radius 10px
            padding 2px 6px
            margin-top 10px
        .pic
          width 60%
          img
            width 100%
            height 100px
</style>
