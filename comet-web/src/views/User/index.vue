<template>
    <section class="user-page">
        <div class="user-page-box">
            <div class="user-bar" v-if="User.isLogin">
                <div class="left-container">
                    <div class="avatar-container">
                        <img src="@/assets/img/avatar.png" alt="">
                    </div>
                    <div class="name-phone">
                        <p class="name">{{ User.currentUsername }}</p>
                        <p class="phone">{{ User.currentPhone }}</p>
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
                    <div class="right-container">
                        <p class="phone">
                            {{ User.currentPhone }}
                        </p>
                        <button  @click="handleBindPhone">绑定</button>
                    </div>
                </li>
                <li class="user-email">
                    <p class="title">
                        绑定邮箱
                    </p>
                    <div class="right-container">
                        <p class="phone">
                            {{ User.currentEmail}}
                        </p>
                        <button  @click="handleBindEmail">绑定</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user-login-box" v-if="User.isLoginBoxShow">
            <div class="user-login-container">
                <div class="close-icon-container">
                    <img src="@/assets/svg/close.svg" alt="" @click="handleLoginBoxClose">
                </div>
                <p class="title">账号登录</p>
                <div class="account-input-container">
                    <img src="@/assets/svg/account.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入账号" v-model="loginAccount">
                    </div>
                </div>
                <div class="password-input-container">
                    <img src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入密码" v-model="loginPassword">
                    </div>
                </div>
                <div class="captcha-input-container">
                    <img class="keysvg" src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入验证码" v-model="loginCaptcha">
                    </div>
                    <div class="captcha-container">
                        <img class="captcha" src="@/assets/img/captcha.png" alt="">
                    </div>
                </div>
                <button class="btn-login" @click="handleLoginInfoSubmit">登 录</button>
                <p class="toggle-register" @click="handleToggleToRegister">注册</p>
            </div>
        </div>
        <div class="user-register-box" v-if="User.isRegisterBoxShow">
            <div class="user-register-container">
                <div class="close-icon-container">
                    <img src="@/assets/svg/close.svg" alt="" @click="handleRegisterBoxClose">
                </div>
                <p class="title">账号注册</p>
                <div class="account-input-container">
                    <img src="@/assets/svg/account.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入账号" v-model="registerAccount">
                    </div>
                </div>
                <div class="password-input-container">
                    <img src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入密码" v-model="registerPassword">
                    </div>
                </div>
                <div class="captcha-input-container">
                    <img class="keysvg" src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入验证码" v-model="registerCaptcha">
                    </div>
                    <div class="captcha-container">
                        <img class="captcha" src="@/assets/img/captcha.png" alt="">
                    </div>
                </div>
                <button class="btn-register" @click="handleRegisterInfoSubmit">注 册</button>
                <p class="toggle-login" @click="handleToggleToLogin">登录</p>
            </div>
        </div>
        <div class="user-phone-box" v-if="User.isPhoneBoxShow">
            <div class="user-phone-container">
                <div class="close-icon-container">
                    <img src="@/assets/svg/close.svg" alt="" @click="handlePhoneBoxClose">
                </div>
                <p class="title">手机绑定</p>
                <div class="account-input-container">
                    <img src="@/assets/svg/account.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入账号" v-model="phoneAccount">
                    </div>
                </div>
                <div class="password-input-container">
                    <img src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入密码" v-model="phonePassword">
                    </div>
                </div>
                <div class="phone-input-container">
                    <img class="keysvg" src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入新的手机号" v-model="phoneNumber">
                    </div>
                </div>
                <button class="btn-phone" @click="handlePhoneInfoSubmit">绑定</button>
            </div>
        </div>
        <div class="user-email-box" v-if="User.isEmailBoxShow">
            <div class="user-email-container">
                <div class="close-icon-container">
                    <img src="@/assets/svg/close.svg" alt="" @click="handleEmailBoxClose">
                </div>
                <p class="title">邮箱绑定</p>
                <div class="account-input-container">
                    <img src="@/assets/svg/account.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入账号" v-model="emailAccount">
                    </div>
                </div>
                <div class="password-input-container">
                    <img src="@/assets/svg/key.svg" alt="">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入密码" v-model="emailPassword">
                    </div>
                </div>
                <div class="email-input-container">
                    <img src="@/assets/svg/key.svg" alt="" class="keysvg">
                    <div class="search-bar">
                        <input type="text" class="search-input" placeholder="请输入新的邮箱" v-model="email">
                    </div>
                </div>
                <button class="btn-email" @click="handleEmailInfoSubmit">绑定</button>
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
import { register, login, bindPhone, bindEmail } from '@/api/user/user'
import { registerUser, loginUser } from '@/api/types/user'
const User = useUser()

