<template>
    <div class="home-container">
        <HomePage />
        <PatternPage />
        <PreviewPage />
        <NFCPage />
        <OrderPage />
    </div>
</template>

<script lang='ts' setup>
import HomePage from '@/views/HomePage/HomePage.vue'
import PatternPage from '@/views/HomePage/PatternPage.vue'
import PreviewPage from '@/views/HomePage/PreviewPage.vue'
import NFCPage from '@/views/HomePage/NFCPage.vue'
import OrderPage from '@/views/HomePage/OrderPage.vue'
import { onMounted, watch, ref } from 'vue'


const debounce = (func: Function, wait: number = 1000) => {
    let timer: ReturnType<typeof setTimeout> = 0
    return function (...args: any) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(globalThis, args)
        }, wait)
    }
}

const smoothScroll = (targetY: number, currentScroll: number): void => {
    const step = () => {
        currentScroll = currentScroll + (targetY - currentScroll) / 50
        if (Math.abs(targetY - currentScroll) < 0.1) {
            window.scrollTo(0, targetY)
        } else {
            window.scrollTo(0, currentScroll)
            requestAnimationFrame(step)
        }
    }
    step()
}

const onScrollHandle = (e: any): void => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    let targetY: number
    if (e.wheelDelta < 0) {
        if (currentScroll > 400 && currentScroll < 720) {
            smoothScroll(720, currentScroll)
        } else if (currentScroll < 1440 && currentScroll > 1100) {
            smoothScroll(1440, currentScroll)
        } else if (currentScroll < 2160 && currentScroll > 1700) {
            smoothScroll(2160, currentScroll)
        } else if (currentScroll < 2880 && currentScroll > 2420) {
            smoothScroll(2880, currentScroll)
        }
    }
}



onMounted(() => {
    window.addEventListener('wheel', debounce(onScrollHandle, 50));
})

</script>

<style lang='scss' scoped>
.home-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
