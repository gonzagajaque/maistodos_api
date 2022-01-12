import axios from 'axios';

// mock/login
// mock/balance
// mock/transactions


const api = axios.create({
    baseURL: 'https://5efb30ac80d8170016f7613d.mockapi.io/api/',
});

export default api;