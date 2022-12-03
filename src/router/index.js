import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home-comp.vue")
    },
    {
      path: "/productdesc/:id",
      name: "ProductDescriptionDrawer",
      component: () => import('../components/products/ProductDescription.vue')
    },
    {
      path: "/infostudent",
      name:"infostudent",
      component: () => import('../views/InfoStudent.vue')
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import('../views/Cart-comp.vue'),
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/register",
      component: () => import("../views/RegisterView.vue")
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue")
    },
    {
      path: "/paycredit",
      component: () => import("../views/PaycreditCard.vue"),
      meta: {
        requiredAuth: true,
      },
    }
  ],
});
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vui Lòng Đăng Nhập Để Thanh Toán !");
      next("/sign-in");
    }
  } else {
    next();
  }
});
export default router;