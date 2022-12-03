import { createStore } from "vuex";
import axios from "axios";
import { ref, reactive } from "vue";
import { API } from "@/constant";
import { useRoute } from "vue-router";


function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}


export default createStore({
  state: {
    cart: [],
    product: null,
  },


  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    producthouse: (state) => (product) => {
      const item = state.cart.find(i => i.id === product.id)
      if (item) return item.warehouse - item.quantity
      else return null
    },
    cartItems: (state) => {
      return state.cart
    },
    cartTotal: (state) => {
      return state.cart.reduce((acc, prev) => {
        if (prev.issale) {
          return (
            (acc + prev.price - (prev.price * prev.saleoff) / 100) *
            prev.quantity
          );
        }
        return acc + prev.price * prev.quantity;
      }, 0);
    },
  },
  mutations: {
    //=====================================
    
    //=====================================
    async addtofavorite(state, product) {
      let listlike = reactive({
        user: "",
        photoURL: "",
        favoriteList: [],
      });
      const userName = ref();
      const photoURL = ref();
      const getphotoURL = JSON.parse(localStorage.getItem("photoURL"));
      
      if (getphotoURL) {
        photoURL.value = getphotoURL;
      }
      
      const getNamelocal = JSON.parse(localStorage.getItem("getname"));
      if (getNamelocal) {
        userName.value = getNamelocal;
      }
      const favoriteListServer = await axios.get(`${API}/favorite`)
      
      const productServer = await axios.get(`${API}/products`);
      const item = productServer.data.find(element => element.id === product.id)
      console.log(item);
      if (item) {
        if (item.ueserLike <= 0) {
          item.ueserLike = ++product.ueserLike;
        } else {
          item.ueserLike = --product.ueserLike;
        }
      }
      await axios.put(`${API}/products/${product.id}`, {
        ...item
      })

      const items = favoriteListServer.data.find(element => { return element.user === userName.value });
      if (items) {
        const id = items.favoriteList.find(element => element === product.id);
        if (id) {
          items.favoriteList = items.favoriteList.filter(i => i !== product.id);
        }
        else {
          items.favoriteList.push(product.id);
        }
        await axios.put(`${API}/favorite/${items.id}`, {
          ...items
        })
      }
      else {
        listlike.user = getNamelocal
        listlike.photoURL = getphotoURL
        await axios.post(`${API}/favorite`, {
          ...listlike
        })
      }
    },
    //===================================================

    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      updateUserCartDataBase(state.cart)
    },

    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
      updateLocalStorage(state.cart)
    },


    removeall(state, product) {
      state.cart = state.cart.filter(i => i.id !== product.id)
      updateLocalStorage(state.cart)
    },

    updateLocalStorageFavorite(state) {
      const favorite = localStorage.getItem('favorite')
      if (favorite) {
        state.cart = JSON.parse(favorite)
      }
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) { 
        state.cart = JSON.parse(cart)
      }
    },
    setProduct(state, productResponse) {
      state.product = productResponse;
    },


  },
  actions: {
    async fetchProduct({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/products/" + id);
      const data = await res.json();
      commit("setProduct", data);
    },

  },
  modules: {}
});
