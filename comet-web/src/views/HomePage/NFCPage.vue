<template>
    <section class="nfc-page">
        <div class="left-container">
            <p class="title">
                STEP.3进行您的防伪NFC编码
            </p>
        </div>
        <div class="right-container">
            <div class="nfc-setting">
                <div class="nfc-num">
                    <p>设置您的NFC编码数量（定制数量）</p>
                    <input type="text" class="num-input">
                </div>
                <div class="nfc-generate">
                    <p>生成您的NFC防伪编码</p>
                    <input type="text" class="generate-input">
                    <button class="generate">生成</button>
                </div>
                <div class="customize">
                    生成您的NFC防伪编码
                </div>
            </div>
            <div class="bottom-container">
                <div class="btns">
                    <img src="@/assets/svg/smile.svg" alt="">
                    <img src="@/assets/svg/image.svg" alt="">
                </div>
                <button class="complete">
                    完成
                </button>
            </div>
        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
.nfc-page {
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
        padding: 1% 1.5%;
        border-radius: 1rem;
        width: 40%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background-color: #fff;

        div.nfc-setting {
            font-weight: bold;
            width: 100%;
            height: 70%;

            .nfc-num {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 1% 2%;
                border-bottom: 1px solid gray;
                height: 15%;
                display: flex;
                align-items: center;

                p {
                    padding-right: 7.5%;
                }

                .num-input {
                    height: 80%;
                    border-radius: 2rem;
                    outline: none;
                    border: none;
                    background-color: rgba(0, 0, 0, 0.04);
                }
            }

            .nfc-generate {
                padding: 1% 2%;
                border-bottom: 1px solid gray;
                height: 15%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                p {
                    // padding-right: 20%;
                }

                .generate-input {
                    height: 80%;
                    border-radius: 2rem;
                    outline: none;
                    border: none;
                    background-color: rgba(0, 0, 0, 0.04);
                }

                .generate {
                    margin-left: 10%;
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

            .customize {
                padding: 1% 2%;
                border-bottom: 1px solid gray;
                height: 15%;
                display: flex;
                align-items: center;
            }
        }

        .bottom-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .btns {
                display: flex;
                align-items: center;

                img {
                    margin-right: 30%;
                }
            }

            .complete {
                padding: 1% 8%;
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
