import axios from 'axios';

export const endpoints = {
    auth: '/auth',
    products: '/products'
}

export default axios.create({
    baseURL: import.meta.env.VITE_API ?? 'http://localhost:5000',
    withCredentials: true,
});