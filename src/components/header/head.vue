<template>
  <div class="head">
    <span>{{title}}</span>
    <div class="logo">
      <img src="./shaixuan@2x.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "top",
        data(){
          return {
            title:'音频'
          }
        },
        mounted(){
          this.title=this.$route.meta.title
        },
        methods:{

        },
        watch:{
          $route(to, from) {
            this.title=to.meta.title
          }
        }
    }
</script>

<style scoped lang="stylus">
  .head
    width 100%
    height 40px
    line-height 40px
    font-size 1.3rem
    padding-right 20px
    padding-left 20px
    text-align: center
    .logo
      float right
      img
        width 20px
        position: relative;
        top: -7px;


</style>
