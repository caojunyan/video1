<template>
  <div id="app">
    <my-head></my-head>
    <router-view></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from './components/header/head'
import myFoot from './components/footer/foot'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    myHead,
    myFoot
  }

}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/base.css"
  html
    font-size 10px
    margin 0
</style>
