<template>
    <section class="cart-page">
        <div class="cart-page-box">
            <div class="toggle-area">
                <button class="btn-left">未支付订单</button>
                <button class="btn-right">已支付订单</button>
            </div>
            <div class="price-container">
                <div class="title">
                    <p class="price-details">价格明细</p>
                    <p class="price-select">选择</p>
                </div>
                <ul class="cart-item-list">
                    <li class="cart-item">
                        <div class="left-container">
                            <p class="cart-item-name">精梳棉圆领款 丝网印</p>
                            <p class="cart-item-num">x1</p>
                        </div>
                        <div class="right-container">
                            <div class="cart-item-price">￥ 42.00</div>
                            <div class="cart-item-price-num">x1</div>
                            <div class="cart-item-checkbox"></div>
                        </div>
                    </li>
                    <li class="cart-item">
                        <div class="left-container">
                            <p class="cart-item-name">运动速干款 直喷</p>
                            <p class="cart-item-num">x5</p>
                        </div>
                        <div class="right-container">
                            <div class="cart-item-price">￥ 42.00</div>
                            <div class="cart-item-price-num">x5</div>
                            <div class="cart-item-checkbox"></div>
                        </div>
                    </li>
                </ul>
                <div class="extra-price-list">
                    <div class="craft-price">
                        <div class="left-container">
                            <p class="craft-price-title">工艺费用</p>
                            <p class="craft-price-num">x1</p>
                        </div>
                        <div class="right-container">
                            <div class="craft-price-price">￥ 5.00</div>
                            <div class="craft-price-price-num">x1</div>
                            <div class="craft-price-checkbox"></div>
                        </div>
                    </div>
                    <div class="express-price">
                        <div class="left-container">
                            <p class="express-price-title">邮费</p>
                            <p class="express-price-num">x1</p>
                        </div>
                        <div class="right-container">
                            <div class="express-price-price">￥ 15.00</div>
                            <div class="express-price-price-num">x1</div>
                            <div class="express-price-checkbox"></div>
                        </div>
                    </div>
                </div>
                <div class="total-price-list">
                    <p class="total-price-title">总计费用</p>
                    <div class="total-price-price">￥ <span class="integer">62</span>.00</div>
                </div>
            </div>
            <div class="pay-methods">
                <div class="title">支付方式</div>
                <div class="btns">
                    <button class="wechat">
                        <img src="@/assets/svg/wechat.svg" alt="">
                        <p>微信支付</p>
                    </button>
                    <button class="alipay">
                        <img src="@/assets/svg/alipay.svg" alt="">
                        <p>支付宝</p>
                    </button>
                </div>
            </div>
            <div class="scan-QRcode">
                <p class="title">扫码付款</p>
                <div class="QRcode-container">

                </div>
            </div>
        </div>
    </section>
</template>

<script lang='ts' setup>

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
            // border: 0.1px solid #dbdbdb;
            border-radius: 0.5rem;
            background-color: #999999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            button {
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
            .btn-right {    
                margin-left: -2%;
                background-color: transparent;
            }
            .btn-left {
                box-shadow: 0.1rem 0rem 1rem rgba(0, 0, 0, 0.25);
                margin-right: -2%;
                background-color: white;
            }
            
        }

        .price-container {
            width: 100%;
            background-color: #fff;

            .title {
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #E5E5E5;

                .price-details {
                    font-size: 16px;
                    color: #333333;
                    margin-left: 20px;
                }

                .price-select {
                    font-size: 14px;
                    color: #999999;
                    margin-right: 20px;
                }
            }

            .cart-item-list {
                width: 100%;

                .cart-item {
                    width: 100%;
                    height: 5vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #E5E5E5;

                    .left-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .cart-item-name {
                            font-size: 14px;
                            color: #333333;
                            margin-left: 20px;
                        }

                        .cart-item-num {
                            font-size: 0.9rem;
                            color: #999999;
                            margin-left: 5%;
                        }
                    }

                    .right-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        .cart-item-price {
                            font-size: 0.9rem;
                            color: #333333;
                            margin-right: 20px;
                        }

                        .cart-item-price-num {
                            font-size: 14px;
                            color: #999999;
                            margin-right: 20px;
                        }

                        .cart-item-checkbox {
                            cursor: pointer;
                            border-radius: 100%;
                            width: 2.7vh;
                            height: 2.7vh;
                            background-color: #F5F5F5;
                            margin-right: 6%;
                        }
                    }
                }
            }

            .extra-price-list {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                align-items: center;
                border-bottom: 1px solid #E5E5E5;

                .craft-price {
                    width: 100%;
                    height: 5vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .craft-price-title {
                            font-size: 14px;
                            color: #333333;
                            margin-left: 20px;
                        }

                        .craft-price-num {
                            font-size: 14px;
                            color: #999999;
                            margin-left: 5%;
                        }
                    }

                    .right-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        .craft-price-price {
                            font-size: 0.9rem;
                            color: #333333;
                            margin-right: 20px;
                        }

                        .craft-price-price-num {
                            font-size: 14px;
                            color: #999999;
                            margin-right: 20px;
                        }

                        .craft-price-checkbox {
                            visibility: hidden;
                            cursor: pointer;
                            border-radius: 100%;
                            width: 2.7vh;
                            height: 2.7vh;
                            background-color: #F5F5F5;
                            margin-right: 6%;
                        }
                    }
                }

                .express-price {
                    width: 100%;
                    height: 5vh;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .express-price-title {
                            font-size: 14px;
                            color: #333333;
                            margin-left: 20px;
                        }

                        .express-price-num {
                            font-size: 14px;
                            color: #999999;
                            margin-left: 5%;
                        }

                    }

                    .right-container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;

                        .express-price-price {
                            font-size: 0.9rem;
                            color: #333333;
                            margin-right: 20px;
                        }

                        .express-price-price-num {
                            font-size: 14px;
                            color: #999999;
                            margin-right: 20px;
                        }

                        .express-price-checkbox {
                            visibility: hidden;
                            cursor: pointer;
                            border-radius: 100%;
                            width: 2.7vh;
                            height: 2.7vh;
                            background-color: #F5F5F5;
                            margin-right: 6%;
                        }
                    }
                }
            }

            .total-price-list {
                width: 100%;
                height: 30%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .total-price-title {
                    font-size: 14px;
                    color: #333333;
                    margin-left: 20px;
                }

                .total-price-price {
                    font-size: 14px;
                    color: #333333;
                    margin-right: 13%;

                    .integer {
                        font-size: 1.5rem;
                    }
                }
            }
        }

        .pay-methods {
            margin-top: 6%;
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            margin-left: 5%;

            .btns {
                width: 100%;
                margin-top: 2%;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                button {
                    cursor: pointer;
                    border-radius: 0.5rem;
                    border: 1px solid #999999;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 6vh;
                    width: 16%;
                }

                .alipay {
                    margin-left: 3%
                }
            }
        }

        .scan-QRcode {
            margin-left: 5%;
            width: 100%;
            // height: 100%;
            background-color: #fff;
            margin-top: 2%;

            .QRcode-container {
                margin-top: 2%;
                margin-left: 5%;
                border-radius: 0.2rem;
                width: 30vh;
                height: 30vh;
                background-color: #f1f1f1;
            }
        }
    }
}
</style>
