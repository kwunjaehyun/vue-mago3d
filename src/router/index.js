import {createRouter, createWebHistory} from 'vue-router';
import App from '../App.vue';
import Signin from '../views/sign/Signin.vue';
import store from '../store/index.js';

const testAuthCheck = (from, to, next) => {
    const isLogin = store.state.isLogin;
    if(!isLogin){
        return next('/sign/signin');
    } 
    console.info(1);
    return next();
}

export default createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "App",
            component : App,
            beforeEnter : testAuthCheck
        },
        {
            path : '/sign/signin',
            component : Signin
        }
    ]
});