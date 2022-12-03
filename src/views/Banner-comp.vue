<template>
  <main>
    <header>
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-4 mt-3">
              <router-link class="router_style" to="/">
                <img class="image_logo" src="../assets/image/logo.png" alt="">
              </router-link>
            </div>
            <div class="col-4 mt-5">
              <nav>
                <router-link class="register_style" to="/register" v-if="isLoggedOut"><button class="register_button">
                    <font-awesome-icon class="iconregister" icon="fa-solid fa-file-pen" />
                  </button> ĐĂNG KÍ |</router-link>
                <router-link class="signin_style" to="/sign-in" v-if="isLoggedOut"><button class="user_button">
                    <font-awesome-icon class="iconuser" icon="fa-solid fa-user" />
                  </button> ĐĂNG NHẬP |</router-link>
                <!-- <p v-if="isLoggedIn">Xin Chào {{users}}</p> -->
                <button @click="handleSignOut" class="sign_Instyle" v-if="isLoggedIn">
                  <!-- ĐĂNG XUẤT -->
                      <img :src="getphotoURL" v-if="getphotoURL" class="userimg" alt=""><br>
                      <p v-if="getDisplayname">xin chào {{getDisplayname}}</p><br>
                      <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
                    </button><br>
              </nav>
            </div>
            <div class="col-4">
              <router-link to="/cart">
                <nav class="navs">
                  <div class="form-inline my-2 my-lg-0">
                    <h3 class="router_style">
                      <font-awesome-icon class="cart" icon="fa solid fa fa-cart-shopping" />
                      Giỏ Hàng
                    </h3>
                    <!-- <strong>
                      <font-awesome-icon class="heart_click" icon="fa-solid fa-heart" />&nbsp;
                    </strong> -->
                  </div>
                </nav>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <content>
      <div class="yc">
        <b>
          |
          <router-link to="/" class="navcomp">
            <font-awesome-icon icon="fa-solid fa-home" /> HOME
          </router-link>
          |
          <font-awesome-icon icon="fa-brands fa-youtube" /> <a href="https://www.youtube.com/"
            class="navcomp">VIDEOS</a>
          |
          <font-awesome-icon icon="fa-solid fa-microchip" /> <a href="https://gvn360.com/" class="navcomp">TIN CÔNG
            NGHỆ</a>
          |
          <router-link to="/infostudent" class="navcomp">
            <font-awesome-icon icon="fa-solid fa-user" /> THÔNG TIN
          </router-link>
          |
          <font-awesome-icon icon="fa-solid fa-city" /> HỆ THỐNG SHOWROOM
        </b>
      </div>
    </content>

  </main>
  <!-- <img class="imgs" src="../assets/image/banner.png" alt=""> -->
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
const isLoggedOut = ref(true);
let auth;


const getphotoURL =JSON.parse(localStorage.getItem("photoURL"));
const getDisplayname=JSON.parse(localStorage.getItem("getname"));


  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }

    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedOut.value = false;;
      } else {
        isLoggedOut.value = true;
      }
    });
  });

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
}






</script>
  
<style>
.userimg{
  width: 20px;
  border-radius: 50px;
}
.quangcao1 {
  width: 45%;
  float: right;
  padding-top: 20px;
}

.img-fluid {
  width: 80%;
  height: 80%;
  box-shadow: 20px 20px 0px #d65106;
}

.yc {
  color: red;
  cursor: pointer;
}

.contentheader {
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
  width: 100%;
  border-radius: 0px 0px 100px 100px;
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.contentheader ul {

  list-style: none;
  display: inline;

}

.image_a {
  width: 50%;
  padding-left: 20px;
}

li a {

  font-size: 14px;
  padding: 10px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: #010101;
  float: right;
  margin-right: 50px;
}

li a:hover:not(.active) {
  color: white;
  background-color: #d65106;
  font-weight: bold;
}

.active {
  color: black;
  font-weight: bold;
}

.imgs {
  width: 100%;
}

.navcomp {
  text-decoration: none;
  color: red;
}

.navcomp:hover {
  color: red;
}

.navs {
  margin-top: 10px;
  margin-bottom: 10px;
  float: right;
}

.banner {
  height: 100%;
}

.submit {
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
  cursor: pointer;
}

.glass {
  padding-left: 5px;
  margin-top: 50px;
}

.cart {
  margin-top: 50px;

}

.router_style:hover {
  color: aqua;
}

.router_style {
  color: orange;
  font-family: "Courier";
  font-weight: bold;
  font-size: 20px;

}

.image_logo {
  width: 300px;
  height: 90px;
  float: left;
  padding-left: 20px;
}


header {
  position: sticky;
  z-index: 999;
}

main {
  padding: 0;
}

header {
  position: sticky;
  top: 0;
  padding: 40px;
  background: white;
  text-align: center;
}

content>div {
  height: 50px;
}

.carousel {
  padding-left: 20px;
  padding-top: 20px;
}

.sign_Instyle {
  border: none;
  background-color: aquamarine;
  color: black;
  border-radius: 10px;
  font-size: 15px;
  height: 100%;
  font-weight: bold;
}

.sign_Instyle:hover {
  color: red;
}

.register_style {
  text-decoration: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  color: black;
}

.signin_style {
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  color: black;
}

.user_button {
  border: none;
  border-radius: 50px;
  background-color: black;
  font-size: 15px;
  font-weight: bold;
}

.register_button {
  border: none;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  background-color: black;
}

.iconuser {
  color: white;
}

.iconregister {
  color: white;
}

/* .nav-items{
    margin-left: 100px;
  } */
</style>