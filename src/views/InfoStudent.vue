<template >
    <div>
        <figure class="snip0057 red hover">
            <figcaption>
                <h2>Phạm Đức Duy</h2>
                <img :src="getphotoURL" alt="">
                <p>MSSV:501210020</p>
                <p>Lớp:CD21CT1</p>
                <p>Ngày Tháng Năm Sinh: 21/09/2000</p>
                <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i
                            class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
            </figcaption>
        </figure>
    </div>
</template>
<script>
import axios from "axios";
import { API } from "@/constant";
export default {
    // async setup() {
    //     const getphotoURL = await axios.get(`${API}/favorite`)
    //     getphotoURL.data.forEach(element => {
    //        element.photoURL;
    //     });
    //     return {
    //         getphotoURL
    //     }
    // },
}
</script>
<style >

</style>