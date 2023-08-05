import axios from 'axios';

export const endpoints = {
    auth: '/auth',
    products: '/products'
}

export default axios.create({
    baseURL: import.meta.env.VITE_API_DEV ? 'http://localhost:5000' : 'https://yourproductsapi.onrender.com',
    withCredentials: true,
});