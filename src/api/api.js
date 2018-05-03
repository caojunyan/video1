import axios from './httpConfig';
import qs from 'qs';


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
