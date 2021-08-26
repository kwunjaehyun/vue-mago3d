import {createRouter, createWebHistory} from 'vue-router';
import Main from '../views/Main.vue';
import Signin from '../views/sign/Signin.vue';
import {checkAuth} from '@/api/auth.js'
import store from '@/store/index.js';

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
                    path: "data"
                },
                {
                    path: "converter"
                },
                {
                    path: "simulation"
                },
                {
                    path: "iot"
                },
                {
                    path: "spatial"
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