<template>
  <div class="list">
    <div class="head">
      <i class="logo" @click="goBack">
      </i>
      <span>视频列表</span>
      <b @click="collect"  v-if="collShow">收藏</b>
      <b @click="cancelcollect" v-if="!collShow">取消收藏</b>
    </div>
    <scroll class="scroll">
      <div>
        <div class="course-wrapper">
          <div class="course" v-for="(item,index) in audioList" :key="index">
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
  import {getBigHome,getCollect,delCollect} from  '../../api/api'
  import { Indicator ,Toast} from 'mint-ui';
  export default {
    data(){
      return{
        audioList:[],
        userId:'user_4e5fd3fd0aec48fcb1038895925a1701',
        collShow:true,
        status:status
      }
    },
    components: {
      Scroll,
    },
    methods:{
      //获取列表
      getHomeList(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        var id=this.$route.query.index
        getBigHome(this,id).then(res=>{
          this.audioList=res.data.audioList
          Indicator.close();
        }).catch(err=>{
          console.log(err)
        })
      },
    collect(){
    this.collShow=false
    var big=this.$route.query.index
    console.log(this.$route.query)
    getCollect(this,this.userId,big).then(res=>{
      Toast(res.data.msg)
      console.log(res)
    this.status=res.data.status
    })
  },
  cancelcollect(){
    this.collShow=true
    var big=this.$route.query.index
    console.log(this.$route.query)
    delCollect(this,this.userId,big).then(res=>{
      Toast(res.data.msg)
      console.log(res)
    this.status=res.data.status

  })

  },
  goBack(){
    this.$router.go(-1)
  }
    },
    mounted(){
      this.getHomeList()
    if(this.status===0){
      this.collShow=true
    }else if(this.status==1){
      this.collShow=false
    }
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
      top:40px
      div
        .course-wrapper
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
</style>
