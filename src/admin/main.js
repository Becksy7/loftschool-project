import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SimpleValidation from 'simple-vue-validator';

Vue.use(SimpleValidation);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});