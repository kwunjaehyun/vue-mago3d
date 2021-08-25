import store from '@/store/index.js';

const checkAuth = (from, to, next) => {
    const isLogin = store.state.isLogin;
    if(!isLogin){
        return next('/sign/signin');
    } 
    return next();
}

export {
    checkAuth
}