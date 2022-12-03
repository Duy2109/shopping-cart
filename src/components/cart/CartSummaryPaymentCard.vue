<template>
    <tbody>
        <tr>
            <td colspan="3">
                <h3>Tổng Tiền</h3>
            </td>
            <td colspan="3">
                <h3>${{ cart_total.toFixed(2) }}</h3>
                <router-link to="/paycredit"><button class="view-product-button">Pay by Credit Card</button>
                </router-link>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {

    computed: {
        cart_total() {
            return this.$store.getters.cartTotal;
        },

    }
}
</script>
<style lang="scss">
.view-product-button {
    padding: 10px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}
</style>