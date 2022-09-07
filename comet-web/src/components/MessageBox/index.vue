<template>
    <transition name="box">
    <section class="message-box" v-if="showBox" :style="{'z-index': zIndex}">
        <div class="message-mark" @click.self="closeBox" :style="{'z-index': zIndex + 1}"></div>
        <div class="message-container" :style="{'z-index': zIndex + 2}">
            <section v-if="showHeaderandFooter" class="header">{{ title }}</section>
            <section class="box-body">
                <img src="@/assets/svg/success.svg" alt="">
                <slot></slot>
            </section>
            <section class="box-footer" v-if="showHeaderandFooter">
                <div v-if="showCancel" class="btn btn-refuse" @click="cancel">{{cancelText}}</div>
                <div class="btn btn-confirm" @click="confirm">{{confirmText}}</div>
            </section>
        </div>
    </section>
</transition>
</template>

<script lang='ts' setup>
import { ref, watch, onMounted, onBeforeMount } from 'vue'
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    showHeaderandFooter: {
        type: Boolean,
        default: false,
        required: false,
    },
    showCancel: {
        typs: Boolean,
        default: false,
        required: false,
    },
    cancelText: {
        type: String,
        default: '取消',
        required: false,
    },
    confirmText: {
        type: String,
        default: '确定',
        required: false,
    },
},
)
const emit = defineEmits(['confirm', 'cancel'])
let showBox = ref(false)
let bodyOverflow = ''

onBeforeMount(() => {
    showBox.value = props.show;
})

onMounted(() => {

})

watch(() => props.show, (newVal) => {
    showBox.value = newVal
})

const getZIndex = () => {
    let zIndexInit = new Date().getTime()
    return zIndexInit
}
let zIndex = getZIndex()


const cancel = () => {
    emit('cancel')
}
const confirm = () => {
    emit('confirm')
}

const closeBox = (e: any) => {
    confirm()
    solveBodyOverflow()
}

const solveBodyOverflow = () => {
    document.body.style.overflow = bodyOverflow
}






</script>

<style lang="scss" scoped>
// 弹窗动画
.box-enter-active,
.box-leave-active {
    transition: all 0.5s;
}

.box-enter-from,
.box-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.box-enter-to,
.box-leave-from {
    opacity: 1;
    transform: translate(0);
}

// 最外层 设置position定位 
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.message-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    // 内容层 z-index要比遮罩大，否则会被遮盖
    .message-mark {
        position: absolute;
        top: 0;
        height: 0;
        width: 100%;
        height: 100%;
        // background: rgba(0, 0, 0, .6);
        background-color: transparent;
    }
}

.message-container {
    // flex
    position: absolute;
    top: 10%;
    left: 50%;
    min-width: 15%;
    max-width: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 75%;
    // min-height: 15%;
    overflow: hidden;
    z-index: 23456765435;
    background: #fff;
    border-radius: 8px;

    .header {
        padding: 0.8rem;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 700;
        color: #333;
    }

    .box-body {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        padding: 4% ;

        img {
            margin-right: 1%;
        }
    }

    .box-footer {
        position: relative;
        display: flex;
        width: 100%;

        // flex-shrink: 1;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #ddd;
            transform: scaleY(0.5);
        }

        .btn {
            cursor: pointer;
            flex: 1;
            text-align: center;
            padding: 15px;
            font-size: 17px;

            &:nth-child(2) {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background: #ddd;
                    transform: scaleX(.5);
                }
            }
        }

        .btn-confirm {
            color: #43ac43;
        }
    }
}
</style>
