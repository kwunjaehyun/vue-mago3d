import http from './http';

export async function menus() {
    return http.get('/menus');
}