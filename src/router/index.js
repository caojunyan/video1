import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Video from '../components/video/video'
import Book from '../components/book/book'
import Question from '../components/question/question'
import My from '../components/my/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component:Home,
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
    }
  ]
})
