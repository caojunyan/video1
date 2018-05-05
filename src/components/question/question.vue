<template>
    <div class="question">
        <div>
          <div class="user-wrapper">
            <label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
            <input type="text" placeholder="请输入您的姓名" v-model="name">
          </div>
          <div class="tel-wrapper">
            <label for="">联系方式：</label>
            <input type="text" placeholder="请输入您的联系方式" v-model="phone">
          </div>
          <textarea v-model="questioncontent" name="" id="" cols="30" rows="10" placeholder="  说出你的问题吧。。。">

          </textarea>
        </div>
      <span class="send" @click="submit">发送</span>
    </div>
</template>

<script>
  import {question} from '../../api/api'
  import { Toast } from 'mint-ui';
    export default {
     name: "question",
     data(){
      return{
        name:"",
        phone:"",
        questioncontent:""
      }
    },
  methods:{
    submit(){
      question(this,this.questioncontent,this.name,this.phone).then(res=>{
        console.log(res)
      Toast(res.data.msg)
      })
    }
  }
    }
</script>

<style scoped lang="stylus">
.question
  border-top 1px solid #E8E8E8
  width 100%
  margin-bottom 50px
  position relative
  top 50px
  div
    background #F8F8F8
    .user-wrapper
      height 40px
      padding-left 15px
      border-bottom 1px solid #e8e8e8
      background #fff
      label
        width 70px
        height 100%
        display inline-block
        line-height 40px
        font-size 13px
      input
        font-size 13px
        height 38px
        display inline-block
        line-height 38px
        color #999
        border none
        outline none
    .tel-wrapper
      height 40px
      padding-left 15px
      border-bottom 1px solid #e8e8e8
      background #fff
      label
        width 70px
        height 100%
        display inline-block
        line-height 40px
        font-size 13px
      input
        font-size 13px
        height 38px
        display inline-block
        line-height 38px
        color #999
        border none
        outline none
    textarea
      margin-top 25px
      width 100%
      border none
      border-bottom 1px solid #e8e8e8
      border-top 1px solid #e8e8e8
      padding-top 22px
      height 275px
      outline none
  .send
    width 70%
    display inline-block
    height 40px
    background #FF8556
    color #fff
    text-align: center
    line-height 40px
    letter-spacing 10px
    font-size 18px
    margin-left 15%
    border-radius 30px
    margin-top 40px
</style>
