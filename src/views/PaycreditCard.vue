<template >
    <div class="paystyle1">
        <div class="paystyle">
            <br>
            <br>
            <h1>Hóa Đơn Thanh Toán</h1>
            <br>
            <div class="container">
                <div class="row">
                    <PayCard v-for="product in products" :key="product.id" :product="product" />
                </div>
            </div>
            <TotalPay />
        </div>
    </div>
</template>
<script>
import PayCard from '../components/cart/PayCard.vue'
import TotalPay from '../components/cart/TotalPay.vue'

export default {
    components: {
        PayCard,
        TotalPay
    },
    computed: {
        products() {
      return this.$store.getters.cartItems;
    },
    

    }
}
</script>
<style lang="scss">
    .paystyle{
        width: 650px;
        height: 100%;
        background-color: whitesmoke;
        margin-bottom: 200px;
        margin-top: 50px;
        box-shadow: 0px 0px 8px 4px #888888;
        border-radius: 10px;
    }
    .paystyle1{
        padding-left: 450px;
    }
    h1{
        color: black;
    }
</style>