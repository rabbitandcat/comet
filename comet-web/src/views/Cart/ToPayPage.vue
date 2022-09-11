<template>
    <section class="topay-page">
        <div class="price-container">
            <div class="title">
                <p class="price-details">价格明细</p>
                <p class="price-select">选择</p>
            </div>
            <ul class="cart-item-list">
                <li class="cart-item" v-for="(item, key, index) in Order.cartInfo" :key="index">
                    <div class="left-container">
                        <p class="cart-item-name">{{item.patternName}} {{item.textilePriting}}</p>
                        <p class="cart-item-num">x{{item.count}}</p>
                    </div>
                    <div class="right-container">
                        <div class="cart-item-price">￥ {{item.price}}</div>
                        <div class="cart-item-price-num">x {{item.count}}</div>
                        <div class="cart-item-checkbox" :class="{checkboxSelectedStyle: item.isSelected}"
                            @click="handleSelect(item)"></div>
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
                <div class="total-price-price">￥ <span class="integer">{{Order.totalPrice}}</span>.00</div>
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
    </section>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { useOrder } from '@/store/order';

const Order = useOrder();

const handleSelect = (item: any) => {
    item.isSelected = !item.isSelected;
    Order.totalPrice = 20
    Order.cartInfo.forEach(item => {
        if (item.isSelected) {
            Order.totalPrice += item.price * item.count;
        }
    })
}


</script>

<style lang="scss">
.topay-page {
    width: 100%;

    .price-container {
        margin-top: 2%;
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

                    .checkboxSelectedStyle {
                        background-color: #00B578;
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
            margin-top: 2%;
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
                margin-right: 12%;

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
</style>
