import axios from 'axios';

export const endpoints = {
    auth: '/auth',
    products: '/products'
}

export default axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});