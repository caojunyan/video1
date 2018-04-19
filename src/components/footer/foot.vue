<template>
  <div class="footer">
    <router-link to="/audio" class="item">
      <dl>
        <dt>
          <img src="./img/video-active@3x.png" alt="" v-if="this.path=='/audio'">
          <img src="./img/audio@3x.png" alt="" v-else>
        </dt>
        <dd>音频</dd>
      </dl>
    </router-link>
    <router-link to="/video" class="item">
      <dl>
        <dt>
          <img src="./img/video-active@3x.png" alt="" v-if="this.path=='/video'">
          <img src="./img/video-active@3x.png" alt="" v-else>
        </dt>
        <dd>视频</dd>
      </dl>
    </router-link>
    <router-link to="/book" class="item">
      <dl>
        <dt>
          <img src="./img/video-active@3x.png" alt="" v-if="this.path=='/book'">
          <img src="./img/book@3x.png" alt="" v-else>
        </dt>
        <dd>书刊</dd>
      </dl>
    </router-link>
    <router-link to="/question" class="item">
      <dl>
        <dt>
          <img src="./img/video-active@3x.png" alt="" v-if="this.path=='/question'">
          <img src="./img/question@3x.png" alt="" v-else>
        </dt>
        <dd>问答</dd>
      </dl>
    </router-link>
    <router-link to="/my" class="item">
      <dl>
        <dt>
          <img src="./img/video-active@3x.png" alt="" v-if="this.path=='/my'">
          <img src="./img/my@3x.png" alt="" v-else>
        </dt>
        <dd>我的</dd>
      </dl>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "foot",
    data(){
      return{
        path:'',
        video:true,
        book:true
      }
    },
    watch: {
// 如果路由有变化，会再次执行该方法
      "$route": "fetchDate"
    },
    methods:{
      fetchDate(){
        this.path=this.$route.path
      }
    },
    mounted(){
      this.path=this.$route.path
    }
  }
</script>

<style lang="stylus" scoped >
  @import "../../common/stylus/variable.styl"
  html,body
    font-size 10px
    .footer
      width 100%
      position fixed
      bottom 0
      height 50px
      background #fff
      display flex
      justify-content space-around
      padding-top 8px
      border-top 1px solid #EDEDED
      .item
        width 20%
        text-align: center
        text-decoration none
        &.router-link-active
          color $color-theme
          dl
            color $color-theme
            dt
              width 100%
              margin 0
              img
                width 22px
            dd
              width 100%
              margin 0
              text-align: center
              font-size .8rem
              color $color-theme
        dl
          color $color-theme
          dt
            width 100%
            margin 0
            img
              width 22px
          dd
            width 100%
            margin 0
            text-align: center
            font-size .8rem
            color $color-text
</style>
