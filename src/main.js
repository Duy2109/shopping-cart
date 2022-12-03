import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import VAnimateCss from 'v-animate-css';
// import rating from 'awesome-vue-star-rating';
import { initializeApp } from "firebase/app";
// require("firebase/firestore");
// require("firebase/storage");
// require("firebase/functions"); 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMrhNutiTB4d0U0Z16IR6NdpKjH7naRKw",
  authDomain: "fir-demo-b242c.firebaseapp.com",
  projectId: "fir-demo-b242c",
  storageBucket: "fir-demo-b242c.appspot.com",
  messagingSenderId: "165111242320",
  appId: "1:165111242320:web:8d702db0ba4886a3613b55"
};
initializeApp(firebaseConfig);
// const db= firebase.firestore()
// const storage= firebase.storage()
// const functions= firebase.functions()

import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
library.add(faHome);
library.add(faHeartCrack);
library.add(faHeart);
library.add(faFilePen);
library.add(faTrash);
library.add(faRightToBracket); //
library.add(faPlus);
library.add(faMinus);
library.add(faUser);
library.add(faCity);
library.add(faPhone);
library.add(faMicrochip);
library.add(faCartShopping);
library.add(faStar);
library.add(faFilter);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faYoutube);
createApp(App)
.use(store)
.use(router)
.use(VueSweetalert2)
.use(VAnimateCss)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
// export {
//   db,
//   storage,
//   functions
// }
