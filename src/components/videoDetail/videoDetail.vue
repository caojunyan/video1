<template>
<div class="detail">
  <scroll  class="scroll" >
    <div>
      <!--视频播放-->
      <div class="start" >
        <video :poster=detail.image :src=detail.content style="width: 100%;height: 228px" controls ref="video"></video>
      </div>
      <!--课程大纲-->
      <div class="outline">
        <h3 class="title">
          课程大纲介绍
        </h3>
        <!--主讲师-->
        <div class="teacher">
          <div class="pic">
            <img src="./intro@3x.png" alt="">
          </div>
          <div class="teacher-info">
            <p>
              <b>主讲师：</b>
              <span>{{detail.lecturer}}</span>
            </p>
            <p>
              <b>地&nbsp;&nbsp;&nbsp;&nbsp;点：</b>
              <span style="display:inline-block;width:200px;overflow:hidden">{{detail.address}}</span>
            </p>
            <p>
              <b>参赛人员：</b>
              <span>益阳</span>
            </p>
            <p>
              <b style="vertical-align: top">内&nbsp;&nbsp;&nbsp;&nbsp;容：</b>
              <span style="width: 70%;text-align: left;overflow: hidden;height: 37px">{{detail.introduce}}</span>
            </p>
          </div>
        </div>
      </div>
      <!--简介-->
      <div class="jianjie">
        <h3 class="title">
          简介
        </h3>
        <div class="person">
          <div class="pic">
            <img src="./intro@3x.png" alt="">
          </div>
          <div class="person-info">
            <h6>主讲人</h6>
            <p>
              <b>周亮：</b>
              <span>此份清单涉及此份清单涉及此份清单涉及此份清单涉及此份清单涉及
            此份清单涉及此份清单涉及此份清单涉及此份清单涉及</span>
            </p>
          </div>
        </div>
      </div>
      <!--课程介绍-->
      <div class="course-info">
        <h1 class="title">课程介绍</h1>
        <div class="course-detail">
          <img src="./intro@3x.png" alt="">
          <img src="./intro@3x.png" alt="">
          <img src="./intro@3x.png" alt="">
        </div>
      </div>
    </div>
  </scroll>
  <!--问答-->
  <div class="question">
    <span @click="toQuestion"></span>
  </div>
  <!--footer-->
  <div class="footer">
    <div class="operate">
      <dl class="counsel">
        <dt class="counsel-img">
          <img src="./zixun@3x.png" alt="">
        </dt>
        <dd>咨询</dd>
      </dl>
      <dl class="unknow">
        <dt class="unknow-img">
          <img src="./unknow@3x.png" alt="">
        </dt>
        <dd>未知</dd>
      </dl>
    </div>
    <div class="apply">
      <span>报名课程</span>
    </div>
  </div>
</div>

</template>

<script>
  import Scroll from '../scroll/scroll'
  import {
    videoDetail

    } from '../../api/api';
 export default {
  data(){
    return{
      userid:"user_4e5fd3fd0aec48fcb1038895925a1701",
      index:"",
      detail:""
    }
  },
   components:{
     Scroll
   },
   methods:{
     toQuestion()
     {
       this.$router.push({path: '/question'});
     },
     toDetail()
     {
       videoDetail(this, this.index, this.userid).then(res => {
         this.detail=res.data.result[0]
       console.log(this.detail)
     }
   )
   }
  },
  mounted(){
    this.index=this.$route.query.index
    console.log(this.index)
    this.toDetail()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.css"
@import "../../common/stylus/mixin.styl"
.detail
  position: fixed;
  width: 100%;
  top: 0px;
  height: 100%;
  .scroll
    width 100%
    height 100%
    .outline
      width 100%
      background #F8F8F8
      .title
        padding-left 15px
        padding-right 15px
        height 35px
        line-height 35px
        font-size 14px
        color #282828
        font-weight bold
      .teacher
        padding-left 15px
        padding-right 15px
        height 140px
        background #fff
        display flex
        padding-top 15px
        .pic
          width  80px
          height 105px
          img
            width 100%
            height 100%
        .teacher-info
          flex 1
          height 105px
          margin-top 8px
          p
            height 20px
            line-height 20px
            b
              font-size 13px
              color #282828
              margin-left 20px
              display inline-block
            span
              font-size 12px
              color #656565
              display inline-block

    .jianjie
      width 100%
      background #F8F8F8
      .title
        padding-left 15px
        padding-right 15px
        height 35px
        line-height 35px
        font-size 14px
        color #282828
        font-weight bold
      .person
        padding-left 15px
        padding-right 15px
        height 140px
        background #fff
        display flex
        padding-top 15px
        .pic
          width  80px
          height 105px
          img
            width 100%
            height 100%
        .person-info
          flex 1
          height 105px
          h6
            font-size 14px
            color #333
            text-align: center
            width 100%
            height 25px
            line-height 25px
          p
            height 20px
            line-height 20px
            b
              font-size 13px
              color #282828
              margin-left 20px
              vertical-align top
            span
              font-size 12px
              color #656565
              display inline-block
              width 70%
              height 78px
              overflow hidden

    .course-info
      width 100%
      background #F8F8F8
      padding-bottom 50px
      .title
        padding-left 15px
        padding-right 15px
        height 35px
        line-height 35px
        font-size 14px
        color #282828
        font-weight bold
      .course-detail
        width 100%
        padding-left 15px
        padding-right 15px
        img
          width 100%
  .question
    position absolute
    width 50px
    height 50px
    right 20px
    bottom 50px
    span
      bg-image("ask")
      display inline-block
      width 50px
      height 50px
      background-size 100% 100%
  .footer
    width 100%
    height 50px
    line-height 50px
    background #FF8556
    position fixed
    bottom 0
    left 0
    display flex
    .operate
      width 132px
      display flex
      background #fff
      dl
        width 50%
        text-align: center
        height 50px
        dt
          height 22px
          margin-top -7px
          img
            width 22px
        dd
          font-size 10px
          color #333
    .apply
      flex 1
      text-align: center
      span
        color #fff
        font-size 15px
        font-family PingFang SC
</style>