// MessageBox 相关声明
// 声明定时器
let timer = 0
// 声明弹出 Message 组件的消息
let message = ref('')
// 声明弹出 Message 组件显示状态
const showBox = ref(false)
// emit 事件
const confirm = () => {
    showBox.value = false
    clearTimeout(timer)
}

// UserBar 中切换未登录和已登录状态
const handleLogin = () => {
    User.isLoginBoxShow = true
    loginAccount.value = ''
    loginPassword.value = ''
    loginCaptcha.value = ''
}

let loginAccount = ref('')
let loginPassword = ref('')
let loginCaptcha = ref('')
const handleLogout = () => {
    User.isLogin = false
    message.value = '退出成功'
    timer = setTimeout(() => {
        showBox.value = false
        timer = 0
    }, 3000)
    showBox.value = true
    loginAccount.value = ''
    loginPassword.value = ''
    loginCaptcha.value = ''
}

// LoginBox 相关声明
const handleLoginBoxClose = () => {
    User.isLoginBoxShow = false
    loginAccount.value = ''
    loginPassword.value = ''
    loginCaptcha.value = ''
}
const handleToggleToRegister = () => {
    User.isLoginBoxShow = false
    User.isRegisterBoxShow = true
}
// 提交登录信息
const handleLoginInfoSubmit = async () => {
    loginAccount.value = loginAccount.value.trim()
    loginPassword.value = loginPassword.value.trim()
    loginCaptcha.value = loginCaptcha.value.trim()
    // 检测是否为空
    if (loginAccount.value == '') {
        alert('请输入用户名')
        return
    } else if (loginPassword.value == '') {
        alert('请输入密码')
        return
    }
    // 检测空格
    if (loginAccount.value.indexOf(' ', 0) > -1 || loginPassword.value.indexOf(' ', 0) > -1) {
        alert('用户名或密码不能包含空格')
        return
    }
    // 检测长度
    if (loginAccount.value.length < 2) {
        alert('用户名长度不能小于2')
        return
    } else if (loginAccount.value.length > 100) {
        alert('用户名长度不能大于100')
        return
    } else if (loginAccount.value.length < 6) {
        alert('密码长度不能小于6')
        return
    } else if (loginPassword.value.length > 255) {
        alert('密码长度不能大于255')
        return
    }
    const res = await login({
        username: loginAccount.value,
        password: loginPassword.value,
        captcha: loginCaptcha.value
    })

    if (res.status === 200) {
        message.value = '登录成功'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
        User.isLogin = true
        User.isLoginBoxShow = false

        User.currentUsername = loginAccount.value
        User.currentPhone = ''

        loginAccount.value = ''
        loginPassword.value = ''
        loginCaptcha.value = ''
    } else {
        message.value = '登录失败'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
}

// RegisterBox 相关声明
let registerAccount = ref('')
let registerPassword = ref('')
let registerCaptcha = ref('')
const handleRegisterBoxClose = () => {
    User.isRegisterBoxShow = false
    registerAccount.value = ''
    registerPassword.value = ''
    registerCaptcha.value = ''
}
const handleToggleToLogin = () => {
    User.isRegisterBoxShow = false
    User.isLoginBoxShow = true
}
// 提交注册信息
const handleRegisterInfoSubmit = async () => {
    registerAccount.value = registerAccount.value.trim()
    registerPassword.value = registerPassword.value.trim()
    registerCaptcha.value = registerCaptcha.value.trim()
    // 检测是否为空
    if (registerAccount.value == '') {
        alert('请输入用户名')
        return
    } else if (registerPassword.value == '') {
        alert('请输入密码')
        return
    }
    // 检测空格
    if (registerAccount.value.indexOf(' ', 0) > -1 || registerPassword.value.indexOf(' ', 0) > -1) {
        alert('用户名或密码不能包含空格')
        return
    }
    // 检测长度
    if (registerAccount.value.length < 2) {
        alert('用户名长度不能小于2')
        return
    } else if (registerAccount.value.length > 100) {
        alert('用户名长度不能大于100')
        return
    } else if (registerPassword.value.length < 6) {
        alert('密码长度不能小于6')
        return
    } else if (registerPassword.value.length > 255) {
        alert('密码长度不能大于255')
        return
    }
    const res = await register({
        username: registerAccount.value,
        password: registerPassword.value,
        captcha: registerCaptcha.value
    })

    if (res.status === 200) {
        message.value = '注册成功'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
        User.isRegisterBoxShow = false

        registerAccount.value = ''
        registerPassword.value = ''
        registerCaptcha.value = ''
    } else {
        message.value = '注册失败'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
}

// phoneBox 相关
let phoneAccount = ref('')
let phonePassword = ref('')
let phoneNumber = ref('')
const handlePhoneBoxClose = () => {
    User.isPhoneBoxShow = false
    phoneAccount.value = ''
    phonePassword.value = ''
    phoneNumber.value = ''
}
// 提交手机号绑定信息
const handlePhoneInfoSubmit = async () => {
    const res = await bindPhone({
        username: phoneAccount.value,
        password: phonePassword.value,
        phone: phoneNumber.value
    })
    if (res.status === 200) {
        message.value = '绑定手机号成功'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
        User.isPhoneBoxShow = false
        User.currentPhone = phoneNumber.value

        phoneAccount.value = ''
        phonePassword.value = ''
        phoneNumber.value = ''
    } else {
        message.value = '绑定手机号失败'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
}
const handleBindPhone = () => {
    if(User.isLogin) {
        User.isPhoneBoxShow = true
    } else {
        message.value = '请先登录'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
}

// emailBox 相关
let emailAccount = ref('')
let emailPassword = ref('')
let email = ref('')
const handleEmailBoxClose = () => {
    User.isEmailBoxShow = false
    emailAccount.value = ''
    emailPassword.value = ''
    email.value = ''
}
// 提交邮箱绑定信息
const handleEmailInfoSubmit = async () => {
    const res = await bindEmail({
        username: emailAccount.value,
        password: emailPassword.value,
        email: email.value
    })
    if (res.status === 200) {
        message.value = '绑定邮箱成功'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
        User.isEmailBoxShow = false
        User.currentEmail = email.value

        emailAccount.value = ''
        emailPassword.value = ''
        email.value = ''
    } else {
        message.value = '绑定邮箱失败'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
}
const handleBindEmail = () => {
    if(User.isLogin) {
        User.isEmailBoxShow = true
    } else {
        message.value = '请先登录'
        timer = setTimeout(() => {
            showBox.value = false
            timer = 0
        }, 3000)
        showBox.value = true
    }
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

                &:hover {
                    background-color: #F22F2F;
                }
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

                        &:hover {
                            background-color: rgba(0, 0, 0, 0.6);
                            color: #fff;
                        }
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

                .right-container {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    button {
                        margin-left: 10%;
                        height: 100%;
                        width: 20%;
                        border-radius: 0.3rem;
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        background-color: white;
                        color: #000;
                        font-size: 0.8rem;
                        font-weight: bold;
                        cursor: pointer;
    
                        &:hover {
                            background-color: rgba(0, 0, 0, 0.6);
                            color: #fff;
                        }
                    }
                }

            }

            .user-email {
                padding: 3% 5%;
                // border-bottom: 2px solid rgba(0, 0, 0, 0.25);
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .right-container {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    button {
                        margin-left: 10%;
                        height: 100%;
                        width: 20%;
                        border-radius: 0.3rem;
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        background-color: white;
                        color: #000;
                        font-size: 0.8rem;
                        font-weight: bold;
                        cursor: pointer;
    
                        &:hover {
                            background-color: rgba(0, 0, 0, 0.6);
                            color: #fff;
                        }
                    }
                }
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

    .user-register-box {
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

        .user-register-container {
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

            .btn-register {
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

            .toggle-login {
                font-size: 1rem;
                font-weight: bold;
                color: gray;
                border-bottom: 1px solid gray;
                cursor: pointer;
                margin-bottom: 30%;
            }
        }
    }

    .user-phone-box {
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

        .user-phone-container {
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

            .phone-input-container {
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
                    width: 90%;
                    height: 80%;
                    border-radius: 0.3rem;
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    background-color: #fff;

                    .search-input {
                        margin-left: 0%;
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

            }

            .btn-phone {
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
        }
    }
    .user-email-box {
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

        .user-email-container {
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

            .email-input-container {
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
                    width: 90%;
                    height: 80%;
                    border-radius: 0.3rem;
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    background-color: #fff;

                    .search-input {
                        margin-left: 0%;
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

            }

            .btn-email {
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
        }
    }
}
</style>
