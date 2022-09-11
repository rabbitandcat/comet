import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrder = defineStore('order', {
    state: () => {
        const patterns = {
            combedCottonRound: {
                name: '精梳棉圆领款',
                price: 42,
                url: '白圆'
            },
            combedCottonV: {
                name: '精梳棉V领款',
                price: 42,
                url: '白V'
            },
            combedCottonHalf: {
                name: '精梳棉半袖款',
                price: 50,
                url: '白半'
            },
            highcountCottonRound: {
                name: '高支棉圆领款',
                price: 44,
                url: '白圆'
            },
            highcountCottonV: {
                name: '高支棉V领款',
                price: 44,
                url: '白V'
            },
            higncountCottonHalf: {
                name: '高支棉半袖款',
                price: 52,
                url: '白半'
            },
            quickDry: {
                name: '运动速干款',
                price: 42,
                url: '白运'
            },
            cotton100: {
                name: '纯棉潮流款',
                price: 50,
                url: '白潮'
            }

        }
        
        return {
            patterns
        }
    },
})