<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <!-- Carousel -->
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/image/slider-1.jpg" alt="Los Angeles" class="d-block"
                                style="width:100%">
                            <div class="carousel-caption">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/image/slider-2.jpg" alt="Chicago" class="d-block" style="width:100%">
                            <div class="carousel-caption">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/image/slider-3.jpg" alt="New York" class="d-block" style="width:100%">
                            <div class="carousel-caption">

                            </div>
                        </div>
                    </div>
                    <!-- Left and right controls/icons -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                <img class="image_a" src="../assets/image/a1.jpg" alt="">
                <img class="image_a" src="../assets/image/a2.jpg" alt="">
            </div>
            <div class="col-4 mt-3">
                <div>
                    <img class="image" src="../assets/image/a3.jpg" alt="">
                </div>
                <div>
                    <img class="" src="../assets/image/a4.jpg" alt="">
                </div>
                <div>
                    <img class="" src="../assets/image/a5.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="from_banner" v-if="products.length" id="mainhtml">
        <div class="style_banner">
            <div class="containner">
                <div class="row">
                    <div class="col-3 mt-1">
                        <span class="titlee">SẢN PHẨM BÁN CHẠY-PC GAMMING</span>
                    </div>
                    <div class="col-6">
                        <input class="input mt-1" type="search" v-model="searchStringinput" placeholder="Search...">
                        <button class="search" @click="searchname()">Tìm Kiếm</button>
                    </div>
                    <div class="col-3">
                        <span class="viewsss">Xem tất cả ></span>
                    </div>
                </div>
            </div>
        </div>
        <select class="form-select mt-2" aria-label="Default select example" @change="valueHasChanged">
            <option value="0">Bộ Lọc</option>
            <option value="1">Giá Từ Thấp Đến Cao</option>
            <option value="2">Giá Từ Cao Đến Thấp</option>
            <!-- <option value="3">Giá Dưới 100$ </option>
            <option value="4">Giá Từ 100$ đến 600$</option>
            <option value="5">Giá Trên 600$ </option> -->
        </select>
        <div class="d-flex flex-column justify-content-center w-100 h-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="btn-group">
                    <div class="home">
                        <div class="product-cards-container">
                            <ProductSummaryCard v-for="(item,i) in paginateItems " :key="i" :product="item"
                                v-on:view-product="viewProduct($event)" />
                        </div>
                    </div>
                </div>
                <a href="https://manuel.pinto.dev" class="text-decoration-none">
                </a>
            </div>
            <div class="pagination-container" :class="{invisible : hides}">
                <button  :disabled="isFirstPage" class="prev" @click="prev">
                    <a href="#mainhtml" class="a_style"><font-awesome-icon icon="fa-solid fa-arrow-left" /></a>
                </button>
                <p class="page mt-3">{{ pageCurrent }} / {{ totalPage }}</p>
                <button  :disabled="isLastPage" class="next" @click="next">
                    <a href="#mainhtml" class="a_style"><font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
                </button>
            </div>
        </div>
    </div>
    <LoadingSlow v-else/>
</template>
<script>
import axios from "axios";
import { API } from "../constant";
import { ref, computed } from "vue";
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';
import ProductDescription from '../components/products/ProductDescription.vue';
import LoadingSlow from '../components/products/LoadingSlow.vue';
export default {
    name: 'Home-comp',
    components: {
        ProductSummaryCard,
        ProductDescription,
        LoadingSlow
    },
    setup() {
        const products = ref([]);

        const loadData = async () => {
            const { data } = await axios.get(`${API}/products`);
            products.value = data;
            totalPage.value = Math.ceil(products.value.length / itemPerPage);
        };
        loadData();


        const min = ref(0);
        const max = ref(8);
        const itemPerPage = max.value;
        const pageCurrent = ref(1);
        const totalPage = ref(null);
        const searchproduct = computed(() => {
            return products.value.filter((item) => searchStringinput.value.toLowerCase().split(' ').every((v) =>
                item.name.toLowerCase().includes(v)));
        })
        const paginateItems = computed(() => {
            return searchproduct.value.slice(min.value, max.value);
        })
        function updateTotalPage() {
            totalPage.value = Math.ceil(
                productsAfterSearch.value.length / itemPerPage
            );

            pageCurrent.value = 1;
        }


        const isFirstPage = computed(() => {
            if (pageCurrent.value === 1) return true;
            return false;
        });


        const isLastPage = computed(() => {
            if (pageCurrent.value === totalPage.value) return true;
            return false;
        });

        const searchString = ref("");
        const searchStringinput = ref("");
        function searchname() {
            searchString.value = searchStringinput.value;
            searchStringinput.value = "";
            updateTotalPage();
        }

        function next() {
            min.value += itemPerPage;
            max.value += itemPerPage;
            pageCurrent.value++;
        }

        function prev() {
            min.value -= itemPerPage;
            max.value -= itemPerPage;
            pageCurrent.value--;
        }

        function valueHasChanged(e) {
            const val = e.target.value;
            console.log(val)
            if (val == 0) {
                loadData();
            }
            if (val == 1) {
                products.value.sort(function (a, b) {
                    return a.price - b.price;
                })
            }
            if (val == 2) {
                products.value.sort(function (a, b) {
                    return b.price-a.price;
                })
            }

        }
        return {
            products,
            pageCurrent,
            itemPerPage,
            paginateItems,
            searchproduct,
            searchStringinput,
            searchString,
            isFirstPage,
            isLastPage,
            totalPage,
            prev,
            next,
            searchname,
            valueHasChanged


        }
    },
    methods: {
        viewProduct(products) {
            this.products = products;
        },
    },
    computed: {
        totalPage() {
            return Math.ceil(this.products.length / this.itemPerPage);
        },
        isLastPage() {
            if (this.pageCurrent === this.totalPage) {
                return true;
            }
            return false;
        },
        isFirstPage() {
            if (this.pageCurrent === 1) {
                return true;
            }
            return false;
        },
    }

}
</script>
<style>
.product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.titlee {
    font-weight: bold;
    color: white;
    float: left;
    margin-top: 5px;
    font-size: 15px;

}
.a_style{
    color: white;
}
.filters {
    margin-top: 20px;
}

.iconfilter {
    padding-right: 10px;
}

.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}

.paginate-buttons:hover {
    background-color: #d8d8d8;
}

.active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
}

.active-page:hover {
    background-color: #2988c8;
}

.pagination-container {
    padding: 10px 20px;
    justify-content: center;
}

.pagination-container button {
    display: inline-block;
    padding: 10px 15px;
    background-color: #2988c8;
    color: #fff;
    margin: 0 5px;
    border-radius: 100px;
    height: 60px;
    width: 60px;
    border: none;
    cursor: pointer;
}

.style_banner {
    background-color: #d7202c;
    padding-left: 20px;
    padding-right: 20px;
    height: 40px;
}

.from_banner {
    padding-left: 135px;
    margin-right: 115px;
}

.viewsss {
    font-weight: bold;
    color: white;
    float: right;
    margin-top: 10px;
    font-size: 15px;
}

.input {
    border-radius: 20px 0 0 20px;
    width: 200px;
    border: none;
}

.search {
    border: none;
    border-radius: 0px 20px 20px 0px;
}

.invisible {
    visibility: hidden;
}

.form-select {
    width: 500px;
}
</style>