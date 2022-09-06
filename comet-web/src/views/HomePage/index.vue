<template>
    <div class="home-container">
        <HomePage/>
        <PatternPage/>
        <PreviewPage/>
        <NFCPage/>
        <OrderPage/>
    </div>
</template>

<script lang='ts' setup>
import HomePage from '@/views/HomePage/HomePage.vue'
import PatternPage from '@/views/HomePage/PatternPage.vue'
import PreviewPage from '@/views/HomePage/PreviewPage.vue'
import NFCPage from '@/views/HomePage/NFCPage.vue'
import OrderPage from '@/views/HomePage/OrderPage.vue'
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
