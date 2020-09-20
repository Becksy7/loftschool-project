import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store";
import axios from "axios";

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
    component: () => import('./pages/login/login.vue'),
    meta: {
      public: true
    }
  }
];

const router = new VueRouter({
  routes,
});

const guard = axios.create({
  baseURL: "http://localhost:8080"
});

router.beforeEach(async(to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
  const isUserLoggedIn = store.getters["user/userIsLoggedIn"];
  if (!isPublicRoute && !isUserLoggedIn) {
    const token = localStorage.getItem("token");
    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const response = await guard.get("/user");
      store.dispatch("user/login", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }

  } else {
    next();
  }
});

export default router;
