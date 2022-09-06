import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTopBar = defineStore('breadCrumb', {
    state: () => {
        const topBarShow:any = ref(true)

        return {
            topBarShow
        }
    },
})