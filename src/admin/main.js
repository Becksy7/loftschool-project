import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import SimpleValidation from 'simple-vue-validator';

Vue.use(SimpleValidation);

const baseUrl = 'https://webdev-api.loftschool.com/';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQxM…lrIn0.Cy86PXJRB988A9m-FxfPtDB2q2Cpg3CsbXF-BfsBs5w';
axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});
