<template>
  <Header></Header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="in">
        <component :is="Component"/>
      </transition>
  </router-view>

  <Footer></Footer>
</template>

<script>
  import Header from "./views/Banner-comp.vue";
  import Footer from "./views/Footer-comp.vue";
  export default{
    mounted(){
      this.$store.commit('updateCartFromLocalStorage')
    },
      name: "App",
      components:{
    Header,
    Footer,
}
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease-out;
}
body{
  background-color: aqua;
}


</style>
