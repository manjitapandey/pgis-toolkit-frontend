import { api, loginHeaderAPI } from './index';

// const loginUser = (payload) => loginHeaderAPI(api).post('/login/', payload);

const loginUser = (payload) => loginHeaderAPI(api).post('/users/token/login/', payload);
export default loginUser;
