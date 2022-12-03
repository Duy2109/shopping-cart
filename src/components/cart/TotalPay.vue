<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <b class="TT">Tạm Tính:</b>
            </div>
            <div class="col-6">
                <b class="price_total">${{ cart_total.toFixed(2)  }}</b>
            </div>
        </div>

    </div>
    <div class="cssdiv">
        <hr>
        <h2>THÔNG TIN KHÁCH HÀNG</h2>
        <div>
            <div>
                <input type="radio" id="huey" name="drone" value="huey" checked>
                <label for="huey">Anh</label>&nbsp;
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="dewey">Chị</label>
            </div>
            <div>
                <input class="inputform" type="text" placeholder="Họ Và Tên" :value="getName" />
                &nbsp;
                <input class="inputform" type="text" placeholder="Số Điện Thoại " />
            </div><BR />
            <div>
                CHỌN CÁCH THỨC NHẬN HÀNG <br>

                <input type="radio" name="" id="" checked /> Giao Tận Nơi <br>
                <div class="form_info">
                    Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có) <br>
                    <select class="select_form" name="" id="">
                        <option value="">HỒ CHÍ MINH</option>
                        <option value="">HÀ NỘI</option>
                        <option value="">ĐÀ NẴNG</option>
                        <option value="">HẢI PHÒNG</option>
                        <option value="">LẠNG SƠN</option>
                    </select>
                    &nbsp;
                    <select class="select_form" name="" id="">
                        <option value="">HỒ CHÍ MINH</option>
                        <option value="">HÀ NỘI</option>
                        <option value="">ĐÀ NẴNG</option>
                        <option value="">HẢI PHÒNG</option>
                        <option value="">LẠNG SƠN</option>
                    </select> <br>
                    <select class="select_form mt-2" name="" id="">
                        <option value="">HỒ CHÍ MINH</option>
                        <option value="">HÀ NỘI</option>
                        <option value="">ĐÀ NẴNG</option>
                        <option value="">HẢI PHÒNG</option>
                        <option value="">LẠNG SƠN</option>
                    </select>
                    &nbsp;
                    <select class="select_form" name="" id="">
                        <option value="">HỒ CHÍ MINH</option>
                        <option value="">HÀ NỘI</option>
                        <option value="">ĐÀ NẴNG</option>
                        <option value="">HẢI PHÒNG</option>
                        <option value="">LẠNG SƠN</option>
                    </select><br>
                </div>
                <br>
                <input type="text" class="input_form" placeholder="Yêu cầu khác (không bắt buộc)" />
                <br>
                <div class="checkbox_form mt-2">
                    <input type="checkbox" class="csscheckbox" /> Gọi người khác nhận hàng (nếu có) <br>
                    <input type="checkbox" class="csscheckbox" /> Gọi người khác nhận hàng (nếu có) <br>
                    <input type="checkbox" class="csscheckbox" /> Gọi người khác nhận hàng (nếu có) <br>
                </div>
                <hr>
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <b class="total_al">Tổng Tiền: </b>
                        </div>
                        <div class="col-6">
                            <b class="price_total">${{ cart_total.toFixed(2) }}</b>
                        </div>
                    </div>
                </div>
                <hr>
                <div>
                    <button class="button_dh">Đặt Hàng</button>
                    <p style="font-size:13px;">Bạn có thể chọn hình thức thanh toán sau khi đặt hàng</p>
                </div>
            </div>
            <div>

            </div>


        </div>

    </div>

</template>

<script>
// import { log } from 'console';
import { ref } from 'vue'
export default {
    methods: {
        showname() {
            let data = localStorage.getItem("getname");
            console.log(data);
        }
    },
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal;
        },
    },
    setup() {
        const getName = ref();
        const tmp = localStorage.getItem("getname");
        function getdata() {
            if (tmp) {
                getName.value = JSON.parse(tmp)
            }
        }
        getdata();
        return {
            getName,
        }
    }
}
</script>
<style lang="scss">
.total_al {
    font-size:20px;
    color: black;
}

.price_total {
    color: red;
    font-size:20px;
}

.TT {
    font-size:20px;
    color: black;
}
.button_dh{
    width:500px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: #f7852b;
}
.cssdiv {

    margin-bottom: 10px;
}

.inputform {
    border-radius: 5px;
    border: solid 1px;
}

// .form_info{

// }
.select_form {
    border-radius: 5px;
    width: 180px;
    height: 35px;
    border: none;
}

.input_form {
    width: 370px;
    border-radius: 5px;
    border: none;
    height: 35px;
}

.checkbox_form {
    // margin-top: 2px;
    padding-right: 100px;
}

input.csscheckbox {
    width: 15px;
    height: 15px;
}
h2{
    color: black;
}
</style>