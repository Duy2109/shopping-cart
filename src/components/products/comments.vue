<template>
    <div>
        <div class="comment mt-2">
            <h4 class="bl1">Bình Luận</h4>
            <p class="mb-0 me-2">Đánh giá: </p>
            <star-rating :star-size="20" :show-rating="false" @update:rating="rating = $event" :rating="5" />
            <textarea id="subject" class="subject mt-2" name="subject" placeholder="Nhập Bình Luận ... "
            v-model="comment"></textarea><br>
            <br>
            <button class="btn btn-warning" @click="postComment()">Gửi</button>
        </div>
    </div>
    <div class="allbl1">
        <span class="allbl">Các Bình Luận</span><br>
        <h4 class="allbl">{{ datacomment.length }} đánh giá.</h4><br>
        <div class="showcomment mt-2" v-for="comment in datacomment" :key="comment.id">
            <h5 class="style_cmt"><img :src="comment.photoURL" alt="" style="width:40px;border-radius:20px;margin-bottom: 10px;"> {{ comment.user }}<small></small></h5>
            <star-rating :star-size="20" :show-rating="false" :rating="comment.rating" :read-only="true" />
            <p>{{ comment.content }} <br> </p>
            <i class="i_date">{{ comment.date }}</i>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { API } from "@/constant";
import { ref } from "vue";
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating
    },
    data() {
        return {
            comment: null,
            datacomment: [],
            rating: 5,
            totalRate:0
        }
    },
    methods: {
        async postComment() {
            const username = ref();
            const photoURL=ref();
            const getNamelocal = JSON.parse(localStorage.getItem("getname"));
            if (getNamelocal) {
                username.value = getNamelocal;
            }

            const getphotoURL = JSON.parse(localStorage.getItem("photoURL"));
            if (getphotoURL) {
                photoURL.value = getphotoURL;
            }
            if (this.comment == null) {
                return false
            }
            const comment = {
                productId: parseInt(this.$route.params.id),
                photoURL: getphotoURL,
                user: getNamelocal,
                content: this.comment,
                date: new Date().toISOString().split('T')[0],
                rating: this.rating,

            }

            await axios.post(`${API}/comments`, comment)
            await axios.get(`${API}/products/${this.$route.params.id}?_embed=comments`).then((response) => this.datacomment = response.data.comments);
            this.$router.go();
        },
    },
    async mounted() {
        await axios.get(`${API}/products/${this.$route.params.id}?_embed=comments`).then((response) => this.datacomment = response.data.comments);
        this.datacomment.forEach(element => {
            this.totalRate += element.rating
        });
    },
    props: ['product'],
}


</script>
<style lang="scss">
.bl1 {
    padding-right: 80px;
    font-weight: bold;
    font-size: 20px;
    color: black;
}

.style_cmt {
    font-weight: bold;
    padding-right: 100px;
    width: 100%;
}

.i_date {
    font-size: 14px;
}

.allbl1 {
    width: 350px;
    margin-top: 50px;
}

.allbl {
    float: left;
    padding-right: 100px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}

.showcomment {
    float: left;
}

p {
    float: left;
}
.subject{
    border-radius: 11px;
}
</style>