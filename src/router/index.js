import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// Les composants que tu vas utiliser comme pages
import Home from "@/views/HomeView.vue";

// Public
import IndexLogin from "@/views/public/Login/IndexLogin.vue";

import Dashboard from "@/views/private/Dashboard/DashboardView.vue";
// Product
import GetAllProduct from "@/views/private/Product/GetAllProduct.vue";
import CreateProduct from "@/views/private/Product/CreateProduct.vue";
// Sale
import GetAllSale from "@/views/private/Sale/GetAllSale.vue";
import CreateSale from "@/views/private/Sale/CreateSale.vue";

// Définition des routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false, redirectAuth: false },
  },
  {
    path: "/login",
    name: "IndexLogin",
    component: IndexLogin,
    meta: { requiresAuth: false, redirectAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true, redirectAuth: false },
  },
  {
    path: "/products",
    name: "GetAllProduct",
    component: GetAllProduct,
    meta: { requiresAuth: true, redirectAuth: false },
  },
  {
    path: "/create-product",
    name: "CreateProduct",
    component: CreateProduct,
    meta: { requiresAuth: true, redirectAuth: false },
  },
  {
    path: "/sales",
    name: "GetAllSale",
    component: GetAllSale,
    meta: { requiresAuth: true, redirectAuth: false },
  },
  {
    path: "/create-sale",
    name: "CreateSale",
    component: CreateSale,
    meta: { requiresAuth: true, redirectAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.checkAuth();

  if (to.meta.requiresAuth && !authStore.token) {
    next({ name: "IndexLogin" });
  }
  if (to.meta.redirectAuth && authStore.token) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
