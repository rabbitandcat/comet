<template>
    <header class="top-bar">
        <div class="left-menu">
            <div>款型&工艺</div>
            <div>关于我们</div>
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
                <img class="user-icon" src="@/assets/svg/user.svg" alt="">
            </div>
        </div>
    </header>
</template>

<script lang='ts' setup>

</script>

<style lang="scss" scoped>

@font-face {
    font-family: 'SiYuan';
    src: url('@/assets/font/NotoSansHans-Regular.otf')
}
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 0 5rem;
    background-color: transparent;

    .left-menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 30rem;
        font-family: 'SiYuan';

        div {
            font-size: 1rem;
            font-weight: 500;
            color: #000;
            cursor: pointer;
            &:first-child {
                margin-right: 2rem;
            }
            &:hover {
                text-decoration: underline;
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
            }

            .qq-icon {
                width: 1rem;
            }

            .weixin-icon {
                width: 1.3rem;
            }

            .weibo-icon {
                width: 1.3rem;
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
            }

            .user-icon {
                margin-left: 1.5rem;
                width: 1.2rem;
            }
        }
    }
    
}
</style>
