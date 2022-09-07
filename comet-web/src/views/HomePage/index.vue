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
import { useComponents } from '@/store/components'

const components = useComponents()

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



// 滚动监听
const onScrollHandle = (e: any): void => {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
    const homePage: any = document.querySelector('.home-page')
    const patternPage: any = document.getElementsByClassName('pattern-page')[0]
    const previewPage: any = document.getElementsByClassName('preview-page')[0]
    const nfcPage: any = document.getElementsByClassName('nfc-page')[0]
    const orderPage: any = document.getElementsByClassName('order-page')[0]
    if (e.wheelDelta < 0) {
        components.topBarShow = false;
        if (Math.abs(currentScroll - homePage.offsetTop) < 100 && currentScroll < patternPage.offsetTop) {
            scrollTo(0, patternPage.offsetTop)
        } else if (currentScroll < previewPage.offsetTop && Math.abs(currentScroll - patternPage.offsetTop) < 100) {
            scrollTo(0, previewPage.offsetTop)
        } else if (Math.abs(currentScroll - previewPage.offsetTop) < 100 && currentScroll < nfcPage.offsetTop) {
            scrollTo(0, nfcPage.offsetTop)
        } else if (Math.abs(currentScroll - nfcPage.offsetTop) < 100 && currentScroll < orderPage.offsetTop) {
            scrollTo(0, orderPage.offsetTop)
            components.topBarShow = true
        }
    }

    if (e.wheelDelta > 0) {
        components.topBarShow = true
        if (Math.abs(currentScroll - patternPage.offsetTop) < 100 && currentScroll > homePage.offsetTop) {
            scrollTo(0, homePage.offsetTop)
        } else if (currentScroll > patternPage.offsetTop && Math.abs(currentScroll - previewPage.offsetTop) < 100) {
            scrollTo(0, patternPage.offsetTop)
        } else if (Math.abs(currentScroll - nfcPage.offsetTop) < 100 && currentScroll > previewPage.offsetTop) {
            scrollTo(0, previewPage.offsetTop)
        } else if (Math.abs(currentScroll - orderPage.offsetTop) < 100 && currentScroll > nfcPage.offsetTop) {
            scrollTo(0, nfcPage.offsetTop)
        }
    }
}


// 组件挂载时开始监听鼠标滚轮事件
onMounted(() => {
    window.addEventListener('wheel', debounce(onScrollHandle, 1),{passive: false});
    const homePage: any = document.querySelector('.home-page')
    homePage.onmousewheel = (e: any) => {
        return false
    }

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
        height: 450vh;
    }
}
</style>
