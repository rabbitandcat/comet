<template>
    <div class="home-container">
        <HomePage />
        <div class="detail-pages">
            <PatternPage />
            <PreviewPage />
            <NFCPage />
            <OrderPage />
        </div>
    </div>
</template>

<script lang='ts' setup>
import HomePage from '@/views/HomePage/HomePage.vue'
import PatternPage from '@/views/HomePage/PatternPage.vue'
import PreviewPage from '@/views/HomePage/PreviewPage.vue'
import NFCPage from '@/views/HomePage/NFCPage.vue'
import OrderPage from '@/views/HomePage/OrderPage.vue'
import { onMounted, watch, ref } from 'vue'


// 防抖
const debounce = (func: Function, wait: number = 1000) => {
    let timer: ReturnType<typeof setTimeout> = 0
    return function (...args: any) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(globalThis, args)
        }, wait)
    }
}

// 平滑滚动
// const smoothScroll = (targetY: number, currentScroll: number): void => {
//     const step = () => {
//         currentScroll = currentScroll + (targetY - currentScroll) / 50
//         if (Math.abs(targetY - currentScroll) < 2) {
//             window.scrollTo(0, targetY)
//         } else {
//             window.scrollTo(0, currentScroll)
//             requestAnimationFrame(step)
//         }
//     }
//     step()
// }

// 滚动监听
const onScrollHandle = (e: any): void => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    const patternPage: any = document.getElementsByClassName('pattern-page')[0]
    const previewPage: any = document.getElementsByClassName('preview-page')[0]
    const nfcPage: any = document.getElementsByClassName('nfc-page')[0]
    const orderPage: any = document.getElementsByClassName('order-page')[0]
    if (e.wheelDelta < 0) {
        if (currentScroll > 350 && currentScroll < 720) {
            scrollTo(0, patternPage.offsetTop)
        } else if (currentScroll < 1440 && currentScroll > 1000) {
            scrollTo(0, previewPage.offsetTop)
        } else if (currentScroll < 2160 && currentScroll > 1720) {
            scrollTo(0, nfcPage.offsetTop)
        } else if (currentScroll < 2880 && currentScroll > 2400) {
            scrollTo(0, orderPage.offsetTop)
        }
    }
}


// 组件挂载时开始监听鼠标滚轮事件
onMounted(() => {
    window.addEventListener('wheel', debounce(onScrollHandle, 1));
})

</script>

<style lang='scss' scoped>
.home-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .detail-pages {
        background-image: linear-gradient(180deg, #F8B62B 0%, #FFAF84 100%);
        width: 100vw;
        height: 400vh;
    }
}
</style>
