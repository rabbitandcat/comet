<template>
    <section class="order-page">
        <div class="left-container">
            <div class="title">
                STEP.4确认您的订单信息
            </div>
        </div>
        <div class="right-container">
            <div class="title">
                <img src="@/assets/svg/shouhuo.svg" alt="">
                <p>收货信息</p>
            </div>
            <form action="" class="form">
                <p class="name">
                    <span style="color: red">*</span>
                    姓名
                </p>
                <div class="search-bar">
                    <input type="text" class="search-input">
                </div>
                <p class="area">
                    <span style="color: red">*</span>
                    省市区
                </p>
                <div class="search-bar">
                    <input type="text" class="search-input">
                </div>
                <p class="position">
                    <span style="color: red">*</span>
                    详细地址
                </p>
                <div class="search-bar">
                    <input type="text" class="search-input">
                </div>
                <p class="company">
                    公司名称
                </p>
                <div class="search-bar">
                    <input type="text" class="search-input">
                </div>
                <p class="phone">
                    <span style="color: red">*</span>
                    电话号码
                </p>
                <div class="search-bar">
                    <input type="text" class="search-input">
                </div>
            </form>
            <div class="cart">
                <button class="btn-cart">
                    加入购物车
                </button>
            </div>
        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
.order-page {
    padding-right: 20%;
    background-color: transparent;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .left-container {
        width: 40%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            width: 17rem;
            text-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
        }
    }

    .right-container {
        margin-right: 20%;
        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
        overflow: hidden;
        padding: 1% 2%;
        border-radius: 1rem;
        width: 30%;
        height: 60%;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        flex-direction: column;
        background-color: #fff;

        .title {
            height: 15%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 10%;
            margin-bottom: -10%;

            img {
                width: 7%;
            }

            p {
                margin-left: 2%;
                font-size: 1.8rem;
                font-weight: bold;
            }
        }

        .form {
            height: 60%;
            padding-left: 10%;
            font-weight: bold;

            p {
                padding: 2% 1%;
            }

            .search-bar {
                margin: 0 0 0 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60%;
                height: 10%;
                border-radius: 1rem;
                background-color: rgba(0, 0, 0, 0.047);

                .search-input {
                    background-color: transparent;
                    width: 85%;
                    height: 80%;
                    border: none;
                    outline: none;
                    font-size: 1rem;
                    font-weight: bold;
                    color: black;
                    line-height: 1rem;

                    &::placeholder {
                        color: #D3D3D3;

                    }
                }

            }
        }

        .cart {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            button {
                padding: 2% 3%;
                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
                border: none;
                border-radius: 0.5rem;
                background-image: linear-gradient(to right, #7936EC, #C35BAD, #FF7979);
                color: #fff;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.25);
                }
            }
        }
    }
}
</style>
