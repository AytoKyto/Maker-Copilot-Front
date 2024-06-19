import { createRouter, createWebHistory } from 'vue-router';

// Les composants que tu vas utiliser comme pages
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Dashboard from '../views/private/Dashboard/DashboardView.vue';
// Product
import GetAllProduct from '../views/private/Product/GetAllProduct.vue';
import CreateProduct from '../views/private/Product/CreateProduct.vue';

// Définition des routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products',
    name: 'GetAllProduct',
    component: GetAllProduct
  },
  {
    path: '/create-product',
    name: 'CreateProduct',
    component: CreateProduct
  }
];

// Création du routeur avec l'historique du navigateur
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
