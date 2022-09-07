import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useComponents = defineStore('components', {
    state: () => {
        const topBarShow:any = ref(true)

        return {
            topBarShow
        }
    },
})