<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-6 mt-4">
                    <img class="image_des" :src="product.image" alt=""><br>
                    <comment />
                </div>
                <div class="col-6 mt-4">
                    <div class="product-details">
                        <span class="name_product">{{ product.name }}</span><br><br>
                        <div>
                            <div class="tieude">
                                <p><span style="font-size:18px">✔ Bảo hành chính hãng 24&nbsp;tháng.&nbsp;</span></p>
                                <p><span style="font-size:18px">✔ Hỗ trợ đổi mới trong 7
                                        ngày.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                                <p><span style="font-size:18px">✔ Windows bản quyền tích hợp.&nbsp;&nbsp;&nbsp;</span>
                                </p>
                                <p><span style="font-size:18px">✔ Miễn phí giao hàng toàn quốc.&nbsp;&nbsp;&nbsp;</span>
                                </p>
                                <p class="gift"><span style="color:#ff0000"><span style="font-size:20px"><u><strong>Quà
                                                    tặng:</strong></u></span></span></p><br>
                                <p class="gift"><span style="font-size:18px"><strong>🎁 Túi chống sốc
                                            GearVN</strong></span></p><br>
                            </div>
                            <div>
                                <p class="gift"><span style="color:#ff0000"><span style="font-size:20px"><u><strong>ƯU
                                                    ĐÃI KHI MUA KÈM LAPTOP TẠI GEARVN:</strong></u></span></span></p>
                                <br>
                                <p class="gift"><span><span style="font-size:16px"><span>
                                                <font-awesome-icon icon="fa-solid fa-star" class="star" />
                                                Giảm ngay 100.000đ khi mua chuột TUF Gaming M3, Logitech G203, G102.
                                            </span></span></span></p><br>
                                <p class="gift"><span><span style="font-size:16px"><span>
                                                <font-awesome-icon icon="fa-solid fa-star" class="star" />
                                                Giảm ngay 100.000đ khi mua thêm màn hình máy tính.
                                            </span></span></span></p><br>
                                <p class="gift"><span><span style="font-size:16px"><span>
                                                <font-awesome-icon icon="fa-solid fa-star" class="star" />
                                                Giảm ngay 100.000đ khi mua thêm Ram.
                                            </span></span></span></p><br>
                                <p class="gift"><span><span style="font-size:16px"><span>
                                                <font-awesome-icon icon="fa-solid fa-star" class="star" />
                                                Giảm ngay 100,000đ khi mua kèm Microsoft Office (01.08 - 30.09.2022)
                                            </span></span></span></p><br>
                                <p class="gift"><span><span style="font-size:25px"><span>
                                                 <strong style="color:red; font-weight: bold;"><h3 class="show-price"
                                                        v-if="issale">
                                                        Giá Sale : {{ priceIsSale.toFixed(2) }}
                                                    </h3>
                                                    <h3 v-else>Giá TT: ${{ product.price.toFixed(2) }}</h3>
                                                </strong><br>

                                                <div id="main-content">
                                                    <div class="main_like">
                                                        <input type="checkbox" id="checkbox"
                                                            @click="addtofavorite(product)" />
                                                        <label for="checkbox" id="like-button">
                                                            <svg width="20" height="24" viewBox="80 685 40 44"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Group" fill="none" fill-rule="evenodd"
                                                                    transform="translate(82.000000, 687.000000)">
                                                                    <path
                                                                        d="M36.792 38.73V19.38h-6.704S22.02 11.458 20.668.006c-5.87-.163-6.805 2.91-6.805 2.91S12.12 7.963 15.44 15.403H3.05S-1.72 16.798.683 22.688c-1.086 1.84-.994 5.483 1.13 6.296-.28 2.244.4 5.566 2.79 6-.08 2.324 1.787 5.742 3.883 5.742 2.095 0 7.645.128 10.705-.01 3.062-.135 2.683-.55 5.44-1.89 3.975-.05 12.162-.095 12.162-.095z"
                                                                        id="Path" stroke="#979797" stroke-width="3" />
                                                                    <circle id="Oval" fill="#008CC9" opacity="0" cx="17"
                                                                        cy="20" r="1.5" />
                                                                </g>
                                                            </svg>
                                                            <span>Like</span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <!-- <font-awesome-icon class="heart_click"
                                                            @click="addtofavorite(product)" icon="fa-solid fa-heart" />
                                                        <font-awesome-icon icon="fa-solid fa-heart-crack" /> -->
                                                <!-- &nbsp; {{ product.ueserLike }} -->
                                                &nbsp;
                                            </span></span></span></p><br>
                                <p class="gift"><span><span style="font-size:30px"><span><br>
                                                <div class="button-container">
                                                    <button class="add" @click.prevent="addToCart()">Thêm Giỏ
                                                        Hàng </button><br>
                                                </div>
                                            </span></span></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <hr>
            <div>
                <h3 style="color: black;padding-right: 900px; font-weight: bold;">Xem Thêm Bộ Máy Khác</h3>
            </div>
            <div style="padding-left: 100px;">
                <div class="container p-2">
                    <div class="row">
                        <div class="col-4 mt-2 p-2 m-lg-4" v-for="item in getproduct" :key="item.id"
                            style="border:2px solid #333; border-radius:10px;padding-left: 10px;padding-right: 10px; width: 20%;">
                            <img :src="item.image" alt="" style="width:100%"><br>
                            <hr>
                            <span style="font-size:20px; font-weight: bold; color: black;">{{ item.name }}</span><br>
                            <span style="font-size:20px;text-decoration: none;font-weight: bold; color: red;">{{
                                    item.price.toFixed(2)
                            }}$</span><br>
                            <router-link :to="{ name: 'ProductDescriptionDrawer', params: { id: item.id } }"
                                @click="window()">
                                <button class="view-product-button1"><span>Chi Tiết</span></button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import { API } from "@/constant";
