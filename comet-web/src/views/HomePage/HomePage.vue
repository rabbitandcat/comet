<template>
    <section class="home-page">
        <div class="left-container">
            <img class="alphabet" src="@/assets/svg/alphabet.svg" alt="">
        </div>
        <div class="right-container">
            <div class="title">
                将您的NFT穿在身上！
            </div>
            <div class="intro">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                汇星为您提供NFT的实体化T恤定制服务，现在开始拥有一件独一无二的私人T恤！
            </div>
            <button class="customize">
                开始定制！
            </button>
        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
.home-page {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('@/assets/img/bg_homepage.png');
    background-size: cover;

    .left-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;

        .alphabet {
            width: 76vh;
            padding-left: 26vh;
            padding-top: 28vh;
        }
    }

    .right-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 0 10rem;

        .title {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            width: 17rem;
            text-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
        }

        .intro {
            width: 22rem;
            margin-top: 2rem;
            font-size: 1.3rem;
            font-weight: bold;
            color: #3D3D3D;
            line-height: 1.9rem;
        }

        .customize {
            font-family: 'SiYuan';
            box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
            text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
            margin-top: 2rem;
            width: 10rem;
            height: 3rem;
            border: none;
            border-radius: 2rem;
            background-image: linear-gradient(to right, #7936EC, #C35BAD, #FF7979);
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

        }
    }
}
</style>
