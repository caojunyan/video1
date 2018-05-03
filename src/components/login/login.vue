<template>
<div class="login">
  <div class="head">
    <i class="logo">
    </i>
    <span>登录</span>
    <b>注册</b>
  </div>
  <div class="login-container">
    <div class="tel">
      <input type="tel" placeholder="输入手机号码">
    </div>
    <div class="yanzheng">
      <input type="tel" placeholder="输入手机验证码">
      <span>获取验证码</span>
    </div>
    <div class="button">
      <span>登录</span>
    </div>
  </div>
</div>

</template>

<script>
export default {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.login
  .head
    width 100%
    height 40px
    line-height 40px
    font-size 1.3rem
    text-align: center
    position fixed
    background #FF885D
    z-index 100
    .logo
      display: inline-block
      width: 12px
      height: 20px
      bg-image("back")
      background-size: 100% 100%;
      position: relative;
      float: left;
      left: 15px;
      top: 9px;
    span
      color #fff
    b
      color #FF895D
      position absolute
      z-index 100

  .login-container
    top 140px
    position relative
    width 70%
    left 15%
    .tel
      width 100%
      input
        width 100%
        border none
        border-bottom 1px solid #C4BFC4
        color #C4BFC4
        height 40px
        font-size 14px
        line-height 40px
        outline none
    .yanzheng
      width 100%
      border-bottom 1px solid #C4BFC4
      margin-top 10px
      input
        width 65%
        border none
        color #C4BFC4
        height 40px
        font-size 14px
        outline none
      span
        width 35%
        color #FF885D
        font-size 14px

    .button
      width 100%
      background #FF885B
      color #fff
      font-size 14px
      height 40px
      line-height 40px
      text-align: center
      border-radius 30px
      margin-top 40px
</style>
