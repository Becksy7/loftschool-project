import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SimpleValidation from 'simple-vue-validator';
import store from "./store";

Vue.use(SimpleValidation, {mode: 'manual'});

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});
