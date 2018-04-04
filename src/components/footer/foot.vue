<template>
    <div class="footer">
      <router-link to="/home" class="item">
        <dl>
          <dt>
            <img src="./logo.png" alt="">
          </dt>
          <dd>音频</dd>
        </dl>
      </router-link>
      <router-link to="/video" class="item">
        <dl>
          <dt>
            <img src="./logo.png" alt="">
          </dt>
          <dd>视频</dd>
        </dl>
      </router-link>
      <router-link to="/book" class="item">
        <dl>
          <dt>
            <img src="./logo.png" alt="">
          </dt>
          <dd>书刊</dd>
        </dl>
      </router-link>
      <router-link to="/question" class="item">
        <dl>
          <dt>
            <img src="./logo.png" alt="">
          </dt>
          <dd>问答</dd>
        </dl>
      </router-link>
      <router-link to="/my" class="item">
        <dl>
          <dt>
            <img src="./logo.png" alt="">
          </dt>
          <dd>我的</dd>
        </dl>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/variable.styl"
html,body
  font-size 10px
  .footer
    width 100%
    position fixed
    bottom 0
    height 50px
    background #F8F8F8
    display flex
    justify-content space-around
    padding-top 8px
    .item
      width 20%
      text-align: center
      text-decoration none
      &.router-link-active
        color $color-theme
        dd
          color $color-theme
      dl
        width 100%
        margin 0
        img
          width 20px
        dd
          width 100%
          margin 0
          text-align: center
          font-size .8rem
          color $color-text
</style>
