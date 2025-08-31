import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./style.css"; // ini yang bikin font global masuk

const app = createApp(App);
app.use(router);
app.mount("#app");
