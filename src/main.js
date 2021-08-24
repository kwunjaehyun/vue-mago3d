import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

//Mago3DApp.provide('Mago3D', self.Mago3D);

const Mago3DApp = createApp(App);
Mago3DApp.config.globalProperties.Mago3D = self.Mago3D;
console.info(Mago3DApp.config);

Mago3DApp.use(router);
Mago3DApp.use(store);
Mago3DApp.mount('#app');


