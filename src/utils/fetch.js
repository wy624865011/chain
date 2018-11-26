import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'
import global from '@/utils/global'


// 创建axios实例
const service = axios.create({
  baseURL: global.apiUrl + process.env.BASE_API, // api的base_url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'accesstoken': getToken(),
  },
  timeout: 15000,                  // 请求超时时间
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    ret = ret.substring(0, ret.length - 1)
    return ret
  }],
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  // console.info(config)
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 20000) {
      // Message({
      //   message: res.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // 40001:Token 过期了
      if (res.code === 40001) {
        store.dispatch('FedLogOut').then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
