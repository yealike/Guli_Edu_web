import axios from 'axios'
import cookie from "js-cookie";
// import {Message, MessageBox} from 'element-ui'
// import message from "element-ui/packages/message";

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 30000 // 请求超时时间
})

// 3.http request拦截器
service.interceptors.request.use(
  config => {
    // 判断cookie里面是否有名称是 guli_token 数据
    if (cookie.get('guli_token')) {
      // 把获取cookie值放到header里面
      config.headers['token'] = cookie.get('guli_token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// http response拦截器
// service.interceptors.response.use(
//   response => {
//     if (response.data.code === 28004) {
//       console.log('response.data.code===28004')
//       // 返回错误代码 -1 清楚tickets信息并跳转到登录页面
//       window.location.href = '/login'
//       return
//     } else {
//       if (response.data.code !== 20000) {
//         //25000,订单支付中，不做任何提示
//         if (response.data.code !== 25000) {
//           Message({
//             message: response.data.message || 'error',
//             type: 'error',
//             duration: 5 * 1000
//           })
//         }
//       } else {
//         return response
//       }
//     }
//   }, error => {
//     return Promise.reject(error.response) //返回接口返回的错误信息
//
//   })
export default service
