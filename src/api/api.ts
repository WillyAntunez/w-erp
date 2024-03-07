import axios from 'axios';

// read the vite base url from the environment variable
const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
    throw new Error('API_URL environment variable is not defined');
}

// Create an axios instance
export const api = axios.create({
    baseURL,
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
});

export default api;
