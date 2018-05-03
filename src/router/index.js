import Vue from 'vue'
import Router from 'vue-router'
import Video from '../components/video/video.vue'
import  Audio from '../components/audio/audio.vue'
import Book from '../components/book/book.vue'
import Question from '../components/question/question.vue'
import My from '../components/my/my.vue'

import Detail from '../components/videoDetail/videoDetail.vue'
import VIP from '../components/VIP/VIP.vue'
import Watch from '../components/watch/watch.vue'
import Login from '../components/login/login.vue'
import Register from '../components/register/register.vue'
import AudioList from '../components/audioList/audioList.vue'
import AudioClass from '../components/classaudioList/classaudioList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/audio'
    },
    {
      path: '/audio',
      name: 'audio',
      component:Audio,
      meta:{
        title:'音频'
      }
    },
    {
      path: '/video',
      name: 'myvideo',
      component:Video,
      meta:{
        title:'视频'
      }
    },
    {
      path: '/book',
      name: 'book',
      component:Book,
      meta:{
        title:'书刊'
      }
    },
    {
      path: '/question',
      name: 'question',
      component:Question,
      meta:{
        title:'问答'
      }
    },
    {
      path: '/my',
      name: 'my',
      component:My,
      meta:{
        title:'我的'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component:Detail,
    },
    {
      path: '/vip',
      name: 'VIP',
      component:VIP,
      meta:{
        title:"VIP会员"
      }
    },
    {
      path: '/watch',
      name: 'Watch',
      component:Watch,
      meta:{
        title:"观看劵"
      }
    },
    {
      path:'/login',
      name:Login,
      component:Login,
      meta:{
        title:"登录"
      }
    },
    {
      path:'/register',
      name:Register,
      component:Register,
      meta:{
        title:"注册"
      }
    },
    {
      path:'/audioList',
      name:AudioList,
      component:AudioList,
      meta:{
        title:"音频列表"
      }
    },
    {
      path:'/audioClass',
      name:AudioClass,
      component:AudioClass,
      meta:{
        title:"音频列表"
      }
    },
  ]
})
