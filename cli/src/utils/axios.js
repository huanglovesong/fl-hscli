import axios from 'axios';
import { message } from 'antd';
import { handleErrCallBack } from 'fl-pro';

// axios.defaults.baseURL = '';  API 域。默认值：当前域
axios.defaults.withCredentials = true;  // 允许跨域且携带 Cookie（或自定义头）。默认值：false
axios.defaults.timeout = 30000; // 设置请求超时时间（ms）不超过半分钟
axios.defaults.headers.common['Authorization'] = '';  // 携带的自定义头
axios.defaults.headers.post['Content-Type'] = 'application/json';  // 设置请求提内容类型，其他可选值：application/x-www-form-urlencoded

axios.interceptors.request.use(config => {
  // console.log('【request】', config);
  config.headers["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`;
  config.headers["MerchantId"] = localStorage.getItem('MerchantId');
  return config;
}, error => {
  // console.log('【request error】', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response.data;
},handleErrCallBack
);

export default axios;

