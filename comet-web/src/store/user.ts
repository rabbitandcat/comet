import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', {
    state: () => {
        const isLogin = ref(false)

        return {
            isLogin
        }
    },
})