import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../components/Auth.vue';
import ManageCars from '../components/ManageCars.vue';
import Register from '../components/Register.vue';  // Importer le composant d'inscription

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/manage-cars',
    name: 'ManageCars',
    component: ManageCars
  },
  {
    path: '/register',  // Route pour l'inscription
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