import comment from "./comments.vue";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";


export default {
    components: {
        comment,
        // groupsd
    },
    // props:['product'],
    created() {
        this.$store.dispatch("fetchProduct", { id: this.$route.params.id });
    },

    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product);
            this.$swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Thêm Thành Công 1 Sản Phẩm",
                // text: `Giỏ Hàng Đã Có ${this.product_total} Sản Phẩm`,
                text: `Số Lượng Kho Còn ${this.product_house}`,
                showConfirmButton: false,
                timer: 1500
            })
        },

        addtofavorite() {
            this.$store.commit('addtofavorite', this.product);
        },
        window() {
            this.$router.reload();
        }
    },
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        },
        issale() {
            return this.product.issale
        },
        priceIsSale() {
            return (
                this.product.price -
                (this.product.price * this.product.saleoff) / 100
            );
        },
        product_house() {
            return this.$store.getters.producthouse(this.product)
        },
        product() {
            return this.$store.state.product;
        },
        getproduct() {
            const route = useRoute()
            axios
                .get(`${API}/products`)
                .then(response => {
                    return response.data
                }).then(data => {
                    const item = data.find(i => i.id == route.params.id)
                    let getproduct = data.filter(i => i.groups == item.groups && i.id != item.id)
                    console.log(getproduct);
                    localStorage.setItem("groups", JSON.stringify(getproduct))
                })
            const getlocalstorage = JSON.parse(localStorage.getItem("groups"));
            return getlocalstorage
        }
    },
}
</script>
<style lang="scss">
.button.view-product-button1 {
    // width: 100%;
    padding: 10px;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}

.view-product-button1 {
    border-radius: 4px;
    background-color: orange;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    //   width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

.view-product-button1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.view-product-button1 span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.view-product-button1:hover span {
    padding-right: 25px;
}

.view-product-button1:hover span:after {
    opacity: 1;
    right: 0;
}

//product img 
.product_img:hover {
    transform: scale(1.1);
    transition: all 0.5s;
}

.main_like {
    float: left;
}

.product-details {
    width: 100%;
}

.comment {
    width: 180px;
}

.subject {
    width: 536px;
    height: 100px;
}

.btn {
    float: left;
}

.rating_style {
    border: 1px #ccc;
    height: 200px;
    width: 536px;
    border-radius: 5px;
}

.strong_style {
    border: 1px solid #333;
    border-radius: 5px;
}

.strong_style :hover {
    color: #FF5858;

}

.star5 {
    color: white;
}

.star {
    color: orange;
}

.cart-total {
    float: left;
    margin-top: -30px;
}

.name_product {
    font-size: 23px;
    font-weight: bold;
    float: left;
}

.details {
    background-color: white;
    border: 1px solid;
}

.heart_click {
    color: red;
    cursor: pointer;
}

button.add {
    float: left;
    font-weight: bold;
    color: azure;
    background-color: red;
    border-radius: 8px;
    border: none;
    margin-top: -50px;

}

button.add:hover {
    color: aqua;
}

.tieude {
    float: left;
    padding-right: 100px;
}

.gift {
    float: left;
}

.button-container {
    float: left;
    padding-right: 400px;
}

.image_des {
    width: 100%;
    padding-right: 100px;
}

#checkbox {
    display: none;

    &:checked+#like-button {
        span {
            color: #008cc9;
            animation: textAnim .6s forwards;
            transition: color 0s .3s;
        }

        svg {
            animation: svgAnim .6s forwards;

            path {
                animation: thumbAnim .6s forwards;
            }

            #Oval {
                animation: circleAnim .3s .3s forwards;
            }
        }
    }
}

