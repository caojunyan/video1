<template>
<div class="my">
  <div class="user-wrapper">
    <div class="userbg">
      <div class="img-wrapper">
        <img src="" alt="">
      </div>
      <div class="info">
        <dl>
          <dt>用户名</dt>
          <dd>王小明王小明王小明</dd>
        </dl>
        <dl class="zhanghao">
          <dt>账号</dt>
          <dd>xxxxxxxxxxxxxxxxxxxxxxxx</dd>
        </dl>
        <dl>
          <dt>品牌</dt>
          <dd>美特斯邦美特斯邦威美特斯邦威威</dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="list">
    <ul>
      <li class="li1">
        <b></b>
        <span>购买vip</span>
        <i></i>
      </li>
      <li class="li2">
        <b></b>
        <span>购买观看劵</span>
        <i></i>
      </li>
      <li class="li3">
        <b></b>
        <span>观看历史</span>
        <i></i>
      </li>
      <li class="li4">
        <b></b>
        <span>关注视频</span>
        <i></i>
      </li>
      <li class="li5">
        <b></b>
        <span>退出当前登录</span>
        <i></i>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixin.styl"
.my
  width 100%
  position fixed
  background #F8F8F8
  top 0px
  bottom 50px
  .user-wrapper
    width 100%
    height 277px
    background #F8F8F8
    border-bottom 1px solid #EAEAEA
    .userbg
      width 100%
      height 254px
      bg-image("user-bg")
      background-size 100% 100%
      .img-wrapper
        width 90px
        height 90px
        border-radius 50%
        background #fff
        margin 0 auto
        position relative
        top 50px
      .info
        display flex
        justify-content space-around
        margin-top 80px
        text-align: center
        dl
          width 30%
          color #fff
          font-size 14px
          dt
            width 100%
            overflow hidden
          dd
            width 100%
            overflow hidden
            margin-top 6px
            height 20px
            text-overflow ellipsis
            text-wrap nowrap
          &.zhanghao
            border-right 1px solid #fff
            border-left 1px solid #fff
  .list
    width 100%
    background #F8F8F8
    li
      background #fff
    .li1
      width 100%
      height 40px
      border-bottom 1px solid #e8e8e8
      line-height 40px
      b
        background #FFF100
        bg-image("buyvip")
        width 22px
        height 22px
        background-size  100% 100%
        margin-left 20px
        display inline-block
        z-index 1000
        margin-top 9px
      span
        display inline-block
        height 100%
        line-height 40px
        margin-left 10px
        font-size 14px
        position relative
        top -5px
      i
        bg-image("more")
        float right
        width 12px
        height 20px
        background-size 100% 100%
        margin-right 15px
        display inline-block
        position relative
        top 10px
    .li2
      width 100%
      height 40px
      border-bottom 1px solid #e8e8e8
      line-height 40px
      b
        bg-image("quan")
        width 22px
        height 22px
        background-size  100% 100%
        margin-left 20px
        display inline-block
        z-index 1000
        margin-top 9px
      span
        display inline-block
        height 100%
        line-height 40px
        margin-left 10px
        font-size 14px
        position relative
        top -5px
      i
        bg-image("more")
        float right
        width 12px
        height 20px
        background-size 100% 100%
        margin-right 15px
        display inline-block
        position relative
        top 10px
    .li3
      width 100%
      height 40px
      border-bottom 1px solid #e8e8e8
      line-height 40px
      b
        bg-image("history")
        width 22px
        height 22px
        background-size  100% 100%
        margin-left 20px
        display inline-block
        z-index 1000
        margin-top 9px
      span
        display inline-block
        height 100%
        line-height 40px
        margin-left 10px
        font-size 14px
        position relative
        top -5px
      i
        bg-image("more")
        float right
        width 12px
        height 20px
        background-size 100% 100%
        margin-right 15px
        display inline-block
        position relative
        top 10px
    .li4
      width 100%
      height 40px
      border-bottom 1px solid #e8e8e8
      line-height 40px
      b
        bg-image("focus")
        width 22px
        height 22px
        background-size  100% 100%
        margin-left 20px
        display inline-block
        z-index 1000
        margin-top 9px
      span
        display inline-block
        height 100%
        line-height 40px
        margin-left 10px
        font-size 14px
        position relative
        top -5px
      i
        bg-image("more")
        float right
        width 12px
        height 20px
        background-size 100% 100%
        margin-right 15px
        display inline-block
        position relative
        top 10px
    .li5
      width 100%
      height 40px
      border-bottom 1px solid #e8e8e8
      line-height 40px
      margin-top 15px
      b
        bg-image("out")
        width 22px
        height 22px
        background-size  100% 100%
        margin-left 20px
        display inline-block
        z-index 1000
        margin-top 9px
      span
        display inline-block
        height 100%
        line-height 40px
        margin-left 10px
        font-size 14px
        position relative
        top -5px
      i
        bg-image("more")
        float right
        width 12px
        height 20px
        background-size 100% 100%
        margin-right 15px
        display inline-block
        position relative
        top 10px
</style>
