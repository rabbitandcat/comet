<template>
    <div class="root-container">
        <div class="header">
            <TopBar/>
        </div>
        <div class="main">
            <HomePage/>
        </div>
    </div>
</template>

<script lang='ts' setup>
import TopBar from '@/components/TopBar/index.vue'
import HomePage from '@/views/HomePage/index.vue'
</script>

<style lang="scss" scoped>
.root-container {
    font-family: 'SiYuan';
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    background-color: #fff;
    .header {
        width: 100vw;
        position: fixed;
    }
    .main {
        width: 100vw;
    }
}
</style>
