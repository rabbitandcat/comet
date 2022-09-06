<template>
    <section class="preview-page">
        <div class="left-container">
            <div class="search-area">
                <div class="search-bar">
                    <input type="text" class="search-input" placeholder="搜索您的NFT...">
                </div>
                <button class="search">
                    <img src="@/assets/svg/zoom.svg" alt="">
                </button>
            </div>
            <div class="nft-container">
                <ul class="nft-list">
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                    <li class="nft-item">
                        <img src="@/assets/img/NFT3.png" alt="">
                        <p class="nft-name">NFT 1001</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="middle-container">
            <div class="clothe-container">
                <div class="tshirt-container">
                    <img src="@/assets/img/T0.png" alt="">
                </div>
                <div class="button-area">
                    <div class="left-btns">
                        <img class="trash-icon" src="@/assets/svg/trash-can.svg" alt="">
                    </div>
                    <div class="right-btns">
                        <img class="clip-icon" src="@/assets/svg/clip.svg" alt="">
                        <img class="correct-icon" src="@/assets/svg/correct.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="right-container">
            <div class="step2">
                STEP.2
                <br>
                预览NFT样式
            </div>
            <div class="printing-container">
                <div class="printing-title">
                    选择印花工艺
                </div>
                <ul class="printing-list">
                    <div class="arrow-container">
                        <img src="@/assets/svg/arrow.svg" alt="">
                    </div>
                    <li class="printing-item">
                        丝网印
                    </li>
                    <li class="printing-item">
                        烫画
                    </li>
                    <li class="printing-item">
                        直喷
                    </li>
                    <li class="printing-item">
                        刺绣
                    </li>
                </ul>
            </div>
            <div class="btn-area"></div>
            <button class="next-step">
                下一步
            </button>
            <a class="how-to-choose">
                不知道如何选择工艺？
            </a>
        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang="scss">
.preview-page {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: linear-gradient(30deg, #FFC300 0%, #FFAF84 100%);
    background-size: cover;

    .left-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 30%;
        height: 100%;
        margin-left: 10%;

        .search-area {
            margin-bottom: -1.5vh;
            background-image: linear-gradient(30deg, #7936EC 0%, #C35BAD 70%, #FF7979 100%);
            display: flex;
            justify-content: space-evenly;
            width: 80%;
            height: 8%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 2rem;

            .search-bar {
                margin: 1.5vh 0 0 0;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 70%;
                height: 4vh;
                border-radius: 1rem;
                background-color: rgba(255, 255, 255, 0.407);

                .search-input {
                    background-color: transparent;
                    width: 85%;
                    height: 80%;
                    border: none;
                    outline: none;
                    font-size: 1rem;
                    font-weight: bold;
                    color: #fff;
                    line-height: 1rem;

                    &::placeholder {
                        color: white;
                    }
                }
            }

            .search {
                border: none;
                margin: 1vh 1vh 0 0;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }

        .nft-container {
            width: 100%;
            height: 60%;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;

            .nft-list {
                overflow: auto;
                width: 95%;
                height: 95%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;

                .nft-item {
                    overflow: hidden;
                    width: 26%;
                    height: 25%;
                    margin: 0.5rem;
                    background-color: #fff;
                    border-radius: 1rem;
                    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: flex-end;
                    cursor: pointer;

                    img {
                        width: 100%;
                        height: 100%;
                        background-color: #fff;
                        border-radius: 0.5rem;
                        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: -15%;
                    }

                    .nft-name {
                        padding: 0 6%;
                        background-color: #fff;
                        border-top-left-radius: 0.7rem;
                        width: 70%;
                        height: 15%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.6rem;
                        font-weight: bold;
                        color: #3D3D3D;
                    }
                }

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
            }
        }
    }

    .middle-container {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 2%;

        .clothe-container {
            padding-top: 3%;
            border-radius: 1rem;
            box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
            background-color: #fff;
            width: 100%;
            height: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .tshirt-container {
                width: 95%;
                height: 90%;
                border-radius: 1rem;
                background: rgba(1, 1, 1, 0.04);

                img {
                    width: 100%;
                    margin-top: -5%;
                }
            }

            .button-area {
                width: 100%;
                height: 3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left-btns {
                    width: 10vh;
                    height: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .trash-icon {
                        cursor: pointer;
                    }
                }

                .right-btns {
                    padding: 0 2vh;
                    width: 10vh;
                    height: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .clip-icon,
                    .correct-icon {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .right-container {
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin-right: 10%;

        .step2 {
            text-shadow: 0rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
            padding-left: 5%;
            width: 60%;
            font-size: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            color: #fff;
        }

        .printing-container {
            margin-top: 5%;
            overflow: hidden;
            width: 30vh;
            height: 50%;
            background-color: #fff;
            border-radius: 1rem;
            box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .printing-title {
                width: 100%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1rem;
                font-weight: bolder;
                color: #3D3D3D;
            }

            .printing-list {
                border-radius: 1rem;
                overflow: hidden;
                width: 100%;
                height: 80%;
                display: flex;
                background-color: #D3D3D3;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .arrow-container {
                    padding-bottom: 1%;
                }

                .printing-item {
                    font-weight: bolder;
                    width: 100%;
                    height: 20%;
                    padding: 2% 0;
                    padding-left: 20%;
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    &:hover {
                        background-color: #fff;
                    }



                    .printing-name {
                        width: 100%;
                        height: 2rem;
                        margin-top: 0.5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8rem;
                        font-weight: bold;
                        color: #601986;
                    }
                }
            }
        }

        .next-step {
            margin-top: 2%;
            width: 30vh;
            height: 8%;
            border: none;
            background-image: linear-gradient(30deg, #7936EC 0%, #C35BAD 70%, #FF7979 100%);
            border-radius: 1rem;
            box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
        }

        .how-to-choose {
            width: 30vh;
            height: 10%;
            border-radius: 1rem;
            display: flex;
            text-decoration: underline;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            font-weight: bold;
            color: #3662EC;
            cursor: pointer;
        }
    }
}
</style>
