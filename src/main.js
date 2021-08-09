import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

const Mago3DApp = createApp(App);

Mago3DApp.use(router);
Mago3DApp.use(store);
Mago3DApp.mount('#app')
