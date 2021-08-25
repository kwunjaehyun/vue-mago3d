import { createStore} from 'vuex';
import {login} from '../api/mock.js';

export default createStore({
    state : {
        geopolicy : {},
        magoInstance : {},
        isLogin : false
    },
    getters : {
        getGeopolicy(state) {
            return state.geopolicy;
        },
        getMagoInstance(state) {
            return state.magoInstance;
        },
        isLogin(state) {
            return state.isLogin;
        }
    },
    mutations : {
        SET_GEOPOLICY(state, geopolicy) {
            state.geopolicy = geopolicy;
        },
        SET_MAGOINSTANCE(state, magoInstance) {
            state.magoInstance = magoInstance;
        },
        SET_LOGIN(state, login) {
            state.isLogin = login;
        }
    },
    actions : {
        LOGIN({commit}) {
            login().then(({data}) => {
                commit('SET_LOGIN', data.success);
            });
        },
        LOGOUT({commit}) {
            commit('SET_LOGIN', false);
        }
    }
});