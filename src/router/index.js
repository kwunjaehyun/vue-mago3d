import {createRouter, createWebHistory} from 'vue-router';
import Main from '../views/Main.vue';
import Signin from '../views/sign/Signin.vue';
import {checkAuth} from '@/api/auth.js'
import store from '@/store/index.js';

import Data from '../components/contents/Data.vue';
import Converter from '../components/contents/Converter.vue';
import Simulation from '../components/contents/Simulation.vue';
import Iot from '../components/contents/Iot.vue';
import Spatial from '../components/contents/Spatial.vue';

export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "Main",
            component : Main,
            beforeEnter : checkAuth,
            children: [
                {
                    path: "data",
                    component: Data
                },
                {
                    path: "converter",
                    component: Converter
                },
                {
                    path: "simulation",
                    component: Simulation
                },
                {
                    path: "iot",
                    component: Iot
                },
                {
                    path: "spatial",
                    component: Spatial
                },
            ]
        },
        {
            path: '/sign/signin',
            component : Signin
        }
        ,
        {
            path: '/sign/signout',
            component : {
                beforeRouteEnter(to, from, next) {
                    store.dispatch("LOGOUT");
                    return next('/sign/signin');
                }
            }
        }
    ]
});