import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import('./components/about.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('./components/works.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('./components/reviews.vue')
  }
];

const router = new VueRouter({
  routes,

});

export default router;