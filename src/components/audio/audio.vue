<template>
<div class="video">
  <div class="head">
    <span>音频</span>
    <div class="logo" @click="shaixuan">
      <img src="./shaixuan@2x.png" alt="">
    </div>
  </div>
  <scroll  class="scroll" >
    <div>
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in carouselFigureList" :key="index">
            <img :src=item.image alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--课程-->
      <div class="course-wrapper">
        <h3 class="title">精品课程</h3>
        <div class="course" v-for="(item,index) in hotList" :key="index" @click="toClass(item.big)">
          <div class="img">
            <img :src=item.image alt="">
          </div>
          <div class="course-info">
            <p class="title">{{item.title}}</p>
            <p class="text">{{item.label}}</p>
            <p class="detail">
              <i class="count-img"></i>
              <span class="count">{{item.num}}次</span>
              <i class="total-img"></i>
              <span class="total">6集</span>
            </p>
          </div>
        </div>
      </div>
      <!--弹框-->
      <div class="box" v-show="show">
        <ul>
          <li @click="toHomeList('店长专区')">
            <b>促</b>
            <span>店长专区</span>
          </li>
          <li @click="toHomeList('管理运营篇')">
            <b>营</b>
            <span>管理运营篇</span>
          </li>
          <li @click="toHomeList('销售技巧篇')">
            <b>促</b>
            <span>销售技巧篇</span>
          </li>
          <li @click="toHomeList('陈列篇')">
            <b>落</b>
            <span>陈列篇</span>
          </li>
          <li @click="toHomeList('VIP管理篇')">
            <b>促</b>
            <span>VIP管理篇</span>
          </li>
          <li style="border: none" @click="toHomeList('促销篇')">
            <b>落</b>
            <span>促销篇</span>
          </li>
        </ul>
      </div>
    </div>
  </scroll>
</div>
</template>

<script>
  import myHeader from '../header/head.vue'
  import Scroll from '../scroll/scroll'
  import { Indicator, Swipe, SwipeItem } from 'mint-ui';
  import {getAudioList} from '../../api/api'
    export default {
      data(){
        return{
          show:false,
          hotList:[],
          carouselFigureList:[],
          phone:"18627009459"
        }
      },
      components:{
        myHeader,
        Scroll
      },
      methods:{
        shaixuan(){
          this.show=!this.show
        },
        //获取音频列表和轮播图列表
        getAudioHome(){
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
          getAudioList(this).then(res=>{
            this.hotList=res.data.hotList
            this.carouselFigureList=res.data.carouselFigureList
            Indicator.close();
          }).catch(err=>{
            console.log(err)
          })
        },
        //去大类
        toClass(index){
          this.$router.push({path: '/audioList', query: {index: index}});
        },
        toHomeList(info){
          this.$router.push({path: '/audioClass', query: {type: info}});
        }

      },
      mounted(){
       this.getAudioHome()
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl"
.video
  position: fixed;
  width: 100%;
  top: 0px;
  height: 100%;
  .head
    height 40px
    width 100%
    line-height 40px
    font-size 1.3rem
    text-align: center
    background #fff
    position fixed
    z-index 100
    .logo
      float right
      img
        width 20px
        position: relative;
        top: -7px;
        right 20px
  .scroll
    height: 100%
    position relative
    div
      .banner
        width 100%
        margin-top 40px
        height 175px
        img
          width 100%
          height 175px
      .course-wrapper
        padding-bottom 90px
        padding-left 15px
        padding-right 15px
        height 100%
        .title
          height 38px
          width 100%
          line-height 38px
          padding-top  10px
          font-size 18px
          font-weight normal
        .course
          width 100%
          display flex
          justify-content space-between
          height 78px
          padding-top 7px
          border-bottom 1px solid #E8E8E8
          .img
            width 65px
            flex 0 0 65px
            height 65px
            img
              width 65px
              height 65px
          .course-info
            flex 1
            padding-left 10px
            height 65px
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            .title
              font-size 16px
              color: #282828
              text-overflow:ellipsis
              overflow hidden
              width 100%
              height 20px
              line-height 20px
              padding-top 0
              display: -webkit-box;
              -webkit-line-clamp: 1;
            .text
              font-size 12px
              color: #666
              text-overflow:ellipsis;
              flex-wrap: nowrap
              height 20px
              line-height 20px
              overflow hidden
              width 100%
              display: -webkit-box;
              -webkit-line-clamp: 1;
            .detail
              font-size 12px
              color #999
              height 20px
              line-height 20px
              .count-img
                display inline-block
                width 16px
                height 20px
                background-size 12px 14px
                background-repeat no-repeat
                vertical-align -webkit-baseline-middle
                bg-image("bofang")
              .count
                display inline-block
                vertical-align middle
                height 100%
              .total-img
                display inline-block
                width 15px
                height 20px
                background-size 15px 17px
                background-repeat no-repeat
                vertical-align -webkit-baseline-middle
                bg-image("jishu")
                margin-left 13px
              .total
                display inline-block
                vertical-align middle
                height 100%
      .box
        width 188px
        height 297px
        background #F8F8F8
        box-shadow 3px 3px 10px #DEDEDE;
        position absolute
        top 0px
        right 7px
        padding-right 19px
        padding-left 19px
        ul
          list-style none
          width 100%
          li
            height 49.5px
            width 100%
            line-height 49.5px
            border-bottom  1px solid #E6E6E6
            b
              display inline-block
              width 22px
              height 22px
              line-height 22px
              text-align: center
              color #F15215
              border 1px solid #F15215
              border-radius 5px
              font-size 16px
            span
              margin-left 22px

</style>
