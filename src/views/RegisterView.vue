<template>
    <div class="formregister1 mb-5 mt-4">
        <div class="formregister">
            <h3 class="dn mt-5">ĐĂNG KÍ</h3><br>
            <!-- <p ><input class="inputsignin" type="text" placeholder="Name" v-model="nameuser"></p> -->
            <p><input class="inputsignin" type="text" placeholder="Email" v-model="email"></p>
            <p ><input class="inputsignin" type="Password" placeholder="Password" v-model="password"></p>
            <p><button class="submit_style" @click="register">Đăng Kí</button></p>
            <p><button class="google_signin" @click="signInWithGoogle"><img class="imggoogle" src="../assets/btn_google_dark_normal_ios.svg" alt=""><b>Sign In With Google</b></button></p>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from "vue-router";
// const nameuser = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
    // cần .value bởi vì ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            alert("đăng kí thành công");
            console.log("đăng kí thành công");
            router.push('/')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};
const signInWithGoogle = () => {
    const provider=new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
        console.log(result.user);
        router.push('/')
    })
    .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
};
</script>
<style lang="scss">
   .inputsignin{
        border-radius: 30px;
    }
    .formregister{
        border: 1px solid;
        width: 500px;
        border-radius: 30px;
        padding-left: 100px;
        padding-right: 100px;
        height: 350px;
        vertical-align: middle;
        background-color: antiquewhite;

    }
    .dn{
        font-weight: bold;
    }
    .formregister1{
        padding-left: 500px;

    }
    .submit_style{
        border: none;
        border-radius: 5px;
    }
    .submit_style:hover{
        background-color: black;
        color: white;
    }
    .google_signin{
        background-color: #4286f5;
        border: none;
        border-radius: 10px;
    }
    .google_signin:hover{
        background-color: orange;
    }
    .imggoogle{
        width: 50px;
        height: 50px;
    }
</style>