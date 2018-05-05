/* jshint esversion: 6 */
import axios from './httpConfig';
import qs from 'qs';

//注册页面获取验证码

export const register=(_this,num)=>{
  return axios.get('/registerVerificationCode?phoneNumber='+num).then(function(res){
    return res;
  })
}
//点击注册按钮
export const goRegister=(_this,info)=>{
  return axios.post('/saveUser',info).then(function(res){
    return res;
  })
}


/*
用户登录获取验证码接口：
http://z.maro168.com/marobookstore/loginVerificationCode?phoneNumber=12345678910(参数：phoneNumber=？)
*/
export const codeLogin=(_this,num)=>{
  return axios.get('/loginVerificationCode?phoneNumber='+num).then(function(res){
    return res;
  })
}
//登录
export const Login=(_this,num)=>{
  return axios.post('/verificationCodeLogin',num).then(function(res){
    return res;
  })
}
// 音频页面
export const getAudioList=(_this)=>{
  return axios.get('/audioDetail').then(function(res){
    return res;
  })
}
//音频大类
export const getBigHome=(_this,id)=>{
  return axios.get('/findAudioListByBig?big='+id).then(function(res){
    return res;
  })
}
//音频分类
export const getHomeClass=(_this,info)=>{
  return axios.get('findAudioByLabel?label='+info).then(function(res){
    return res;
  })
}
//音频收藏
//http://z.maro168.com/marobookstore/saveCollection?userId=user_4e5fd3fd0aec48fcb1038895925a1701&big=2018041903
export const getCollect=(_this,userId,big)=>{
  return axios.get('saveCollection?userId='+userId+'&big='+big).then(function(res){
    return res;
  })
}
//音频取消收藏
//http://z.maro168.com/marobookstore/deleteCollection?userId=user_4e5fd3fd0aec48fcb1038895925a1701&big=2018041903

export const delCollect=(_this,userId,big)=>{
  return axios.get('deleteCollection?userId='+userId+'&big='+big).then(function(res){
    return res;
  })
}



//视频页面
export const getVideoList=(_this)=>{
  return axios.get('indexDetail').then(function(res){
    return res;
  })
}

//视频详情
//http://z.maro168.com/marobookstore/hotDetail?resourcesId=resources_e0ed81a1fe274865ba43f82618dc51c4&userId=user_4e5fd3fd0aec48fcb1038895925a1701
export const videoDetail=(_this,id,userid)=>{
  return axios.get('hotDetail?resourcesId='+id+'&userId='+userid).then(function(res){
    return res;
  })
}

//wenda
//http://z.maro168.com/marobookstore/saveInterlocution?questions=问题&realname=姓名&phone=12345678910（参数：questions=?&realname=?&phone=?）
export const question=(_this,question,name,phone)=>{
  return axios.get('saveInterlocution?questions='+question+'&realname='+name+'&phone='+phone).then(function(res){
    return res;
  })
}

//我的
//http://z.maro168.com/marobookstore/findUserMe?userId=user_4e5fd3fd0aec48fcb1038895925
export const my=(_this,userid)=>{
  return axios.get('findUserMe?userId='+userid).then(function(res){
    return res;
  })
}
