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

        const cartInfo = [
            {
                patternName: '精梳棉圆领款',
                NFTToken: '0x1234567890',
                textilePriting: '丝网印',
                count: 1,
                price: 42,
                isSelected: ref(false)
            },
            {
                patternName: '运动速干款',
                NFTToken: '0x1234567890',
                textilePriting: '刺绣',
                count: 2,
                price: 82,
                isSelected: ref(false)
            }
        ]

        let totalPrice = ref(20)

        const addressInfo = {
            username: "fatrabbit",
            token: "DFSLAKI324N90DS3N2LFWE3",
            name: "李先生",
            area: "北京市-北京市-朝阳区",
            address: "朝阳区朝阳公园",
            company: "北京邮电大学",
            phone: "12345678901"
        }

        const orderInfo = {
            username: "fatrabbit",
            token: "DFSLAKI324N90DS3N2LFWE3",
            items: [
                { name: "精梳棉圆领款 丝网印", "count": 1, "price": 42 },
                { name: "运动速干款 直喷", "count": 5, "price": 42 },
                { name: "工艺费用", "count": 1, "price": 5 },
                { name: "邮费", "count": 1, "price": 15 }
            ],
            totalPrice: 62,
            payStatus: false
        }

        
        


        return {
            patterns,
            cartInfo,
            addressInfo,
            orderInfo,
            totalPrice
        }
    },
})