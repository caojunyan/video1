<template>
 <div class="list">
   <div class="head">
     <i class="logo" @click="goBack">
     </i>
     <span>{{label}}</span>
   </div>
   <scroll class="scroll">
      <div>
        <div class="course-wrapper">
          <div class="course" v-for="(item,index) in audioList" :key="index" @click="toList(item.big)">
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
      </div>
   </scroll>

 </div>
</template>

<script >
  import Scroll from '../scroll/scroll'
  import {getHomeClass} from  '../../api/api'
  import { Indicator } from 'mint-ui';
    export default {
      data(){
        return{
          audioList:[],
          label:""
        }
      },
      components: {
        Scroll,
      },
      methods:{
        toList(index){
          this.$router.push({path: '/audioList', query: {index: index}});
        },
        //大类
        getClass(){
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
          var info=this.$route.query.type

          getHomeClass(this,info).then(res=>{
            this.audioList=res.data.result
            this.label=res.data.result[0].label
            Indicator.close();
          }).catch(err=>{
            console.log(err)
          })
        },
  goBack(){
    this.$router.go(-1)
  }
      },
      mounted(){
        this.getClass()
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.list
  position fixed
  top 0
  bottom 0
  width 100%
  height 100%
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
      position absolute
      z-index 100
      font-weight normal
      right 20px
      display inline-block
      width 40px
      height 30px
      line-height 30px
      font-size 14px
      background #666666
      margin-top 5px

  .scroll
    height 90%
    position relative
    top 40px
    width 100%
    div
      .course-wrapper
        padding-left 15px
        padding-right 15px
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
</style>
