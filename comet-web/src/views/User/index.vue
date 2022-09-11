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
                        <button @click="handleImport" class="import">
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
        <div class="user-login-box">
            <div class="user-login-container">
                <div class="close-icon-container">
                    <img src="@/assets/svg/close.svg" alt="">
                </div>
                <p class="title">账号登录</p>
                <div class="account-input-container">
                    <img src="@/assets/svg/account.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入账号">
                    </div>
                </div>
                <div class="password-input-container">
                    <img src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入密码">
                    </div>
                </div>
                <div class="captcha-input-container">
                    <img class="keysvg" src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入验证码">
                    </div>
                    <div class="captcha-container">
                        <img class="captcha" src="@/assets/img/captcha.png" alt="">
                    </div>
                </div>
                <button class="btn-login">登 录</button>
                    <p class="toggle-register">注册</p>
            </div>
        </div>
        <MessageBox :show="showBox" :showHeaderandFooter="false" @confirm="confirm">
            <p>{{message}}</p>
        </MessageBox>
    </section>
</template>

<script lang='ts' setup>
import { useUser } from '@/store/user'
import MessageBox from '@/components/MessageBox/index.vue'
import { ref } from 'vue'
const User = useUser()

let timer = 0
let message = ref('')
const showBox = ref(false)

const confirm = () => {
    showBox.value = false
    clearTimeout(timer)
}

const handleLogout = () => {
    User.isLogin = false
    message.value = '退出成功'
    timer = setTimeout(() => {
        showBox.value = false
        timer = 0
    }, 3000)
    showBox.value = true
}
const handleLogin = () => {
    User.isLogin = true
    message.value = '登录成功'
    timer = setTimeout(() => {
        showBox.value = false
        timer = 0
    }, 3000)
    showBox.value = true
}

const handleImport = () => {
    message.value = '导入成功'
    timer = setTimeout(() => {
        showBox.value = false
        timer = 0
    }, 3000)
    showBox.value = true
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

    .user-login-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 1000;

        .user-login-container {
            width: 30%;
            height: 80%;
            background-color: white;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .close-icon-container {
                width: 90%;
                height: 10%;
                font-weight: bold;
                margin-bottom: 5%;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                img {
                    cursor: pointer;
                }
            }

            .title {
                font-size: 1.8rem;
                font-weight: bolder;
                margin-bottom: 5%;
            }

            .account-input-container {
                height: 8%;
                width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 2%;

                .search-bar {
                    margin-left: 5%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90%;
                    height: 80%;
                    border-radius: 0.3rem;
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    background-color: #fff;

                    .search-input {
                        background-color: transparent;
                        width: 90%;
                        height: 80%;
                        border: none;
                        outline: none;
                        font-size: 1rem;
                        font-weight: bold;
                        color: rgba(0, 0, 0, 0.6);
                        line-height: 1rem;

                        &::placeholder {
                            color: rgba(0, 0, 0, 0.16);

                        }
                    }

                }
            }
            .password-input-container {
                height: 8%;
                width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 2%;
                .search-bar {
                    margin-left: 5%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90%;
                    height: 80%;
                    border-radius: 0.3rem;
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    background-color: #fff;

                    .search-input {
                        background-color: transparent;
                        width: 90%;
                        height: 80%;
                        border: none;
                        outline: none;
                        font-size: 1rem;
                        font-weight: bold;
                        color: rgba(0, 0, 0, 0.6);
                        line-height: 1rem;

                        &::placeholder {
                            color: rgba(0, 0, 0, 0.16);

                        }
                    }

                }
            }

            .captcha-input-container {
                height: 8%;
                width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 2%;
                .keysvg {
                    visibility: hidden;
                }
                .search-bar {
                    margin-left: 5%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 80%;
                    border-radius: 0.3rem;
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    background-color: #fff;

                    .search-input {
                        margin-left: 8%;
                        background-color: transparent;
                        width: 90%;
                        height: 80%;
                        border: none;
                        outline: none;
                        font-size: 1rem;
                        font-weight: bold;
                        color: black;
                        line-height: 1rem;

                        &::placeholder {
                            color: rgba(0, 0, 0, 0.16);

                        }
                    }

                }

                .captcha-container {
                    width: 40%;
                    height: 80%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    .captcha {
                        width: 80%;
                        height: 100%;
                        cursor: pointer;
                    }
                }
            }

            .btn-login {
                margin-bottom: 5%;
                width: 65%;
                height: 8%;
                border-radius: 0.3rem;
                border: none;
                background-color: rgba(0, 0, 0, 0.25);
                color: #fff;
                font-size: 1.2rem;
                font-weight: bold;
                cursor: pointer;
                margin-top: 5%;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.5);
                }
            }

            .toggle-register {
                font-size: 1rem;
                font-weight: bold;
                color: gray;
                border-bottom: 1px solid gray;
                cursor: pointer;
                margin-bottom: 30%;
            }
        }
    }
}
</style>
