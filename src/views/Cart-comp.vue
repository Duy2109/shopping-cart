<template>
    <div class="d-flex flex-column justify-content-center w-100 h-100">
        <h1 class="h1_font">GIỎ HÀNG</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="btn-group my-5">
                <div class="container">
                    <table class="table table-bordered">
                        <thead class="cart-item-card">
                            <tr class="th_font">
                                <th>Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Đơn Giá</th>
                                <th>Thành Tiền</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <CartItemCard v-for="product in products" :key="product.id" :product="product" />
                        <CartSummaryPaymentCard :products="products" />
                    </table>
                </div>
            </div>
            <a href="https://manuel.pinto.dev" class="text-decoration-none">
            </a>
        </div>
    </div>




</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'
import { API } from '@/constant'
import axios from "axios"

export default {
    components: {
        CartItemCard,
        CartSummaryPaymentCard,
    },
    computed: {
        products() {
            return this.$store.getters.cartItems;
        },
        // Cartproducts(){
        //     return this.$store.getters.CartItem;
        // }
    },
    methods:{
    }
}
</script>
<style lang="scss">
// .background{
//     background-color: aqua;
//     height: 100%;
// }

h1.h1_font {
    font-weight: bold;
    color: orange;
    margin-top: 50px;
    font-family: "Courier";

}

.th_font {
    font-weight: bold;
    color: black;
    background-color: orange;
    font-family: "Courier";

}
</style>