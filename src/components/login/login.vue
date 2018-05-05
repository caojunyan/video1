<template>
<div class="login">
  <div class="head">
    <b @click="toRegister">注册</b>
    <span>登录</span>
  </div>
  <div class="login-container">
    <div class="tel">
      <input type="tel" placeholder="输入手机号码" v-model="loginForm.phone">
    </div>
    <div class="yanzheng">
      <input type="tel" placeholder="输入手机验证码" v-model="loginForm.verificationCode">
      <span @click="getCode">获取验证码</span>
    </div>
    <div class="button">
      <span @click="toLogin">登录</span>
    </div>
  </div>
</div>

</template>

<script>
  import {codeLogin,Login} from '../../api/api'
  import { Toast } from 'mint-ui';
export default {
data(){
    return{
      loginForm:{
        phone:"",
        verificationCode:""
      }
    }
  },
  methods:{
    toRegister(){
      this.$router.push({
        path:'/register'
      })
    },
    getCode(){
      codeLogin(this,this.loginForm.phone).then(res=>{
        console.log(res)
      Toast(res.data.msg)
      })
    },
  toLogin(){
    console.log(this.loginForm)
    this.$router.push({
      path:'/audio'
    })
    Login(this,this.loginForm).then(res=>{
      console.log(res)

    }).catch(err=>{
    console.log(err)
  })
  }
  }

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
    padding-left 20px
    b
      display: inline-block
      position: relative
      color #fff
      font-weight normal
    span
      color #fff
      position relative

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
