import request from '@/utils/request'
import { registerUser } from '@/api/types/user'
import { loginUser } from '@/api/types/user'

// 发送注册请求
export const register = (data: registerUser) => {
    return request({
        method: 'POST',
        url: '/user/register',
        data
    })
}

// 发送注册请求
export const login = (data: loginUser) => {
    return request({
        method: 'POST',
        url: '/user/login',
        data
    })
}