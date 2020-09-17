import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('./components/pages/about.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('./components/pages/works.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('./components/pages/reviews.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./components/pages/login.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
