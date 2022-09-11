import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', {
    state: () => {
        const isLogin = ref(false)
        const isLoginBoxShow = ref(false)
        const isRegisterBoxShow = ref(false)
        const currentUsername = ref('')
        const currentPhone = ref('')
        const currentEmail = ref('')
        
        return {
            isLogin,
            isLoginBoxShow,
            isRegisterBoxShow,
            currentUsername,
            currentPhone,
            currentEmail
        }
    },
})