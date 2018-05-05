<template>
  <div class="vip">
    <div class="top">
      <i></i>
      <span>VIP会员</span>
    </div>
    <div class="page-navbar">
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">普通会员</mt-tab-item>
        <mt-tab-item id="2">超级会员</mt-tab-item>
      </mt-navbar>
      <!-- tabcontainer -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item class="wrapper1" id="1">
          <div class="content">
            <div class="commom-wrapper">
              <dl>
                <dt>
                  <img src="./changxiang@3x.png" alt="">
                </dt>
                <dd>畅想视频</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./hailiang@3x.png" alt="">
                </dt>
                <dd>海量视频</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./daoshi@3x.png" alt="" style="width: 29px">
                </dt>
                <dd>导师解答</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./cehua@3x.png" alt="" style="width: 23px">
                </dt>
                <dd>策划咨询</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./zixun@3x.png" alt="" >
                </dt>
                <dd>陈列咨询</dd>
              </dl>
              <dl>
                <dt>
                  <img src="" alt="">
                </dt>
                <dd></dd>
              </dl>
            </div>
          </div>
          <div class="detail-wrapper">
            <div class="title">
              <i></i>
              <span>详情介绍</span>
            </div>
            <ul>
              <li>
                <i></i>
                <span>
                    全年100+视频课程
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    全年300+音频直播
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    陈列咨询服务
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    活动策划咨询服务
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    专属导师24小时解答
                  </span>
              </li>
            </ul>
          </div>
          <div class="pay" @click="buy">
            <span>￥1789立即开通</span>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item class="wrapper2" id="2">
          <div class="content">
            <div class="commom-wrapper">
              <dl>
                <dt>
                  <img src="./changxiang@3x.png" alt="">
                </dt>
                <dd>畅想视频</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./hailiang@3x.png" alt="">
                </dt>
                <dd>海量视频</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./daoshi@3x.png" alt="" style="width: 29px">
                </dt>
                <dd>导师解答</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./cehua@3x.png" alt="" style="width: 23px">
                </dt>
                <dd>策划咨询</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./zixun@3x.png" alt="" >
                </dt>
                <dd>陈列咨询</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./xianxia@3x.png" alt="">
                </dt>
                <dd>线下课程</dd>
              </dl>
              <dl>
                <dt>
                  <img src="./xianxia@3x.png" alt="">
                </dt>
                <dd>带教指导</dd>
              </dl>
              <dl>
                <dt>
                  <img src="" alt="">
                </dt>
                <dd></dd>
              </dl>
              <dl>
                <dt>
                  <img src="" alt="">
                </dt>
                <dd></dd>
              </dl>
            </div>
          </div>
          <div class="detail-wrapper">
            <div class="title">
              <i></i>
              <span>详情介绍</span>
            </div>
            <ul>
              <li>
                <i></i>
                <span>
                    全年100+视频课程
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    全年300+音频直播
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    陈列咨询服务
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    活动策划咨询服务
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    专属导师24小时解答
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    店铺员工带教指导
                  </span>
              </li>
              <li>
                <i></i>
                <span>
                    全年线下课程培训
                  </span>
              </li>
            </ul>
          </div>
          <div class="pay">
            <span>￥8888立即开通</span>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected: '1'
    }
  },
methods:{
  buy(){
    console.log(5)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
.vip
  width 100%
  background #F8F8F8
  min-height 500px
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
  .page-navbar
    width 100%
    height 40px
    .page-part
      height 40px
      a
        padding 13px 0
        color #FE8753
        font-size 16px
        &.is-selected
          margin-bottom 0px
          color #FE8753
          border-color #FE8753
        .mint-tab-item-label
          font-size 16px
    .mint-tab-container
      width 100%
      min-height 166px
      background #fff
      margin-top 20px
      .wrapper1
        width 100%
        min-height 166px
        background #fff
        .content
          height 166px
          border-bottom 1px solid #E8E8E8
          .commom-wrapper
            width 100%
            display flex
            flex-wrap wrap
            height 100%
            justify-content space-around
            dl
              width 33.3%
              height 50%
              text-align: center
              dt
                margin-top 15px
                height 35px
                img
                  width 33px
              dd
                font-size 13px
                margin-top 4px
        .detail-wrapper
          width 100%
          min-height 300px
          margin-top 10px
          .title
            height 40px
            line-height 40px
            padding-left 25px
            border-bottom 1px solid #E8E8E8
            border-top 1px solid #E8E8E8
            i
              display inline-block
              width 10px
              height 10px
              bg-image("detail")
              background-size 100% 100%
            span
              display inline-block
              height 40px
              line-height 40px
              font-size 16px
              color #282828
              margin-left 13px
          ul
            width 100%
            padding-left 25px
            margin-top 46px
            list-style none
            li
              float left
              width 100%
              margin-top 14px
              i
                width 8px
                height 8px
                position relative
                top -1px
                display inline-block
                bg-image("zuobiao")
                background-size 100% 100%
              span
                font-size 12px
                color #656565
                display inline-block
                margin-left 13px
        .pay
          width 100%
          height 40px
          line-height 40px
          padding-bottom 50px
          span
            width 70%
            height 40px
            color #fff
            font-size 16px
            border-radius 15px
            line-height 40px
            text-align: center
            display inline-block
            margin-left 15%
            background #FE8556
      .wrapper2
        width 100%
        min-height 166px
        background #fff
        .content
          height 244px
          border-bottom 1px solid #E8E8E8
          .commom-wrapper
            width 100%
            display flex
            flex-wrap wrap
            height 100%
            justify-content space-around
            dl
              width 33.3%
              height 33.3%
              text-align: center
              dt
                margin-top 15px
                height 35px
                img
                  width 33px
              dd
                font-size 13px
                margin-top 4px
        .detail-wrapper
          width 100%
          min-height 300px
          margin-top 10px
          .title
            height 40px
            line-height 40px
            padding-left 25px
            border-bottom 1px solid #E8E8E8
            border-top 1px solid #E8E8E8
            i
              display inline-block
              width 10px
              height 10px
              bg-image("detail")
              background-size 100% 100%
            span
              display inline-block
              height 40px
              line-height 40px
              font-size 16px
              color #282828
              margin-left 13px
          ul
            width 100%
            padding-left 25px
            margin-top 46px
            list-style none
            li
              float left
              width 100%
              margin-top 14px
              i
                width 8px
                height 8px
                position relative
                top -1px
                display inline-block
                bg-image("zuobiao")
                background-size 100% 100%
              span
                font-size 12px
                color #656565
                display inline-block
                margin-left 13px
        .pay
          width 100%
          height 40px
          line-height 40px
          padding-bottom 50px
          span
            width 70%
            height 40px
            color #fff
            font-size 16px
            border-radius 15px
            line-height 40px
            text-align: center
            display inline-block
            margin-left 15%
            background #FE8556

</style>
