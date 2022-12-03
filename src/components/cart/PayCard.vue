<template>
    <div class="col-6">
        <img :src="product.image" class="image_sa" alt="">&nbsp;
        <b>{{ product.name }}</b>
    </div>
    <div class="col-6">
        <div class="mota">
            <span class="price_st">${{ item_cost.toFixed(2) }}</span> <br>
            <span class="icoon mt-5">
                <font-awesome-icon icon="fa-solid fa-minus" class="minus" @click.prevent="removeFromCart" />
                {{ product.quantity }}
                <font-awesome-icon icon="fa-solid fa-plus" class="plus" @click.prevent="addToCart" />
            </span>
        </div>
    </div>
    <div class="cssRm">
        <button @click="removeall" class="removeAll">
            <font-awesome-icon icon="fa-solid fa-trash" class="trash" />
        </button>
    </div>
    <p></p>
    <hr>
</template>
  
<script>
export default {
    props: ["product"],

    methods: {
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
        ,
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeall() {
            this.$swal.fire({
                title: "Thông Báo",
                icon: "warning",
                confirmButtonColor: "#3085d6",
                cancelButtonColor: '#d33',
                confirmButtonText: "Yes, Delete it!",
                showCancelButton: true,
                text: "Bạn Có Muốn Xóa Sản Phẩm Này Khỏi Giỏ Hàng Không ?",
            }).then((result) => {
                if (result.value) {
                    this.$swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success',
                        this.$store.commit('removeall', this.product)
                    )
                }
            });
        },
    },
    computed: {
        item_cost() {
            if (this.product.issale) {
                return (
                    (this.product.price -
                        (this.product.price * this.product.saleoff) / 100) *
                    this.product.quantity
                );
            }
            return this.product.price * this.product.quantity;
        },
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        },
    },
}
</script>
<style lang="scss">
table,
tbody,
tr,
td {
    vertical-align: middle;
}

.tt {
    margin-top: 10px;
    padding-right: 950px;
}

.remove {
    padding: 10px;
    background-color: red;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}

.addcart {
    padding: 10px;
    padding-left: 6px;
    background-color: aqua;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}

.price_st {
    color: red;
    font-weight: bold;
}

.image_sa {
    width: 20%;
}

.minus {
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 25px;
    background-color: aquamarine;
    cursor: pointer;
    font-size: 1.15rem;
}

.minus:hover {
    background-color: orange;
}

.plus {
    border: none;
    border-radius: 5px;
    height: 25px;
    width: 25px;
    background-color: aquamarine;
    cursor: pointer;
    font-size: 1.15rem;
    margin-top: 5px;
}

.plus:hover {
    background-color: orange;
}

.quantity {
    vertical-align: middle;
}

.trash {
    color: red;
}

.removeAll {
    border: none;
    width: 40px;
    border-radius: 20px;
    height: 40px;
}

.cssRm {
    padding-right: 690px;
    margin-top: 10px;
}

.mota {
    float: right;
    padding-left: 25 0px;
}
</style>
  