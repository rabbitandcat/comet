<template>
    <div class="root-container">
        <div class="header">
            <TopBar/>
        </div>
        <div class="main">
            <router-view/>
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
    width: 100%;
    background-color: #fff;
    .header {
        width: 100%;
        position: fixed;
        left: 0;
    }
    .main {
        width: 100%;
    }
}
</style>
