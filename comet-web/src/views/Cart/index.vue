<template>
    <section class="cart-page">
        <div class="cart-page-box">
            <div class="toggle-area">
                <button class="btn-left" @click="handleToPay" :class="{ selected: !paidPage }">未支付订单</button>
                <button class="btn-right" @click="handlePaid" :class="{ selected: paidPage }">已支付订单</button>
            </div>
            <ToPayPage v-if="!paidPage"/>
            <PaidPage v-else/>
        </div>
    </section>
</template>

<script lang='ts' setup>
import ToPayPage from './ToPayPage.vue';
import PaidPage from './PaidPage.vue';
import { ref } from 'vue'
const paidPage = ref(false)
const handleToPay = () => {
    paidPage.value = false
}
const handlePaid = () => {
    paidPage.value = true
}


</script>

<style lang="scss">
.cart-page {
    width: 100%;
    height: 100vh;
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .cart-page-box {
        overflow-y: auto;
        overflow-x: hidden;
        font-weight: bold;
        background-color: white;
        margin-top: 8%;
        padding: 1% 5%;
        width: 50%;
        height: 75%;
        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &::-webkit-scrollbar {
            width: 0.5rem;
            background-color: transparent;
            border-radius: 1rem;
        }

        &::-webkit-scrollbar-track {
            // -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.551);
            border-radius: 10px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: 0 0 6px rgba(124, 124, 124, 0.512);
            background-color: #959393;
            box-shadow: none;

        }

        .toggle-area {
            border-radius: 0.5rem;
            background-color: #999999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;

            button {
                background-color: transparent;
                border: none;
                width: 100%;
                height: 5vh;
                cursor: pointer;
                font-weight: bold;
                padding: 5% 5%;
                border-radius: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .selected {
                box-shadow: 0.1rem 0rem 1rem rgba(0, 0, 0, 0.25);
                background-color: white;
            }

            .btn-right {
                margin-left: -2%;
                // background-color: transparent;
            }

            .btn-left {
                margin-right: -2%;
                // background-color: transparent;
            }

        }


    }
}
</style>
