<template >
    <div class="formsignin1 mb-5 mt-4">
        <div class="formsignin">
            <h3 class="dn mt-5">ĐĂNG NHẬP</h3><br>
            <!-- <p><input class="inputsignin" type="text" placeholder="Email" v-model="email"></p>
            <p ><input class="inputsignin" type="Password" placeholder="Password" v-model="password"></p>
            <p v-if="errMsg">{{errMsg}}</p>
            <button class="submit_style" @click="register">Đăng Nhập</button> -->
            <p><button class="google_signin mt-3" @click="signInWithGoogle"><img class="imggoogle" src="../assets/btn_google_dark_normal_ios.svg" alt=""><b>Sign In With Google</b></button></p>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
    // cần .value bởi vì ref()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
        alert("Đăng Nhập Thành Công");
            console.log(auth);
            router.push("./");
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "email không hợp lệ !";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "không tìm thấy email của người dùng !";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "mật khẩu không đúng !";
                    break;

                default:
                    errMsg.value="email và mật khẩu không đúng !"
                    break;
            }
        });
};
const signInWithGoogle = () => {
    const provider=new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result)=>{
        console.log(result.user.photoURL);
        localStorage.setItem("photoURL", JSON.stringify(result.user.photoURL));
        localStorage.setItem("getname", JSON.stringify(result.user.displayName));
        router.go(0).push('/')
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
    .formsignin{
        border: 1px solid;
        width: 500px;
        border-radius: 30px;
        padding-left: 100px;
        padding-right: 100px;
        vertical-align: middle;
        background-color: antiquewhite;
        height: 350px;

    }
    .dn{
        font-weight: bold;
    }
    .formsignin1{
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