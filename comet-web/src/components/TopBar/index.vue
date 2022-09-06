<template>
    <transition name="topbar">
        <header class="top-bar" v-if="topBar.topBarShow">
            <div class="left-menu">
                <div class="about-us">关于我们</div>
            </div>
            <div class="logo">
                <img class="logo-icon" src="@/assets/svg/logo.svg" alt="">
            </div>
            <div class="right-menu">
                <div class="share">
                    <img class="qq-icon" src="@/assets/svg/qq.svg" alt="">
                    <img class="weixin-icon" src="@/assets/svg/weixin.svg" alt="">
                    <img class="weibo-icon" src="@/assets/svg/weibo.svg" alt="">
                </div>
                <div class="cart-user">
                    <img class="cart-icon" src="@/assets/svg/cart.svg" alt="">
                    <img class="user-icon" @click="toUserPage" src="@/assets/svg/user.svg" alt="">
                </div>
            </div>
        </header>
    </transition>
</template>

<script lang='ts' setup>
import { ref, onMounted, watch } from 'vue'
import { useTopBar } from '@/store/topBar'
import router from '@/router';
const topBar = useTopBar()
const toUserPage = () => {
    router.push('/user')
}
topBar.topBarShow = true
</script>

<style lang="scss" scoped>
.top-bar {
    overflow: hidden;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 12vh;
    background-color: transparent;

    .left-menu {
        // overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 30rem;
        font-family: 'SiYuan';

        .about-us {
            &:hover {
                transform: scale(1.2);
            }
        }

        div {
            font-size: 0.8rem;
            font-weight: 500;
            color: #000;
            cursor: pointer;

            &:first-child {
                margin-right: 2rem;
            }
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;

        .logo-icon {
            width: 10rem;
            cursor: pointer;
        }
    }

    .right-menu {
        // overflow: hidden;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 30rem;

        .share {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            // width: 10rem;
            // margin-right: 4rem;

            img {
                padding: 0 1rem;
                cursor: pointer;

                &:hover {
                    transform: scale(1.3);
                }
            }
        }

        .cart-user {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 5rem;

            img {
                cursor: pointer;
            }

            .cart-icon {
                width: 1.5rem;

                &:hover {
                    transform: scale(1.3);
                }
            }

            .user-icon {
                margin-left: 1.5rem;
                width: 1.1rem;

                &:hover {
                    transform: scale(1.3);
                }
            }
        }
    }

}

.topbar-enter-active, .topbar-leave-active {
    transition: all 0.5s;
}

.topbar-enter-from, .topbar-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
.topbar-enter-to, .topbar-leave-from {
    transform: translateY(0);
}

@keyframes bounce {
    0% {
        background-color: transparent;
        transform: translateY(0);
    }
    50% {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-30%);
    }
    100% {
        background-color: rgba(255, 255, 255, 0.6);
        transform: translateY(0);
    }
}

.topbar-enter-active {
    animation: bounce 0.5s;
}
</style>
