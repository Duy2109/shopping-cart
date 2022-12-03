<template>
  <tbody class="tbodys">
    <tr>
      <td class="td w-25"><img :src="product.image" class="image_s" alt=""></td>
      <td>{{ product.name }}</td>
      <td>
        <font-awesome-icon icon="fa-solid fa-minus" class="minus" @click.prevent="removeFromCart" />
        {{product.quantity}}
        <font-awesome-icon icon="fa-solid fa-plus" class="plus" @click.prevent="addToCart" />
      </td>
      <td>${{ item_cost.toFixed(2) }}</td>
      <td>${{ item_cost.toFixed(2) }}</td>
      <td><button @click="removeall" class="button_remove">
          <font-awesome-icon icon="fa-solid fa-trash" class="trash" />
        </button></td>
    </tr>
  </tbody>
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
        icon:"warning",
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

.image_s {
  width: 70%;
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

.button_remove {
  border-radius: 7px;
  border: none;
}

.button_remove:hover {
  background-color: orange;
}
</style>
