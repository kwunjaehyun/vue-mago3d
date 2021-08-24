import axios from 'axios';

const mockServer = axios.create({
    baseURL : 'https://3e749410-f98b-46d1-801d-6b63997715ef.mock.pstmn.io',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': '*'
    }
});

const apiServer = axios.create({
    baseURL : 'http://localhost/'
});

/*apiServer.interceptors.request.use(config => {
    console.info(config);
});
*/
export {
    mockServer,
    apiServer
};