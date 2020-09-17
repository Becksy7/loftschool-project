import axios from "axios";

const baseUrl = 'https://webdev-api.loftschool.com/';

axios.defaults.baseURL = baseUrl;

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default axios;
