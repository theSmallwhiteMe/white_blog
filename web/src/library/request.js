import axios from "axios"
import {message} from "ant-design-vue";

// 请求等待事件
axios.defaults.timeout = 15000

//axios.defaults.baseURL = 'http://localhost:8080'

const getUserToken = function() {
    let token = localStorage.getItem('user_access_token')
    if (typeof token != 'string' || token.length < 1) {
        return false
    } else {
        return token
    }
}

// 请求头
axios.defaults.headers = {
    'Content-Type':'application/json;charset=UTF-8',
    'access_token':getUserToken()
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = getUserToken();
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
})


// 响应拦截器
axios.interceptors.response.use(
    response => {
        message.success('ok')
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        console.log(error)
        message.warn('err')
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:

                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:

                    break;

                // 404请求不存在
                case 404:

                    break;
                // 其他错误，直接抛出错误提示
                default:

            }
            return Promise.reject(error.response);
        }
    }
)

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function POST(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>{
                console.log(err)
                reject(err.data)
            })
    });
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 */
export function GET(url) {
    return new Promise((resolve, reject) => {
        axios.post(url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>{
                reject(err.data)
            })
    });
}