import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', {
    state: () => {
        const isLogin = ref(true)

        return {
            isLogin
        }
    },
})