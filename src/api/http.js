import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://3e749410-f98b-46d1-801d-6b63997715ef.mock.pstmn.io'
});

export default instance;