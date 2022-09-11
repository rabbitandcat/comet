<template>
    <section class="pattern-page">
        <div class="left-container">
            <div class="step1">
                STEP.1
                <br>
                选择您想要的基础版型
            </div>
        </div>
        <div class="right-container">
            <div class="pattern-container">
                <ul class="pattern-list">
                    <li class="pattern-item" v-for="(pattern, key, index) in Order.patterns" :key="index">
                        <div class="img-container">
                            <img :src="getImageUrl(pattern.url)" alt="" @click.stop="handleChoosePattern(pattern)">
                        </div>
                        <div class="under-text">
                            <div class="title">
                                {{pattern.name}}
                            </div>
                            <div class="price">
                                ￥ {{pattern.price}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pattern-bottom">
                <p class="details-fabric">不了解面料？</p>
                <button @click="scrollToStep2" class="next-step">下一步</button>
            </div>
        </div>
        <MessageBox :show="showBox" :showHeaderandFooter="false" @confirm="confirm">
            <p>{{message}}</p>
        </MessageBox>
    </section>
</template>

<script lang='ts' setup>
import MessageBox from '@/components/MessageBox/index.vue'
import { ref } from 'vue'

import { useOrder } from '@/store/order'
const Order = useOrder()


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

const getImageUrl = (name: any) => {
    return new URL(`../../assets/img/${name}.png`, import.meta.url).href
}


const handleChoosePattern = (pattern: any) => {
    message.value = `您选择了${pattern.name}`
    timer = setTimeout(() => {
        showBox.value = false
        timer = 0
    }, 3000)
    showBox.value = true
}


const scrollToStep2 = () => {
    const previewPage: any = document.getElementsByClassName('preview-page')[0]
    window.scrollTo(0, previewPage.offsetTop)
}


</script>

<style lang="scss">
.pattern-page {
    scroll-behavior: smooth;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: transparent;
    background-size: cover;
    margin: 25vh 0 25vh 0;

    .left-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        margin-left: 10%;

        .step1 {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            width: 18rem;
            text-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
        }
    }

    .right-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
        // padding: 0 10rem;

        .pattern-container {
            // background-color: transparent;
            margin-right: 30%;
            margin-top: 10%;
            width: 70%;
            height: 60%;
            background-color: transparent;

            .pattern-list {
                &::-webkit-scrollbar {
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: rgba(255, 255, 255, 0.25);
                    border-radius: 1rem;
                }

                &::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.551);
                    border-radius: 10px;
                    background-color: transparent;
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: 0 0 6px rgba(124, 124, 124, 0.512);
                    background-color: #959393;
                }

                overflow: auto;
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;

                .pattern-item {
                    cursor: pointer;
                    font-weight: bold;
                    overflow: hidden;
                    width: 15vh;
                    height: 25vh;
                    background-color: #fff;
                    margin: 1vh 2vh;
                    border-radius: 0.5rem;
                    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);

                    &:hover {
                        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
                    }

                    .img-container {
                        height: 70%;
                        overflow: hidden;

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .under-text {
                        padding: 5% 5%;

                        .title {
                            padding: 5% 0;
                        }
                    }
                }
            }
        }

        .pattern-bottom {
            margin-right: 20%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 60%;
            height: 10%;

            .details-fabric {
                font-size: 1.3rem;
                font-weight: bold;
                color: #601986;
                line-height: 1.9rem;
                cursor: pointer;
            }

            .next-step {
                font-family: 'SiYuan';
                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                text-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.25);
                width: 10rem;
                height: 3rem;
                border: none;
                border-radius: 2rem;
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
