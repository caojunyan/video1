<template>
  <div id="app">
    <myHead v-if="showFlag" v-show="headerShow"></myHead>
    <router-view></router-view>
    <myFoot v-if="showFlag"></myFoot>
  </div>
</template>

<script>
import myHead from './components/header/head'
import myFoot from './components/footer/foot'
export default {
  name: 'App',
  data(){
    return{
      showFlag:true,
      headerShow:true
    }
  },
  components:{
    myHead,
    myFoot
  },
  methods:{
//    判断头部和脚步是否显示
    toShow(){
      let status=this.$route.path;
      if(status==="/audio"){
        this.showFlag=true
        this.headerShow=false
      }else if(status==="/video"){
        this.showFlag=true
        this.headerShow=true
      }else if(status==="/book"){
        this.showFlag=true
        this.headerShow=true
      }else if(status==="/question"){
        this.showFlag=true
        this.headerShow=true
      }else if(status==="/my"){
        this.showFlag=true
        this.headerShow=false
      }else{
        this.showFlag=false
        this.headerShow=false
      }
    }
  },
  mounted(){
    this.toShow()
  },
  watch:{
    $route(to, from) {
      this.toShow()
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/base.css"
  html
    font-size 10px
    margin 0
    a
      -webkit-tap-highlight-color:rgba(0,0,0,0)

</style>
