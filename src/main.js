/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vue2Filters from "vue2-filters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(store, Vue2Filters).use(router, axios).mount("#app");

