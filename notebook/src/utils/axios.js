import axios from 'axios';
import { Toast } from 'zarm';

axios.defaults.baseURL='/api'; // 设置基础路径 前后端分离的标志
// 跨域 默认不带cookie
axios.defaults.withCredentials = true; // 跨域请求携带cookie
// 防止跨站请求伪造（CSRF）攻击
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// jwt token 验证
axios.defaults.headers['Authorization'] = localStorage.getItem('token') || null;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 响应拦截器
axios.interceptors.response.use(res=>{
    // console.log("响应拦截");
    // 统一处理错误
    // 加工数据
    if(typeof res.data !== 'object'){
        Toast.show('服务端异常')
        // 错误的处理方案
        return Promise.reject(res)
    }
    if(res.data.code !== 200){
        if(res.data.msg){
            Toast.show(res.data.msg) 
        }
        if(res.data.code === 401){ // 401 unauthorized 未登录
            // 跳转到登录页
            window.location.href = '/login' 
        }
        return Promise.reject(res.data)
    }

    return res.data;
})

export default axios;