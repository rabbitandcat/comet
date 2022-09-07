<template>
    <section class="paid-page">
        <div class="myorder-container">
            <p class="title">我的订单</p>
            <ul class="posted-list">
                <div class="title">已寄出</div>
                <li class="post-item">
                    <div class="header">
                        <div class="express-code">
                            <p>运单号：SF486597856849</p>
                            &nbsp;
                            &nbsp;
                            <img src="@/assets/svg/copy.svg" alt="">
                        </div>
                        <p class="cancel-order">取消运单</p>
                    </div>
                    <div class="body">
                        <div class="from">
                            <p class="location">北京市</p>
                            <p class="from-user">郭先生</p>
                        </div>
                        <div class="status">
                            <img src="@/assets/svg/sending-arrow.svg" alt="">
                            <p class="status-info">
                                运送中
                            </p>
                        </div>
                        <div class="to">
                            <p class="location">杭州市</p>
                            <p class="from-user">李先生</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>运送状态： <span class="status">已出库</span></p>
                    </div>
                </li>
            </ul>
            <ul class="topost-list">
                <div class="title">未寄出</div>
                <li class="topost-item">
                    <div class="header">
                        <div class="express-code">
                            <p>运单号：SF486597856849</p>
                            <img src="@/assets/svg/copy.svg" alt="">
                        </div>
                        <p class="cancel-order">取消运单</p>
                    </div>
                    <div class="body">
                        <div class="from">
                            <p class="location">北京市</p>
                            <p class="from-user">郭先生</p>
                        </div>
                        <div class="status">
                            <img src="@/assets/svg/sending-arrow.svg" alt="">
                            <p class="status-info">
                                运送中
                            </p>
                        </div>
                        <div class="to">
                            <p class="location">杭州市</p>
                            <p class="from-user">李先生</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>运送状态： <span class="status">已出库</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
.paid-page {
    width: 100%;

    .myorder-container {
        margin-top: 2%;
        width: 100%;
        background-color: #fff;

        .title {
            font-size: 1rem;
            font-weight: bold;
            color: #000;
        }

        .posted-list {
            width: 100%;
            margin-top: 2%;

            .title {
                font-size: 0.8rem;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.6);
            }

            .post-item {
                width: 100%;
                margin-top: 1%;
                padding: 1%;
                border: 1px solid #e5e5e5;
                border-radius: 5px;

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .express-code {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        p {
                            font-size: 0.8rem;
                            color: rgba(0, 0, 0, 0.6);
                        }

                        img {
                            // margin-left: 1%;
                            cursor: pointer;
                            width: 1rem;
                            height: 1rem;
                        }
                    }

                    .cancel-order {
                        cursor: pointer;
                        font-size: 0.8rem;
                        color: #FA5151;
                    }
                }

                .body {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    margin-top: 1%;

                    .from {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .location {
                            font-size: 2rem;
                            color: #000;
                        }

                        .from-user {
                            margin-top: 10%;
                            font-size: 0.8rem;
                            color: #000;
                        }
                    }

                    .status {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 4rem;
                            height: 2rem;
                        }

                        .status-info {
                            font-weight: bold;
                            font-size: 0.8rem;
                            color: #000;
                        }
                    }

                    .to {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .location {
                            font-size: 2rem;
                            color: #000;
                        }

                        .from-user {
                            margin-top: 10%;
                            font-size: 0.8rem;
                            color: #000;
                        }
                    }
                }

                .footer {
                    margin-top: 1%;

                    p {
                        font-size: 0.8rem;
                        color: rgba(0, 0, 0, 0.6);

                        .status {
                            font-size: 0.8rem;
                        }
                    }
                }
            }
        }

        .topost-list {
            width: 100%;
            margin-top: 2%;

            .title {
                font-size: 0.8rem;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.6);
            }

            .topost-item {
                width: 100%;
                margin-top: 1%;
                padding: 1%;
                border: 1px solid #e5e5e5;
                border-radius: 5px;

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .express-code {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        p {
                            font-size: 0.8rem;
                            color: rgba(0, 0, 0, 0.6);
                        }

                        img {
                            // margin-left: 1%;
                            cursor: pointer;
                            width: 1rem;
                            height: 1rem;
                        }
                    }

                    .cancel-order {
                        cursor: pointer;
                        font-size: 0.8rem;
                        color: #FA5151;
                    }
                }

                .body {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    margin-top: 1%;

                    .from {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .location {
                            font-size: 2rem;
                            color: #000;
                        }

                        .from-user {
                            margin-top: 10%;
                            font-size: 0.8rem;
                            color: #000;
                        }
                    }

                    .status {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 4rem;
                            height: 2rem;
                        }

                        .status-info {
                            font-weight: bold;
                            font-size: 0.8rem;
                            color: #000;
                        }
                    }

                    .to {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .location {
                            font-size: 2rem;
                            color: #000;
                        }

                        .from-user {
                            margin-top: 10%;
                            font-size: 0.8rem;
                        }
                    }
                }

                .footer {
                    margin-top: 1%;

                    p {
                        font-size: 0.8rem;
                        color: rgba(0, 0, 0, 0.6);

                        .status {
                            font-size: 0.8rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
