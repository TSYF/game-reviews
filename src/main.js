import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)
app.use(store)
app.use(router)

app.mount("#app");

import 'bootstrap/dist/js/bootstrap.bundle.min';