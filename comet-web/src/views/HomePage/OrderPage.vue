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
                    姓名
                </p>
                <input type="text" class="name-input">
                <p class="area">
                    省市区
                </p>
                <input type="text" class="area-input">
                <p class="position">
                    详细地址
                </p>
                <input type="text" class="position-input">
                <p class="company">
                    公司名称
                </p>
                <input type="text" class="company-input">
                <p class="phone">
                    电话号码
                </p>
                <input type="text" class="phone-input">
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
    background-image: linear-gradient(30deg, #FFC300 0%, #FFAF84 100%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .left-container {
        width: 30%;
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
            height: 20%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

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
            padding-left: 10%;
            font-weight: bold;

            p {
                padding: 2% 0;
            }

            input {
                width: 50%;
                padding: 2% 0;
                border-radius: 2rem;
                outline: none;
                border: none;
                background-color: rgba(0, 0, 0, 0.04);
            }
        }

        .cart {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            button {
                padding: 1% 2%;
                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
                border: none;
                border-radius: 0.5rem;
                background-image: linear-gradient(to right, #7936EC, #C35BAD, #FF7979);
                color: #fff;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
</style>
