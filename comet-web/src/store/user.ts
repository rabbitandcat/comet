import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserInfo } from '@/store/types/user'

export const useUser = defineStore('user', {
    state: () => {
        let userInfo = ref({
            username: ref(''),
            phone: ref(''),
            email: ref('')
        })
        // 获取当前 localStore 中的 token 信息
        let token = ref(window.localStorage.getItem('token') || "")

        // 存储用户信息
        const setUserInfo = (username: string, phone: string, email: string) => {
            userInfo.value = {
                username: username,
                phone: phone,
                email: email
            }
        }

        // 存储用户的token
        const setToken = (newToken: string) => {
            window.localStorage.setItem('token', newToken)
            token.value = newToken
        }

        // 判断是否登录
        const isLogin = ref(false)
        // 判断登录表单是否弹出
        const isLoginBoxShow = ref(false)
        // 判断注册表单是否弹出
        const isRegisterBoxShow = ref(false)
        // 判断绑定手机表单是否弹出
        const isPhoneBoxShow = ref(false)
        // 判断绑定邮箱表单是否弹出
        const isEmailBoxShow = ref(false)

        return {
            userInfo,
            token,
            setUserInfo,
            setToken,
            isLogin,
            isLoginBoxShow,
            isRegisterBoxShow,
            isPhoneBoxShow,
            isEmailBoxShow,
        }
    },
})