<template>
    <section class="user-page">
        <div class="user-page-box">
            <div class="user-bar" v-if="User.isLogin">
                <div class="left-container">
                    <div class="avatar-container">
                        <img src="@/assets/img/avatar.png" alt="">
                    </div>
                    <div class="name-phone">
                        <p class="name">用户416864</p>
                        <p class="phone">1895078923</p>
                    </div>
                </div>
                <button @click="handleLogout" class="log-out">
                    退出登录
                </button>
            </div>
            <div class="user-bar" v-else>
                <div class="left-container">
                    <div class="avatar-container">
                        <div class="null-img"></div>
                    </div>
                    <div class="name-phone">
                        <p class="name">未登录</p>
                        <p class="phone"></p>
                    </div>
                </div>
                <button @click="handleLogin" class="log-in">
                    登录
                </button>
            </div>
            <ul class="user-info">
                <li class="user-nft">
                    <p class="title">导入您的NFT</p>
                    <div class="right-area">
                        <div class="search-bar">
                            <input type="text" class="search-input">
                        </div>
                        <button class="import">
                            导入
                        </button>
                    </div>
                </li>
                <li class="user-phone">
                    <p class="title">
                        绑定手机
                    </p>
                    <p class="phone">
                        1895078923
                    </p>
                </li>
                <li class="user-email">
                    <p class="title">
                        绑定邮箱
                    </p>
                    <p class="phone">
                        1507972048@foxmail.com
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang='ts' setup>
import { useUser } from '@/store/user'
const User = useUser()

const handleLogout = () => {
    User.isLogin = false
}
const handleLogin = () => {
    User.isLogin = true
}
</script>

<style lang="scss">
.user-page {
    width: 100%;
    height: 100vh;
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .user-page-box {
        background-color: white;
        padding-top: 3%;
        margin-top: 8%;
        width: 50%;
        height: 60%;
        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .user-bar {
            padding: 2% 5%;
            border: 2px solid rgba(0, 0, 0, 0.25);
            border-radius: 0.3rem;
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left-container {
                width: 50%;
                // height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                .avatar-container {
                    .null-img {
                        background-color: #D3D3D3;
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%;
                    }
                    min-height: 8vh;
                }

                .name-phone {
                    width: 70%;
                    padding-left: 8%;

                    .name {
                        font-size: 1rem;
                        font-weight: bold;
                    }

                    .phone {
                        margin-top: 5%;
                        font-size: 0.8rem;
                        color: gray;
                    }
                }
            }

            .log-out {
                width: 20%;
                height: 50%;
                border-radius: 0.3rem;
                border: none;
                background-color: #FA5151;
                color: #fff;
                font-size: 0.8rem;
                font-weight: bold;
                cursor: pointer;
            }
            .log-in {
                width: 20%;
                height: 50%;
                border-radius: 0.3rem;
                border: none;
                background-color: #00B578;
                color: #fff;
                font-size: 0.8rem;
                font-weight: bold;
                cursor: pointer;
            }
        }

        .user-info {
            border-radius: 0.3rem;
            // padding: 0 5%;
            overflow: hidden;
            margin-top: 3%;
            border: 2px solid rgba(0, 0, 0, 0.25);
            width: 70%;
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-weight: bold;

            .user-nft {
                border-bottom: 2px solid rgba(0, 0, 0, 0.25);
                width: 90%;
                padding: 0 5%;
                height: 40%;
                display: flex;
                align-items: center;
                justify-content: space-between;


                .right-area {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;

                    .search-bar {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 70%;
                        height: 40%;
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

                    .import {
                        width: 20%;
                        height: 40%;
                        border-radius: 0.3rem;
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        background-color: white;
                        color: #000;
                        font-size: 0.8rem;
                        font-weight: bold;
                        cursor: pointer;
                    }
                }
            }

            .user-phone {
                padding: 3% 5%;
                border-bottom: 2px solid rgba(0, 0, 0, 0.25);
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .user-email {
                padding: 3% 5%;
                // border-bottom: 2px solid rgba(0, 0, 0, 0.25);
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
}
</style>