#like-button {
    display: inline-block;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #eee;

    svg {
        float: left;
        transform-origin: bottom right;
        overflow: visible;

        circle {
            transform-origin: center;
        }
    }

    span {
        float: left;
        margin: 5px 0 0 7px;
        color: #979797;
        transform-origin: center;
    }

}

@keyframes svgAnim {
    50% {
        transform: translate(5px, -5px) rotate(45deg) scale(.7);
    }
}

@keyframes thumbAnim {
    49% {
        stroke-width: 3;
        fill: transparent;
    }

    50% {
        stroke-width: 0;
        fill: #008cc9;
    }

    100% {
        stroke-width: 0;
        fill: #008cc9;
    }
}

@keyframes textAnim {
    50% {
        transform: scale(.7);
    }
}

@keyframes circleAnim {
    40% {
        transform: scale(20);
        opacity: 1;
        fill: #008cc9;
    }

    55% {
        transform: scale(21);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: .7;
    }

    65% {
        transform: scale(22);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: .6;
    }

    75% {
        transform: scale(23);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: .5;
    }

    85% {
        transform: scale(27);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: .2;
    }

    95% {
        transform: scale(28);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: .1;
    }

    100% {
        transform: scale(29);
        opacity: 1;
        fill: transparent;
        stroke: #008cc9;
        stroke-width: 0;
    }
}


/* Global Button Style for our like/unlike el */
.like {
    display: inline-block;
    width: 8rem; // <- Edit these value according to
    height: 8rem; // <- your ability to love unconditionally
    border-radius: 50%;
    background: rgba(20, 20, 20, 0.5);
    position: relative;
    cursor: pointer;
    transition: background-color 0.25s ease;
    overflow: hidden;
}

/* Global Button Hover Style for our like/unlike el */
.like:hover {
    background: #fff;
    transition: background-color 0.25s ease;
}

/* Liked/Unliked states of our like icon */
.liked .like-icon-state {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewbox='0 0 100 100'><path fill='%23de3618' d='M50,88.87 C76.67,70.46 90,53.9 90,39.17 C90,17.08 63.12,3.84 50,27.63 C38.875,3.85 10,17.08 10,39.17 C10,53.9 23.33,70.46 50,88.87 Z'/></svg>");
}

.unliked .like-icon-state {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewbox='0 0 100 100'><path fill='none' stroke='%23666' stroke-width='5' d='M50,88.87 C76.67,70.46 90,53.9 90,39.17 C90,17.08 63.12,3.84 50,27.63 C38.875,3.85 10,17.08 10,39.17 C10,53.9 23.33,70.46 50,88.87 Z'/></svg>");
}

.like span {
    text-indent: -1000px;
    font-size: 1px;
}

/* Global aspects of the like icon (holding our icon state view) */
.like-icon {
    background-size: contain;
    position: absolute;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    top: 15%;
    right: 15%;
    bottom: 15%;
    left: 15%;
}

.liked .like-icon-state {
    transform: scale(0);
}

/* Set initial opacity and attach the like animation  */
.liked .like-icon-state {
    opacity: 0;
    animation: 1.2s like-animation both cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes like-animation {
    0% {
        transform: scale(0);
    }

    15% {
        transform: scale(1.25);
    }

    32% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Set initial opacity and attach the unlike animation  */
.unliked .like-icon-state {
    opacity: 0;
    animation: 1.2s unlike-animation both cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes unlike-animation {
    0% {
        transform: scale(0);
    }

    15% {
        transform: scale(1.1);
    }

    30% {
        transform: scale(0.98);
    }

    45% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Pop a small animation of the background on like */
.liked {
    background: #e2e2e2;
    animation: 1.2s liked-bg-animation both;
}

@keyframes liked-bg-animation {
    0% {
        transform: scale(0);
    }

    15% {
        transform: scale(1.1);
    }

    30% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}


/* Pop a more discreet animation of the background on unlike */
.unliked {
    animation: 1.2s unliked-bg-animation both;
}


@keyframes unliked-bg-animation {
    0% {
        transform: scale(0);
    }

    10% {
        transform: scale(.70);
    }

    30% {
        transform: scale(0.95);
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}


/* Pseudo el for our ring animation */
.like::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.75);
    transform: scale(0);
}

/* Apply animation to the ring el */
.liked::before {
    animation: 1.2s bg-ring-animation both;
}

@keyframes bg-ring-animation {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    10% {
        transform: scale(1.5);
        opacity: 0.25;
    }

    15% {
        transform: scale(2);
        opacity: 0.15;
    }

    45% {
        transform: scale(3.25);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 0;
    }
}

// Animation when loading 
// in htmx land the default class is .htmx-request
// instead of .saving

.saving::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border: .15em solid rgba(100, 100, 100, .5);
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: spin-animation 400ms infinite linear;
}


@keyframes spin-animation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>