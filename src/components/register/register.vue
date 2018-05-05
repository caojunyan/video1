<template>
<div class="login">
  <div class="head">
    <i class="logo" @click="toLogin">
    </i>
    <span>用户注册</span>
  </div>
  <div class="login-container">
    <div class="tel">
      <input type="tel" placeholder="输入手机号码" v-model="registerForm.phone">
    </div>
    <div class="yanzheng">
      <input type="tel" placeholder="输入手机验证码" v-model="registerForm.verificationCode">
      <span @click="getCode">获取验证码</span>
    </div>
    <div class="tel">
      <input type="password" placeholder="输入密码" v-model="registerForm.pw">
    </div>
    <div class="tel">
      <input type="password" placeholder="输入密码" v-model="registerForm.pw2">
    </div>
    <div class="button">
      <span @click="confirm">注册</span>
    </div>
  </div>
</div>

</template>

<script>
  import {register,goRegister} from '../../api/api'
  import { Toast } from 'mint-ui';
export default {
data(){
    return{
      registerForm:{
        phone:"",
        verificationCode:"",
        pw:"",
        pw2:""
      }
    }
  },
  methods:{
    toLogin(){
      this.$router.push({
        path:'/login'
      })
    },
    getCode(){
      register(this,this.registerForm.phone).then(res=>{
        Toast(res.data.msg);
        console.log(res)
      })
    },
  confirm(){
    console.log(this.registerForm)
    goRegister(this,this.registerForm).then(res=>{
      console.log(res)
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
      color #fff
      font-weight normal
      float right
      position relative
      right 20px
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
