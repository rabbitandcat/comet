import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { useUser } from '@/store/user'
const User = useUser()

const request: AxiosInstance = axios.create({
    baseURL: '/haha',
    timeout: 5000
})


// 请求拦截器
request.interceptors.request.use(function (config: any) {
    // 统一设置用户身份 token
    if (User.userInfo && User.token) {
        config.headers.Authorization = `Bearer ${User.token}`
    }
    return config
}, function (error: any) {
    return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response: AxiosResponse) {
    return response
}, function (error: any) {
    return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then((res) => {
        return (res) as T
    })
}