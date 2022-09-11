import request from '@/utils/request'
import { registerUser, loginUser, phoneUser, emailUser } from '@/api/types/user'

// 发送注册请求
export const register = (data: registerUser) => {
    return request({
        method: 'POST',
        url: '/user/register',
        data
    })
}

// 发送登录请求
export const login = (data: loginUser) => {
    return request({
        method: 'POST',
        url: '/user/login',
        data
    })
}

// 发送手机号绑定请求
export const bindPhone = (data: phoneUser) => {
    return request({
        method: 'POST',
        url: '/user/phone',
        data
    })
}

// 发送邮箱绑定请求
export const bindEmail = (data: emailUser) => {
    return request({
        method: 'POST',
        url: '/user/email',
        data
    })
}