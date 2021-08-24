import * as Server from './http';

export async function menus() {
    return Server.mockServer.get('/menus');
}

export async function geopolicy() {
    return Server.mockServer.get('/geopolicy');
}

export async function login() {
    return Server.mockServer.get('/login');
}

export async function policy() {
    return Server.apiServer.get('/geopolicies/user', {auth : {userId:'admin'},params : {dataId : ''}, withCreadentials: true});
}