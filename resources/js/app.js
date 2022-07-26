import './bootstrap';
// import bootstrap from 'bootstrap'

import { createApp } from 'vue';
import store from "@/stores";
import router from "@/router";
import App from './layouts/App.vue';

import '../css/app.css'

createApp(App)
    .use(store)
    .use(router)
    .mount("#app")
