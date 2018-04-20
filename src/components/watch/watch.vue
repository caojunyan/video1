<template>
  <div class="vip">
    <div class="top">
      <i></i>
      <span>观看劵</span>
    </div>
    <div class="content-wrapper">
      <div class="price">
        100劵/2元
        <!--<input type="text" value="价格：100劵/2元">-->
      </div>
      <!--推荐套餐-->
      <p>推荐套餐</p>
      <div class="package">
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
        <dl>
          <dt>200劵</dt>
          <dd>售价：3.8元</dd>
        </dl>
      </div>
      <!--结算金额-->
      <div class="money">
        <span>结算金额：</span>
        <b>68</b>
      </div>
      <!--结算方式-->
      <div class="pay-way" >
        <ul ref="pay">
          <li class="choose">
            <span>选择支付方式</span>
          </li>
          <li class="bao" @click="switchPay">
           <!-- <mt-radio
              align="right"
              v-model="value"
              :options="options">
            </mt-radio>-->
            <b></b>
            <span>支付宝支付</span>
            <img src="./choose@3x.png" alt="" v-if="show">
            <img src="./unchoose@3x.png" alt="" v-else>
          </li>
          <li class="wei" @click="wxwitchPay">
            <b></b>
            <span>微信支付</span>
            <img src="./choose@3x.png" alt="" v-if="wxShow">
            <img src="./unchoose@3x.png" alt="" v-else>
          </li>
        </ul>
      </div>
    </div>
    <!--立即购买-->
    <div class="buy-content">
      <span>立即购买</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        show:true,
        wxShow:false,
        options : [
        {
          label: '支付宝支付',
          value: '值A'
        },
        {
          label: '微信支付',
          value: '值B'
        }
      ]
      }
    },
    methods:{
//      切换支付方式
      switchPay(){
        /*var ul=this.$refs.pay.children;
        for(var i=0;i<=ul.length;i++){
          if(ul[i].classList.contains()){}
        }*/
        this.show=!this.show
        this.wxShow=false
      /* var li=document.querySelectorAll('.pay-way li')
        console.log(li)*/
      },
      wxwitchPay(){
        this.wxShow=!this.wxShow
        this.show=false
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .vip
    width 100%
    min-height 500px
    background #F8F8F8
    .top
      width 100%
      height 40px
      line-height 40px
      background #FE8556
      color #fff
      font-size 13px
      text-align: center
      i
        display inline-block
        width 12px
        height 20px
        bg-image("back")
        background-size 100% 100%
        position relative
        float left
        left 15px
        top 9px
      span
        display inline-block
        width 70px
        margin 0 auto

    .content-wrapper
      width 100%
      .price
        width 80%
        margin 0 auto
        border 1px solid #F26831
        height 45px
        line-height 45px
        border-radius 15px
        margin-top 20px
        color #D1D1D1
        font-size 16px
        padding-left 20px
      p
        color #EB6000
        font-size 16px
        height 30px
        line-height 30px
        padding-left 4%
        margin-top 25px
        background #fff
      .package
        width 100%
        background #fff
        display flex
        justify-content space-around
        flex-wrap wrap
        padding-bottom 15px
        border-bottom 1px solid #F4F4F4
        dl
          width 25%
          margin-top 15px
          height 50px
          border 1px solid #eb6000
          color #eb6000
          text-align: center
          font-size 18px
          border-radius 10px
          padding-top 13px
          dt
            text-align: center
            height 20px
            line-height 20px
          dd
            color #eb6000
            font-size 11px
            height 15px
            line-height 15px
            text-align: center
      .money
        padding-left 4%
        height 45px
        background #fff
        border-bottom 1px solid #EFEFEF
        span
          color #cdcdcd
          font-size 13px
          height 45px
          line-height 45px
          display inline-block
        b
          color #ff0000
          font-size 16px
          height 45px
          line-height 45px
          display inline-block
      .pay-way
        margin-top 15px
        width 100%
        height 140px
        background #fff
        .choose
          height 40px
          line-height 40px
          color #282828
          font-size 14px
          list-style none
          border-top 1px solid #efefef
          border-bottom 1px solid #efefef
          span
            display inline-block
            margin-left 4%
        .bao
          width 100%
          height 50px
          border-bottom 1px solid #EFEFEF
          line-height 50px
          list-style none
          b
            bg-image("zhi")
            width 22px
            height 22px
            margin-left 4%
            display inline-block
            background-size 100% 100%
            position relative
            top 3px
           span
             display inline-block
             margin-left 15px
             font-size 18px
             color #282828
           img
              display inline-block
              width 20px
              height 20px
              float right
              margin-top 15px
              margin-right 20px
        .wei
          width 100%
          height 50px
          border-bottom 1px solid #EFEFEF
          line-height 50px
          list-style none
          b
            bg-image("weixin")
            width 22px
            height 22px
            margin-left 4%
            display inline-block
            background-size 100% 100%
            position relative
            top 3px
            margin-right 15px
          img
            display inline-block
            width 20px
            height 20px
            float right
            margin-top 15px
            margin-right 20px

    .buy-content
      width 100%
      span
        display inline-block
        height 40px
        background #ff8557
        color #fff
        line-height 40px
        font-size 16px
        border-radius 20px
        text-align: center
        margin-top 50px
        margin-bottom 40px
        width 70%
        margin-left 15%
</style>
