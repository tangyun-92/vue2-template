import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

const baseUrl = this.$__BASE_URL

const service = axios.create({
  baseURL: baseUrl,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: true,
  timeout: 8000
})

/**
 * 请求拦截器
 * 统一处理请求拦截，如：添加token等
 */
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = localStorage.getItem(window._BASE_CONFIG.projectKey)
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 * 统一处理响应拦截 
 * 如：重定向、消息提示等操作
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.result) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error.response)
    if (error.response) {
      const { status } = error.response
      if (status === 401) {
        const encodeUrl = encodeURIComponent(`${window.location.href}`)
        window.location.href = baseUrl + `/ssoLogin?redirectUrl=${encodeUrl}`
        return
      }
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
