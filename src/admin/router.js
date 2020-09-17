import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('./pages/about/about.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('./pages/works/works.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('./pages/reviews/reviews.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/login/login.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
