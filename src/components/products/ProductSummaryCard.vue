<template>
    <div class="card">
        <div class="product-sale-off" v-if="product.issale">
            <span class="product-sale-off-label">Sale</span>
            <span class="product-sale-off-percent">{{ product.saleoff }}%</span>
        </div>
        <img class="product_img" :src="product.image" alt="">
        <hr class="hr1">
        <p class="name1">{{ product.name }}</p>
        <!-- <p class="description">{{product.description}}</p> -->
        <h5 class="price">Giá KM: {{ product.price.toFixed(2) }}$</h5>
        <router-link :to="{ name: 'ProductDescriptionDrawer', params: { id: product.id } }">
            <button class="view-product-button1"><span>Xem Chi Tiết Sản Phẩm</span></button>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ['product'],
    // created() {
    //     this.$store.dispatch("fetchProduct", { id: this.$route.params.id });
    // },
    methods: {
    }



}
</script>
<style lang="scss">
.card {
    justify-content: center;
    width: 20%;
    margin: 0%;
    margin-top: 20px;
    margin-left: 20px;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px gray;
    overflow: hidden;
}

h5.price {
    color: red;
    font-weight: bold;
}

// button.view-product-button1:hover {
//     color:yellow;
// }

button.view-product-button1 {
    width: 100%;
    padding: 10px;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}

img {
    width: 100%;
    transition: all 0.5s;
}


.product-sale-off {
    position: absolute;
    right: px;
    top: 0;
    width: 69px;
    height: 80px;
    background-color: rgba(255, 216, 64, 0.94);
    text-align: center;
    border-top-right-radius: 7px;
    user-select: none;
    z-index: 10;
}

.product-sale-off::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    border-width: 0 25px 6px;
    border-style: solid;
    border-color: transparent rgba(255, 216, 64, 0.94) transparent rgba(255, 216, 64, 0.94);
}

.product-sale-off-percent {
    color: #ee4d2d;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.6rem;
    position: relative;
    top: 6px;
    display: block;
    margin-top: 0.5rem;
}

.product-sale-off-label {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: red;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    top: 5px;
    display: block;
}

p.name1 {
    font-size: 20px;
}

p.name1:hover {
    color: red;
    cursor: pointer;
}

@media (min-width: 500px) {
    .card {
        width: 290px;
        margin: 10px;
    }
}

.hr1 {
    border-top: 3px solid red;
}

.view-product-button1 {
    border-radius: 4px;
    background-color: orange;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
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
</style>