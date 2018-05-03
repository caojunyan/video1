import axios from 'axios';
import qs from 'qs';

import router from '../router/index'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.timeout = 10000; //响应时间
axios.defaults.baseURL = 'http://52.80.28.198/marobookstore'; //配置接口地址

export default axios;
