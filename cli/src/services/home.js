// 异步请求的中转文件
import axios from '../utils/axios';
// 请求地址的文件
import Api from '../configs/api';
export function mypage(params) {
    return axios.get(configs.host.test + Api.mypage, { 'params': params });
}