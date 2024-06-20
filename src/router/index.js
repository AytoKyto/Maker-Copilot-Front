import { createRouter, createWebHistory } from "vue-router";

// Les composants que tu vas utiliser comme pages
import Home from "../views/HomeView.vue";
import Dashboard from "../views/private/Dashboard/DashboardView.vue";
// Product
import GetAllProduct from "../views/private/Product/GetAllProduct.vue";
import CreateProduct from "../views/private/Product/CreateProduct.vue";
// Sale
import GetAllSale from "../views/private/Sale/GetAllSale.vue";

// Définition des routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    name: "GetAllProduct",
    component: GetAllProduct,
  },
  {
    path: "/create-product",
    name: "CreateProduct",
    component: CreateProduct,
  },
  {
    path: "/sales",
    name: "GetAllSale",
    component: GetAllSale,
  },
];

// Création du routeur avec l'historique du navigateur
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
