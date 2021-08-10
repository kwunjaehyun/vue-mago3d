import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

const Mago3DApp = createApp(App);

//Mago3DApp.config.globalProperties.$mago3d = self.Mago3D;
//Mago3DApp.config.globalProperties.$cesium = self.Cesium;

Mago3DApp.provide('Mago3D', self.Mago3D);

Mago3DApp.use(router);
Mago3DApp.use(store);
Mago3DApp.mount('#app');
